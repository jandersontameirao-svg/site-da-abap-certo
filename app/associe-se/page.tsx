import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, Mail, SearchCheck, UserPlus } from "lucide-react";
import { InternalHero, SiteFooter, SiteHeader } from "@/components/site-shell";

export const metadata: Metadata = { title: "Associe-se", description: "Saiba como sua empresa pode participar da ABAP." };

export default function JoinPage() {
  return <main><SiteHeader />
    <InternalHero eyebrow="Associe-se" title="Fortaleça sua empresa. Fortaleça a arqueologia preventiva." lead="A ABAP reúne empresas comprometidas com atuação técnica qualificada, conduta ética e evolução institucional do setor." />
    <section className="section join-benefits"><div className="container split-story"><div><p className="eyebrow">Por que participar</p><h2>Uma associação existe para transformar interesses comuns em força coletiva.</h2></div><div className="check-list">{["Participar das discussões estratégicas do setor", "Contribuir com posicionamentos e agendas institucionais", "Ampliar o intercâmbio com outras empresas", "Acompanhar temas técnicos e regulatórios", "Fortalecer a representação nacional da arqueologia preventiva"].map((item) => <div key={item}><CheckCircle2 size={20} /><span>{item}</span></div>)}</div></div></section>
    <section className="section process-section"><div className="container"><div className="heading-row internal-heading"><div><p className="eyebrow">Caminho de associação</p><h2>Um processo simples e transparente.</h2></div><p>As condições definitivas de ingresso seguirão o Estatuto e a validação institucional da ABAP.</p></div><div className="process-grid"><article><span>01</span><Mail size={25} /><h3>Manifestação de interesse</h3><p>A empresa entra em contato e apresenta seu interesse em integrar a associação.</p></article><article><span>02</span><SearchCheck size={25} /><h3>Análise institucional</h3><p>A documentação e os critérios de ingresso são avaliados conforme as regras da entidade.</p></article><article><span>03</span><UserPlus size={25} /><h3>Integração à rede</h3><p>Após a aprovação, a empresa passa a participar das agendas e iniciativas da ABAP.</p></article></div></div></section>
    <section className="contact-cta"><div className="container"><div><p className="eyebrow light">Primeiro contato</p><h2>Converse com a ABAP sobre a participação da sua empresa.</h2></div><a className="button button-light" href="mailto:contato@aabap.com.br?subject=Interesse%20em%20associar%20empresa%20%C3%A0%20ABAP">Enviar manifestação <ArrowRight size={18} /></a></div></section>
    <SiteFooter />
  </main>;
}
