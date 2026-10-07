export const GLOSSARY_TERMS = [
  {
    slug: "ath",
    term: "ATH (All-Time High)",
    letter: "A",
    definition: "The highest nominal market price an asset has ever achieved in its history on an exchange.",
    explanation: "ATH marks the peak price recorded during a market cycle. When an asset trades above its previous ATH, it enters 'price discovery' mode where there are no historical resistance levels above it.",
    example: "Bitcoin reaching $73,750 in March 2024 established a new All-Time High for the asset.",
    relatedTools: ["ath-atl-calculator", "percentage-gain-calculator"],
    relatedArticles: ["what-is-ath", "what-is-volatility"]
  },
  {
    slug: "altcoin",
    term: "Altcoin",
    letter: "A",
    definition: "Any cryptocurrency other than Bitcoin.",
    explanation: "The term originated as 'alternative coin'. While originally referring to simple Bitcoin forks like Litecoin, today it encompasses all Layer 1 platforms, Layer 2s, DeFi governance tokens, and utility coins.",
    example: "Ethereum, Solana, and Cardano are leading Layer 1 altcoins.",
    relatedTools: ["crypto-profit-calculator", "portfolio-allocation-calculator"],
    relatedArticles: ["what-is-cryptocurrency", "bitcoin-vs-ethereum"]
  },
  {
    slug: "amm",
    term: "AMM (Automated Market Maker)",
    letter: "A",
    definition: "A decentralized exchange mechanism that prices assets algorithmically using liquidity pools rather than traditional order books.",
    explanation: "AMMs use mathematical formulas (such as x × y = k in constant-product pools) to price trades automatically without requiring centralized market makers.",
    example: "Uniswap uses an AMM model allowing users to trade tokens instantly against pooled smart contract reserves.",
    relatedTools: ["slippage-calculator", "trading-fee-calculator"],
    relatedArticles: ["what-is-a-dex", "what-is-a-liquidity-pool"]
  },
  {
    slug: "apy",
    term: "APY (Annual Percentage Yield)",
    letter: "A",
    definition: "The annualized rate of return on an investment taking into account the effect of compounding interest.",
    explanation: "Because APY incorporates periodic compounding (daily, weekly, or monthly), it reflects a higher effective return than simple APR over a one-year horizon.",
    example: "An 8% APR compounded monthly yields an effective 8.30% APY.",
    relatedTools: ["compound-growth-calculator", "investment-return-calculator"],
    relatedArticles: ["what-is-staking", "what-is-yield-farming"]
  },
  {
    slug: "apr",
    term: "APR (Annual Percentage Rate)",
    letter: "A",
    definition: "The annual rate of interest paid on an investment or charged on a loan without accounting for compounding.",
    explanation: "APR represents simple interest. If you stake $1,000 at 10% APR without reinvesting, you receive exactly $100 after 12 months.",
    example: "A staking validator advertising 5% APR pays simple interest at a rate of 5% per annum.",
    relatedTools: ["compound-growth-calculator", "crypto-roi-calculator"],
    relatedArticles: ["what-is-staking", "what-is-yield-farming"]
  },
  {
    slug: "bitcoin",
    term: "Bitcoin (BTC)",
    letter: "B",
    definition: "The first decentralized peer-to-peer digital currency, created in 2008 by pseudonymous author Satoshi Nakamoto.",
    explanation: "Bitcoin operates on a distributed Proof-of-Work blockchain with a mathematically enforced supply cap of 21 million coins, serving as a global sovereign store of value.",
    example: "A user sends 0.05 BTC directly to another individual globally without passing through any commercial bank.",
    relatedTools: ["bitcoin-profit-calculator", "bitcoin-dca-calculator", "satoshi-calculator"],
    relatedArticles: ["how-bitcoin-works", "what-is-bitcoin-halving", "what-is-a-bitcoin-satoshi"]
  },
  {
    slug: "blockchain",
    term: "Blockchain",
    letter: "B",
    definition: "A distributed cryptographic ledger that records transactions in linked chronological blocks across a decentralized network.",
    explanation: "Each block contains a cryptographic hash of the previous block, timestamped transactions, and a consensus proof, making historical tampering mathematically impossible.",
    example: "The Bitcoin blockchain has operated continuously without downtime or central servers since January 2009.",
    relatedTools: ["crypto-profit-calculator", "crypto-market-cap-calculator"],
    relatedArticles: ["what-is-blockchain", "how-bitcoin-works", "what-is-proof-of-work"]
  },
  {
    slug: "bear-market",
    term: "Bear Market",
    letter: "B",
    definition: "An extended macroeconomic period characterized by falling asset prices, widespread investor pessimism, and prolonged capital contraction.",
    explanation: "In cryptocurrency cycles, bear markets often see top-tier assets decline by 70% to 85% from all-time highs over multi-year corrective phases.",
    example: "The 2022 crypto winter saw Bitcoin drop from $69,000 to approximately $15,500 amid industry deleveraging.",
    relatedTools: ["required-return-calculator", "percentage-loss-calculator", "portfolio-loss-calculator"],
    relatedArticles: ["crypto-risk-management-for-beginners", "dca-vs-lump-sum-investing"]
  },
  {
    slug: "bull-market",
    term: "Bull Market",
    letter: "B",
    definition: "A market condition where asset prices rise sustainedly over an extended period, fueled by strong liquidity, institutional adoption, and optimistic sentiment.",
    explanation: "Bull markets often feature explosive parabolic advances, surging trading volumes, and broad retail interest.",
    example: "The 2020–2021 bull run saw Bitcoin advance from under $10,000 to over $60,000.",
    relatedTools: ["crypto-profit-calculator", "target-price-calculator", "take-profit-calculator"],
    relatedArticles: ["what-is-ath", "common-crypto-trading-mistakes"]
  },
  {
    slug: "breakout",
    term: "Breakout",
    letter: "B",
    definition: "A price movement where an asset decisively breaches a predefined technical resistance or support barrier, usually accompanied by expanding volume.",
    explanation: "Traders monitor breakouts because breaching a consolidation range often triggers follow-through momentum as trapped participants cover positions.",
    example: "Bitcoin consolidating between $60,000 and $64,000 surges to $67,000 on high volume, confirming a bullish breakout.",
    relatedTools: ["target-price-calculator", "risk-reward-calculator"],
    relatedArticles: ["what-is-a-breakout", "what-is-a-fake-breakout", "what-is-resistance"]
  },
  {
    slug: "cold-wallet",
    term: "Cold Wallet",
    letter: "C",
    definition: "An offline cryptocurrency storage mechanism that holds private keys completely disconnected from the internet to guard against hacking.",
    explanation: "Cold storage includes dedicated hardware wallets (Ledger, Trezor, BitBox) and air-gapped paper/metal backups, providing the gold standard of self-custody security.",
    example: "An investor transfers long-term Bitcoin savings from an exchange onto a hardware cold wallet stored in a home safe.",
    relatedTools: ["bitcoin-dca-calculator", "satoshi-calculator"],
    relatedArticles: ["hot-wallet-vs-cold-wallet", "what-is-a-hardware-wallet", "crypto-security-best-practices"]
  },
  {
    slug: "coin",
    term: "Coin",
    letter: "C",
    definition: "A cryptocurrency that operates on its own independent, native blockchain network.",
    explanation: "Coins (like BTC on Bitcoin or ETH on Ethereum) serve as the native fee currency of their respective chains, distinguishing them from tokens built atop existing chains.",
    example: "Ether (ETH) is a native coin; Uniswap (UNI) is an ERC-20 token built on Ethereum.",
    relatedTools: ["crypto-market-cap-calculator", "crypto-converter"],
    relatedArticles: ["what-is-cryptocurrency", "what-is-ethereum"]
  },
  {
    slug: "consensus",
    term: "Consensus Mechanism",
    letter: "C",
    definition: "The algorithmic protocol by which a distributed blockchain network agrees on the valid state of the ledger without relying on a central authority.",
    explanation: "Consensus ensures all independent nodes agree on valid transactions and balances. Popular mechanisms include Proof of Work and Proof of Stake.",
    example: "Bitcoin nodes reach consensus on valid blocks via Proof-of-Work SHA-256 computation.",
    relatedTools: ["crypto-profit-calculator"],
    relatedArticles: ["what-is-proof-of-work", "what-is-proof-of-stake"]
  },
  {
    slug: "crypto-exchange",
    term: "Crypto Exchange",
    letter: "C",
    definition: "A platform where users can trade cryptocurrencies for fiat currency or other digital assets.",
    explanation: "Exchanges provide matching engines and order books to facilitate market liquidity, operating either as custodial centralized venues or non-custodial smart contracts.",
    example: "Binance and Coinbase operate major centralized crypto exchanges.",
    relatedTools: ["trading-fee-calculator", "break-even-price-calculator"],
    relatedArticles: ["what-is-a-crypto-exchange", "centralized-vs-decentralized-exchanges"]
  },
  {
    slug: "defi",
    term: "DeFi (Decentralized Finance)",
    letter: "D",
    definition: "A financial ecosystem of decentralized applications built on open blockchains that provide banking, lending, and trading services without traditional intermediaries.",
    explanation: "DeFi replaces loan officers, brokers, and clearinghouses with automated smart contract logic that executes transparently on-chain.",
    example: "A user deposits stablecoins into Aave to borrow Ether against collateral without credit checks or paperwork.",
    relatedTools: ["compound-growth-calculator", "crypto-roi-calculator"],
    relatedArticles: ["what-is-defi", "what-are-smart-contracts", "what-is-a-dex"]
  },
  {
    slug: "dex",
    term: "DEX (Decentralized Exchange)",
    letter: "D",
    definition: "A peer-to-peer crypto exchange where trades execute directly between users' self-custodial wallets via smart contracts.",
    explanation: "Unlike centralized exchanges, DEXs do not take custody of deposits, require KYC identification, or hold centralized order books.",
    example: "Swapping USDC for ETH directly on Uniswap executes entirely on-chain through a smart contract.",
    relatedTools: ["slippage-calculator", "trading-fee-calculator"],
    relatedArticles: ["what-is-a-dex", "centralized-vs-decentralized-exchanges", "what-is-a-liquidity-pool"]
  },
  {
    slug: "dao",
    term: "DAO (Decentralized Autonomous Organization)",
    letter: "D",
    definition: "An organization governed by smart contracts and token-weighted voting by its community members rather than corporate executives.",
    explanation: "DAOs allow globally distributed communities to pool capital, propose protocol upgrades, and vote on treasury allocations transparently.",
    example: "MakerDAO token holders vote on stability fee parameters and collateral types for the DAI stablecoin.",
    relatedTools: ["portfolio-allocation-calculator"],
    relatedArticles: ["what-are-smart-contracts", "what-is-defi"]
  },
  {
    slug: "dca",
    term: "DCA (Dollar-Cost Averaging)",
    letter: "D",
    definition: "An investment strategy of dividing total funds across periodic, regular purchases of a target asset regardless of its price.",
    explanation: "DCA removes market timing anxiety and automatically acquires more units when prices fall and fewer when prices rise, creating a smooth cost basis.",
    example: "Investing $100 every Monday into Bitcoin over three years.",
    relatedTools: ["dca-calculator", "bitcoin-dca-calculator", "ethereum-dca-calculator"],
    relatedArticles: ["what-is-dca", "how-does-dollar-cost-averaging-work", "dca-vs-lump-sum-investing"]
  },
  {
    slug: "ethereum",
    term: "Ethereum (ETH)",
    letter: "E",
    definition: "A decentralized global computing platform enabling smart contracts and decentralized applications powered by its native asset, Ether.",
    explanation: "Conceived by Vitalik Buterin in 2013 and launched in 2015, Ethereum introduced the Ethereum Virtual Machine (EVM) to turn blockchain technology into a programmable world computer.",
    example: "Deploying a lending protocol or NFT collection directly on the Ethereum network.",
    relatedTools: ["ethereum-profit-calculator", "ethereum-dca-calculator"],
    relatedArticles: ["what-is-ethereum", "bitcoin-vs-ethereum", "what-are-smart-contracts"]
  },
  {
    slug: "erc-20",
    term: "ERC-20",
    letter: "E",
    definition: "The technical standard used for creating fungible tokens on the Ethereum blockchain.",
    explanation: "ERC-20 defines a common set of rules (like transfer, balanceOf, approve) allowing tokens to seamlessly interact with exchanges, wallets, and smart contracts.",
    example: "USDT, USDC, and Chainlink (LINK) are standard ERC-20 tokens on Ethereum.",
    relatedTools: ["crypto-converter", "crypto-profit-calculator"],
    relatedArticles: ["what-is-ethereum", "what-are-smart-contracts"]
  },
  {
    slug: "futures",
    term: "Futures Contract",
    letter: "F",
    definition: "A standardized financial derivative agreement to trade an asset at a predetermined price, enabling leveraged long and short exposure.",
    explanation: "In crypto, perpetual futures ('perps') are the dominant instrument because they have no expiry date and use funding rates to track spot prices.",
    example: "Opening a 5x leveraged long futures contract on BTC with $1,000 margin collateral.",
    relatedTools: ["futures-profit-calculator", "leverage-calculator", "liquidation-price-calculator"],
    relatedArticles: ["what-is-futures-trading", "what-is-leverage"]
  },
  {
    slug: "funding-rate",
    term: "Funding Rate",
    letter: "F",
    definition: "Periodic payments exchanged directly between long and short futures traders to keep perpetual contract prices aligned with spot index prices.",
    explanation: "When funding is positive, longs pay shorts (bullish bias). When negative, shorts pay longs (bearish bias).",
    example: "A +0.01% funding rate paid every 8 hours on a perpetual futures position.",
    relatedTools: ["futures-profit-calculator", "futures-roi-calculator"],
    relatedArticles: ["what-is-funding-rate", "what-is-open-interest"]
  },
  {
    slug: "gas-fee",
    term: "Gas Fee",
    letter: "G",
    definition: "The computational fee paid by users to network validators to process and execute transactions or smart contracts on a blockchain.",
    explanation: "Gas prices fluctuate based on network congestion. On Ethereum, gas is denominated in gwei (0.000000001 ETH).",
    example: "Paying 0.002 ETH in gas to execute a token swap on a decentralized exchange.",
    relatedTools: ["trading-fee-calculator", "break-even-price-calculator"],
    relatedArticles: ["what-is-ethereum", "what-is-trading-fee"]
  },
  {
    slug: "halving",
    term: "Halving (Bitcoin Halving)",
    letter: "H",
    definition: "A programmatic event occurring every 210,000 Bitcoin blocks that reduces the miner block reward by exactly 50%.",
    explanation: "Halvings happen approximately every four years (2012, 2016, 2020, 2024), cutting new Bitcoin issuance until the 21 million cap is reached in 2140.",
    example: "The April 2024 halving reduced the block reward from 6.25 BTC to 3.125 BTC per block.",
    relatedTools: ["bitcoin-dca-calculator", "satoshi-calculator"],
    relatedArticles: ["what-is-bitcoin-halving", "how-bitcoin-works"]
  },
  {
    slug: "hash-rate",
    term: "Hash Rate",
    letter: "H",
    definition: "The total computational processing power dedicated to mining and securing a Proof-of-Work blockchain network.",
    explanation: "Measured in hashes per second (EH/s), a higher hash rate indicates greater network security against 51% attacks.",
    example: "Bitcoin's global hash rate surpassing 600 Exahashes per second (EH/s).",
    relatedTools: ["satoshi-calculator"],
    relatedArticles: ["what-is-bitcoin-mining", "what-is-proof-of-work"]
  },
  {
    slug: "leverage",
    term: "Leverage",
    letter: "L",
    definition: "The use of borrowed capital to amplify trading position size relative to deposited margin.",
    explanation: "Leverage multiplies both potential profits and prospective losses. 10x leverage means a 10% adverse price move causes 100% loss of initial margin.",
    example: "Using $1,000 margin with 5x leverage to control a $5,000 position.",
    relatedTools: ["leverage-calculator", "liquidation-price-calculator", "margin-calculator"],
    relatedArticles: ["what-is-leverage", "how-does-crypto-leverage-work"]
  },
  {
    slug: "liquidity",
    term: "Liquidity",
    letter: "L",
    definition: "The ease with which an asset can be rapidly bought or sold in the market without causing significant price impact.",
    explanation: "Deep liquidity allows traders to enter and exit large sizes near the prevailing market quote with minimal slippage.",
    example: "Bitcoin has deep liquidity across global order books, while micro-cap tokens suffer from thin liquidity.",
    relatedTools: ["slippage-calculator", "break-even-price-calculator"],
    relatedArticles: ["what-is-liquidity", "what-is-slippage"]
  },
  {
    slug: "liquidation",
    term: "Liquidation",
    letter: "L",
    definition: "The forced automated closure of a leveraged trading position by an exchange when losses exhaust maintenance margin.",
    explanation: "To prevent bad debt, exchange matching engines liquidate positions and seize collateral once the liquidation threshold is breached.",
    example: "A trader using 20x leverage on a long position is liquidated when the price drops by 5%.",
    relatedTools: ["liquidation-price-calculator", "margin-requirement-calculator"],
    relatedArticles: ["what-is-liquidation", "what-is-a-liquidation-price"]
  },
  {
    slug: "market-cap",
    term: "Market Capitalization",
    letter: "M",
    definition: "The total dollar valuation of a cryptocurrency network, calculated as circulating supply multiplied by unit price.",
    explanation: "Market cap provides an objective metric of total project valuation, unlike unit price which is distorted by supply divisions.",
    example: "19.7 million BTC at $65,000 equals a market cap of $1.28 trillion.",
    relatedTools: ["crypto-market-cap-calculator", "market-cap-calculator"],
    relatedArticles: ["what-is-market-capitalization", "how-market-cap-is-calculated", "market-cap-vs-price"]
  },
  {
    slug: "margin",
    term: "Margin",
    letter: "M",
    definition: "The collateral funds pledged by a trader to open and support a leveraged position.",
    explanation: "Initial margin is the deposit required to open a contract, while maintenance margin is the minimum equity needed to avoid liquidation.",
    example: "Depositing $2,000 of USDT as margin to open an $8,000 leveraged position.",
    relatedTools: ["margin-calculator", "margin-requirement-calculator"],
    relatedArticles: ["what-is-margin", "how-does-futures-margin-work"]
  },
  {
    slug: "mining",
    term: "Mining",
    letter: "M",
    definition: "The computational process of verifying transactions and adding new blocks to a Proof-of-Work blockchain in exchange for block rewards.",
    explanation: "Miners run specialized ASICs to calculate cryptographic SHA-256 hashes, securing the network and issuing new coins.",
    example: "Bitcoin miners solving computational puzzles to earn the 3.125 BTC block reward.",
    relatedTools: ["satoshi-calculator", "bitcoin-profit-calculator"],
    relatedArticles: ["what-is-bitcoin-mining", "what-is-proof-of-work"]
  },
  {
    slug: "nft",
    term: "NFT (Non-Fungible Token)",
    letter: "N",
    definition: "A unique cryptographic token on a blockchain representing provable ownership of a specific digital or physical asset.",
    explanation: "Unlike fungible coins where every unit is identical, each NFT has a distinct token ID and metadata distinguishing it from all others.",
    example: "A digital art piece or on-chain domain name minted under the ERC-721 token standard.",
    relatedTools: ["crypto-profit-calculator"],
    relatedArticles: ["what-are-smart-contracts", "what-is-ethereum"]
  },
  {
    slug: "private-key",
    term: "Private Key",
    letter: "P",
    definition: "A secret cryptographic key that provides mathematical proof of ownership and the authority to spend assets from a blockchain address.",
    explanation: "Whoever possesses the private key controls the funds. Never share private keys or enter them on untrusted devices.",
    example: "A 256-bit private key signing a transaction to transfer crypto from your wallet.",
    relatedTools: ["satoshi-calculator"],
    relatedArticles: ["what-is-a-private-key", "what-is-a-seed-phrase", "crypto-security-best-practices"]
  },
  {
    slug: "proof-of-work",
    term: "Proof of Work (PoW)",
    letter: "P",
    definition: "A blockchain consensus mechanism requiring computers to perform physical computational work to validate transactions.",
    explanation: "PoW ties digital security to thermodynamic laws by requiring electricity expenditure, preventing history rewriting.",
    example: "Bitcoin and Litecoin use Proof-of-Work mining consensus.",
    relatedTools: ["bitcoin-profit-calculator", "satoshi-calculator"],
    relatedArticles: ["what-is-proof-of-work", "what-is-proof-of-stake", "what-is-bitcoin-mining"]
  },
  {
    slug: "proof-of-stake",
    term: "Proof of Stake (PoS)",
    letter: "P",
    definition: "A blockchain consensus mechanism where validators lock up native cryptocurrency tokens to earn the right to validate blocks.",
    explanation: "PoS eliminates the energy consumption of physical mining rigs by using economic bonded capital as the security incentive.",
    example: "Ethereum transitioned to Proof of Stake during 'The Merge' in September 2022.",
    relatedTools: ["compound-growth-calculator", "ethereum-profit-calculator"],
    relatedArticles: ["what-is-proof-of-stake", "what-is-proof-of-work", "what-is-staking"]
  },
  {
    slug: "portfolio",
    term: "Portfolio",
    letter: "P",
    definition: "The total collection of all cryptocurrency coins, tokens, and cash reserves held by an individual or fund.",
    explanation: "A balanced portfolio manages risk across different market sectors, asset maturities, and volatility profiles.",
    example: "A portfolio consisting of 50% Bitcoin, 30% Ethereum, and 20% stablecoins.",
    relatedTools: ["portfolio-allocation-calculator", "portfolio-profit-calculator", "portfolio-loss-calculator"],
    relatedArticles: ["how-to-build-a-simple-crypto-portfolio", "crypto-portfolio-diversification"]
  },
  {
    slug: "risk-reward",
    term: "Risk Reward Ratio (R:R)",
    letter: "R",
    definition: "The mathematical ratio comparing the potential profit of a trade setup to its potential downside risk.",
    explanation: "Enforcing positive R:R ratios (e.g. 1:2 or 1:3) enables long-term profitability even when win rates are below 50%.",
    example: "Targeting a $300 profit with a $100 stop loss represents a 1:3 Risk-to-Reward ratio.",
    relatedTools: ["risk-reward-calculator", "position-size-calculator"],
    relatedArticles: ["what-is-risk-reward-ratio", "crypto-risk-management-for-beginners"]
  },
  {
    slug: "roi",
    term: "ROI (Return on Investment)",
    letter: "R",
    definition: "A percentage performance measure used to evaluate the efficiency and profitability of an investment.",
    explanation: "Calculated by dividing net realized profit by initial capital outlay and multiplying by 100.",
    example: "Investing $2,000 and exiting at $3,200 produces a +$1,200 profit, representing a +60.0% ROI.",
    relatedTools: ["crypto-roi-calculator", "crypto-profit-calculator", "futures-roi-calculator"],
    relatedArticles: ["how-to-calculate-crypto-roi", "how-to-calculate-crypto-profit"]
  },
  {
    slug: "stablecoin",
    term: "Stablecoin",
    letter: "S",
    definition: "A cryptocurrency designed to maintain a stable market price pegged to an external asset, typically fiat currencies.",
    explanation: "Stablecoins provide liquidity, risk mitigation, and settlement speed without needing to exit into fiat banking systems.",
    example: "USDT and USDC are dollar-pegged stablecoins.",
    relatedTools: ["usdt-to-inr-calculator", "crypto-converter"],
    relatedArticles: ["what-is-a-stablecoin", "what-is-usdt", "what-is-usdc"]
  },
  {
    slug: "satoshi",
    term: "Satoshi (SAT)",
    letter: "S",
    definition: "The smallest unit of a Bitcoin, equal to one hundred-millionth of a coin (0.00000001 BTC).",
    explanation: "Named in honor of Satoshi Nakamoto, each Bitcoin is divisible into 100,000,000 satoshis.",
    example: "Stacking 100,000 sats (equal to 0.001 BTC).",
    relatedTools: ["satoshi-calculator", "bitcoin-unit-converter", "btc-to-usd-calculator"],
    relatedArticles: ["what-is-a-bitcoin-satoshi", "how-bitcoin-works"]
  },
  {
    slug: "seed-phrase",
    term: "Seed Phrase (Mnemonic Phrase)",
    letter: "S",
    definition: "A sequence of 12 or 24 human-readable words used to generate and recover all private keys in a cryptocurrency wallet.",
    explanation: "Defined by the BIP-39 standard, keeping this phrase secure and offline is the single most important rule of crypto self-custody.",
    example: "A 24-word recovery phrase stamped onto a steel backup plate.",
    relatedTools: ["satoshi-calculator"],
    relatedArticles: ["what-is-a-seed-phrase", "how-to-protect-a-seed-phrase", "crypto-security-best-practices"]
  },
  {
    slug: "slippage",
    term: "Slippage",
    letter: "S",
    definition: "The difference between the expected price of a trade and the executed price when filled.",
    explanation: "Slippage occurs during rapid volatility or when large orders consume multiple levels of thin order books.",
    example: "A market order quoted at $100 that fills at $101.50 experiences 1.5% slippage.",
    relatedTools: ["slippage-calculator", "trading-fee-calculator"],
    relatedArticles: ["what-is-slippage", "how-to-calculate-slippage"]
  },
  {
    slug: "stop-loss",
    term: "Stop Loss",
    letter: "S",
    definition: "A protective order placed to automatically close an active trade if the market price drops to a predetermined level.",
    explanation: "Stop losses cap potential losses on every trade, protecting trading capital from catastrophic market moves.",
    example: "Entering Bitcoin at $60,000 and setting a stop loss at $58,500 to cap risk at 2.5%.",
    relatedTools: ["stop-loss-calculator", "position-size-calculator", "risk-reward-calculator"],
    relatedArticles: ["what-is-stop-loss", "why-stop-loss-matters"]
  },
  {
    slug: "staking",
    term: "Staking",
    letter: "S",
    definition: "Locking native Proof-of-Stake cryptocurrency tokens to participate in network validation and consensus in exchange for rewards.",
    explanation: "Staking serves as economic security in PoS blockchains, providing regular yield paid from network inflation and transaction fees.",
    example: "Staking 32 ETH on Ethereum to run a validator node and earn consensus rewards.",
    relatedTools: ["compound-growth-calculator", "ethereum-profit-calculator"],
    relatedArticles: ["what-is-staking", "what-is-proof-of-stake"]
  },
  {
    slug: "tokenomics",
    term: "Tokenomics",
    letter: "T",
    definition: "The economic rules governing a cryptocurrency's supply, emission, distribution, and utility incentives.",
    explanation: "Sound tokenomics includes clear emission schedules, reasonable vesting cliffs, and sustainable token utility without runaway inflation.",
    example: "Evaluating a token's unlock schedule to ensure early venture investors cannot dump large supplies onto the market.",
    relatedTools: ["crypto-market-cap-calculator", "market-cap-calculator"],
    relatedArticles: ["what-is-tokenomics", "what-is-circulating-supply"]
  },
  {
    slug: "take-profit",
    term: "Take Profit",
    letter: "T",
    definition: "A limit order placed to automatically close an open position once a favorable profit target is reached.",
    explanation: "Take-profit orders ensure gains are secured systematically before the market retraces.",
    example: "Buying at $2,000 and placing a take profit order at $2,400 to secure a +20% gain.",
    relatedTools: ["take-profit-calculator", "target-price-calculator"],
    relatedArticles: ["what-is-take-profit", "what-is-risk-reward-ratio"]
  },
  {
    slug: "wallet",
    term: "Wallet (Crypto Wallet)",
    letter: "W",
    definition: "Software or hardware that stores cryptographic private keys and interfaces with blockchains to manage funds.",
    explanation: "Wallets don't store physical coins; they store the keys that authenticate and authorize transfers on the public blockchain.",
    example: "Using MetaMask as a browser wallet to sign transactions on decentralized applications.",
    relatedTools: ["satoshi-calculator", "crypto-profit-calculator"],
    relatedArticles: ["what-is-a-crypto-wallet", "hot-wallet-vs-cold-wallet", "how-to-secure-a-crypto-wallet"]
  },
  {
    slug: "whale",
    term: "Whale",
    letter: "W",
    definition: "An individual or institution that controls an exceptionally large quantity of a specific cryptocurrency.",
    explanation: "Because whales hold massive capital, their large market buy or sell orders can move prices and influence liquidity across order books.",
    example: "An entity holding 10,000 Bitcoin whose transaction activity is tracked on-chain by market analysts.",
    relatedTools: ["slippage-calculator", "position-value-calculator"],
    relatedArticles: ["what-is-liquidity", "what-is-volatility"]
  }
];
