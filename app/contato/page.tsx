import type { Metadata } from "next";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { InternalHero, SiteFooter, SiteHeader } from "@/components/site-shell";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = { title: "Contato", description: "Entre em contato com a Associação Brasileira de Arqueologia Preventiva." };

export default function ContactPage() {
  return <main><SiteHeader />
    <InternalHero eyebrow="Contato" title="Vamos conversar sobre a arqueologia preventiva brasileira." lead="Fale com a ABAP sobre associação, agenda institucional, eventos, imprensa e cooperação com o setor." />
    <section className="section contact-section"><div className="container contact-grid"><article><span><Mail size={24} /></span><p className="eyebrow">E-mail institucional</p><h2>contato@aabap.com.br</h2><p>Canal central para assuntos institucionais e relacionamento com a associação. Use o formulário ao lado ou escreva diretamente.</p><a className="text-link" href="mailto:contato@aabap.com.br">Enviar e-mail <ArrowRight size={17} /></a><p className="location"><MapPin size={18} /> Brasília, Distrito Federal</p></article><div className="contact-form-wrap"><ContactForm /></div></div></section>
    <SiteFooter />
  </main>;
}
