import fs from 'fs';
import path from 'path';

const ROOT_DIR = process.cwd();
const TOOLS_DIR = path.join(ROOT_DIR, 'tools');
const LEARN_DIR = path.join(ROOT_DIR, 'learn');
const GLOSSARY_DIR = path.join(ROOT_DIR, 'glossary');

// Ensure directories exist
[TOOLS_DIR, LEARN_DIR, GLOSSARY_DIR].forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

const ADSENSE_SNIPPET = `
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8528510551006901" crossorigin="anonymous"></script>
  <meta name="google-adsense-account" content="ca-pub-8528510551006901">`;

function getHeader(activeTab = '', depth = 0) {
  const prefix = depth === 1 ? '../' : './';
  return `
  <header class="site-header">
    <div class="container header-inner">
      <a href="${prefix}index.html" class="brand-link">
        GenzCoinTrading
        <span class="brand-badge">Tools &amp; Education</span>
      </a>

      <nav class="site-nav">
        <a href="${prefix}index.html" class="nav-link ${activeTab === 'home' ? 'active' : ''}">Home</a>
        <a href="${prefix}tools/index.html" class="nav-link ${activeTab === 'tools' ? 'active' : ''}">Crypto Tools</a>
        <a href="${prefix}learn/index.html" class="nav-link ${activeTab === 'learn' ? 'active' : ''}">Learn Crypto</a>
        <a href="${prefix}glossary/index.html" class="nav-link ${activeTab === 'glossary' ? 'active' : ''}">Glossary</a>
        <a href="${prefix}about.html" class="nav-link ${activeTab === 'about' ? 'active' : ''}">About</a>
      </nav>

      <div class="header-actions">
        <button class="btn-search" data-search-trigger aria-label="Open search dialog">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <span>Search</span>
          <kbd>Ctrl+K</kbd>
        </button>
        <button class="mobile-menu-btn" aria-label="Toggle navigation menu" aria-expanded="false">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
      </div>
    </div>
  </header>`;
}

function getFooter(depth = 0) {
  const prefix = depth === 1 ? '../' : './';
  return `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <h3>GenzCoinTrading.com</h3>
          <p>A rigorous educational cryptocurrency and trading analytics platform providing 50+ offline client-side calculators, step-by-step mathematical models, and beginner to advanced market guides.</p>
          <p style="font-size:0.75rem; color:#64748b;">Notice: 100% Client-Side Evaluation Engine. No live market prices or investment advisory services provided.</p>
        </div>
        <div class="footer-col">
          <h4>Calculators &amp; Tools</h4>
          <ul class="footer-links">
            <li><a href="${prefix}tools/crypto-profit-calculator.html">Crypto Profit Calculator</a></li>
            <li><a href="${prefix}tools/position-size-calculator.html">Position Size Calculator</a></li>
            <li><a href="${prefix}tools/risk-reward-calculator.html">Risk/Reward Calculator</a></li>
            <li><a href="${prefix}tools/dca-calculator.html">DCA Growth Calculator</a></li>
            <li><a href="${prefix}tools/liquidation-price-calculator.html">Liquidation Calculator</a></li>
            <li><a href="${prefix}tools/index.html">View All 50 Tools &rarr;</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Education &amp; Lexicon</h4>
          <ul class="footer-links">
            <li><a href="${prefix}learn/what-is-cryptocurrency.html">What Is Cryptocurrency?</a></li>
            <li><a href="${prefix}learn/how-bitcoin-works.html">How Bitcoin Works</a></li>
            <li><a href="${prefix}learn/crypto-risk-management-for-beginners.html">Risk Management Rules</a></li>
            <li><a href="${prefix}learn/index.html">All 100 Educational Guides</a></li>
            <li><a href="${prefix}glossary/index.html">Cryptocurrency Glossary</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Legal &amp; Policy</h4>
          <ul class="footer-links">
            <li><a href="${prefix}about.html">About Platform</a></li>
            <li><a href="${prefix}disclaimer.html">Financial Disclaimer</a></li>
            <li><a href="${prefix}editorial-policy.html">Editorial Policy</a></li>
            <li><a href="${prefix}privacy-policy.html">Privacy Policy</a></li>
            <li><a href="${prefix}terms.html">Terms of Service</a></li>
            <li><a href="${prefix}sitemap.xml">XML Sitemap</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-disclaimer-box">
        <strong>Mandatory Financial &amp; Educational Notice:</strong> Content and tools published on GenzCoinTrading.com are developed strictly for educational, mathematical modeling, and illustrative calculation purposes. GenzCoinTrading.com does not provide financial, investment, legal, or tax advisory services, nor does it issue trading recommendations or price forecasts. All calculators perform deterministic client-side calculations using user-entered inputs and do NOT source live market feeds. Cryptocurrency markets carry significant price volatility and risk of capital loss.
      </div>

      <div class="footer-bottom">
        <p>&copy; 2026 GenzCoinTrading.com. All rights reserved.</p>
        <div class="footer-bottom-links">
          <a href="${prefix}privacy-policy.html">Privacy</a>
          <a href="${prefix}terms.html">Terms</a>
          <a href="${prefix}disclaimer.html">Disclaimer</a>
          <a href="${prefix}editorial-policy.html">Editorial</a>
        </div>
      </div>
    </div>
  </footer>

  <!-- Search Modal -->
  <div class="search-modal-backdrop" id="searchModal" role="dialog" aria-modal="true" aria-label="Search site content">
    <div class="search-modal">
      <div class="search-header">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        <input type="text" id="searchInput" class="search-input-field" placeholder="Search 50 calculators, 100 guides, and glossary terms..." autocomplete="off">
        <button id="searchCloseBtn" class="search-close-btn" aria-label="Close search">&times;</button>
      </div>
      <ul id="searchResults" class="search-results-list"></ul>
    </div>
  </div>

  <!-- Back to Top Button -->
  <button id="backToTopBtn" class="btn-back-to-top" aria-label="Scroll back to top">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="18 15 12 9 6 15"></polyline></svg>
  </button>

  <script src="${prefix}js/utilities.js"></script>
  <script src="${prefix}js/search.js"></script>
  <script src="${prefix}js/calculators.js"></script>
  <script src="${prefix}js/main.js"></script>`;
}

export {
  ROOT_DIR,
  TOOLS_DIR,
  LEARN_DIR,
  GLOSSARY_DIR,
  ADSENSE_SNIPPET,
  getHeader,
  getFooter
};
