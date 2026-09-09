import type { Metadata } from "next";
import { ArrowRight, BookOpenText, Building2, Landmark, Scale, ShieldCheck } from "lucide-react";
import { InternalHero, SiteFooter, SiteHeader } from "@/components/site-shell";

export const metadata: Metadata = { title: "Atuação", description: "Conheça as frentes de atuação institucional da ABAP." };

const fronts = [
  { icon: Landmark, number: "01", title: "Representação institucional", text: "A ABAP organiza e apresenta as demandas coletivas das empresas do setor em espaços de diálogo com órgãos públicos, instituições ambientais, mercado e sociedade.", points: ["Interlocução com instituições públicas", "Construção de agendas setoriais", "Participação em debates estratégicos"] },
  { icon: Scale, number: "02", title: "Legislação e políticas públicas", text: "Acompanhamos os temas regulatórios que impactam a arqueologia preventiva e contribuímos tecnicamente para normas mais claras, aplicáveis e responsáveis.", points: ["Acompanhamento normativo", "Contribuições e posicionamentos", "Segurança institucional para o setor"] },
  { icon: ShieldCheck, number: "03", title: "Ética e boas práticas", text: "Promovemos princípios e referências que elevam a qualidade dos serviços, fortalecem relações profissionais e valorizam a atuação empresarial responsável.", points: ["Qualidade técnica", "Conduta ética", "Responsabilidade socioambiental"] },
  { icon: BookOpenText, number: "04", title: "Conhecimento e capacitação", text: "Criamos ambientes para circulação de conhecimento, intercâmbio de experiências e aproximação entre empresas, profissionais, academia e instituições.", points: ["Congressos e encontros", "Conteúdo técnico", "Formação e intercâmbio"] },
];

export default function ActionPage() {
  return <main><SiteHeader />
    <InternalHero eyebrow="Atuação institucional" title="Uma agenda coletiva para os desafios da arqueologia preventiva." lead="A ABAP transforma experiências e necessidades das empresas associadas em diálogo, conhecimento e propostas capazes de fortalecer todo o setor." />
    <section className="section action-intro"><div className="container split-story"><div><p className="eyebrow">Como atuamos</p><h2>Do diálogo setorial à construção institucional.</h2></div><div className="prose"><p>Nossa atuação parte da escuta das empresas associadas e da compreensão dos desafios técnicos e regulatórios vividos no dia a dia.</p><p>Essas contribuições são organizadas em agendas comuns, debates técnicos, posicionamentos e ações de interlocução institucional.</p></div></div></section>
    <section className="section action-fronts"><div className="container action-list">{fronts.map((front) => { const Icon = front.icon; return <article key={front.title}><div className="action-marker"><span>{front.number}</span><Icon size={27} /></div><div><h2>{front.title}</h2><p>{front.text}</p><ul>{front.points.map((point) => <li key={point}>{point}</li>)}</ul></div></article>; })}</div></section>
    <section className="section institutions-section"><div className="container"><div className="heading-row internal-heading"><div><p className="eyebrow light">Diálogo amplo</p><h2>Conectamos diferentes perspectivas.</h2></div><p>Uma arqueologia preventiva mais forte depende de relações técnicas e transparentes entre todos os participantes do processo.</p></div><div className="institution-grid">{["Empresas associadas", "Órgãos de patrimônio", "Órgãos ambientais", "Setor produtivo", "Academia e profissionais", "Sociedade e comunidades"].map((item) => <div key={item}><Building2 size={20} /><span>{item}</span></div>)}</div></div></section>
    <section className="mini-cta"><div className="container"><h2>Fortaleça essa agenda com a participação da sua empresa.</h2><a className="button button-light" href="/associe-se">Conheça a associação <ArrowRight size={18} /></a></div></section>
    <SiteFooter />
  </main>;
}
