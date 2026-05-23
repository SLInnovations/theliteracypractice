// =============================================
// THE LITERACY PRACTICE - Shared Components
// =============================================

function getNavHTML(activePage) {
  const pages = [
    { href: 'index.html',               label: 'Home' },
    { href: 'about.html',               label: 'About' },
    { href: 'services.html',            label: 'Services' },
    { href: 'structured-literacy.html', label: 'Structured Literacy' },
    { href: 'get-started.html',         label: 'Get Started' },
    { href: 'contact.html',             label: 'Contact' },
  ];

  const links = pages.map(p => {
    const active = p.label === activePage ? ' class="active"' : '';
    return `<li><a href="${p.href}"${active}>${p.label}</a></li>`;
  }).join('');

  return `
  <nav>
    <div class="nav-inner">
      <a href="index.html" class="nav-logo">
        <span class="sprout">TLP</span>
        The Literacy Practice
      </a>
      <ul class="nav-links" id="navLinks">
        ${links}
        <li><a href="https://koalendar.com/e/free-30-minute-parent-consultation" target="_blank" class="nav-cta">Book a Consult</a></li>
      </ul>
      <button class="nav-toggle" id="navToggle" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>`;
}

function getFooterHTML() {
  return `
  <footer>
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="index.html" class="nav-logo">
            <span class="sprout">TLP</span>
            The Literacy Practice
          </a>
          <p>Online literacy tutoring for students who need more than a worksheet. Explicit, systematic, structured instruction. One student at a time.</p>
          <br>
          <a href="https://koalendar.com/e/free-30-minute-parent-consultation" target="_blank" class="btn btn-primary" style="font-size:0.88rem;padding:0.6rem 1.4rem;">Book a Free Consult</a>
        </div>
        <div class="footer-col">
          <h4>Pages</h4>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="structured-literacy.html">Structured Literacy</a></li>
            <li><a href="get-started.html">Get Started</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Connect</h4>
          <ul>
            <li><a href="mailto:hello@theliteracypractice.ca">hello@theliteracypractice.ca</a></li>
            <li><a href="get-started.html">Book a Consult</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2025 The Literacy Practice. All rights reserved.</p>
        <p class="land-ack">The Literacy Practice operates on the unceded traditional territory of the Snaw-naw-as (Nanoose), Snuneymuxw, and other Coast Salish peoples. We are grateful to live and work on this land.</p>
      </div>
    </div>
  </footer>`;
}

function initNav() {
  const toggle = document.getElementById('navToggle');
  const links  = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
  }
}

document.addEventListener('DOMContentLoaded', initNav);
