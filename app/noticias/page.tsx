import type { Metadata } from "next";
import { ArrowRight, BookOpenText, FileText, Landmark } from "lucide-react";
import { InternalHero, SiteFooter, SiteHeader } from "@/components/site-shell";

export const metadata: Metadata = { title: "Notícias e Atuação", description: "Acompanhe notícias, posicionamentos e conteúdos institucionais da ABAP." };

export default function NewsPage() {
  return <main><SiteHeader />
    <InternalHero eyebrow="Notícias e atuação" title="Memória institucional e conhecimento para o setor." lead="Esta área reunirá reuniões, posicionamentos, comunicados, eventos e conteúdos relevantes para as empresas e para a arqueologia preventiva." />
    <section className="section editorial-hub"><div className="container"><div className="editorial-grid"><article className="editorial-card editorial-card-1"><Landmark size={27} /><p className="editorial-eyebrow">Atuação institucional</p><h3>Reuniões, agendas e encaminhamentos</h3><p>Ações de interlocução da ABAP com instituições públicas e parceiros do setor.</p><a href="/contato">Acompanhar a ABAP <ArrowRight size={17} /></a></article><article className="editorial-card editorial-card-2"><FileText size={27} /><p className="editorial-eyebrow">Posicionamentos</p><h3>Notas e comunicados oficiais</h3><p>Documentos que registram contribuições técnicas e posições institucionais da associação.</p><a href="/a-abap#documentos">Ver documentos <ArrowRight size={17} /></a></article><article className="editorial-card editorial-card-3"><BookOpenText size={27} /><p className="editorial-eyebrow">Conhecimento</p><h3>Conteúdo técnico e boas práticas</h3><p>Referências para qualificar o debate e apoiar o desenvolvimento do setor.</p><a href="/atuacao">Conhecer a atuação <ArrowRight size={17} /></a></article></div><p className="content-note">As publicações reais serão inseridas após a curadoria e validação da diretoria da ABAP.</p></div></section>
    <SiteFooter />
  </main>;
}
