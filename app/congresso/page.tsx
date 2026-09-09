import type { Metadata } from "next";
import { ArrowRight, ExternalLink, FileText, Images, Plus } from "lucide-react";
import { InternalHero, SiteFooter, SiteHeader } from "@/components/site-shell";

export const metadata: Metadata = { title: "Congressos", description: "Memória dos Congressos da ABAP e acesso ao 3º Congresso." };

const pastEvents = [
  {
    edition: "1º Congresso da ABAP",
    label: "Memória da primeira edição",
    text: "Área reservada para fotografias, programação, palestrantes, documentos e principais resultados do encontro.",
  },
  {
    edition: "2º Congresso da ABAP",
    label: "Memória da segunda edição",
    text: "Área reservada para reunir registros, apresentações, notícias, materiais e encaminhamentos da segunda edição.",
  },
];

export default function CongressPage() {
  return <main><SiteHeader />
    <InternalHero eyebrow="Congressos ABAP" title="A memória dos encontros que constroem o setor." lead="O site institucional reunirá os conteúdos das duas primeiras edições. O 3º Congresso terá uma landing page própria, acessada por um único link a partir daqui." />

    <section className="section congress-archive">
      <div className="container">
        <div className="heading-row internal-heading"><div><p className="eyebrow">Edições anteriores</p><h2>Conteúdo histórico dos Congressos</h2></div><p>Os blocos já estão preparados para receber o acervo de cada edição sem deixar a página pesada ou confusa.</p></div>
        <div className="congress-archive-grid">{pastEvents.map((event, index) => <article key={event.edition}>
          <div className="congress-edition"><span>0{index + 1}</span><Images size={25} /></div>
          <p className="eyebrow">{event.label}</p><h3>{event.edition}</h3><p>{event.text}</p>
          <div className="congress-content-slots"><span><Images size={17} /> Galeria</span><span><FileText size={17} /> Programação e materiais</span></div>
        </article>)}</div>
      </div>
    </section>

    <section className="third-congress-link">
      <div className="container third-congress-grid">
        <div className="third-number">03</div>
        <div><p className="eyebrow light">Próxima edição</p><h2>3º Congresso da ABAP</h2><p>O próximo congresso terá identidade, programação e inscrições em uma landing page exclusiva.</p></div>
        <div className="future-link"><ExternalLink size={25} /><strong>Link da landing page</strong><span>Será ativado quando o endereço oficial estiver disponível.</span><span className="future-button" aria-disabled="true">Acessar o 3º Congresso <ArrowRight size={17} /></span></div>
      </div>
    </section>

    <section className="content-reserve"><div className="container"><Plus size={22} /><p>Novos conteúdos das edições anteriores poderão ser acrescentados aqui sem alterar a estrutura principal do site.</p></div></section>
    <SiteFooter />
  </main>;
}
