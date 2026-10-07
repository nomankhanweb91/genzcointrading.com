import fs from 'fs';
import path from 'path';

// Define the 100 curated topics
const TOPICS = [
  { id: 1, slug: "what-is-cryptocurrency", title: "What Is Cryptocurrency?", cat: "Beginner Crypto", img: "crypto-education-guide.svg",
    qa: "Cryptocurrency is a form of digital or virtual money that uses cryptography for security and operates on decentralized peer-to-peer networks rather than centralized banking intermediaries.",
    relTools: ["crypto-profit-calculator", "crypto-market-cap-calculator"],
    relArticles: ["how-bitcoin-works", "what-is-blockchain", "what-is-a-crypto-wallet"]
  },
  { id: 2, slug: "how-bitcoin-works", title: "How Does Bitcoin Work?", cat: "Bitcoin", img: "crypto-education-guide.svg",
    qa: "Bitcoin operates as a decentralized ledger maintained across an open network of computers. Transactions are bundled into cryptographic blocks and validated through Proof-of-Work mining without central authorities.",
    relTools: ["bitcoin-profit-calculator", "satoshi-calculator", "bitcoin-dca-calculator"],
    relArticles: ["what-is-cryptocurrency", "what-is-bitcoin-halving", "what-is-proof-of-work"]
  },
  { id: 3, slug: "what-is-blockchain", title: "What Is Blockchain?", cat: "Beginner Crypto", img: "blockchain-security.svg",
    qa: "A blockchain is an immutable, distributed digital ledger that chronologically records transactions across a network of computers using cryptographic hashes to prevent tampering or unauthorized changes.",
    relTools: ["crypto-profit-calculator", "crypto-market-cap-calculator"],
    relArticles: ["what-is-cryptocurrency", "how-bitcoin-works", "what-is-ethereum"]
  },
  { id: 4, slug: "what-is-ethereum", title: "What Is Ethereum?", cat: "Ethereum", img: "crypto-education-guide.svg",
    qa: "Ethereum is an open-source decentralized platform that extends blockchain technology beyond digital currency, enabling developers to build and execute self-running smart contracts and decentralized applications (dApps).",
    relTools: ["ethereum-profit-calculator", "ethereum-dca-calculator"],
    relArticles: ["bitcoin-vs-ethereum", "what-are-smart-contracts", "what-is-defi"]
  },
  { id: 5, slug: "bitcoin-vs-ethereum", title: "Bitcoin vs Ethereum: Key Differences", cat: "Beginner Crypto", img: "crypto-education-guide.svg",
    qa: "Bitcoin is primarily designed as a decentralized digital store of value and monetary network with a hard 21 million cap, while Ethereum is a programmable smart-contract platform designed to power decentralized finance and computation.",
    relTools: ["bitcoin-profit-calculator", "ethereum-profit-calculator"],
    relArticles: ["how-bitcoin-works", "what-is-ethereum", "what-are-smart-contracts"]
  },
  { id: 6, slug: "what-is-a-crypto-wallet", title: "What Is a Crypto Wallet?", cat: "Security", img: "blockchain-security.svg",
    qa: "A cryptocurrency wallet does not physically store coins; instead, it securely stores your cryptographic private keys that prove ownership of your assets on the public blockchain and authorize outgoing transfers.",
    relTools: ["crypto-profit-calculator", "satoshi-calculator"],
    relArticles: ["hot-wallet-vs-cold-wallet", "what-is-a-private-key", "what-is-a-seed-phrase"]
  },
  { id: 7, slug: "hot-wallet-vs-cold-wallet", title: "Hot Wallet vs Cold Wallet", cat: "Security", img: "blockchain-security.svg",
    qa: "Hot wallets are connected to the internet for daily trading convenience but carry higher cyber-risk, while cold wallets remain air-gapped offline (such as hardware devices) to provide maximum protection against remote hacking.",
    relTools: ["position-size-calculator", "crypto-profit-calculator"],
    relArticles: ["what-is-a-crypto-wallet", "what-is-a-hardware-wallet", "crypto-security-best-practices"]
  },
  { id: 8, slug: "what-is-a-private-key", title: "What Is a Private Key?", cat: "Security", img: "blockchain-security.svg",
    qa: "A private key is a secret 256-bit alphanumeric number that mathematically matches your public blockchain address and gives you absolute authority to sign transactions and spend associated funds.",
    relTools: ["satoshi-calculator", "crypto-profit-calculator"],
    relArticles: ["what-is-a-seed-phrase", "how-to-protect-a-seed-phrase", "how-to-secure-a-crypto-wallet"]
  },
  { id: 9, slug: "what-is-a-seed-phrase", title: "What Is a Seed Phrase?", cat: "Security", img: "blockchain-security.svg",
    qa: "A seed phrase (also known as a recovery phrase or mnemonic) is a sequence of 12 or 24 human-readable words that encodes the master cryptographic seed used to restore all your private keys and wallet balances.",
    relTools: ["satoshi-calculator", "bitcoin-dca-calculator"],
    relArticles: ["what-is-a-private-key", "how-to-protect-a-seed-phrase", "crypto-security-best-practices"]
  },
  { id: 10, slug: "what-is-usdt", title: "What Is USDT (Tether)?", cat: "Beginner Crypto", img: "crypto-converters.svg",
    qa: "USDT (Tether) is the world's most widely traded fiat-backed stablecoin, designed to maintain parity with the US Dollar at a 1:1 ratio to provide liquidity and trading stability without converting back to bank deposits.",
    relTools: ["usdt-to-inr-calculator", "crypto-converter"],
    relArticles: ["what-is-a-stablecoin", "what-is-usdc", "what-is-liquidity"]
  },
  { id: 11, slug: "what-is-usdc", title: "What Is USDC?", cat: "Beginner Crypto", img: "crypto-converters.svg",
    qa: "USDC is a regulated digital stablecoin pegged 1:1 to the US Dollar, backed by cash and short-term US Treasury equivalents with transparent regular third-party accounting attestations.",
    relTools: ["crypto-converter", "crypto-profit-calculator"],
    relArticles: ["what-is-usdt", "what-is-a-stablecoin", "what-is-liquidity"]
  },
  { id: 12, slug: "what-is-market-capitalization", title: "What Is Market Capitalization?", cat: "Beginner Crypto", img: "portfolio-allocation.svg",
    qa: "Market capitalization is the total market valuation of a cryptocurrency, calculated by multiplying its circulating coin supply by the current unit price. It reveals the relative economic size of a project.",
    relTools: ["crypto-market-cap-calculator", "market-cap-calculator"],
    relArticles: ["how-market-cap-is-calculated", "market-cap-vs-price", "what-is-circulating-supply"]
  },
  { id: 13, slug: "what-is-crypto-volume", title: "What Is Crypto Volume?", cat: "Trading Basics", img: "trading-desk-analysis.svg",
    qa: "Crypto trading volume is the total quantity of tokens or dollar value transacted across exchanges over a specified period (typically 24 hours), serving as an indicator of market activity and conviction.",
    relTools: ["trading-fee-calculator", "slippage-calculator"],
    relArticles: ["what-is-liquidity", "how-to-read-a-crypto-chart", "what-is-a-breakout"]
  },
  { id: 14, slug: "what-is-liquidity", title: "What Is Liquidity?", cat: "Trading Basics", img: "trading-desk-analysis.svg",
    qa: "Liquidity describes how easily an asset can be converted into cash or another asset without significantly moving the market price. High liquidity allows large orders to execute with minimal slippage.",
    relTools: ["slippage-calculator", "break-even-price-calculator"],
    relArticles: ["what-is-crypto-volume", "what-is-slippage", "what-is-spread"]
  },
  { id: 15, slug: "what-is-slippage", title: "What Is Slippage in Crypto?", cat: "Trading Basics", img: "trading-desk-analysis.svg",
    qa: "Slippage is the difference between the expected price of a trade and the actual price at which the order executes, often caused by rapid volatility or insufficient order book depth.",
    relTools: ["slippage-calculator", "trading-fee-calculator"],
    relArticles: ["how-to-calculate-slippage", "what-is-liquidity", "what-is-spread"]
  },
  { id: 16, slug: "what-is-trading-fee", title: "What Is a Trading Fee?", cat: "Trading Basics", img: "trading-desk-analysis.svg",
    qa: "A trading fee is the commission charged by a crypto exchange or broker for facilitating an order match, typically broken into lower maker fees for limit orders and higher taker fees for market orders.",
    relTools: ["trading-fee-calculator", "break-even-price-calculator"],
    relArticles: ["how-to-calculate-trading-fees", "how-to-calculate-break-even-price"]
  },
  { id: 17, slug: "what-is-spread", title: "What Is Spread in Trading?", cat: "Trading Basics", img: "trading-desk-analysis.svg",
    qa: "The bid-ask spread is the price difference between the highest price a buyer is willing to pay (bid) and the lowest price a seller is willing to accept (ask) on an order book.",
    relTools: ["break-even-price-calculator", "slippage-calculator"],
    relArticles: ["what-is-liquidity", "what-is-slippage", "what-is-trading-fee"]
  },
  { id: 18, slug: "what-is-spot-trading", title: "What Is Spot Trading?", cat: "Trading Basics", img: "trading-desk-analysis.svg",
    qa: "Spot trading refers to the direct purchase or sale of actual cryptocurrency tokens for immediate delivery and settlement, where the buyer gains direct custody without debt, leverage, or expiry dates.",
    relTools: ["crypto-profit-calculator", "crypto-pnl-calculator"],
    relArticles: ["what-is-futures-trading", "crypto-trading-vs-crypto-investing"]
  },
  { id: 19, slug: "what-is-futures-trading", title: "What Is Futures Trading?", cat: "Advanced Trading", img: "futures-leverage-liquidation.svg",
    qa: "Crypto futures are derivative contracts obligating or allowing market participants to buy or sell an asset at a predetermined price in the future, enabling leveraged long and short exposure.",
    relTools: ["futures-profit-calculator", "futures-roi-calculator", "leverage-calculator"],
    relArticles: ["what-is-spot-trading", "what-is-leverage", "what-is-liquidation"]
  },
  { id: 20, slug: "what-is-leverage", title: "What Is Leverage in Crypto Trading?", cat: "Trading Basics", img: "futures-leverage-liquidation.svg",
    qa: "Leverage allows traders to borrow capital from an exchange to open positions larger than their deposited balance, magnifying both potential gains and prospective losses by the chosen multiple.",
    relTools: ["leverage-calculator", "liquidation-price-calculator", "futures-profit-calculator"],
    relArticles: ["how-does-crypto-leverage-work", "what-is-margin", "what-is-liquidation"]
  },
  { id: 21, slug: "what-is-margin", title: "What Is Margin in Trading?", cat: "Trading Basics", img: "futures-leverage-liquidation.svg",
    qa: "Margin is the collateral equity a trader must deposit and maintain in their trading account to cover the potential counterparty credit risk of a leveraged derivative position.",
    relTools: ["margin-calculator", "margin-requirement-calculator"],
    relArticles: ["what-is-leverage", "how-does-futures-margin-work", "cross-margin-vs-isolated-margin"]
  },
  { id: 22, slug: "what-is-liquidation", title: "What Is Liquidation?", cat: "Risk Management", img: "futures-leverage-liquidation.svg",
    qa: "Liquidation occurs when a leveraged position suffers losses large enough to breach the mandatory maintenance margin threshold, causing the exchange to forcibly close the trade and seize collateral.",
    relTools: ["liquidation-price-calculator", "margin-requirement-calculator"],
    relArticles: ["what-is-a-liquidation-price", "what-is-margin", "why-stop-loss-matters"]
  },
  { id: 23, slug: "what-is-stop-loss", title: "What Is a Stop Loss?", cat: "Risk Management", img: "risk-management-concept.svg",
    qa: "A stop loss is a conditional exit order placed with an exchange to automatically close a trade at a predetermined price level, capping potential financial losses if the market moves unfavorably.",
    relTools: ["stop-loss-calculator", "risk-reward-calculator", "position-size-calculator"],
    relArticles: ["why-stop-loss-matters", "crypto-risk-management-for-beginners", "how-much-should-you-risk-per-trade"]
  },
  { id: 24, slug: "what-is-take-profit", title: "What Is Take Profit?", cat: "Trading Basics", img: "trading-desk-analysis.svg",
    qa: "A take profit is a predetermined limit order designed to automatically close an active trade when the asset reaches a specified profit target, locking in gains without emotional hesitation.",
    relTools: ["take-profit-calculator", "target-price-calculator", "risk-reward-calculator"],
    relArticles: ["what-is-stop-loss", "what-is-risk-reward-ratio", "common-crypto-trading-mistakes"]
  },
  { id: 25, slug: "what-is-risk-reward-ratio", title: "What Is Risk Reward Ratio?", cat: "Risk Management", img: "risk-management-concept.svg",
    qa: "The risk-to-reward ratio measures prospective profit relative to potential loss on a trade setup. A 1:3 ratio means risking $100 of downside to capture $300 of upside.",
    relTools: ["risk-reward-calculator", "position-size-calculator"],
    relArticles: ["what-is-position-sizing", "how-much-should-you-risk-per-trade", "why-stop-loss-matters"]
  },
  { id: 26, slug: "what-is-position-sizing", title: "What Is Position Sizing?", cat: "Risk Management", img: "risk-management-concept.svg",
    qa: "Position sizing is the mathematical determination of how many token units or contracts to purchase based on your total account capital, risk tolerance percentage, and distance to your technical stop loss.",
    relTools: ["position-size-calculator", "risk-per-trade-calculator"],
    relArticles: ["what-is-risk-reward-ratio", "how-much-should-you-risk-per-trade", "crypto-risk-management-for-beginners"]
  },
  { id: 27, slug: "what-is-dca", title: "What Is DCA (Dollar Cost Averaging)?", cat: "Investment", img: "dca-investment-growth.svg",
    qa: "Dollar-Cost Averaging (DCA) is an investment discipline where an investor purchases a fixed dollar amount of an asset at regular calendar intervals regardless of market price fluctuations.",
    relTools: ["dca-calculator", "bitcoin-dca-calculator", "ethereum-dca-calculator"],
    relArticles: ["how-does-dollar-cost-averaging-work", "dca-vs-lump-sum-investing", "crypto-trading-vs-crypto-investing"]
  },
  { id: 28, slug: "how-does-dollar-cost-averaging-work", title: "How Does Dollar Cost Averaging Work?", cat: "Investment", img: "dca-investment-growth.svg",
    qa: "DCA works by exploiting price volatility: buying at fixed dollar amounts means you automatically purchase more units when prices dip and fewer units when prices surge, smoothing out your average cost basis.",
    relTools: ["dca-calculator", "bitcoin-dca-calculator"],
    relArticles: ["what-is-dca", "dca-vs-lump-sum-investing", "how-to-calculate-average-buy-price"]
  },
  { id: 29, slug: "dca-vs-lump-sum-investing", title: "DCA vs Lump Sum Investing", cat: "Investment", img: "dca-investment-growth.svg",
    qa: "Lump sum investing deploys all available capital at once, which performs better in uninterrupted bull markets, whereas DCA mitigates downside regret and emotional stress during volatile bear markets.",
    relTools: ["dca-calculator", "investment-return-calculator"],
    relArticles: ["what-is-dca", "crypto-trading-vs-crypto-investing"]
  },
  { id: 30, slug: "how-to-calculate-crypto-profit", title: "How to Calculate Crypto Profit", cat: "Practical Guides", img: "crypto-profit-calculator.svg",
    qa: "To calculate crypto profit, multiply your sell price by the quantity sold, subtract the initial purchase cost, and deduct all exchange transaction fees charged on both entry and exit orders.",
    relTools: ["crypto-profit-calculator", "break-even-price-calculator"],
    relArticles: ["how-to-calculate-crypto-roi", "how-to-calculate-trading-fees"]
  },
  { id: 31, slug: "how-to-calculate-crypto-roi", title: "How to Calculate Crypto ROI", cat: "Practical Guides", img: "crypto-profit-calculator.svg",
    qa: "Calculate crypto Return on Investment (ROI) by dividing net realized profit by your total initial capital outlay, then multiplying the resulting quotient by 100 to get a percentage.",
    relTools: ["crypto-roi-calculator", "crypto-profit-calculator"],
    relArticles: ["how-to-calculate-crypto-profit", "investment-return-calculator"]
  },
  { id: 32, slug: "how-to-calculate-average-buy-price", title: "How to Calculate Average Buy Price", cat: "Practical Guides", img: "dca-investment-growth.svg",
    qa: "Calculate your volume-weighted average buy price by summing the total dollars spent across all purchase tranches and dividing by the total cumulative units or tokens acquired.",
    relTools: ["average-buy-price-calculator", "multiple-buy-price-calculator"],
    relArticles: ["what-is-dca", "how-does-dollar-cost-averaging-work"]
  },
  { id: 33, slug: "how-to-calculate-break-even-price", title: "How to Calculate Break-Even Price", cat: "Practical Guides", img: "trading-desk-analysis.svg",
    qa: "Calculate break-even price by taking your purchase price, adjusting for the entry fee percentage, and dividing by one minus the expected exit fee percentage.",
    relTools: ["break-even-price-calculator", "trading-fee-calculator"],
    relArticles: ["what-is-trading-fee", "how-to-calculate-crypto-profit"]
  },
  { id: 34, slug: "how-to-calculate-trading-fees", title: "How to Calculate Trading Fees", cat: "Practical Guides", img: "trading-desk-analysis.svg",
    qa: "Calculate trading fees by multiplying your nominal order value (Price × Quantity) by the exchange's fee percentage rate (divided by 100).",
    relTools: ["trading-fee-calculator", "break-even-price-calculator"],
    relArticles: ["what-is-trading-fee", "what-is-slippage"]
  },
  { id: 35, slug: "how-to-calculate-slippage", title: "How to Calculate Slippage", cat: "Practical Guides", img: "trading-desk-analysis.svg",
    qa: "Calculate slippage by taking the absolute difference between your executed fill price and initial quoted price, dividing by the quoted price, and multiplying by 100.",
    relTools: ["slippage-calculator", "trading-fee-calculator"],
    relArticles: ["what-is-slippage", "what-is-liquidity"]
  },
  { id: 36, slug: "how-to-calculate-risk-per-trade", title: "How to Calculate Risk Per Trade", cat: "Practical Guides", img: "risk-management-concept.svg",
    qa: "Calculate risk per trade by multiplying your total account balance by your predetermined risk percentage (e.g. 1.0%), establishing the absolute maximum dollar loss permitted.",
    relTools: ["risk-per-trade-calculator", "position-size-calculator"],
    relArticles: ["how-much-should-you-risk-per-trade", "crypto-risk-management-for-beginners"]
  },
  { id: 37, slug: "how-does-crypto-leverage-work", title: "How Does Crypto Leverage Work?", cat: "Advanced Trading", img: "futures-leverage-liquidation.svg",
    qa: "Crypto leverage functions through pooled liquidity or derivative contracts where you deposit margin collateral to borrow purchasing power, multiplying your price exposure proportionally.",
    relTools: ["leverage-calculator", "futures-profit-calculator"],
    relArticles: ["what-is-leverage", "what-is-margin", "what-is-liquidation"]
  },
  { id: 38, slug: "what-is-a-liquidation-price", title: "What Is a Liquidation Price?", cat: "Advanced Trading", img: "futures-leverage-liquidation.svg",
    qa: "A liquidation price is the specific market quotation where losses equal your initial margin buffer minus maintenance requirements, prompting automated position closure.",
    relTools: ["liquidation-price-calculator", "margin-requirement-calculator"],
    relArticles: ["what-is-liquidation", "how-does-futures-margin-work"]
  },
  { id: 39, slug: "how-does-futures-margin-work", title: "How Does Futures Margin Work?", cat: "Advanced Trading", img: "futures-leverage-liquidation.svg",
    qa: "Futures margin operates across initial margin (required to open the contract) and maintenance margin (the absolute minimum equity required to prevent immediate forced liquidation).",
    relTools: ["margin-calculator", "margin-requirement-calculator"],
    relArticles: ["what-is-margin", "cross-margin-vs-isolated-margin"]
  },
  { id: 40, slug: "cross-margin-vs-isolated-margin", title: "Cross Margin vs Isolated Margin", cat: "Advanced Trading", img: "futures-leverage-liquidation.svg",
    qa: "Isolated margin restricts risk to the individual collateral assigned to a single trade, while cross margin shares your entire account balance across all open positions, risking total liquidation.",
    relTools: ["margin-calculator", "liquidation-price-calculator"],
    relArticles: ["how-does-futures-margin-work", "what-is-margin"]
  },
  { id: 41, slug: "what-is-funding-rate", title: "What Is Funding Rate?", cat: "Advanced Trading", img: "futures-leverage-liquidation.svg",
    qa: "The funding rate is a periodic payment exchanged directly between long and short traders on perpetual futures contracts to keep contract prices tethered to spot index prices.",
    relTools: ["futures-profit-calculator", "futures-roi-calculator"],
    relArticles: ["what-is-open-interest", "what-is-futures-trading"]
  },
  { id: 42, slug: "what-is-open-interest", title: "What Is Open Interest?", cat: "Advanced Trading", img: "trading-desk-analysis.svg",
    qa: "Open interest represents the total number of outstanding active derivative contracts (longs and shorts) that have not been settled or closed on an exchange.",
    relTools: ["futures-profit-calculator", "trading-fee-calculator"],
    relArticles: ["what-is-funding-rate", "what-is-futures-trading"]
  },
  { id: 43, slug: "what-is-a-long-position", title: "What Is a Long Position?", cat: "Trading Basics", img: "trading-desk-analysis.svg",
    qa: "A long position is a market trade entered with the expectation that the asset's price will appreciate, allowing the trader to sell higher and pocket the capital difference.",
    relTools: ["crypto-pnl-calculator", "crypto-profit-calculator"],
    relArticles: ["what-is-a-short-position", "what-is-spot-trading"]
  },
  { id: 44, slug: "what-is-a-short-position", title: "What Is a Short Position?", cat: "Trading Basics", img: "trading-desk-analysis.svg",
    qa: "A short position is a trade entered with the expectation that the asset's price will decline, executed by borrowing and selling high, then repurchasing lower to capture profit.",
    relTools: ["crypto-pnl-calculator", "futures-profit-calculator"],
    relArticles: ["what-is-a-long-position", "what-is-futures-trading"]
  },
  { id: 45, slug: "what-is-ath", title: "What Is ATH (All-Time High)?", cat: "Trading Basics", img: "trading-desk-analysis.svg",
    qa: "All-Time High (ATH) is the highest historical price a cryptocurrency has ever recorded on exchanges since its genesis or public listing.",
    relTools: ["ath-atl-calculator", "percentage-gain-calculator"],
    relArticles: ["what-is-atl", "what-is-volatility"]
  },
  { id: 46, slug: "what-is-atl", title: "What Is ATL (All-Time Low)?", cat: "Trading Basics", img: "trading-desk-analysis.svg",
    qa: "All-Time Low (ATL) refers to the lowest historical price recorded for a cryptocurrency following its initial public market listing.",
    relTools: ["ath-atl-calculator", "percentage-loss-calculator"],
    relArticles: ["what-is-ath", "required-return-calculator"]
  },
  { id: 47, slug: "what-is-bitcoin-halving", title: "What Is Bitcoin Halving?", cat: "Bitcoin", img: "crypto-education-guide.svg",
    qa: "The Bitcoin halving is a hardcoded programmatic event occurring every 210,000 blocks (roughly every 4 years) that cuts the block reward issued to miners by 50%, reducing new supply issuance.",
    relTools: ["bitcoin-dca-calculator", "satoshi-calculator"],
    relArticles: ["how-bitcoin-works", "what-is-bitcoin-mining", "what-is-proof-of-work"]
  },
  { id: 48, slug: "what-is-a-bitcoin-satoshi", title: "What Is a Bitcoin Satoshi?", cat: "Bitcoin", img: "crypto-converters.svg",
    qa: "A Satoshi is the smallest atomic unit of Bitcoin, equal to one hundred-millionth of a Bitcoin (0.00000001 BTC). One whole Bitcoin contains exactly 100 million satoshis.",
    relTools: ["satoshi-calculator", "bitcoin-unit-converter"],
    relArticles: ["how-bitcoin-works", "bitcoin-dca-calculator"]
  },
  { id: 49, slug: "what-is-bitcoin-mining", title: "What Is Bitcoin Mining?", cat: "Bitcoin", img: "crypto-education-guide.svg",
    qa: "Bitcoin mining is the computational process where specialized hardware computers solve cryptographic puzzles to validate transaction blocks, secure the network, and earn newly minted BTC.",
    relTools: ["satoshi-calculator", "bitcoin-profit-calculator"],
    relArticles: ["what-is-proof-of-work", "what-is-bitcoin-halving"]
  },
  { id: 50, slug: "what-is-proof-of-work", title: "What Is Proof of Work (PoW)?", cat: "Beginner Crypto", img: "blockchain-security.svg",
    qa: "Proof of Work is a consensus mechanism where network participants must expend physical electricity and computational power to propose new blocks, making history alteration economically infeasible.",
    relTools: ["satoshi-calculator", "bitcoin-profit-calculator"],
    relArticles: ["what-is-proof-of-stake", "what-is-bitcoin-mining"]
  },
  { id: 51, slug: "what-is-proof-of-stake", title: "What Is Proof of Stake (PoS)?", cat: "Beginner Crypto", img: "blockchain-security.svg",
    qa: "Proof of Stake is an energy-efficient consensus mechanism where validators pledge or 'stake' native cryptocurrency tokens as collateral to earn the right to propose and validate blocks.",
    relTools: ["ethereum-profit-calculator", "compound-growth-calculator"],
    relArticles: ["what-is-proof-of-work", "what-is-staking", "what-is-ethereum"]
  },
  { id: 52, slug: "what-are-smart-contracts", title: "What Are Smart Contracts?", cat: "Ethereum", img: "crypto-education-guide.svg",
    qa: "Smart contracts are self-executing computer programs stored on a blockchain that automatically enforce and execute agreements when predetermined conditions are met, eliminating intermediaries.",
    relTools: ["ethereum-profit-calculator", "ethereum-dca-calculator"],
    relArticles: ["what-is-ethereum", "what-is-defi", "what-is-a-dex"]
  },
  { id: 53, slug: "what-is-defi", title: "What Is DeFi (Decentralized Finance)?", cat: "Beginner Crypto", img: "crypto-education-guide.svg",
    qa: "Decentralized Finance (DeFi) is an umbrella term for peer-to-peer financial applications built on public blockchains that provide lending, borrowing, and trading without banks or centralized brokers.",
    relTools: ["compound-growth-calculator", "crypto-profit-calculator"],
    relArticles: ["what-are-smart-contracts", "what-is-a-dex", "what-is-a-liquidity-pool"]
  },
  { id: 54, slug: "what-is-a-stablecoin", title: "What Is a Stablecoin?", cat: "Beginner Crypto", img: "crypto-converters.svg",
    qa: "A stablecoin is a cryptocurrency engineered to maintain a fixed value parity with an external benchmark asset, most commonly fiat currencies like the US Dollar.",
    relTools: ["usdt-to-inr-calculator", "crypto-converter"],
    relArticles: ["what-is-usdt", "what-is-usdc", "portfolio-allocation-calculator"]
  },
  { id: 55, slug: "what-is-a-crypto-exchange", title: "What Is a Crypto Exchange?", cat: "Beginner Crypto", img: "trading-desk-analysis.svg",
    qa: "A crypto exchange is a digital trading venue where market participants buy, sell, and swap cryptocurrencies for fiat currency or other digital assets via centralized or decentralized order books.",
    relTools: ["trading-fee-calculator", "break-even-price-calculator"],
    relArticles: ["centralized-vs-decentralized-exchanges", "what-is-spot-trading"]
  },
  { id: 56, slug: "centralized-vs-decentralized-exchanges", title: "Centralized vs Decentralized Exchanges", cat: "Trading Basics", img: "trading-desk-analysis.svg",
    qa: "Centralized exchanges (CEXs) hold custody of user funds and process trades off-chain on high-speed private matching engines, whereas decentralized exchanges (DEXs) execute non-custodial swaps via smart contracts.",
    relTools: ["trading-fee-calculator", "slippage-calculator"],
    relArticles: ["what-is-a-crypto-exchange", "what-is-a-dex"]
  },
  { id: 57, slug: "what-is-a-dex", title: "What Is a DEX (Decentralized Exchange)?", cat: "Trading Basics", img: "crypto-education-guide.svg",
    qa: "A Decentralized Exchange (DEX) allows users to swap digital tokens peer-to-peer directly from their private wallets without opening an account or surrendering custody to an intermediary company.",
    relTools: ["slippage-calculator", "crypto-profit-calculator"],
    relArticles: ["centralized-vs-decentralized-exchanges", "what-is-a-liquidity-pool"]
  },
  { id: 58, slug: "what-is-a-liquidity-pool", title: "What Is a Liquidity Pool?", cat: "Advanced Trading", img: "crypto-education-guide.svg",
    qa: "A liquidity pool is a crowdsourced smart contract reservoir of cryptocurrency tokens locked to facilitate decentralized trading, lending, and automated market making (AMM).",
    relTools: ["compound-growth-calculator", "slippage-calculator"],
    relArticles: ["what-is-a-dex", "what-is-yield-farming"]
  },
  { id: 59, slug: "what-is-yield-farming", title: "What Is Yield Farming?", cat: "Advanced Trading", img: "crypto-education-guide.svg",
    qa: "Yield farming is the practice of locking or staking crypto assets in DeFi liquidity pools to generate passive yield, interest, and governance token incentives.",
    relTools: ["compound-growth-calculator", "investment-return-calculator"],
    relArticles: ["what-is-a-liquidity-pool", "what-is-staking"]
  },
  { id: 60, slug: "what-is-staking", title: "What Is Staking?", cat: "Investment", img: "crypto-education-guide.svg",
    qa: "Staking involves committing native proof-of-stake tokens to help validate transactions and secure a blockchain network in return for newly minted reward emissions.",
    relTools: ["compound-growth-calculator", "ethereum-profit-calculator"],
    relArticles: ["what-is-proof-of-stake", "what-is-yield-farming"]
  },
  { id: 61, slug: "what-is-tokenomics", title: "What Is Tokenomics?", cat: "Investment", img: "portfolio-allocation.svg",
    qa: "Tokenomics describes the economic design and incentive model of a cryptocurrency, including total supply, distribution schedules, vesting lockups, inflation rates, and utility.",
    relTools: ["crypto-market-cap-calculator", "market-cap-calculator"],
    relArticles: ["what-is-circulating-supply", "what-is-maximum-supply"]
  },
  { id: 62, slug: "what-is-circulating-supply", title: "What Is Circulating Supply?", cat: "Investment", img: "portfolio-allocation.svg",
    qa: "Circulating supply is the number of cryptocurrency coins currently unlocked, publicly available, and actively circulating in the open market.",
    relTools: ["crypto-market-cap-calculator", "market-cap-calculator"],
    relArticles: ["what-is-total-supply", "what-is-maximum-supply", "how-market-cap-is-calculated"]
  },
  { id: 63, slug: "what-is-total-supply", title: "What Is Total Supply?", cat: "Investment", img: "portfolio-allocation.svg",
    qa: "Total supply is the amount of tokens that currently exist, minus any coins that have been verifiably destroyed or permanently burned.",
    relTools: ["crypto-market-cap-calculator", "market-cap-calculator"],
    relArticles: ["what-is-circulating-supply", "what-is-maximum-supply"]
  },
  { id: 64, slug: "what-is-maximum-supply", title: "What Is Maximum Supply?", cat: "Investment", img: "portfolio-allocation.svg",
    qa: "Maximum supply is the lifetime cap of coins that will ever be minted or mined into existence under a blockchain's hardcoded protocol rules.",
    relTools: ["crypto-market-cap-calculator", "satoshi-calculator"],
    relArticles: ["what-is-circulating-supply", "what-is-total-supply"]
  },
  { id: 65, slug: "how-market-cap-is-calculated", title: "How Market Cap Is Calculated", cat: "Practical Guides", img: "portfolio-allocation.svg",
    qa: "Crypto market cap is calculated with straightforward multiplication: Multiply the current price per coin by the total number of circulating coins.",
    relTools: ["crypto-market-cap-calculator", "market-cap-calculator"],
    relArticles: ["what-is-market-capitalization", "market-cap-vs-price"]
  },
  { id: 66, slug: "market-cap-vs-price", title: "Market Cap vs Price: The Unit Bias Trap", cat: "Investment", img: "portfolio-allocation.svg",
    qa: "Unit bias occurs when inexperienced investors buy low-priced tokens thinking they have more room to grow, ignoring that a coin's market cap—not its individual price—determines true valuation.",
    relTools: ["crypto-market-cap-calculator", "target-price-calculator"],
    relArticles: ["what-is-market-capitalization", "how-market-cap-is-calculated"]
  },
  { id: 67, slug: "how-to-read-a-crypto-chart", title: "How to Read a Crypto Chart", cat: "Technical Analysis", img: "trading-desk-analysis.svg",
    qa: "Reading a crypto chart involves analyzing candlestick price action, timeframe intervals, technical support/resistance levels, and volume bars to understand supply-demand dynamics.",
    relTools: ["risk-reward-calculator", "position-size-calculator"],
    relArticles: ["what-is-a-candlestick", "what-is-support", "what-is-resistance"]
  },
  { id: 68, slug: "what-is-a-candlestick", title: "What Is a Candlestick?", cat: "Technical Analysis", img: "trading-desk-analysis.svg",
    qa: "A candlestick chart element visualizes four key price points for a specific timeframe: Open, High, Low, and Close (OHLC), with the body showing open-close delta and wicks displaying extreme highs/lows.",
    relTools: ["price-change-calculator", "crypto-pnl-calculator"],
    relArticles: ["how-to-read-a-crypto-chart", "what-is-support"]
  },
  { id: 69, slug: "what-is-support", title: "What Is Support in Crypto Charts?", cat: "Technical Analysis", img: "trading-desk-analysis.svg",
    qa: "Support is a technical price level where buying interest or order depth is repeatedly strong enough to pause or reverse a downward price trajectory.",
    relTools: ["stop-loss-calculator", "risk-reward-calculator"],
    relArticles: ["what-is-resistance", "how-to-read-a-crypto-chart"]
  },
  { id: 70, slug: "what-is-resistance", title: "What Is Resistance?", cat: "Technical Analysis", img: "trading-desk-analysis.svg",
    qa: "Resistance is a chart price ceiling where selling pressure and profit-taking reliably outweigh buyer demand, preventing the price from climbing higher.",
    relTools: ["take-profit-calculator", "target-price-calculator"],
    relArticles: ["what-is-support", "what-is-a-breakout"]
  },
  { id: 71, slug: "what-is-rsi", title: "What Is RSI (Relative Strength Index)?", cat: "Technical Analysis", img: "trading-desk-analysis.svg",
    qa: "The Relative Strength Index (RSI) is a momentum oscillator measuring the speed and magnitude of recent price changes on a scale of 0 to 100 to identify overbought (>70) or oversold (<30) conditions.",
    relTools: ["risk-reward-calculator", "position-size-calculator"],
    relArticles: ["what-is-macd", "what-is-moving-average"]
  },
  { id: 72, slug: "what-is-moving-average", title: "What Is a Moving Average?", cat: "Technical Analysis", img: "trading-desk-analysis.svg",
    qa: "A moving average smooths out erratic price fluctuations by calculating the average closing price over a set period (like 50 or 200 days) to identify prevailing trend direction.",
    relTools: ["average-buy-price-calculator", "price-change-calculator"],
    relArticles: ["what-is-macd", "what-is-rsi"]
  },
  { id: 73, slug: "what-is-macd", title: "What Is MACD?", cat: "Technical Analysis", img: "trading-desk-analysis.svg",
    qa: "Moving Average Convergence Divergence (MACD) is a trend-following momentum indicator displaying the relationship between two exponential moving averages to spot momentum shifts and trend reversals.",
    relTools: ["risk-reward-calculator", "price-change-calculator"],
    relArticles: ["what-is-rsi", "what-is-moving-average"]
  },
  { id: 74, slug: "what-is-trading-volume", title: "What Is Trading Volume?", cat: "Technical Analysis", img: "trading-desk-analysis.svg",
    qa: "Trading volume indicates the number of units or currency value exchanged during a timeframe; high volume validates breakouts, while declining volume signals waning momentum.",
    relTools: ["trading-fee-calculator", "slippage-calculator"],
    relArticles: ["what-is-a-breakout", "what-is-liquidity"]
  },
  { id: 75, slug: "what-is-a-breakout", title: "What Is a Breakout?", cat: "Technical Analysis", img: "trading-desk-analysis.svg",
    qa: "A breakout occurs when an asset's price moves forcefully above established resistance or below established support, typically accompanied by heavy trading volume.",
    relTools: ["target-price-calculator", "risk-reward-calculator"],
    relArticles: ["what-is-a-fake-breakout", "what-is-resistance"]
  },
  { id: 76, slug: "what-is-a-fake-breakout", title: "What Is a Fake Breakout (Bull/Bear Trap)?", cat: "Technical Analysis", img: "trading-desk-analysis.svg",
    qa: "A fakeout occurs when price briefly breaches a support or resistance boundary to trigger stop orders and entice retail traders, only to quickly reverse back inside the range.",
    relTools: ["stop-loss-calculator", "risk-reward-calculator"],
    relArticles: ["what-is-a-breakout", "why-stop-loss-matters"]
  },
  { id: 77, slug: "what-is-volatility", title: "What Is Volatility?", cat: "Trading Basics", img: "trading-desk-analysis.svg",
    qa: "Volatility measures the frequency and percentage magnitude of price swings over a given timeframe. Crypto exhibits higher historical volatility than traditional equities.",
    relTools: ["price-change-calculator", "position-size-calculator"],
    relArticles: ["why-crypto-prices-are-volatile", "what-is-dca"]
  },
  { id: 78, slug: "why-crypto-prices-are-volatile", title: "Why Crypto Prices Are Volatile", cat: "Beginner Crypto", img: "trading-desk-analysis.svg",
    qa: "Crypto prices are volatile due to 24/7 global trading with no market halts, lower total market liquidity compared to traditional bonds/equities, speculative sentiment, and derivative leverage cascades.",
    relTools: ["percentage-loss-calculator", "required-return-calculator"],
    relArticles: ["what-is-volatility", "common-crypto-trading-mistakes"]
  },
  { id: 79, slug: "common-crypto-trading-mistakes", title: "Common Crypto Trading Mistakes", cat: "Trading Basics", img: "risk-management-concept.svg",
    qa: "The most common trading mistakes include over-leveraging, trading without a stop loss, revenge trading after losses, failing to take profits, and risking too much capital on single setups.",
    relTools: ["position-size-calculator", "risk-reward-calculator"],
    relArticles: ["crypto-risk-management-for-beginners", "how-much-should-you-risk-per-trade"]
  },
  { id: 80, slug: "common-crypto-investment-mistakes", title: "Common Crypto Investment Mistakes", cat: "Investment", img: "portfolio-allocation.svg",
    qa: "Key investing mistakes include panic selling bottoms, FOMO buying parabolic tops, failing to store keys on cold hardware, and concentrating 100% of capital into unproven meme coins.",
    relTools: ["portfolio-allocation-calculator", "dca-calculator"],
    relArticles: ["how-to-build-a-simple-crypto-portfolio", "crypto-security-best-practices"]
  },
  { id: 81, slug: "crypto-security-best-practices", title: "Crypto Security Best Practices", cat: "Security", img: "blockchain-security.svg",
    qa: "Crypto security essentials include using hardware cold storage for long-term reserves, hardware 2FA keys (like YubiKey), offline metal seed phrase backups, and never clicking unverified links.",
    relTools: ["crypto-profit-calculator"],
    relArticles: ["how-to-protect-a-seed-phrase", "how-to-avoid-crypto-scams", "how-to-secure-a-crypto-wallet"]
  },
  { id: 82, slug: "how-to-protect-a-seed-phrase", title: "How to Protect a Seed Phrase", cat: "Security", img: "blockchain-security.svg",
    qa: "Protect your seed phrase by stamping it into fire- and water-resistant stainless steel plates, storing it in secure safes, and never entering it on any internet-connected computer or phone.",
    relTools: ["satoshi-calculator"],
    relArticles: ["what-is-a-seed-phrase", "crypto-security-best-practices"]
  },
  { id: 83, slug: "how-to-avoid-crypto-scams", title: "How to Avoid Crypto Scams", cat: "Security", img: "blockchain-security.svg",
    qa: "Avoid crypto scams by remembering that legitimate entities will never ask for your private key or seed phrase, offer guaranteed returns, or demand upfront crypto to release prizes.",
    relTools: ["risk-per-trade-calculator"],
    relArticles: ["phishing-attacks-in-crypto", "how-to-identify-a-fake-crypto-website", "what-is-a-rug-pull"]
  },
  { id: 84, slug: "how-to-identify-a-fake-crypto-website", title: "How to Identify a Fake Crypto Website", cat: "Security", img: "blockchain-security.svg",
    qa: "Spot fake phishing sites by inspecting the exact browser URL for subtle character substitutions (punycode), verifying SSL certificates, and bookmarking official domain URLs directly.",
    relTools: ["crypto-profit-calculator"],
    relArticles: ["phishing-attacks-in-crypto", "how-to-avoid-crypto-scams"]
  },
  { id: 85, slug: "phishing-attacks-in-crypto", title: "Phishing Attacks in Crypto", cat: "Security", img: "blockchain-security.svg",
    qa: "Phishing attacks use deceptive emails, search engine ad clones, or direct messages to trick users into signing malicious wallet drainer transactions or exposing seed phrases.",
    relTools: ["crypto-profit-calculator"],
    relArticles: ["how-to-identify-a-fake-crypto-website", "crypto-security-best-practices"]
  },
  { id: 86, slug: "how-to-secure-a-crypto-wallet", title: "How to Secure a Crypto Wallet", cat: "Security", img: "blockchain-security.svg",
    qa: "Secure your crypto wallet by maintaining separate wallets for daily DEX interactions versus long-term vaulting, revoking unused smart contract allowances, and requiring hardware signing.",
    relTools: ["position-size-calculator"],
    relArticles: ["what-is-a-hardware-wallet", "crypto-security-best-practices"]
  },
  { id: 87, slug: "what-is-two-factor-authentication", title: "What Is Two-Factor Authentication (2FA)?", cat: "Security", img: "blockchain-security.svg",
    qa: "Two-Factor Authentication requires two separate pieces of evidence to verify identity: a password plus a time-based authenticator code (TOTP) or physical hardware security key.",
    relTools: ["trading-fee-calculator"],
    relArticles: ["crypto-security-best-practices", "how-to-secure-a-crypto-wallet"]
  },
  { id: 88, slug: "what-is-a-hardware-wallet", title: "What Is a Hardware Wallet?", cat: "Security", img: "blockchain-security.svg",
    qa: "A hardware wallet is a dedicated physical device that generates and stores cryptographic private keys in an isolated secure element chip, signing transactions offline without exposing keys to the computer.",
    relTools: ["satoshi-calculator", "bitcoin-dca-calculator"],
    relArticles: ["hot-wallet-vs-cold-wallet", "crypto-security-best-practices"]
  },
  { id: 89, slug: "what-is-a-rug-pull", title: "What Is a Rug Pull?", cat: "Security", img: "risk-management-concept.svg",
    qa: "A rug pull is a malicious maneuver where project developers hype a new token, attract user liquidity, and then suddenly drain the liquidity pool or dump developer token allocations.",
    relTools: ["position-size-calculator", "percentage-loss-calculator"],
    relArticles: ["what-is-a-pump-and-dump", "how-to-avoid-crypto-scams"]
  },
  { id: 90, slug: "what-is-a-pump-and-dump", title: "What Is a Pump and Dump?", cat: "Trading Basics", img: "trading-desk-analysis.svg",
    qa: "A pump and dump is a coordinated market manipulation scheme where insiders artificially hype an illiquid coin to drive up price, then dump their holdings onto unsuspecting retail buyers.",
    relTools: ["percentage-gain-calculator", "percentage-loss-calculator"],
    relArticles: ["what-is-a-rug-pull", "common-crypto-trading-mistakes"]
  },
  { id: 91, slug: "what-is-a-crypto-ponzi-scheme", title: "What Is a Crypto Ponzi Scheme?", cat: "Security", img: "risk-management-concept.svg",
    qa: "A crypto Ponzi scheme is a fraudulent investment operation where returns to existing investors are paid using capital contributed by newer investors rather than genuine economic profits.",
    relTools: ["compound-growth-calculator"],
    relArticles: ["how-to-avoid-crypto-scams", "common-crypto-investment-mistakes"]
  },
  { id: 92, slug: "crypto-risk-management-for-beginners", title: "Crypto Risk Management for Beginners", cat: "Risk Management", img: "risk-management-concept.svg",
    qa: "Risk management is the systematic framework of keeping potential losses within survivable boundaries through position sizing, stop losses, portfolio diversification, and emotional discipline.",
    relTools: ["risk-per-trade-calculator", "position-size-calculator", "risk-reward-calculator"],
    relArticles: ["how-much-should-you-risk-per-trade", "why-stop-loss-matters", "what-is-position-sizing"]
  },
  { id: 93, slug: "how-much-should-you-risk-per-trade", title: "How Much Should You Risk Per Trade?", cat: "Risk Management", img: "risk-management-concept.svg",
    qa: "Professional traders recommend risking between 1% and 2% of total account equity per trade, which ensures that even a 10-trade losing streak leaves over 90% of account capital intact.",
    relTools: ["risk-per-trade-calculator", "position-size-calculator"],
    relArticles: ["crypto-risk-management-for-beginners", "why-stop-loss-matters"]
  },
  { id: 94, slug: "why-stop-loss-matters", title: "Why Stop Loss Matters", cat: "Risk Management", img: "risk-management-concept.svg",
    qa: "A stop loss matters because it removes emotion from losing trades, prevents small setbacks from compounding into catastrophic account blowouts, and ensures you live to trade another day.",
    relTools: ["stop-loss-calculator", "required-return-calculator"],
    relArticles: ["what-is-stop-loss", "crypto-risk-management-for-beginners"]
  },
  { id: 95, slug: "how-to-build-a-simple-crypto-portfolio", title: "How to Build a Simple Crypto Portfolio", cat: "Investment", img: "portfolio-allocation.svg",
    qa: "Build a resilient simple crypto portfolio by establishing an anchor allocation in Bitcoin (40–60%), a secondary allocation in Ethereum (20–30%), and reserving cash/stablecoins (10–20%) for dips.",
    relTools: ["portfolio-allocation-calculator", "dca-calculator"],
    relArticles: ["crypto-portfolio-diversification", "how-to-calculate-portfolio-profit"]
  },
  { id: 96, slug: "crypto-portfolio-diversification", title: "Crypto Portfolio Diversification", cat: "Investment", img: "portfolio-allocation.svg",
    qa: "Diversification involves spreading capital across distinct asset categories to reduce overall portfolio volatility, while recognizing that crypto altcoins remain highly correlated to Bitcoin.",
    relTools: ["portfolio-allocation-calculator", "portfolio-profit-calculator"],
    relArticles: ["how-to-build-a-simple-crypto-portfolio", "common-crypto-investment-mistakes"]
  },
  { id: 97, slug: "how-to-calculate-portfolio-profit", title: "How to Calculate Portfolio Profit", cat: "Practical Guides", img: "portfolio-allocation.svg",
    qa: "Calculate portfolio profit by subtracting total contributed capital from current aggregated holdings valuation, and dividing by total contributed capital to determine total portfolio ROI.",
    relTools: ["portfolio-profit-calculator", "crypto-roi-calculator"],
    relArticles: ["how-to-calculate-portfolio-loss", "how-to-build-a-simple-crypto-portfolio"]
  },
  { id: 98, slug: "how-to-calculate-portfolio-loss", title: "How to Calculate Portfolio Loss", cat: "Practical Guides", img: "portfolio-allocation.svg",
    qa: "Calculate portfolio loss by subtracting current depleted portfolio value from starting principal, and dividing by starting principal to determine overall drawdown percentage.",
    relTools: ["portfolio-loss-calculator", "required-return-calculator"],
    relArticles: ["how-to-calculate-portfolio-profit", "percentage-loss-calculator"]
  },
  { id: 99, slug: "understanding-crypto-taxes", title: "Understanding Crypto Taxes", cat: "Practical Guides", img: "crypto-tax-concept.svg",
    qa: "In most jurisdictions, cryptocurrency is treated as property subject to capital gains tax upon sale, crypto-to-crypto exchange, or disposition, while staking rewards and airdrops are taxed as income.",
    relTools: ["crypto-tax-estimator", "crypto-profit-calculator"],
    relArticles: ["how-to-calculate-crypto-profit", "common-crypto-investment-mistakes"]
  },
  { id: 100, slug: "crypto-trading-vs-crypto-investing", title: "Crypto Trading vs Crypto Investing", cat: "Beginner Crypto", img: "crypto-education-guide.svg",
    qa: "Crypto trading focuses on capturing short-term price fluctuations using technical analysis and risk management, while crypto investing focuses on multi-year fundamental adoption, macro cycles, and compounding.",
    relTools: ["crypto-profit-calculator", "dca-calculator", "investment-return-calculator"],
    relArticles: ["what-is-dca", "what-is-spot-trading", "crypto-risk-management-for-beginners"]
  }
];

// Write out articles_list.js
const fileContent = `export const ARTICLES_LIST = ${JSON.stringify(TOPICS, null, 2)};\n`;
fs.writeFileSync(path.join(process.cwd(), 'scripts', 'articles_list.js'), fileContent);
console.log(`Generated ${TOPICS.length} articles metadata successfully!`);
