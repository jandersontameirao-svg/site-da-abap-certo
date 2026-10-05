import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type Payload = {
  nome?: string;
  email?: string;
  assunto?: string;
  mensagem?: string;
  // honeypot anti-spam: deve vir vazio
  website?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let data: Payload;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: "Requisição inválida." }, { status: 400 });
  }

  // Honeypot: se preenchido, é bot. Finge sucesso e ignora.
  if (data.website) {
    return NextResponse.json({ ok: true });
  }

  const nome = (data.nome ?? "").trim();
  const email = (data.email ?? "").trim();
  const assunto = (data.assunto ?? "").trim() || "Contato pelo site";
  const mensagem = (data.mensagem ?? "").trim();

  if (!nome || !email || !mensagem) {
    return NextResponse.json({ error: "Preencha nome, e-mail e mensagem." }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Informe um e-mail válido." }, { status: 400 });
  }
  if (mensagem.length > 5000) {
    return NextResponse.json({ error: "Mensagem muito longa." }, { status: 400 });
  }

  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const destino = process.env.FORM_NOTIFICATION_EMAIL || "contato@aabap.com.br";

  if (!user || !pass) {
    console.error("[contato] SMTP_USER/SMTP_PASS não configurados.");
    return NextResponse.json(
      { error: "Envio indisponível no momento. Tente novamente mais tarde." },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user, pass },
  });

  const esc = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  try {
    await transporter.sendMail({
      from: `"Site ABAP" <${user}>`,
      to: destino,
      replyTo: `"${nome}" <${email}>`,
      subject: `[Site ABAP] ${assunto}`,
      text: `Nova mensagem pelo site da ABAP\n\nNome: ${nome}\nE-mail: ${email}\nAssunto: ${assunto}\n\nMensagem:\n${mensagem}\n`,
      html: `<div style="font-family:system-ui,Arial,sans-serif;font-size:15px;color:#1a1a1a">
        <h2 style="margin:0 0 16px">Nova mensagem pelo site da ABAP</h2>
        <p><strong>Nome:</strong> ${esc(nome)}</p>
        <p><strong>E-mail:</strong> <a href="mailto:${esc(email)}">${esc(email)}</a></p>
        <p><strong>Assunto:</strong> ${esc(assunto)}</p>
        <p style="margin-top:16px"><strong>Mensagem:</strong></p>
        <p style="white-space:pre-wrap;background:#f6f3ef;padding:14px;border-radius:6px">${esc(mensagem)}</p>
      </div>`,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contato] falha ao enviar e-mail:", err);
    return NextResponse.json(
      { error: "Não foi possível enviar agora. Tente novamente mais tarde." },
      { status: 500 },
    );
  }
}
