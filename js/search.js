/**
 * GENZCOINTRADING.COM — STATIC SITE SEARCH
 * 100% Client-Side Search indexing calculators, educational guides, and glossary terms.
 */

const SiteIndex = [
  // 50 CALCULATORS
  { title: "Crypto Profit Calculator", url: "/tools/crypto-profit-calculator.html", category: "Profit & ROI", tags: "profit roi gain returns investment buy sell exit" },
  { title: "Bitcoin Profit Calculator", url: "/tools/bitcoin-profit-calculator.html", category: "Profit & ROI", tags: "bitcoin btc profit roi returns" },
  { title: "Ethereum Profit Calculator", url: "/tools/ethereum-profit-calculator.html", category: "Profit & ROI", tags: "ethereum eth profit roi returns smart contracts" },
  { title: "Crypto ROI Calculator", url: "/tools/crypto-roi-calculator.html", category: "Profit & ROI", tags: "roi return on investment percentage profit yield" },
  { title: "Crypto P&L Calculator", url: "/tools/crypto-pnl-calculator.html", category: "Profit & ROI", tags: "pnl profit loss long short trade execution" },
  { title: "Percentage Gain Calculator", url: "/tools/percentage-gain-calculator.html", category: "Profit & ROI", tags: "percentage gain appreciation growth return" },
  { title: "Percentage Loss Calculator", url: "/tools/percentage-loss-calculator.html", category: "Profit & ROI", tags: "percentage loss decline drawdown depreciation" },
  { title: "Break-Even Price Calculator", url: "/tools/break-even-price-calculator.html", category: "Trading", tags: "break even fees maker taker exchange costs" },
  { title: "Position Size Calculator", url: "/tools/position-size-calculator.html", category: "Risk Management", tags: "position size risk account size stop loss units" },
  { title: "Risk Reward Calculator", url: "/tools/risk-reward-calculator.html", category: "Risk Management", tags: "risk reward ratio stop loss take profit r:r" },
  { title: "Futures Profit Calculator", url: "/tools/futures-profit-calculator.html", category: "Trading", tags: "futures profit leverage perpetual margin contracts" },
  { title: "Leverage Calculator", url: "/tools/leverage-calculator.html", category: "Trading", tags: "leverage multiplier borrowing margin liquidation" },
  { title: "Liquidation Price Calculator", url: "/tools/liquidation-price-calculator.html", category: "Risk Management", tags: "liquidation maintenance margin wipeout long short" },
  { title: "Margin Calculator", url: "/tools/margin-calculator.html", category: "Trading", tags: "initial margin requirement futures collateral" },
  { title: "Position Value Calculator", url: "/tools/position-value-calculator.html", category: "Trading", tags: "position valuation unit count coins notional" },
  { title: "Stop Loss Calculator", url: "/tools/stop-loss-calculator.html", category: "Risk Management", tags: "stop loss order risk capital preservation trigger" },
  { title: "Take Profit Calculator", url: "/tools/take-profit-calculator.html", category: "Trading", tags: "take profit target price exit level limit order" },
  { title: "Futures ROI Calculator", url: "/tools/futures-roi-calculator.html", category: "Trading", tags: "futures roe return on equity leverage gain" },
  { title: "Margin Requirement Calculator", url: "/tools/margin-requirement-calculator.html", category: "Trading", tags: "margin requirement initial maintenance threshold" },
  { title: "Risk Per Trade Calculator", url: "/tools/risk-per-trade-calculator.html", category: "Risk Management", tags: "1% rule risk capital drawdown protection" },
  { title: "DCA Calculator", url: "/tools/dca-calculator.html", category: "Investment", tags: "dollar cost average recurring accumulation volatility" },
  { title: "Bitcoin DCA Calculator", url: "/tools/bitcoin-dca-calculator.html", category: "Investment", tags: "bitcoin btc dca recurring stacking sats" },
  { title: "Ethereum DCA Calculator", url: "/tools/ethereum-dca-calculator.html", category: "Investment", tags: "ethereum eth dca recurring accumulation" },
  { title: "Compound Growth Calculator", url: "/tools/compound-growth-calculator.html", category: "Investment", tags: "compound interest yield annual apy compounding" },
  { title: "Investment Return Calculator", url: "/tools/investment-return-calculator.html", category: "Investment", tags: "cagr investment return annualized growth" },
  { title: "Portfolio Allocation Calculator", url: "/tools/portfolio-allocation-calculator.html", category: "Investment", tags: "portfolio allocation rebalancing diversification" },
  { title: "Average Buy Price Calculator", url: "/tools/average-buy-price-calculator.html", category: "Investment", tags: "average entry buy price weighted basis" },
  { title: "Multiple Buy Price Calculator", url: "/tools/multiple-buy-price-calculator.html", category: "Investment", tags: "multiple entries ladder scale in average cost" },
  { title: "Target Price Calculator", url: "/tools/target-price-calculator.html", category: "Trading", tags: "target price required sell profit exit" },
  { title: "Required Return Calculator", url: "/tools/required-return-calculator.html", category: "Risk Management", tags: "drawdown recovery required return break even" },
  { title: "Crypto Converter", url: "/tools/crypto-converter.html", category: "Converters", tags: "crypto converter fiat exchange rate manual" },
  { title: "BTC to USD Calculator", url: "/tools/btc-to-usd-calculator.html", category: "Converters", tags: "btc to usd bitcoin dollar manual rate" },
  { title: "BTC to INR Calculator", url: "/tools/btc-to-inr-calculator.html", category: "Converters", tags: "btc to inr bitcoin rupee manual rate" },
  { title: "ETH to USD Calculator", url: "/tools/eth-to-usd-calculator.html", category: "Converters", tags: "eth to usd ethereum dollar manual rate" },
  { title: "ETH to INR Calculator", url: "/tools/eth-to-inr-calculator.html", category: "Converters", tags: "eth to inr ethereum rupee manual rate" },
  { title: "USDT to INR Calculator", url: "/tools/usdt-to-inr-calculator.html", category: "Converters", tags: "usdt to inr tether rupee stablecoin rate" },
  { title: "Crypto Percentage Converter", url: "/tools/crypto-percentage-converter.html", category: "Converters", tags: "percentage converter basis points ratio fraction" },
  { title: "Satoshi Calculator", url: "/tools/satoshi-calculator.html", category: "Converters", tags: "satoshi sats btc denomination 100 million" },
  { title: "Bitcoin Unit Converter", url: "/tools/bitcoin-unit-converter.html", category: "Converters", tags: "bitcoin unit satoshi bits mbtc btc" },
  { title: "Crypto Market Cap Calculator", url: "/tools/crypto-market-cap-calculator.html", category: "Investment", tags: "market cap circulating supply coin valuation" },
  { title: "Position Risk Calculator", url: "/tools/position-risk-calculator.html", category: "Risk Management", tags: "position risk dollar risk percentage trade" },
  { title: "Trading Fee Calculator", url: "/tools/trading-fee-calculator.html", category: "Fees", tags: "trading fee maker taker commission spread" },
  { title: "Slippage Calculator", url: "/tools/slippage-calculator.html", category: "Fees", tags: "slippage expected executed liquidity impact" },
  { title: "Risk Percentage Calculator", url: "/tools/risk-percentage-calculator.html", category: "Risk Management", tags: "risk percentage portfolio capital safety" },
  { title: "Portfolio Profit Calculator", url: "/tools/portfolio-profit-calculator.html", category: "Portfolio", tags: "portfolio profit total holdings net gain" },
  { title: "Portfolio Loss Calculator", url: "/tools/portfolio-loss-calculator.html", category: "Portfolio", tags: "portfolio loss drawdown total decline" },
  { title: "Price Change Calculator", url: "/tools/price-change-calculator.html", category: "Profit & ROI", tags: "price change delta percentage shift" },
  { title: "ATH/ATL Calculator", url: "/tools/ath-atl-calculator.html", category: "Investment", tags: "ath atl all time high low drawdown recovery" },
  { title: "Market Cap Calculator", url: "/tools/market-cap-calculator.html", category: "Investment", tags: "market capitalization valuation price supply" },
  { title: "Crypto Tax Estimator", url: "/tools/crypto-tax-estimator.html", category: "Tax", tags: "crypto tax capital gains proceeds cost basis estimate" },

  // SAMPLE EDUCATIONAL GUIDES & GLOSSARY
  { title: "What Is Cryptocurrency?", url: "/learn/what-is-cryptocurrency.html", category: "Beginner Crypto", tags: "crypto blockchain digital currency decentralization" },
  { title: "How Does Bitcoin Work?", url: "/learn/how-bitcoin-works.html", category: "Bitcoin", tags: "bitcoin satoshi proof of work blocks mining ledger" },
  { title: "What Is Blockchain?", url: "/learn/what-is-blockchain.html", category: "Beginner Crypto", tags: "blockchain distributed ledger consensus hashing" },
  { title: "What Is Ethereum?", url: "/learn/what-is-ethereum.html", category: "Ethereum", tags: "ethereum smart contracts evm ether gas dapps" },
  { title: "What Is Leverage in Crypto Trading?", url: "/learn/what-is-leverage.html", category: "Trading Basics", tags: "leverage margin borrowing multiplier risk" },
  { title: "What Is a Stop Loss?", url: "/learn/what-is-stop-loss.html", category: "Risk Management", tags: "stop loss exit order capital preservation discipline" },
  { title: "What Is Dollar Cost Averaging (DCA)?", url: "/learn/what-is-dca.html", category: "Investment", tags: "dca accumulation investing recurring volatility" },
  { title: "Crypto Risk Management for Beginners", url: "/learn/crypto-risk-management-for-beginners.html", category: "Risk Management", tags: "risk management position sizing 1 percent rule capital" },
  { title: "How to Calculate Crypto Profit", url: "/learn/how-to-calculate-crypto-profit.html", category: "Practical Guides", tags: "calculate profit roi formula trading ledger" },
  { title: "ATH (All-Time High)", url: "/glossary/ath.html", category: "Glossary", tags: "ath peak valuation cycle top" },
  { title: "Liquidation", url: "/glossary/liquidation.html", category: "Glossary", tags: "liquidation margin futures margin call" },
  { title: "Satoshi", url: "/glossary/satoshi.html", category: "Glossary", tags: "satoshi subunit bitcoin btc denomination" }
];

function initSiteSearch() {
  const modal = document.getElementById('searchModal');
  const input = document.getElementById('searchInput');
  const resultsContainer = document.getElementById('searchResults');
  const closeBtn = document.getElementById('searchCloseBtn');
  const triggerBtns = document.querySelectorAll('[data-search-trigger]');

  if (!modal || !input) return;

  function openSearch() {
    modal.classList.add('open');
    input.value = '';
    renderResults(SiteIndex.slice(0, 8));
    setTimeout(() => input.focus(), 50);
  }

  function closeSearch() {
    modal.classList.remove('open');
  }

  triggerBtns.forEach(btn => {
    btn.addEventListener('click', openSearch);
  });

  if (closeBtn) closeBtn.addEventListener('click', closeSearch);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeSearch();
  });

  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      openSearch();
    }
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeSearch();
    }
  });

  input.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase().trim();
    if (!q) {
      renderResults(SiteIndex.slice(0, 8));
      return;
    }

    const matches = SiteIndex.filter(item => {
      return item.title.toLowerCase().includes(q) ||
             item.category.toLowerCase().includes(q) ||
             item.tags.toLowerCase().includes(q);
    }).slice(0, 10);

    renderResults(matches, q);
  });

  function renderResults(list, query = '') {
    if (!resultsContainer) return;
    if (list.length === 0) {
      resultsContainer.innerHTML = `<li class="search-empty-state">No matching tools or guides found for "${query}".</li>`;
      return;
    }

    resultsContainer.innerHTML = list.map(item => `
      <li class="search-result-item">
        <a href="${item.url}">
          <div class="search-result-category">${item.category}</div>
          <div class="search-result-title">${item.title}</div>
          <div class="search-result-snippet">${item.tags.split(' ').slice(0, 5).join(' · ')}</div>
        </a>
      </li>
    `).join('');
  }
}

document.addEventListener('DOMContentLoaded', initSiteSearch);
