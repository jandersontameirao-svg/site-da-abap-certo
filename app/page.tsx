import {
  ArrowRight,
  BookOpenText,
  Building2,
  Landmark,
  MapPin,
  Scale,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-shell";

const pillars = [
  {
    icon: Landmark,
    number: "01",
    title: "Representação institucional",
    text: "Interlocução qualificada com órgãos públicos, setor produtivo e instituições ligadas à proteção do patrimônio cultural.",
  },
  {
    icon: Scale,
    number: "02",
    title: "Ambiente regulatório",
    text: "Participação técnica no debate sobre normas, políticas públicas e condições que afetam a arqueologia preventiva.",
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "Boas práticas",
    text: "Fortalecimento de padrões éticos, segurança jurídica, qualidade técnica e responsabilidade na atuação empresarial.",
  },
  {
    icon: BookOpenText,
    number: "04",
    title: "Conhecimento e formação",
    text: "Promoção de encontros, conteúdos e iniciativas que aproximam empresas, profissionais, academia e poder público.",
  },
];

const editorial = [
  {
    eyebrow: "Representação",
    title: "Diálogo permanente com as instituições",
    text: "Uma agenda técnica para contribuir com decisões públicas mais claras, responsáveis e conectadas à realidade do setor.",
    href: "/atuacao",
  },
  {
    eyebrow: "Conhecimento",
    title: "Boas práticas que fortalecem toda a cadeia",
    text: "Informação qualificada e intercâmbio de experiências para elevar a qualidade da arqueologia preventiva brasileira.",
    href: "/noticias",
  },
  {
    eyebrow: "Encontro nacional",
    title: "Congressos ABAP",
    text: "Memória do 1º e 2º Congressos e acesso à futura landing page exclusiva do 3º Congresso da ABAP.",
    href: "/congresso",
  },
];

export default function Home() {
  return (
    <main id="inicio">
      <SiteHeader />

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-grid container">
          <div className="hero-copy">
            <p className="eyebrow light">Associação Brasileira de Arqueologia Preventiva</p>
            <h1 id="hero-title">A voz das empresas de arqueologia preventiva no Brasil.</h1>
            <p className="hero-lead">Representamos o setor, promovemos diálogo institucional e trabalhamos por uma atuação ética, tecnicamente qualificada e comprometida com o patrimônio arqueológico brasileiro.</p>
            <div className="hero-actions">
              <a className="button button-copper" href="/a-abap">Conheça a ABAP <ArrowRight size={18} aria-hidden="true" /></a>
              <a className="text-link light-link" href="/associe-se">Associe sua empresa <ArrowRight size={17} aria-hidden="true" /></a>
            </div>
          </div>
          <div className="hero-media" aria-label="Trabalho arqueológico de campo no Brasil">
            <div className="hero-image" />
            <div className="hero-note">
              <span className="hero-note-icon"><MapPin size={18} aria-hidden="true" /></span>
              <span><small>Presença e articulação</small><strong>Atuação nacional</strong></span>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Compromissos da ABAP">
        <div className="container trust-grid">
          <div><Building2 size={20} aria-hidden="true" /><span>Representação empresarial</span></div>
          <div><UsersRound size={20} aria-hidden="true" /><span>Articulação nacional</span></div>
          <div><ShieldCheck size={20} aria-hidden="true" /><span>Ética e boas práticas</span></div>
          <div><BookOpenText size={20} aria-hidden="true" /><span>Conhecimento compartilhado</span></div>
        </div>
      </section>

      <section className="section intro" id="abap">
        <div className="container intro-grid">
          <div><p className="eyebrow">Uma entidade nacional</p><h2>Unimos empresas para fortalecer um setor essencial ao desenvolvimento responsável.</h2></div>
          <div className="intro-body">
            <p>A ABAP é uma entidade sem fins lucrativos dedicada à representação das empresas que atuam na arqueologia preventiva e na gestão do patrimônio arqueológico.</p>
            <p>Construímos pontes entre o conhecimento técnico, as instituições públicas e o mercado para contribuir com processos mais eficientes, seguros e responsáveis.</p>
            <a className="text-link" href="/a-abap">Conheça nossa história e governança <ArrowRight size={17} aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      <section className="section section-navy" id="atuacao">
        <div className="container">
          <div className="section-heading heading-row">
            <div><p className="eyebrow light">Nossa atuação</p><h2>Representar. Articular. Qualificar.</h2></div>
            <p>Quatro frentes complementares orientam a contribuição institucional da ABAP para a arqueologia preventiva brasileira.</p>
          </div>
          <div className="pillar-grid">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return <article className="pillar-card" key={pillar.title}>
                <div className="pillar-top"><span className="pillar-icon"><Icon size={23} aria-hidden="true" /></span><span className="pillar-number">{pillar.number}</span></div>
                <h3>{pillar.title}</h3><p>{pillar.text}</p>
              </article>;
            })}
          </div>
        </div>
      </section>

      <section className="section statement-section">
        <div className="container statement-grid">
          <div className="statement-media">
            <div className="statement-image" />
            <div className="statement-seal" aria-hidden="true"><span>ABAP</span><small>Brasil</small></div>
          </div>
          <div className="statement-copy">
            <p className="eyebrow">Compromisso institucional</p>
            <h2>Preservar o patrimônio e fortalecer o desenvolvimento são compromissos que caminham juntos.</h2>
            <p>A arqueologia preventiva protege referências culturais, produz conhecimento e oferece segurança aos processos de licenciamento. A ABAP trabalha para que esse papel seja reconhecido e exercido com excelência.</p>
            <ul><li><span />Diálogo técnico e transparente</li><li><span />Defesa da qualidade e da responsabilidade</li><li><span />Valorização das empresas e dos profissionais</li></ul>
          </div>
        </div>
      </section>

      <section className="section editorial-section" id="noticias">
        <div className="container">
          <div className="section-heading heading-row dark-heading">
            <div><p className="eyebrow">Atuação e conhecimento</p><h2>Uma agenda que move o setor.</h2></div>
            <a className="text-link" href="/noticias">Acompanhe a ABAP <ArrowRight size={17} aria-hidden="true" /></a>
          </div>
          <div className="editorial-grid">
            {editorial.map((item, index) => <article className={`editorial-card editorial-card-${index + 1}`} key={item.title} id={index === 2 ? "congresso" : undefined}>
              <span className="editorial-index">0{index + 1}</span><p className="editorial-eyebrow">{item.eyebrow}</p><h3>{item.title}</h3><p>{item.text}</p>
              <a href={item.href} aria-label={`Saiba mais sobre ${item.title}`}>Saiba mais <ArrowRight size={17} aria-hidden="true" /></a>
            </article>)}
          </div>
        </div>
      </section>

      <section className="section associates-section" id="associados">
        <div className="container associates-grid">
          <div className="associates-copy">
            <p className="eyebrow">Empresas associadas</p><h2>Uma rede nacional comprometida com o futuro da arqueologia preventiva.</h2>
            <p>As empresas associadas dão força à representação do setor e participam de um ambiente de cooperação, diálogo e desenvolvimento institucional.</p>
            <a className="button button-outline" href="/associados">Conheça os associados <ArrowRight size={18} aria-hidden="true" /></a>
          </div>
          <div className="associate-mosaic" aria-label="Empresas associadas à ABAP">
            {["Preservar Arqueologia e Meio Ambiente", "Meandros Socioambiental", "Arqueoproject Projetos e Pesquisas", "Arqueogis", "Arqueocean", "Arqueologika", "ANX Arqueologia", "Alasca Arqueologia"].map((name, index) => <div key={name} className="associate-placeholder associate-logo"><img src={`/associados/${index + 1}.png`} alt={name} /></div>)}
          </div>
        </div>
      </section>

      <section className="join-section" id="associe-se">
        <div className="container join-grid">
          <div><p className="eyebrow light">Faça parte</p><h2>Sua empresa também pode fortalecer a voz da arqueologia preventiva.</h2></div>
          <div><p>Integre uma rede de empresas comprometidas com ética, qualidade técnica e evolução institucional do setor.</p><a className="button button-light" href="mailto:contato@aabap.com.br?subject=Quero%20associar%20minha%20empresa%20%C3%A0%20ABAP">Quero me associar <ArrowRight size={18} aria-hidden="true" /></a></div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
