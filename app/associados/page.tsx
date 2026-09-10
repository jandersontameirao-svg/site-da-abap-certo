import type { Metadata } from "next";
import { ArrowRight, Network, ShieldCheck, UsersRound } from "lucide-react";
import { InternalHero, SiteFooter, SiteHeader } from "@/components/site-shell";

export const metadata: Metadata = { title: "Empresas Associadas", description: "Conheça as empresas que integram a ABAP." };

const associates = [
  { name: "Preservar Arqueologia e Meio Ambiente", logo: "1.png" },
  { name: "Meandros Socioambiental", logo: "2.png" },
  { name: "Arqueoproject Projetos e Pesquisas", logo: "3.png" },
  { name: "Arqueogis", logo: "4.png" },
  { name: "Arqueocean", logo: "5.png" },
  { name: "Arqueologika", logo: "6.png" },
  { name: "ANX Arqueologia", logo: "7.png" },
  { name: "Alasca Arqueologia", logo: "8.png" },
  { name: "Matis", logo: "matis.jpeg" },
  { name: "Arqueólogos", logo: "arqueologos.png" },
  { name: "Elo", logo: "elo.jpeg" },
  { name: "Hábilis", logo: "habilis.png" },
  { name: "Híbrida Arqueologia", logo: "hibrida.png" },
  { name: "Peruaçu", logo: "peruacu.jpeg" },
  { name: "Scientia", logo: "scientia.png" },
  { name: "Stratus", logo: "stratus.jpeg" },
  { name: "Traços e Ofícios", logo: "tracos-oficios.png" },
  { name: "Nossa Arqueo Amazônia", logo: "nossa-arqueo-amazonia.jpeg" },
  { name: "Espaço Arqueologia", logo: "espaco-arqueologia.png" },
  { name: "Multicast", logo: "multicast.jpeg" },
  { name: "Zanettini Arqueologia", logo: "zanettini.jpeg" },
];

export default function AssociatesPage() {
  return <main><SiteHeader />
    <InternalHero eyebrow="Empresas associadas" title="Uma rede que representa a diversidade da arqueologia preventiva brasileira." lead="As empresas associadas compartilham experiências, constroem posições comuns e fortalecem a capacidade de interlocução institucional do setor." />
    <section className="section directory-section"><div className="container"><div className="directory-grid">{associates.map((associate) => <article key={associate.name}><img src={`/associados/${associate.logo}`} alt={associate.name} /><span>{associate.name}</span></article>)}</div></div></section>
    <section className="section member-value"><div className="container"><div className="heading-row internal-heading"><div><p className="eyebrow">Valor coletivo</p><h2>Associar-se é participar da construção do setor.</h2></div><p>A representação se torna mais legítima quando reúne experiências empresariais de diferentes regiões, portes e especialidades.</p></div><div className="member-benefit-grid"><article><UsersRound size={25} /><h3>Representatividade</h3><p>Participação nas agendas que afetam diretamente a atuação das empresas de arqueologia preventiva.</p></article><article><Network size={25} /><h3>Cooperação</h3><p>Ambiente de troca entre empresas, construção de referências e compartilhamento de experiências.</p></article><article><ShieldCheck size={25} /><h3>Fortalecimento</h3><p>Uma voz coletiva para defender qualidade, ética, segurança institucional e valorização do setor.</p></article></div></div></section>
    <section className="join-section"><div className="container join-grid"><div><p className="eyebrow light">Faça parte</p><h2>Sua empresa pode integrar essa rede nacional.</h2></div><div><p>Conheça o processo de associação e manifeste seu interesse em participar da ABAP.</p><a className="button button-light" href="/associe-se">Quero me associar <ArrowRight size={18} /></a></div></div></section>
    <SiteFooter />
  </main>;
}
