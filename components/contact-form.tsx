"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

type Status = "idle" | "sending" | "ok" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      nome: String(fd.get("nome") || ""),
      email: String(fd.get("email") || ""),
      assunto: String(fd.get("assunto") || ""),
      mensagem: String(fd.get("mensagem") || ""),
      website: String(fd.get("website") || ""),
    };

    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Falha ao enviar.");
      setStatus("ok");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Falha ao enviar.");
    }
  }

  if (status === "ok") {
    return (
      <div className="contact-form-success">
        <CheckCircle2 size={40} />
        <h3>Mensagem enviada!</h3>
        <p>Recebemos seu contato e responderemos em breve no e-mail informado.</p>
        <button type="button" className="text-link" onClick={() => setStatus("idle")}>
          Enviar outra mensagem <ArrowRight size={17} />
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <p className="eyebrow">Envie uma mensagem</p>
      <div className="field">
        <label htmlFor="cf-nome">Nome *</label>
        <input id="cf-nome" name="nome" type="text" required autoComplete="name" />
      </div>
      <div className="field">
        <label htmlFor="cf-email">E-mail *</label>
        <input id="cf-email" name="email" type="email" required autoComplete="email" />
      </div>
      <div className="field">
        <label htmlFor="cf-assunto">Assunto</label>
        <input id="cf-assunto" name="assunto" type="text" autoComplete="off" />
      </div>
      <div className="field">
        <label htmlFor="cf-mensagem">Mensagem *</label>
        <textarea id="cf-mensagem" name="mensagem" rows={5} required />
      </div>
      {/* honeypot anti-spam: invisível para humanos */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
      />
      {status === "error" && <p className="contact-form-error">{errorMsg}</p>}
      <button type="submit" className="button button-primary" disabled={status === "sending"}>
        {status === "sending" ? (
          <>
            Enviando… <Loader2 size={18} className="spin" />
          </>
        ) : (
          <>
            Enviar mensagem <ArrowRight size={18} />
          </>
        )}
      </button>
    </form>
  );
}
