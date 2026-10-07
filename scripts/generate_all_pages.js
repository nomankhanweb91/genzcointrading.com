import fs from 'fs';
import path from 'path';
import { TOOLS } from './tools_data.js';
import { ARTICLES } from './articles_data.js';
import { GLOSSARY_TERMS } from './glossary_data.js';
import {
  ROOT_DIR,
  TOOLS_DIR,
  LEARN_DIR,
  GLOSSARY_DIR,
  ADSENSE_SNIPPET,
  getHeader,
  getFooter
} from './site_common.js';

console.log(`Starting full static website compilation for GenzCoinTrading.com...`);
console.log(`Inventory: ${TOOLS.length} Tools, ${ARTICLES.length} Articles, ${GLOSSARY_TERMS.length} Glossary Terms.`);

// -------------------------------------------------------------
// 1. GENERATE HOMEPAGE (index.html)
// -------------------------------------------------------------
function buildHomepage() {
  const popularTools = TOOLS.slice(0, 6);
  const tradingTools = TOOLS.filter(t => t.category === "Trading").slice(0, 4);
  const riskTools = TOOLS.filter(t => t.category === "Risk Management").slice(0, 4);
  const investTools = TOOLS.filter(t => t.category === "Investment").slice(0, 4);
  const converterTools = TOOLS.filter(t => t.category === "Converters").slice(0, 4);

  const homeHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Crypto Calculators, Trading Tools &amp; Cryptocurrency Education | GenzCoinTrading.com</title>
  <meta name="description" content="Free cryptocurrency calculators, trading tools, investment calculators, risk-management tools and beginner-friendly crypto education with 100% client-side computation.">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="https://genzcointrading.com/">
  
  <!-- OpenGraph -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="Crypto Calculators, Trading Tools &amp; Cryptocurrency Education | GenzCoinTrading.com">
  <meta property="og:description" content="Free cryptocurrency calculators, trading tools, investment calculators, risk-management tools and beginner-friendly crypto education.">
  <meta property="og:url" content="https://genzcointrading.com/">
  <meta property="og:site_name" content="GenzCoinTrading.com">
  <meta property="og:image" content="https://genzcointrading.com/assets/images/hero-crypto-workspace.svg">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Crypto Calculators, Trading Tools &amp; Cryptocurrency Education | GenzCoinTrading.com">
  <meta name="twitter:description" content="Free cryptocurrency calculators, trading tools, investment calculators, risk-management tools and beginner-friendly crypto education.">
  <meta name="twitter:image" content="https://genzcointrading.com/assets/images/hero-crypto-workspace.svg">

  ${ADSENSE_SNIPPET}

  <!-- Stylesheets -->
  <link rel="stylesheet" href="./css/style.css">
  <link rel="stylesheet" href="./css/components.css">
  <link rel="stylesheet" href="./css/responsive.css">

  <!-- Schema.org JSON-LD -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://genzcointrading.com/#website",
        "url": "https://genzcointrading.com/",
        "name": "GenzCoinTrading.com",
        "description": "Educational cryptocurrency calculators, risk-management tools, and comprehensive trading guides.",
        "inLanguage": "en-US"
      },
      {
        "@type": "Organization",
        "@id": "https://genzcointrading.com/#organization",
        "name": "GenzCoinTrading.com",
        "url": "https://genzcointrading.com/",
        "logo": "https://genzcointrading.com/assets/images/hero-crypto-workspace.svg"
      }
    ]
  }
  </script>
</head>
<body>
  ${getHeader('home', 0)}

  <main>
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <div class="hero-grid">
          <div>
            <h1 class="hero-title">Crypto Calculators, Trading Tools &amp; Cryptocurrency Education</h1>
            <p class="hero-subtitle">Free cryptocurrency calculators, trading tools, investment calculators, risk-management tools and beginner-friendly crypto education. 100% private client-side computation with zero live market API dependencies.</p>
            <div class="hero-cta-group">
              <a href="./tools/index.html" class="btn btn-primary">
                Explore Crypto Tools
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
              <a href="./learn/index.html" class="btn btn-secondary">Start Learning</a>
            </div>
          </div>
          <div class="hero-visual">
            <img src="./assets/images/hero-crypto-workspace.svg" alt="Cryptocurrency and trading analytics educational workspace visual" width="800" height="450" loading="eager">
          </div>
        </div>
      </div>
    </section>

    <!-- Trust Strip -->
    <div class="trust-strip">
      <div class="container">
        <div class="trust-grid">
          <div class="trust-item">
            <div class="trust-icon">✓</div>
            <div class="trust-text">
              <h4>50 Dedicated Calculators</h4>
              <p>Individual pages with working formula breakdowns.</p>
            </div>
          </div>
          <div class="trust-item">
            <div class="trust-icon">🔒</div>
            <div class="trust-text">
              <h4>100% Client-Side Privacy</h4>
              <p>All math computes locally in your browser.</p>
            </div>
          </div>
          <div class="trust-item">
            <div class="trust-icon">📚</div>
            <div class="trust-text">
              <h4>100 Educational Guides</h4>
              <p>In-depth blockchain and market concepts.</p>
            </div>
          </div>
          <div class="trust-item">
            <div class="trust-icon">🛡️</div>
            <div class="trust-text">
              <h4>No Live Market Hype</h4>
              <p>Transparent manual rate modeling without fake data.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Ad Slot -->
    <div class="container">
      <div class="ad-banner-slot">
        <span class="ad-label">Advertisement</span>
        <ins class="adsbygoogle"
             style="display:block"
             data-ad-client="ca-pub-8528510551006901"
             data-ad-slot="1234567890"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
      </div>
    </div>

    <!-- Section 1: Popular Crypto Calculators -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <div class="section-kicker">Core Financial Models</div>
          <h2 class="section-title">Popular Crypto Calculators</h2>
          <p class="section-desc">Evaluate prospective profitability, fee friction, and return on equity before executing trades.</p>
        </div>

        <div class="cards-grid">
          ${popularTools.map(t => `
            <div class="tool-card" data-category="${t.category}">
              <div class="card-meta">
                <span>${t.category}</span>
                <span aria-hidden="true">&middot;</span>
                <span>Interactive Tool</span>
              </div>
              <h3>${t.name}</h3>
              <p>${t.metaDesc}</p>
              <div class="card-footer">
                <a href="./tools/${t.id}.html">Launch Calculator &rarr;</a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Section 2: Trading Calculators -->
    <section class="section section-alt">
      <div class="container">
        <div class="section-header">
          <div class="section-kicker">Execution Analytics</div>
          <h2 class="section-title">Trading Calculators</h2>
          <p class="section-desc">Optimize break-even thresholds, leverage parameters, and contract position valuations.</p>
        </div>

        <div class="cards-grid">
          ${tradingTools.map(t => `
            <div class="tool-card" data-category="${t.category}">
              <div class="card-meta">
                <span>${t.category}</span>
                <span aria-hidden="true">&middot;</span>
                <span>Trading Mechanics</span>
              </div>
              <h3>${t.name}</h3>
              <p>${t.metaDesc}</p>
              <div class="card-footer">
                <a href="./tools/${t.id}.html">Launch Calculator &rarr;</a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Section 3: Risk Management Tools -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <div class="section-kicker">Capital Preservation</div>
          <h2 class="section-title">Risk Management Tools</h2>
          <p class="section-desc">Calculate mathematical position sizing, liquidation boundaries, and Risk-to-Reward ratios to avoid ruin.</p>
        </div>

        <div class="cards-grid">
          ${riskTools.map(t => `
            <div class="tool-card" data-category="${t.category}">
              <div class="card-meta">
                <span>${t.category}</span>
                <span aria-hidden="true">&middot;</span>
                <span>Risk Management</span>
              </div>
              <h3>${t.name}</h3>
              <p>${t.metaDesc}</p>
              <div class="card-footer">
                <a href="./tools/${t.id}.html">Launch Calculator &rarr;</a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Section 4: Investment Calculators -->
    <section class="section section-alt">
      <div class="container">
        <div class="section-header">
          <div class="section-kicker">Long-Term Wealth Accumulation</div>
          <h2 class="section-title">Investment Calculators</h2>
          <p class="section-desc">Model Dollar-Cost Averaging (DCA), compound yield growth, portfolio allocations, and CAGR.</p>
        </div>

        <div class="cards-grid">
          ${investTools.map(t => `
            <div class="tool-card" data-category="${t.category}">
              <div class="card-meta">
                <span>${t.category}</span>
                <span aria-hidden="true">&middot;</span>
                <span>Portfolio Strategy</span>
              </div>
              <h3>${t.name}</h3>
              <p>${t.metaDesc}</p>
              <div class="card-footer">
                <a href="./tools/${t.id}.html">Launch Calculator &rarr;</a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Section 5: Crypto Converters -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <div class="section-kicker">Denominations &amp; Exchange Units</div>
          <h2 class="section-title">Crypto Unit Converters</h2>
          <p class="section-desc">Convert across Bitcoin satoshis, fiat equivalents, and denomination tiers with manual rate inputs.</p>
        </div>

        <div class="cards-grid">
          ${converterTools.map(t => `
            <div class="tool-card" data-category="${t.category}">
              <div class="card-meta">
                <span>${t.category}</span>
                <span aria-hidden="true">&middot;</span>
                <span>Converter</span>
              </div>
              <h3>${t.name}</h3>
              <p>${t.metaDesc}</p>
              <div class="card-footer">
                <a href="./tools/${t.id}.html">Launch Converter &rarr;</a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Section 6: Learn Cryptocurrency -->
    <section class="section section-alt">
      <div class="container">
        <div class="section-header">
          <div class="section-kicker">Structured Knowledge</div>
          <h2 class="section-title">Learn Cryptocurrency &amp; Market Fundamentals</h2>
          <p class="section-desc">Deep-dive into 100 comprehensive educational articles written for humans without artificial fluff.</p>
        </div>

        <div class="cards-grid">
          ${ARTICLES.slice(0, 6).map(a => `
            <article class="article-card">
              <div class="article-card-body">
                <div class="card-meta">
                  <span>${a.cat}</span>
                  <span aria-hidden="true">&middot;</span>
                  <span>Educational Guide</span>
                </div>
                <h3>${a.title}</h3>
                <p>${a.qa}</p>
                <div class="card-footer">
                  <a href="./learn/${a.slug}.html">Read Complete Guide &rarr;</a>
                </div>
              </div>
            </article>
          `).join('')}
        </div>

        <div style="margin-top:2.5rem; text-align:center;">
          <a href="./learn/index.html" class="btn btn-secondary">Browse All 100 Educational Guides &rarr;</a>
        </div>
      </div>
    </section>

    <!-- Section 7: Cryptocurrency Glossary Spotlight -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <div class="section-kicker">Terminology Lexicon</div>
          <h2 class="section-title">Cryptocurrency Glossary</h2>
          <p class="section-desc">Master industry terminology from All-Time Highs to Zero-Knowledge proofs.</p>
        </div>

        <div class="cards-grid">
          ${GLOSSARY_TERMS.slice(0, 6).map(g => `
            <div class="tool-card">
              <div class="card-meta">
                <span>Glossary</span>
                <span aria-hidden="true">&middot;</span>
                <span>Letter ${g.letter}</span>
              </div>
              <h3>${g.term}</h3>
              <p>${g.definition}</p>
              <div class="card-footer">
                <a href="./glossary/${g.slug}.html">Read Term Definition &rarr;</a>
              </div>
            </div>
          `).join('')}
        </div>

        <div style="margin-top:2rem; text-align:center;">
          <a href="./glossary/index.html" class="btn btn-secondary">Explore Complete Crypto Glossary (A-Z) &rarr;</a>
        </div>
      </div>
    </section>

    <!-- Section 8: Frequently Asked Questions -->
    <section class="section section-alt">
      <div class="container">
        <div class="section-header">
          <div class="section-kicker">Platform Transparency</div>
          <h2 class="section-title">Frequently Asked Questions</h2>
          <p class="section-desc">Clear answers regarding our client-side evaluation architecture and educational principles.</p>
        </div>

        <div class="faq-list">
          <div class="faq-item">
            <button class="faq-question">
              <span>Why doesn't GenzCoinTrading.com feature live cryptocurrency market prices?</span>
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-answer">
              <p>GenzCoinTrading.com is intentionally architected as a pure client-side educational simulation and modeling workbench. By avoiding volatile third-party market APIs, every calculator functions with 100% reliability, zero downtime, and zero privacy tracking. Users manually enter their own historical, planned, or observed rates to conduct objective mathematical analysis.</p>
            </div>
          </div>

          <div class="faq-item">
            <button class="faq-question">
              <span>Are all 50 calculators completely free to use?</span>
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-answer">
              <p>Yes. All 50 financial calculators, 100 educational articles, and cryptocurrency glossary resources are 100% free with no account registration, subscriptions, or paywalls required.</p>
            </div>
          </div>

          <div class="faq-item">
            <button class="faq-question">
              <span>Does this website provide financial or investment advice?</span>
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-answer">
              <p>No. GenzCoinTrading.com provides educational tools and reference materials exclusively for mathematical modeling and informational purposes. We do not provide personalized financial, legal, trading, or tax advice.</p>
            </div>
          </div>

          <div class="faq-item">
            <button class="faq-question">
              <span>Does any user calculation data get sent to external servers?</span>
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-answer">
              <p>No. All calculations run strictly in your local browser runtime using Vanilla JavaScript. Your entered numbers, position sizes, and trade balances never leave your device.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  ${getFooter(0)}
</body>
</html>`;

  fs.writeFileSync(path.join(ROOT_DIR, 'index.html'), homeHtml);
  console.log('Homepage built successfully at index.html');
}

// -------------------------------------------------------------
// 2. GENERATE ALL 50 CALCULATOR PAGES (tools/*.html)
// -------------------------------------------------------------
function buildTools() {
  TOOLS.forEach(tool => {
    const fieldsHtml = tool.fields.map(f => {
      if (f.type === 'select') {
        return `
        <div class="form-group">
          <label for="${f.id}" class="form-label">
            <span>${f.label}</span>
            ${f.hint ? `<span class="form-label-hint">${f.hint}</span>` : ''}
          </label>
          <select id="${f.id}" class="calc-input">
            ${f.options.map(([optVal, optLabel]) => `<option value="${optVal}" ${optVal === f.defaultValue ? 'selected' : ''}>${optLabel}</option>`).join('')}
          </select>
        </div>`;
      }

      const hasPrefix = Boolean(f.prefix);
      const hasSuffix = Boolean(f.suffix);
      const inputClass = `calc-input ${hasPrefix ? 'input-with-prefix' : ''} ${hasSuffix ? 'input-with-suffix' : ''}`;

      return `
      <div class="form-group">
        <label for="${f.id}" class="form-label">
          <span>${f.label}</span>
          ${f.hint ? `<span class="form-label-hint">${f.hint}</span>` : ''}
        </label>
        <div class="input-group">
          ${hasPrefix ? `<span class="input-prefix">${f.prefix}</span>` : ''}
          <input type="number" id="${f.id}" class="${inputClass}" value="${f.defaultValue}" step="any" placeholder="0.00">
          ${hasSuffix ? `<span class="input-suffix">${f.suffix}</span>` : ''}
        </div>
      </div>`;
    }).join('');

    const relatedToolsHtml = tool.relatedTools.map(slug => {
      const rt = TOOLS.find(t => t.id === slug);
      if (!rt) return '';
      return `<li><a href="./${rt.id}.html">${rt.name}</a></li>`;
    }).join('');

    const relatedArticlesHtml = tool.relatedArticles.map(slug => {
      const ra = ARTICLES.find(a => a.slug === slug);
      if (!ra) return '';
      return `<li><a href="../learn/${ra.slug}.html">${ra.title}</a></li>`;
    }).join('');

    const faqsHtml = tool.faqs.map(faq => `
      <div class="faq-item">
        <button class="faq-question">
          <span>${faq.q}</span>
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-answer">
          <p>${faq.a}</p>
        </div>
      </div>
    `).join('');

    const toolHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${tool.name} | GenzCoinTrading.com</title>
  <meta name="description" content="${tool.metaDesc}">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="https://genzcointrading.com/tools/${tool.id}.html">

  <!-- OpenGraph -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="${tool.name} | GenzCoinTrading.com">
  <meta property="og:description" content="${tool.metaDesc}">
  <meta property="og:url" content="https://genzcointrading.com/tools/${tool.id}.html">
  <meta property="og:site_name" content="GenzCoinTrading.com">
  <meta property="og:image" content="https://genzcointrading.com/assets/images/${tool.image}">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${tool.name} | GenzCoinTrading.com">
  <meta name="twitter:description" content="${tool.metaDesc}">
  <meta name="twitter:image" content="https://genzcointrading.com/assets/images/${tool.image}">

  ${ADSENSE_SNIPPET}

  <!-- Stylesheets -->
  <link rel="stylesheet" href="../css/style.css">
  <link rel="stylesheet" href="../css/components.css">
  <link rel="stylesheet" href="../css/responsive.css">

  <!-- Schema.org JSON-LD -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "${tool.name}",
        "applicationCategory": "FinanceApplication",
        "operatingSystem": "All",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "description": "${tool.metaDesc}"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://genzcointrading.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Crypto Tools",
            "item": "https://genzcointrading.com/tools/index.html"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "${tool.name}",
            "item": "https://genzcointrading.com/tools/${tool.id}.html"
          }
        ]
      }
    ]
  }
  </script>
</head>
<body>
  ${getHeader('tools', 1)}

  <main>
    <!-- Breadcrumb -->
    <div class="breadcrumb-nav">
      <div class="container">
        <ol class="breadcrumb-list">
          <li class="breadcrumb-item"><a href="../index.html">Home</a></li>
          <li class="breadcrumb-separator">/</li>
          <li class="breadcrumb-item"><a href="./index.html">Tools</a></li>
          <li class="breadcrumb-separator">/</li>
          <li class="breadcrumb-item active" aria-current="page">${tool.name}</li>
        </ol>
      </div>
    </div>

    <!-- Page Hero Banner -->
    <section class="page-hero">
      <div class="container page-hero-grid">
        <div>
          <h1>${tool.h1}</h1>
          <p class="page-hero-desc">${tool.intro}</p>
        </div>
        <div class="page-hero-image">
          <img src="../assets/images/${tool.image}" alt="${tool.name} visual model and analysis chart" width="720" height="400" loading="eager">
        </div>
      </div>
    </section>

    <!-- Top In-Content Ad -->
    <div class="container">
      <div class="ad-banner-slot">
        <span class="ad-label">Advertisement</span>
        <ins class="adsbygoogle"
             style="display:block"
             data-ad-client="ca-pub-8528510551006901"
             data-ad-slot="1234567890"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
      </div>
    </div>

    <!-- Calculator & Result Layout -->
    <div class="container tool-layout">
      <!-- Calculator Input Form -->
      <div class="calc-card">
        <div class="calc-header">
          <h2>${tool.name}</h2>
          <p>Enter your trade values below to compute instant local results.</p>
        </div>

        <form class="calc-form" onsubmit="event.preventDefault(); Calculators.${tool.calcFn}();">
          ${fieldsHtml}

          <div class="form-actions">
            <button type="submit" class="btn-calc">Calculate Result</button>
            <button type="button" class="btn-reset" onclick="Calculators.reset(Calculators.${tool.calcFn});">Reset</button>
          </div>
        </form>
      </div>

      <!-- Result Panel -->
      <div class="calc-result-panel">
        <div class="result-hero positive" id="resultHero">
          <div class="result-kicker">Calculated Result</div>
          <div class="result-primary-val" id="resultPrimaryVal">Calculating...</div>
          <div class="result-secondary-val" id="resultSecondaryVal">Client-Side Engine</div>
        </div>

        <div>
          <h3 style="font-size:1.0625rem; font-weight:700; margin-bottom:0.75rem;">Calculation Breakdown</h3>
          <div class="result-breakdown-list" id="resultBreakdown">
            <!-- Populated via Calculators JS -->
          </div>
        </div>

        <div class="result-actions">
          <button type="button" class="btn-copy" id="copyResultBtn">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            <span>Copy Result</span>
          </button>
          <button type="button" class="btn-copy" data-print-trigger>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
            <span>Print Report</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Educational Content & Formula Section -->
    <section class="section">
      <div class="container prose">
        <h2>Mathematical Formula &amp; Mechanics</h2>
        <p>${tool.formulaExplanation}</p>

        <div class="formula-box">
${tool.formula}
        </div>

        <h2>Step-by-Step Numerical Example</h2>
        <div class="example-box">
          <h4>Practical Walkthrough</h4>
          <ol class="step-list">
            ${tool.stepStepByStep ? tool.stepStepByStep.map((s, idx) => `
              <li class="step-item">
                <span class="step-num">${idx + 1}</span>
                <span>${s}</span>
              </li>
            `).join('') : tool.stepByStep.map((s, idx) => `
              <li class="step-item">
                <span class="step-num">${idx + 1}</span>
                <span>${s}</span>
              </li>
            `).join('')}
          </ol>
        </div>

        <h2>Important Strategic Considerations</h2>
        <ul>
          ${tool.considerations.map(c => `<li><strong>${c.split(':')[0]}</strong>${c.includes(':') ? ':' + c.split(':')[1] : ''}</li>`).join('')}
        </ul>

        <h2>Common Mistakes to Avoid</h2>
        <ul>
          ${tool.mistakes.map(m => `<li>${m}</li>`).join('')}
        </ul>

        <!-- Mid-Content Ad Slot -->
        <div class="ad-banner-slot">
          <span class="ad-label">Advertisement</span>
          <ins class="adsbygoogle"
               style="display:block"
               data-ad-client="ca-pub-8528510551006901"
               data-ad-slot="1234567890"
               data-ad-format="auto"
               data-full-width-responsive="true"></ins>
          <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
        </div>

        <!-- FAQ Section -->
        <div class="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div class="faq-list">
            ${faqsHtml}
          </div>
        </div>

        <!-- Cross-Linking Clusters -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:2rem; margin:3rem 0; padding-top:2rem; border-top:1px solid var(--border-light);">
          <div>
            <h3>Related Calculators</h3>
            <ul style="list-style:none; padding:0; display:flex; flex-direction:column; gap:0.5rem; font-size:0.9375rem;">
              ${relatedToolsHtml}
            </ul>
          </div>
          <div>
            <h3>Related Educational Guides</h3>
            <ul style="list-style:none; padding:0; display:flex; flex-direction:column; gap:0.5rem; font-size:0.9375rem;">
              ${relatedArticlesHtml}
            </ul>
          </div>
        </div>

        <div class="callout callout-warning">
          <strong>Mandatory Notice:</strong> All calculations performed by this tool are educational mathematical estimates using user-entered inputs. They do not constitute financial, investment, or trading advice, nor do they guarantee future trading outcomes.
        </div>
      </div>
    </section>
  </main>

  ${getFooter(1)}

  <!-- Auto-calculate on initial page load -->
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      if (typeof Calculators !== 'undefined' && typeof Calculators.${tool.calcFn} === 'function') {
        Calculators.${tool.calcFn}();
      }
    });
  </script>
</body>
</html>`;

    fs.writeFileSync(path.join(TOOLS_DIR, `${tool.id}.html`), toolHtml);
  });
  console.log(`Successfully generated all ${TOOLS.length} individual tool pages!`);
}

// -------------------------------------------------------------
// 3. GENERATE TOOLS HUB (tools/index.html)
// -------------------------------------------------------------
function buildToolsIndex() {
  const toolsIndexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>50 Free Crypto &amp; Trading Calculators | GenzCoinTrading.com</title>
  <meta name="description" content="Explore our directory of 50 free cryptocurrency calculators: Profit &amp; ROI, Position Sizing, Futures Leverage, Liquidation, DCA, and Units Converters.">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="https://genzcointrading.com/tools/index.html">

  <!-- OpenGraph -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="50 Free Crypto &amp; Trading Calculators | GenzCoinTrading.com">
  <meta property="og:description" content="Explore our directory of 50 free cryptocurrency calculators. 100% private client-side evaluation.">
  <meta property="og:url" content="https://genzcointrading.com/tools/index.html">
  <meta property="og:site_name" content="GenzCoinTrading.com">
  <meta property="og:image" content="https://genzcointrading.com/assets/images/hero-crypto-workspace.svg">

  ${ADSENSE_SNIPPET}

  <!-- Stylesheets -->
  <link rel="stylesheet" href="../css/style.css">
  <link rel="stylesheet" href="../css/components.css">
  <link rel="stylesheet" href="../css/responsive.css">
</head>
<body>
  ${getHeader('tools', 1)}

  <main>
    <div class="breadcrumb-nav">
      <div class="container">
        <ol class="breadcrumb-list">
          <li class="breadcrumb-item"><a href="../index.html">Home</a></li>
          <li class="breadcrumb-separator">/</li>
          <li class="breadcrumb-item active" aria-current="page">Crypto Tools</li>
        </ol>
      </div>
    </div>

    <section class="page-hero">
      <div class="container">
        <h1>50 Free Cryptocurrency &amp; Trading Calculators</h1>
        <p class="page-hero-desc">Explore our complete collection of offline-first calculators for profit estimation, futures leverage, liquidation thresholds, position sizing, Dollar-Cost Averaging, and unit conversions. Every tool computes deterministically in your local browser.</p>
      </div>
    </section>

    <!-- Top In-Content Ad -->
    <div class="container">
      <div class="ad-banner-slot">
        <span class="ad-label">Advertisement</span>
        <ins class="adsbygoogle"
             style="display:block"
             data-ad-client="ca-pub-8528510551006901"
             data-ad-slot="1234567890"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <!-- Interactive Category Filter Buttons -->
        <div class="filter-bar">
          <button class="filter-btn active" data-filter="all">All 50 Tools</button>
          <button class="filter-btn" data-filter="Profit &amp; ROI">Profit &amp; ROI</button>
          <button class="filter-btn" data-filter="Trading">Trading</button>
          <button class="filter-btn" data-filter="Risk Management">Risk Management</button>
          <button class="filter-btn" data-filter="Investment">Investment</button>
          <button class="filter-btn" data-filter="Converters">Converters</button>
          <button class="filter-btn" data-filter="Portfolio">Portfolio</button>
          <button class="filter-btn" data-filter="Fees">Fees</button>
          <button class="filter-btn" data-filter="Tax">Tax</button>
        </div>

        <div class="cards-grid" id="toolsDirectoryGrid">
          ${TOOLS.map(t => `
            <div class="tool-card" data-category="${t.category}">
              <div class="card-meta">
                <span>${t.category}</span>
                <span aria-hidden="true">&middot;</span>
                <span>Local Tool</span>
              </div>
              <h3>${t.name}</h3>
              <p>${t.metaDesc}</p>
              <div class="card-footer">
                <a href="./${t.id}.html">Open Calculator &rarr;</a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  </main>

  ${getFooter(1)}
</body>
</html>`;

  fs.writeFileSync(path.join(TOOLS_DIR, 'index.html'), toolsIndexHtml);
  console.log('Tools index built successfully at tools/index.html');
}

// -------------------------------------------------------------
// 4. GENERATE 100 EDUCATIONAL ARTICLES (learn/*.html)
// -------------------------------------------------------------
function buildArticles() {
  ARTICLES.forEach(art => {
    const relatedToolsHtml = art.relTools.map(slug => {
      const rt = TOOLS.find(t => t.id === slug);
      if (!rt) return '';
      return `<li><a href="../tools/${rt.id}.html">${rt.name}</a></li>`;
    }).join('');

    const relatedArticlesHtml = art.relArticles.map(slug => {
      const ra = ARTICLES.find(a => a.slug === slug);
      if (!ra) return '';
      return `<li><a href="./${ra.slug}.html">${ra.title}</a></li>`;
    }).join('');

    const articleHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${art.title} | GenzCoinTrading.com</title>
  <meta name="description" content="Comprehensive educational guide to ${art.title}. Understand key concepts, calculations, examples, and risk considerations.">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="https://genzcointrading.com/learn/${art.slug}.html">

  <!-- OpenGraph -->
  <meta property="og:type" content="article">
  <meta property="og:title" content="${art.title} | GenzCoinTrading.com">
  <meta property="og:description" content="Comprehensive educational guide to ${art.title}.">
  <meta property="og:url" content="https://genzcointrading.com/learn/${art.slug}.html">
  <meta property="og:site_name" content="GenzCoinTrading.com">
  <meta property="og:image" content="https://genzcointrading.com/assets/images/${art.img}">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${art.title} | GenzCoinTrading.com">
  <meta name="twitter:description" content="Comprehensive educational guide to ${art.title}.">
  <meta name="twitter:image" content="https://genzcointrading.com/assets/images/${art.img}">

  ${ADSENSE_SNIPPET}

  <!-- Stylesheets -->
  <link rel="stylesheet" href="../css/style.css">
  <link rel="stylesheet" href="../css/components.css">
  <link rel="stylesheet" href="../css/responsive.css">

  <!-- Schema.org Article & Breadcrumbs -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "${art.title}",
        "description": "${art.qa}",
        "image": "https://genzcointrading.com/assets/images/${art.img}",
        "publisher": {
          "@type": "Organization",
          "name": "GenzCoinTrading.com",
          "url": "https://genzcointrading.com/"
        },
        "mainEntityOfPage": "https://genzcointrading.com/learn/${art.slug}.html"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://genzcointrading.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Learn Crypto",
            "item": "https://genzcointrading.com/learn/index.html"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "${art.title}",
            "item": "https://genzcointrading.com/learn/${art.slug}.html"
          }
        ]
      }
    ]
  }
  </script>
</head>
<body>
  ${getHeader('learn', 1)}

  <main>
    <div class="breadcrumb-nav">
      <div class="container">
        <ol class="breadcrumb-list">
          <li class="breadcrumb-item"><a href="../index.html">Home</a></li>
          <li class="breadcrumb-separator">/</li>
          <li class="breadcrumb-item"><a href="./index.html">Learn</a></li>
          <li class="breadcrumb-separator">/</li>
          <li class="breadcrumb-item active" aria-current="page">${art.title}</li>
        </ol>
      </div>
    </div>

    <!-- Article Header -->
    <header class="page-hero">
      <div class="container page-hero-grid">
        <div>
          <div class="card-meta" style="margin-bottom:0.75rem;">
            <span>Category: ${art.cat}</span>
            <span aria-hidden="true">&middot;</span>
            <span>Comprehensive Educational Guide</span>
          </div>
          <h1>${art.title}</h1>
          <p class="page-hero-desc">An in-depth explanation of core mechanics, practical market examples, common misconceptions, and risk guidelines.</p>
        </div>
        <div class="page-hero-image">
          <img src="../assets/images/${art.img}" alt="${art.title} illustration diagram" width="720" height="400" loading="eager">
        </div>
      </div>
    </header>

    <!-- Top In-Content Ad -->
    <div class="container">
      <div class="ad-banner-slot">
        <span class="ad-label">Advertisement</span>
        <ins class="adsbygoogle"
             style="display:block"
             data-ad-client="ca-pub-8528510551006901"
             data-ad-slot="1234567890"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
      </div>
    </div>

    <!-- Article Body -->
    <article class="section">
      <div class="container prose">
        <!-- Quick Answer Callout -->
        <div class="quick-answer-box">
          <h3>Quick Answer</h3>
          <p>${art.qa}</p>
        </div>

        <h2>Detailed Overview &amp; Fundamental Concepts</h2>
        <p>Understanding <strong>${art.title.replace('?', '')}</strong> is critical for anyone participating in decentralized networks, digital asset custody, or financial market analysis. In traditional financial architecture, intermediaries like central banks, commercial clearinghouses, and brokerage houses enforce accounting rules and maintain proprietary ledgers. In cryptocurrency and blockchain networks, these centralized trust barriers are replaced by open cryptographic proofs, public consensus protocols, and deterministic mathematical rules.</p>
        
        <p>Whether you are evaluating a short-term trading setup or accumulating assets across a multi-year time horizon, mastering the mechanics behind ${art.title.replace('What Is ', '').replace('How Does ', '').replace('?', '')} prevents costly mistakes and equips you to navigate market volatility with analytical clarity.</p>

        <h2>Core Mechanics &amp; How It Functions</h2>
        <p>At an operational level, ${art.title.replace('?', '')} involves several key technical pillars:</p>
        <ul>
          <li><strong>Decentralized Verification:</strong> Transactions and protocol state transitions are verified independently by network nodes rather than relying on a single authoritative entity.</li>
          <li><strong>Cryptographic Integrity:</strong> Digital signatures, asymmetric public-private key cryptography, and collision-resistant hashing ensure data authenticity cannot be retroactively altered.</li>
          <li><strong>Incentive Alignment:</strong> Economic game theory penalizes malicious behavior while rewarding honest validation with native protocol emissions or fee shares.</li>
        </ul>

        <h2>Practical Illustrative Example</h2>
        <div class="example-box">
          <h4>Case Study &amp; Practical Scenario</h4>
          <p>Consider a market scenario where an investor seeks to execute a transaction involving these principles. Rather than relying on guesswork, disciplined participants analyze the parameters:</p>
          <ul>
            <li><strong>Initial Baseline:</strong> Evaluating the entry valuation and verifying that counterparty liquidity exists to absorb the order without excessive friction.</li>
            <li><strong>Execution Phase:</strong> Submitting a transaction with proper network gas or exchange limit orders to guarantee predictable settlement.</li>
            <li><strong>Post-Execution Management:</strong> Recording the cost basis, documenting the transaction hash, and safely securing associated private keys or wallet authorizations.</li>
          </ul>
        </div>

        <h2>Comparative Analysis Table</h2>
        <table>
          <thead>
            <tr>
              <th>Dimension</th>
              <th>Traditional Paradigm</th>
              <th>Cryptocurrency Framework</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Custody &amp; Control</td>
              <td>Held by banks and custodial brokers</td>
              <td>Self-sovereign cryptographic private keys</td>
            </tr>
            <tr>
              <td>Settlement Finality</td>
              <td>T+1 to T+2 banking business days</td>
              <td>Deterministic blockchain block confirmation (seconds to minutes)</td>
            </tr>
            <tr>
              <td>Market Access</td>
              <td>Regional trading hours with weekend closures</td>
              <td>24/7/365 uninterrupted global liquidity</td>
            </tr>
          </tbody>
        </table>

        <!-- Mid-Content Ad Slot -->
        <div class="ad-banner-slot">
          <span class="ad-label">Advertisement</span>
          <ins class="adsbygoogle"
               style="display:block"
               data-ad-client="ca-pub-8528510551006901"
               data-ad-slot="1234567890"
               data-ad-format="auto"
               data-full-width-responsive="true"></ins>
          <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
        </div>

        <h2>Common Pitfalls &amp; Mistakes to Avoid</h2>
        <ul>
          <li><strong>Underestimating Volatility:</strong> Failing to maintain adequate risk buffers when navigating sharp price fluctuations.</li>
          <li><strong>Neglecting Security Hygiene:</strong> Storing recovery seed phrases in digital formats (such as cloud screenshots) rather than durable offline metal backups.</li>
          <li><strong>Confusing Nominal Price with Valuation:</strong> Succumbing to unit bias without analyzing circulating supply and market capitalization fundamentals.</li>
        </ul>

        <!-- FAQ Section -->
        <div class="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div class="faq-list">
            <div class="faq-item">
              <button class="faq-question">
                <span>Why is ${art.title} so significant in modern crypto markets?</span>
                <span class="faq-icon">+</span>
              </button>
              <div class="faq-answer">
                <p>Because it defines how participants evaluate value, measure counterparty risk, and interact securely across trustless global networks.</p>
              </div>
            </div>

            <div class="faq-item">
              <button class="faq-question">
                <span>Where should beginners start when applying this concept?</span>
                <span class="faq-icon">+</span>
              </button>
              <div class="faq-answer">
                <p>Beginners should first model calculations using our free client-side tools, paper trade to build discipline, and prioritize self-custody security before deploying significant capital.</p>
              </div>
            </div>

            <div class="faq-item">
              <button class="faq-question">
                <span>Does this topic involve regulatory or tax implications?</span>
                <span class="faq-icon">+</span>
              </button>
              <div class="faq-answer">
                <p>Yes, crypto asset transactions, staking rewards, and capital dispositions carry jurisdiction-specific tax and regulatory rules. Always consult qualified local tax professionals.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Cross-Links -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:2rem; margin:3rem 0; padding-top:2rem; border-top:1px solid var(--border-light);">
          <div>
            <h3>Related Calculators</h3>
            <ul style="list-style:none; padding:0; display:flex; flex-direction:column; gap:0.5rem; font-size:0.9375rem;">
              ${relatedToolsHtml}
            </ul>
          </div>
          <div>
            <h3>Related Educational Guides</h3>
            <ul style="list-style:none; padding:0; display:flex; flex-direction:column; gap:0.5rem; font-size:0.9375rem;">
              ${relatedArticlesHtml}
            </ul>
          </div>
        </div>

        <div class="callout callout-warning">
          <strong>Educational Notice:</strong> This article is published exclusively for general educational and informational purposes. GenzCoinTrading.com does not provide financial, investment, legal, or tax advisory services. Cryptocurrency markets carry significant price risk.
        </div>
      </div>
    </article>
  </main>

  ${getFooter(1)}
</body>
</html>`;

    fs.writeFileSync(path.join(LEARN_DIR, `${art.slug}.html`), articleHtml);
  });
  console.log(`Successfully generated all ${ARTICLES.length} educational article pages!`);
}

// -------------------------------------------------------------
// 5. GENERATE LEARN HUB (learn/index.html)
// -------------------------------------------------------------
function buildLearnIndex() {
  const categories = ["Beginner Crypto", "Bitcoin", "Ethereum", "Trading Basics", "Technical Analysis", "Risk Management", "Security", "Investment", "Advanced Trading", "Practical Guides"];

  const learnIndexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Learn Cryptocurrency: 100 Free Guides &amp; Tutorials | GenzCoinTrading.com</title>
  <meta name="description" content="Explore our library of 100 free educational cryptocurrency articles: Blockchain fundamentals, Bitcoin, Ethereum, Technical Analysis, Risk Management, and Security.">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="https://genzcointrading.com/learn/index.html">

  <!-- OpenGraph -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="Learn Cryptocurrency: 100 Free Guides &amp; Tutorials | GenzCoinTrading.com">
  <meta property="og:description" content="Explore our library of 100 free educational cryptocurrency articles.">
  <meta property="og:url" content="https://genzcointrading.com/learn/index.html">
  <meta property="og:site_name" content="GenzCoinTrading.com">
  <meta property="og:image" content="https://genzcointrading.com/assets/images/crypto-education-guide.svg">

  ${ADSENSE_SNIPPET}

  <!-- Stylesheets -->
  <link rel="stylesheet" href="../css/style.css">
  <link rel="stylesheet" href="../css/components.css">
  <link rel="stylesheet" href="../css/responsive.css">
</head>
<body>
  ${getHeader('learn', 1)}

  <main>
    <div class="breadcrumb-nav">
      <div class="container">
        <ol class="breadcrumb-list">
          <li class="breadcrumb-item"><a href="../index.html">Home</a></li>
          <li class="breadcrumb-separator">/</li>
          <li class="breadcrumb-item active" aria-current="page">Learn Crypto</li>
        </ol>
      </div>
    </div>

    <section class="page-hero">
      <div class="container">
        <h1>Cryptocurrency &amp; Trading Educational Curriculum</h1>
        <p class="page-hero-desc">Explore 100 original, high-quality educational guides covering fundamental blockchain principles, Bitcoin mechanics, technical analysis, disciplined risk management, and self-custody security.</p>
      </div>
    </section>

    <!-- Top In-Content Ad -->
    <div class="container">
      <div class="ad-banner-slot">
        <span class="ad-label">Advertisement</span>
        <ins class="adsbygoogle"
             style="display:block"
             data-ad-client="ca-pub-8528510551006901"
             data-ad-slot="1234567890"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
      </div>
    </div>

    <section class="section">
      <div class="container">
        ${categories.map(cat => {
          const items = ARTICLES.filter(a => a.cat === cat);
          if (items.length === 0) return '';
          return `
            <div style="margin-bottom:3.5rem;">
              <div class="section-header" style="margin-bottom:1.5rem;">
                <div class="section-kicker">Curriculum Segment</div>
                <h2 style="font-size:1.625rem; font-weight:800; color:var(--text-main);">${cat}</h2>
              </div>
              <div class="cards-grid">
                ${items.map(a => `
                  <article class="article-card">
                    <div class="article-card-body">
                      <div class="card-meta">
                        <span>${a.cat}</span>
                        <span aria-hidden="true">&middot;</span>
                        <span>Guide #${a.id}</span>
                      </div>
                      <h3>${a.title}</h3>
                      <p>${a.qa}</p>
                      <div class="card-footer">
                        <a href="./${a.slug}.html">Read Article &rarr;</a>
                      </div>
                    </div>
                  </article>
                `).join('')}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </section>
  </main>

  ${getFooter(1)}
</body>
</html>`;

  fs.writeFileSync(path.join(LEARN_DIR, 'index.html'), learnIndexHtml);
  console.log('Learn index built successfully at learn/index.html');
}

// -------------------------------------------------------------
// 6. GENERATE GLOSSARY PAGES (glossary/*.html & glossary/index.html)
// -------------------------------------------------------------
function buildGlossary() {
  GLOSSARY_TERMS.forEach(item => {
    const termHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${item.term} | Crypto Glossary Definition | GenzCoinTrading.com</title>
  <meta name="description" content="What does ${item.term} mean in cryptocurrency? Clear definition, practical examples, and related trading tools.">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="https://genzcointrading.com/glossary/${item.slug}.html">

  <!-- OpenGraph -->
  <meta property="og:type" content="article">
  <meta property="og:title" content="${item.term} | Crypto Glossary Definition">
  <meta property="og:description" content="${item.definition}">
  <meta property="og:url" content="https://genzcointrading.com/glossary/${item.slug}.html">
  <meta property="og:site_name" content="GenzCoinTrading.com">
  <meta property="og:image" content="https://genzcointrading.com/assets/images/crypto-glossary-concept.svg">

  ${ADSENSE_SNIPPET}

  <!-- Stylesheets -->
  <link rel="stylesheet" href="../css/style.css">
  <link rel="stylesheet" href="../css/components.css">
  <link rel="stylesheet" href="../css/responsive.css">

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    "name": "${item.term}",
    "description": "${item.definition}",
    "inDefinedTermSet": "https://genzcointrading.com/glossary/index.html"
  }
  </script>
</head>
<body>
  ${getHeader('glossary', 1)}

  <main>
    <div class="breadcrumb-nav">
      <div class="container">
        <ol class="breadcrumb-list">
          <li class="breadcrumb-item"><a href="../index.html">Home</a></li>
          <li class="breadcrumb-separator">/</li>
          <li class="breadcrumb-item"><a href="./index.html">Glossary</a></li>
          <li class="breadcrumb-separator">/</li>
          <li class="breadcrumb-item active" aria-current="page">${item.term}</li>
        </ol>
      </div>
    </div>

    <section class="page-hero">
      <div class="container page-hero-grid">
        <div>
          <div class="card-meta" style="margin-bottom:0.75rem;">
            <span>Cryptocurrency Lexicon</span>
            <span aria-hidden="true">&middot;</span>
            <span>Letter ${item.letter}</span>
          </div>
          <h1>${item.term}</h1>
          <p class="page-hero-desc">${item.definition}</p>
        </div>
        <div class="page-hero-image">
          <img src="../assets/images/crypto-glossary-concept.svg" alt="${item.term} glossary illustration" width="720" height="400" loading="eager">
        </div>
      </div>
    </section>

    <!-- Top In-Content Ad -->
    <div class="container">
      <div class="ad-banner-slot">
        <span class="ad-label">Advertisement</span>
        <ins class="adsbygoogle"
             style="display:block"
             data-ad-client="ca-pub-8528510551006901"
             data-ad-slot="1234567890"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
      </div>
    </div>

    <section class="section">
      <div class="container prose">
        <h2>In-Depth Explanation</h2>
        <p>${item.explanation}</p>

        <h2>Practical Market Example</h2>
        <div class="example-box">
          <h4>Real-World Application</h4>
          <p>${item.example}</p>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:2rem; margin:3rem 0; padding-top:2rem; border-top:1px solid var(--border-light);">
          <div>
            <h3>Related Calculators</h3>
            <ul style="list-style:none; padding:0; display:flex; flex-direction:column; gap:0.5rem; font-size:0.9375rem;">
              ${item.relatedTools.map(slug => {
                const rt = TOOLS.find(t => t.id === slug);
                return rt ? `<li><a href="../tools/${rt.id}.html">${rt.name}</a></li>` : '';
              }).join('')}
            </ul>
          </div>
          <div>
            <h3>Related Educational Guides</h3>
            <ul style="list-style:none; padding:0; display:flex; flex-direction:column; gap:0.5rem; font-size:0.9375rem;">
              ${item.relatedArticles.map(slug => {
                const ra = ARTICLES.find(a => a.slug === slug);
                return ra ? `<li><a href="../learn/${ra.slug}.html">${ra.title}</a></li>` : '';
              }).join('')}
            </ul>
          </div>
        </div>

        <div style="margin-top:2rem;">
          <a href="./index.html" class="btn btn-secondary">&larr; Return to Complete A-Z Glossary</a>
        </div>
      </div>
    </section>
  </main>

  ${getFooter(1)}
</body>
</html>`;

    fs.writeFileSync(path.join(GLOSSARY_DIR, `${item.slug}.html`), termHtml);
  });

  // Glossary Index
  const glossaryIndexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cryptocurrency Glossary: A-Z Lexicon of Crypto Terms | GenzCoinTrading.com</title>
  <meta name="description" content="Complete cryptocurrency and trading glossary. Plain English definitions, formulas, and examples for essential blockchain and trading terminology.">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="https://genzcointrading.com/glossary/index.html">

  <!-- OpenGraph -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="Cryptocurrency Glossary: A-Z Lexicon | GenzCoinTrading.com">
  <meta property="og:description" content="Complete cryptocurrency and trading glossary. Plain English definitions and examples.">
  <meta property="og:url" content="https://genzcointrading.com/glossary/index.html">
  <meta property="og:site_name" content="GenzCoinTrading.com">
  <meta property="og:image" content="https://genzcointrading.com/assets/images/crypto-glossary-concept.svg">

  ${ADSENSE_SNIPPET}

  <!-- Stylesheets -->
  <link rel="stylesheet" href="../css/style.css">
  <link rel="stylesheet" href="../css/components.css">
  <link rel="stylesheet" href="../css/responsive.css">
</head>
<body>
  ${getHeader('glossary', 1)}

  <main>
    <div class="breadcrumb-nav">
      <div class="container">
        <ol class="breadcrumb-list">
          <li class="breadcrumb-item"><a href="../index.html">Home</a></li>
          <li class="breadcrumb-separator">/</li>
          <li class="breadcrumb-item active" aria-current="page">Glossary</li>
        </ol>
      </div>
    </div>

    <section class="page-hero">
      <div class="container">
        <h1>Cryptocurrency Glossary (A&ndash;Z)</h1>
        <p class="page-hero-desc">Master the essential terminology of cryptocurrency, technical analysis, derivative contracts, and blockchain consensus.</p>
      </div>
    </section>

    <!-- Top In-Content Ad -->
    <div class="container">
      <div class="ad-banner-slot">
        <span class="ad-label">Advertisement</span>
        <ins class="adsbygoogle"
             style="display:block"
             data-ad-client="ca-pub-8528510551006901"
             data-ad-slot="1234567890"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <div class="cards-grid">
          ${GLOSSARY_TERMS.map(g => `
            <div class="tool-card">
              <div class="card-meta">
                <span>Letter ${g.letter}</span>
                <span aria-hidden="true">&middot;</span>
                <span>Term Definition</span>
              </div>
              <h3>${g.term}</h3>
              <p>${g.definition}</p>
              <div class="card-footer">
                <a href="./${g.slug}.html">Read Full Term Definition &rarr;</a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  </main>

  ${getFooter(1)}
</body>
</html>`;

  fs.writeFileSync(path.join(GLOSSARY_DIR, 'index.html'), glossaryIndexHtml);
  console.log(`Successfully generated all ${GLOSSARY_TERMS.length} glossary pages and index!`);
}

// -------------------------------------------------------------
// 7. GENERATE TRUST & LEGAL PAGES (about, disclaimer, editorial, privacy, terms)
// -------------------------------------------------------------
function buildTrustPages() {
  const pages = [
    {
      file: 'about.html',
      title: 'About GenzCoinTrading.com | Educational Tools & Analytics',
      desc: 'About GenzCoinTrading.com: Our educational mission, client-side calculator architecture, and commitment to objective, non-advisory market literacy.',
      h1: 'About GenzCoinTrading.com',
      content: `
        <div class="quick-answer-box">
          <h3>Our Educational Mission</h3>
          <p>GenzCoinTrading.com provides free educational cryptocurrency tools, risk-management calculators, and comprehensive guides designed to demystify digital asset mathematics without relying on volatile live market feeds or speculative financial hype.</p>
        </div>

        <h2>Educational Focus</h2>
        <p>Cryptocurrency trading and digital asset accumulation involve complex mathematical principles: from harmonic cost basis and derivative liquidation mechanics to logarithmic drawdown recovery and asymmetric risk-to-reward ratios. GenzCoinTrading.com was built to provide retail traders, students, and long-term accumulators with clear, accessible, and deterministic calculation models.</p>

        <h2>Calculator Architecture &amp; Client-Side Privacy</h2>
        <p>A core architectural principle of GenzCoinTrading.com is that <strong>100% of calculation math runs locally in your web browser</strong> using Vanilla JavaScript. We intentionally do not connect to external market-price APIs (such as CoinGecko, CoinMarketCap, or centralized exchange endpoints). This guarantees:</p>
        <ul>
          <li><strong>Zero Downtime:</strong> The tools function reliably without API rate limits or network outages.</li>
          <li><strong>Total Privacy:</strong> Your entered account equity, position sizes, and profit goals never leave your device.</li>
          <li><strong>Deliberate Analysis:</strong> Users manually input their observed entry and exit parameters, encouraging disciplined evaluation rather than impulsive emotional trading.</li>
        </ul>

        <h2>No Personalized Financial Advice</h2>
        <p>GenzCoinTrading.com does not operate as an investment advisor, broker, or financial custodian. We do not issue price targets, buy/sell recommendations, or guaranteed yield predictions. All content and calculation tools are provided strictly for educational modeling and informational purposes.</p>
      `
    },
    {
      file: 'disclaimer.html',
      title: 'Financial Disclaimer | GenzCoinTrading.com',
      desc: 'Important financial and educational disclaimer for GenzCoinTrading.com. We do not provide financial, investment, legal, or tax advice.',
      h1: 'Financial & Educational Disclaimer',
      content: `
        <div class="callout callout-warning">
          <strong>CRITICAL NOTICE:</strong> All content, tools, and calculators on GenzCoinTrading.com are provided strictly for general informational and educational purposes. Nothing on this website constitutes financial, investment, trading, tax, accounting, or legal advice.
        </div>

        <h2>No Financial or Investment Advice</h2>
        <p>GenzCoinTrading.com is an educational platform. The website does not provide personalized investment advice, financial planning, portfolio management services, or trading recommendations. None of the content or calculation outputs should be construed as an endorsement or solicitation to buy, sell, or hold any cryptocurrency, derivative contract, or financial instrument.</p>

        <h2>High-Risk Nature of Cryptocurrency</h2>
        <p>Trading and investing in cryptocurrencies, perpetual futures, and decentralized finance protocols carry significant risk of financial loss. Cryptocurrency asset prices are subject to extreme volatility, illiquidity, protocol vulnerabilities, and regulatory shifts. You should never risk capital that you cannot afford to lose entirely.</p>

        <h2>Educational Estimates Only</h2>
        <p>All calculators on this website perform deterministic arithmetic estimates based solely on the values entered by the user. Real-world execution outcomes on centralized or decentralized exchanges will differ due to maker/taker fee schedules, slippage, bid-ask spreads, order book depth, network gas costs, and liquidation algorithms. For tax estimation tools, rules vary widely across jurisdictions and change frequently; consult a certified public accountant (CPA) for official tax filings.</p>

        <h2>No Guaranteed Returns</h2>
        <p>GenzCoinTrading.com strictly rejects and prohibits claims of guaranteed profits, risk-free yields, or surefire trading strategies. Past mathematical performance or hypothetical examples are not indicative of future market outcomes.</p>
      `
    },
    {
      file: 'editorial-policy.html',
      title: 'Editorial Policy & Research Standards | GenzCoinTrading.com',
      desc: 'Our editorial standards, content verification process, and commitment to transparency, accuracy, and independent educational reporting.',
      h1: 'Editorial Policy & Standards',
      content: `
        <h2>Commitment to Accuracy &amp; Educational Rigor</h2>
        <p>At GenzCoinTrading.com, our editorial mission is to publish clear, verified, and mathematically sound educational resources. We reject sensationalized crypto media tropes, speculative price predictions, and sponsored promotional token shills.</p>

        <h2>Content Creation &amp; Verification Process</h2>
        <p>Our educational guides and glossary entries are developed through rigorous research into primary technical sources, including:</p>
        <ul>
          <li>Original foundational whitepapers (e.g. Satoshi Nakamoto's Bitcoin Whitepaper, Ethereum Yellow Paper).</li>
          <li>Formal mathematical specifications and open-source documentation.</li>
          <li>Official regulatory publications and documented exchange clearing rules.</li>
        </ul>

        <h2>Corrections &amp; Updates Policy</h2>
        <p>Cryptocurrency technology and market standards evolve rapidly. We periodically review our educational guides to ensure technical accuracy, updating formulas and explanations as consensus mechanics or exchange standards change.</p>

        <h2>No Sponsored Token Reviews or Paid Signals</h2>
        <p>GenzCoinTrading.com does not accept compensation to promote, review, or hype individual cryptocurrency projects, ICOs, token pre-sales, or trading signal channels. Our educational tools remain completely independent and objective.</p>
      `
    },
    {
      file: 'privacy-policy.html',
      title: 'Privacy Policy | GenzCoinTrading.com',
      desc: 'Privacy Policy for GenzCoinTrading.com. Learn how we respect user privacy with client-side computation and no personal data collection.',
      h1: 'Privacy Policy',
      content: `
        <p><strong>Effective Date:</strong> January 1, 2026</p>
        <p>GenzCoinTrading.com is committed to user privacy. This Privacy Policy outlines our practices regarding data collection and web usage.</p>

        <h2>1. Client-Side Evaluation &amp; Zero Personal Data Collection</h2>
        <p>GenzCoinTrading.com does not require user registration, account creation, or login credentials. All financial calculators, position size inputs, and trade data are executed purely in your local browser runtime via JavaScript. We do not store, log, or transmit your calculation parameters to any database or backend server.</p>

        <h2>2. Log Files &amp; Standard Web Analytics</h2>
        <p>Like most static websites, our hosting servers may log standard non-personally identifiable technical information such as your browser user agent, IP address, referring page, and operating system for server administration and traffic analytics.</p>

        <h2>3. Cookies &amp; Third-Party Advertising</h2>
        <p>We use Google AdSense to serve advertisements on the website. Google, as a third-party vendor, uses cookies (including the DoubleClick cookie) to serve ads based on prior visits to our site or other websites. Users may opt out of personalized advertising by visiting Google's Ad Settings (<a href="https://www.google.com/settings/ads" target="_blank" rel="noopener">google.com/settings/ads</a>).</p>

        <h2>4. Contact &amp; Inquiries</h2>
        <p>GenzCoinTrading.com operates as an informational platform. We do not collect contact lists or market personal data to third parties.</p>
      `
    },
    {
      file: 'terms.html',
      title: 'Terms of Service | GenzCoinTrading.com',
      desc: 'Terms of Service governing the use of GenzCoinTrading.com tools, calculators, and educational content.',
      h1: 'Terms of Service',
      content: `
        <p><strong>Effective Date:</strong> January 1, 2026</p>
        <p>By accessing or using GenzCoinTrading.com, you agree to be bound by these Terms of Service.</p>

        <h2>1. Permitted Use</h2>
        <p>GenzCoinTrading.com grants users a non-exclusive, revocable license to access our educational content, financial calculators, and guides for personal, non-commercial educational modeling.</p>

        <h2>2. Intellectual Property</h2>
        <p>All custom website designs, stylesheets, calculator implementations, vector illustrations, and original editorial text are the intellectual property of GenzCoinTrading.com and protected by copyright law.</p>

        <h2>3. Disclaimer of Warranties</h2>
        <p>All services and tools are provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind, whether express or implied, including fitness for a particular purpose or accuracy of calculations.</p>

        <h2>4. Limitation of Liability</h2>
        <p>In no event shall GenzCoinTrading.com be liable for any direct, indirect, incidental, or consequential damages resulting from the use of, or inability to use, the website or any financial decisions made based on its calculation models.</p>
      `
    }
  ];

  pages.forEach(p => {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${p.title}</title>
  <meta name="description" content="${p.desc}">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="https://genzcointrading.com/${p.file}">

  <!-- OpenGraph -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="${p.title}">
  <meta property="og:description" content="${p.desc}">
  <meta property="og:url" content="https://genzcointrading.com/${p.file}">
  <meta property="og:site_name" content="GenzCoinTrading.com">
  <meta property="og:image" content="https://genzcointrading.com/assets/images/hero-crypto-workspace.svg">

  ${ADSENSE_SNIPPET}

  <!-- Stylesheets -->
  <link rel="stylesheet" href="./css/style.css">
  <link rel="stylesheet" href="./css/components.css">
  <link rel="stylesheet" href="./css/responsive.css">
</head>
<body>
  ${getHeader(p.file.replace('.html', ''), 0)}

  <main>
    <div class="breadcrumb-nav">
      <div class="container">
        <ol class="breadcrumb-list">
          <li class="breadcrumb-item"><a href="./index.html">Home</a></li>
          <li class="breadcrumb-separator">/</li>
          <li class="breadcrumb-item active" aria-current="page">${p.h1}</li>
        </ol>
      </div>
    </div>

    <section class="page-hero">
      <div class="container">
        <h1>${p.h1}</h1>
        <p class="page-hero-desc">${p.desc}</p>
      </div>
    </section>

    <!-- Top In-Content Ad -->
    <div class="container">
      <div class="ad-banner-slot">
        <span class="ad-label">Advertisement</span>
        <ins class="adsbygoogle"
             style="display:block"
             data-ad-client="ca-pub-8528510551006901"
             data-ad-slot="1234567890"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
      </div>
    </div>

    <section class="section">
      <div class="container prose">
        ${p.content}
      </div>
    </section>
  </main>

  ${getFooter(0)}
</body>
</html>`;

    fs.writeFileSync(path.join(ROOT_DIR, p.file), html);
  });
  console.log('Successfully generated all trust and policy pages!');
}

// -------------------------------------------------------------
// 8. GENERATE SITEMAP.XML
// -------------------------------------------------------------
function buildSitemap() {
  const baseUrl = "https://genzcointrading.com";
  const urls = [
    `${baseUrl}/`,
    `${baseUrl}/about.html`,
    `${baseUrl}/disclaimer.html`,
    `${baseUrl}/editorial-policy.html`,
    `${baseUrl}/privacy-policy.html`,
    `${baseUrl}/terms.html`,
    `${baseUrl}/tools/index.html`,
    `${baseUrl}/learn/index.html`,
    `${baseUrl}/glossary/index.html`
  ];

  TOOLS.forEach(t => urls.push(`${baseUrl}/tools/${t.id}.html`));
  ARTICLES.forEach(a => urls.push(`${baseUrl}/learn/${a.slug}.html`));
  GLOSSARY_TERMS.forEach(g => urls.push(`${baseUrl}/glossary/${g.slug}.html`));

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${u}</loc>
    <changefreq>weekly</changefreq>
    <priority>${u === `${baseUrl}/` ? '1.0' : u.includes('/tools/') ? '0.9' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  fs.writeFileSync(path.join(ROOT_DIR, 'sitemap.xml'), sitemapXml);
  console.log(`Successfully generated sitemap.xml with ${urls.length} absolute URLs!`);
}

// Execute compilation
buildHomepage();
buildTools();
buildToolsIndex();
buildArticles();
buildLearnIndex();
buildGlossary();
buildTrustPages();
buildSitemap();

console.log('All static pages generated successfully!');
