import { ArrowRight, FileText, Mail, MapPin, Menu } from "lucide-react";

const navItems = [
  { label: "A ABAP", href: "/a-abap" },
  { label: "Atuação", href: "/atuacao" },
  { label: "Associados", href: "/associados" },
  { label: "Notícias", href: "/noticias" },
  { label: "Congressos", href: "/congresso" },
  { label: "Contato", href: "/contato" },
];

export function Brand() {
  return (
    <a className="brand brand-official" href="/" aria-label="ABAP — página inicial">
      <img src="/logo-abap-oficial.png" alt="ABAP — Associação Brasileira de Arqueologia Preventiva" />
    </a>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Navegação principal">
          {navItems.map((item) => <a key={item.label} href={item.href}>{item.label}</a>)}
        </nav>
        <a className="button button-small button-copper desktop-cta" href="/associe-se">Associe-se <ArrowRight size={16} aria-hidden="true" /></a>
        <details className="mobile-menu">
          <summary aria-label="Abrir menu"><Menu size={24} aria-hidden="true" /></summary>
          <div className="mobile-menu-panel">
            {navItems.map((item) => <a key={item.label} href={item.href}>{item.label}</a>)}
            <a className="mobile-associate" href="/associe-se">Associe-se</a>
          </div>
        </details>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer" id="contato">
      <div className="container footer-main">
        <div className="footer-brand"><Brand /><p>Representando e fortalecendo as empresas de arqueologia preventiva no Brasil.</p></div>
        <div className="footer-column"><h3>Institucional</h3><a href="/a-abap">A ABAP</a><a href="/atuacao">Atuação</a><a href="/a-abap#governanca">Governança</a><a href="/a-abap#documentos">Documentos e transparência</a></div>
        <div className="footer-column"><h3>Participe</h3><a href="/associados">Associados</a><a href="/associe-se">Associe-se</a><a href="/congresso">Congresso ABAP</a><a href="/noticias">Notícias</a></div>
        <div className="footer-column footer-contact"><h3>Contato</h3><a href="mailto:contato@aabap.com.br"><Mail size={16} aria-hidden="true" />contato@aabap.com.br</a><span><MapPin size={16} aria-hidden="true" />Brasília, Distrito Federal</span><a className="document-link" href="/a-abap#documentos"><FileText size={16} aria-hidden="true" />Documentos institucionais</a></div>
      </div>
      <div className="container footer-bottom"><span>© 2026 ABAP. Todos os direitos reservados.</span><div><a href="https://aabap.com.br/politica-de-privacidade-abap/">Política de Privacidade</a><a href="https://aabap.com.br/termos-de-uso/">Termos de Uso</a></div></div>
    </footer>
  );
}

export function InternalHero({ eyebrow, title, lead }: { eyebrow: string; title: string; lead: string }) {
  return (
    <section className="internal-hero">
      <div className="container internal-hero-grid">
        <div><p className="eyebrow light">{eyebrow}</p><h1>{title}</h1></div>
        <p>{lead}</p>
      </div>
    </section>
  );
}
