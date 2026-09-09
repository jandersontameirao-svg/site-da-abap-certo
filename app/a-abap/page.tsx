import type { Metadata } from "next";
import { FileCheck2, History, Scale, Target, UsersRound } from "lucide-react";
import { InternalHero, SiteFooter, SiteHeader } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "A ABAP",
  description: "Conheça a história, o propósito, a governança e os documentos institucionais da ABAP.",
};

const board = [
  { role: "Presidente", name: "Janderson Tameirão", text: "Liderança técnica e articulação institucional entre empresas, poder público, mercado e comunidade acadêmica." },
  { role: "Vice-Presidente", name: "Juliana Cardoso", text: "Experiência em licenciamento ambiental e cultural, comunidades tradicionais, patrimônio e educação patrimonial." },
  { role: "Secretário", name: "Diogo de Cerqueira", text: "Atuação em avaliação de impacto, salvamento arqueológico, patrimônio imaterial e gestão do patrimônio cultural." },
  { role: "Tesoureira", name: "Clarisse Callegari Jacques", text: "Experiência em arqueologia, gestão de projetos, conservação, educação patrimonial e patrimônio cultural." },
];

export default function AboutPage() {
  return <main>
    <SiteHeader />
    <InternalHero eyebrow="Institucional" title="Uma associação construída para representar e fortalecer o setor." lead="A ABAP reúne empresas de arqueologia preventiva em torno de uma agenda comum: qualidade técnica, ética, segurança institucional e proteção responsável do patrimônio arqueológico." />

    <section className="section internal-section">
      <div className="container split-story">
        <div><p className="eyebrow">Quem somos</p><h2>Representação empresarial com compromisso público.</h2></div>
        <div className="prose"><p>A Associação Brasileira de Arqueologia Preventiva é uma entidade sem fins lucrativos dedicada à representação das empresas que atuam no setor.</p><p>Seu papel é criar um ambiente permanente de diálogo entre empresas, órgãos públicos, instituições ambientais, academia e sociedade, contribuindo para processos mais claros, qualificados e responsáveis.</p><p>A ABAP não executa projetos arqueológicos para clientes. Ela representa, articula, orienta e fortalece as organizações que realizam esse trabalho em todo o país.</p></div>
      </div>
    </section>

    <section className="section values-section">
      <div className="container values-grid">
        <article><span><History size={24} /></span><p className="eyebrow">História</p><h3>Uma voz coletiva para a arqueologia preventiva.</h3><p>A associação nasce da necessidade de ampliar a representação institucional das empresas e organizar um diálogo nacional sobre os desafios do setor.</p></article>
        <article><span><Target size={24} /></span><p className="eyebrow">Propósito</p><h3>Fortalecer empresas, práticas e instituições.</h3><p>Trabalhar pela valorização da arqueologia preventiva, pelo aprimoramento do ambiente regulatório e pela proteção do patrimônio arqueológico.</p></article>
        <article><span><Scale size={24} /></span><p className="eyebrow">Princípios</p><h3>Ética, técnica, diálogo e responsabilidade.</h3><p>Atuar com independência, transparência e compromisso com o interesse público, respeitando a diversidade de experiências que compõem o setor.</p></article>
      </div>
    </section>

    <section className="section governance-section" id="governanca">
      <div className="container">
        <div className="heading-row internal-heading"><div><p className="eyebrow">Governança</p><h2>Diretoria da ABAP</h2></div><p>Uma gestão formada por profissionais com experiência técnica, empresarial e institucional em diferentes campos do patrimônio cultural.</p></div>
        <div className="board-grid">{board.map((member, index) => <article key={member.name}><span className="board-number">0{index + 1}</span><p>{member.role}</p><h3>{member.name}</h3><div className="board-rule" /><p className="board-bio">{member.text}</p></article>)}</div>
      </div>
    </section>

    <section className="section documents-section" id="documentos">
      <div className="container documents-grid">
        <div><p className="eyebrow">Transparência</p><h2>Documentos institucionais em um só lugar.</h2><p>Esta área reunirá os documentos oficiais da ABAP após a validação final da diretoria.</p></div>
        <div className="document-list">
          {["Estatuto Social", "Regimento Interno", "Código de Ética", "Planejamento Institucional", "Comunicados oficiais"].map((item) => <div key={item}><FileCheck2 size={20} /><span>{item}</span><small>Disponibilização após validação</small></div>)}
        </div>
      </div>
    </section>

    <section className="mini-cta"><div className="container"><UsersRound size={28} /><h2>Conheça as empresas que constroem esta representação.</h2><a className="button button-light" href="/associados">Ver associados</a></div></section>
    <SiteFooter />
  </main>;
}
