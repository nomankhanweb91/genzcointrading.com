/**
 * GENZCOINTRADING.COM — MASTER CALCULATOR ENGINE
 * Complete client-side calculation logic for all 50 financial calculators.
 * 100% Offline / Local arithmetic — NO external API or live market data.
 */

const Calculators = {
  // 1. Crypto Profit Calculator
  cryptoProfit() {
    const buyPrice = Utils.parseNumber(document.getElementById('buyPrice')?.value);
    const sellPrice = Utils.parseNumber(document.getElementById('sellPrice')?.value);
    const quantity = Utils.parseNumber(document.getElementById('quantity')?.value);
    const buyFeePct = Utils.parseNumber(document.getElementById('buyFeePct')?.value, 0.1);
    const sellFeePct = Utils.parseNumber(document.getElementById('sellFeePct')?.value, 0.1);

    if (buyPrice <= 0 || sellPrice <= 0 || quantity <= 0) return;

    const initialInvestment = buyPrice * quantity;
    const grossExit = sellPrice * quantity;
    const buyFee = (initialInvestment * buyFeePct) / 100;
    const sellFee = (grossExit * sellFeePct) / 100;
    const totalFees = buyFee + sellFee;

    const netExit = grossExit - sellFee;
    const totalCost = initialInvestment + buyFee;
    const netProfit = netExit - totalCost;
    const netRoi = (netProfit / totalCost) * 100;

    Calculators.renderResult({
      primaryVal: Utils.formatCurrency(netProfit),
      secondaryVal: `ROI: ${Utils.formatPercent(netRoi)}`,
      isPositive: netProfit >= 0,
      breakdown: [
        { label: "Total Capital Outlay", value: Utils.formatCurrency(totalCost) },
        { label: "Gross Exit Valuation", value: Utils.formatCurrency(grossExit) },
        { label: "Exchange Fees (Entry + Exit)", value: Utils.formatCurrency(totalFees) },
        { label: "Net Realized Proceeds", value: Utils.formatCurrency(netExit) },
        { label: "Net Profit / Loss", value: Utils.formatCurrency(netProfit) }
      ],
      copyText: `Crypto Profit Calculation:\nEntry: $${buyPrice} | Exit: $${sellPrice} | Qty: ${quantity}\nNet Profit: ${Utils.formatCurrency(netProfit)} (${Utils.formatPercent(netRoi)})\nFees: ${Utils.formatCurrency(totalFees)}`
    });
  },

  // 2. Bitcoin Profit Calculator
  bitcoinProfit() {
    Calculators.cryptoProfit();
  },

  // 3. Ethereum Profit Calculator
  ethereumProfit() {
    Calculators.cryptoProfit();
  },

  // 4. Crypto ROI Calculator
  cryptoRoi() {
    const initial = Utils.parseNumber(document.getElementById('initialInvestment')?.value);
    const finalVal = Utils.parseNumber(document.getElementById('finalValue')?.value);

    if (initial <= 0) return;

    const absoluteGain = finalVal - initial;
    const roiPct = (absoluteGain / initial) * 100;

    Calculators.renderResult({
      primaryVal: Utils.formatPercent(roiPct),
      secondaryVal: `Net Gain: ${Utils.formatCurrency(absoluteGain)}`,
      isPositive: absoluteGain >= 0,
      breakdown: [
        { label: "Initial Outlay", value: Utils.formatCurrency(initial) },
        { label: "Ending Valuation", value: Utils.formatCurrency(finalVal) },
        { label: "Capital Delta", value: Utils.formatCurrency(absoluteGain) },
        { label: "Return on Investment (ROI)", value: Utils.formatPercent(roiPct) }
      ],
      copyText: `Crypto ROI:\nInitial: ${Utils.formatCurrency(initial)} | Final: ${Utils.formatCurrency(finalVal)}\nROI: ${Utils.formatPercent(roiPct)} | Net: ${Utils.formatCurrency(absoluteGain)}`
    });
  },

  // 5. Crypto P&L Calculator
  cryptoPnl() {
    const positionType = document.getElementById('positionType')?.value || 'long';
    const entryPrice = Utils.parseNumber(document.getElementById('entryPrice')?.value);
    const exitPrice = Utils.parseNumber(document.getElementById('exitPrice')?.value);
    const amount = Utils.parseNumber(document.getElementById('amount')?.value);

    if (entryPrice <= 0 || exitPrice <= 0 || amount <= 0) return;

    let pnl = 0;
    if (positionType === 'long') {
      pnl = (exitPrice - entryPrice) * amount;
    } else {
      pnl = (entryPrice - exitPrice) * amount;
    }

    const notional = entryPrice * amount;
    const pnlPct = (pnl / notional) * 100;

    Calculators.renderResult({
      primaryVal: Utils.formatCurrency(pnl),
      secondaryVal: `${positionType.toUpperCase()} Position: ${Utils.formatPercent(pnlPct)}`,
      isPositive: pnl >= 0,
      breakdown: [
        { label: "Position Direction", value: positionType.toUpperCase() },
        { label: "Initial Notional Value", value: Utils.formatCurrency(notional) },
        { label: "Final Valuation", value: Utils.formatCurrency(exitPrice * amount) },
        { label: "Net P&L", value: Utils.formatCurrency(pnl) },
        { label: "Percentage Return", value: Utils.formatPercent(pnlPct) }
      ],
      copyText: `Crypto PnL (${positionType.toUpperCase()}):\nEntry: $${entryPrice} | Exit: $${exitPrice} | Units: ${amount}\nNet PnL: ${Utils.formatCurrency(pnl)} (${Utils.formatPercent(pnlPct)})`
    });
  },

  // 6. Percentage Gain Calculator
  percentageGain() {
    const initial = Utils.parseNumber(document.getElementById('initialPrice')?.value);
    const finalVal = Utils.parseNumber(document.getElementById('finalPrice')?.value);

    if (initial <= 0) return;
    const gain = finalVal - initial;
    const pct = (gain / initial) * 100;

    Calculators.renderResult({
      primaryVal: Utils.formatPercent(pct),
      secondaryVal: `Gain: ${Utils.formatCurrency(gain)}`,
      isPositive: gain >= 0,
      breakdown: [
        { label: "Base Value", value: Utils.formatCurrency(initial) },
        { label: "Observed Value", value: Utils.formatCurrency(finalVal) },
        { label: "Absolute Appreciation", value: Utils.formatCurrency(gain) },
        { label: "Percentage Gain", value: Utils.formatPercent(pct) }
      ],
      copyText: `Percentage Gain:\nBase: $${initial} | New: $${finalVal}\nAppreciation: +${pct.toFixed(2)}%`
    });
  },

  // 7. Percentage Loss Calculator
  percentageLoss() {
    const initial = Utils.parseNumber(document.getElementById('initialPrice')?.value);
    const finalVal = Utils.parseNumber(document.getElementById('finalPrice')?.value);

    if (initial <= 0) return;
    const loss = initial - finalVal;
    const pct = (loss / initial) * 100;

    Calculators.renderResult({
      primaryVal: `-${pct.toFixed(2)}%`,
      secondaryVal: `Capital Reduction: -${Utils.formatCurrency(loss)}`,
      isPositive: false,
      breakdown: [
        { label: "Starting Capital", value: Utils.formatCurrency(initial) },
        { label: "Remaining Capital", value: Utils.formatCurrency(finalVal) },
        { label: "Decline Amount", value: Utils.formatCurrency(loss) },
        { label: "Drawdown Loss", value: `-${pct.toFixed(2)}%` }
      ],
      copyText: `Percentage Loss:\nStart: $${initial} | End: $${finalVal}\nLoss: -${pct.toFixed(2)}% (-${Utils.formatCurrency(loss)})`
    });
  },

  // 8. Break-Even Price Calculator
  breakEvenPrice() {
    const buyPrice = Utils.parseNumber(document.getElementById('buyPrice')?.value);
    const buyFee = Utils.parseNumber(document.getElementById('buyFee')?.value, 0.1);
    const sellFee = Utils.parseNumber(document.getElementById('sellFee')?.value, 0.1);

    if (buyPrice <= 0) return;

    // Cost basis with buy fee: buyPrice * (1 + buyFee/100)
    // To net that after sell fee: BreakEven * (1 - sellFee/100) = Cost
    // BreakEven = buyPrice * (1 + buyFee/100) / (1 - sellFee/100)
    const costFactor = 1 + (buyFee / 100);
    const exitFactor = 1 - (sellFee / 100);
    const breakEven = (buyPrice * costFactor) / exitFactor;
    const feeBuffer = breakEven - buyPrice;

    Calculators.renderResult({
      primaryVal: Utils.formatCurrency(breakEven),
      secondaryVal: `Buffer Needed: +${Utils.formatCurrency(feeBuffer)} (+${((feeBuffer/buyPrice)*100).toFixed(3)}%)`,
      isPositive: true,
      breakdown: [
        { label: "Target Asset Entry", value: Utils.formatCurrency(buyPrice) },
        { label: "Maker/Taker Buy Fee", value: `${buyFee}%` },
        { label: "Maker/Taker Sell Fee", value: `${sellFee}%` },
        { label: "Friction Overhead", value: Utils.formatCurrency(feeBuffer) },
        { label: "Exact Break-Even Target", value: Utils.formatCurrency(breakEven) }
      ],
      copyText: `Break-Even Price:\nEntry: $${buyPrice} | Fees: ${buyFee}% in, ${sellFee}% out\nBreak-Even Price: ${Utils.formatCurrency(breakEven)}`
    });
  },

  // 9. Position Size Calculator
  positionSize() {
    const accountSize = Utils.parseNumber(document.getElementById('accountSize')?.value);
    const riskPct = Utils.parseNumber(document.getElementById('riskPct')?.value, 1.0);
    const entryPrice = Utils.parseNumber(document.getElementById('entryPrice')?.value);
    const stopPrice = Utils.parseNumber(document.getElementById('stopPrice')?.value);

    if (accountSize <= 0 || entryPrice <= 0 || stopPrice <= 0) return;

    const dollarRisk = (accountSize * riskPct) / 100;
    const priceRisk = Math.abs(entryPrice - stopPrice);
    if (priceRisk === 0) return;

    const units = dollarRisk / priceRisk;
    const positionValue = units * entryPrice;

    Calculators.renderResult({
      primaryVal: `${Utils.formatNumber(units, 4)} Units`,
      secondaryVal: `Total Notional: ${Utils.formatCurrency(positionValue)}`,
      isPositive: true,
      breakdown: [
        { label: "Account Size", value: Utils.formatCurrency(accountSize) },
        { label: "Capital Risk Allocation", value: `${Utils.formatCurrency(dollarRisk)} (${riskPct}%)` },
        { label: "Per-Unit Stop Distance", value: Utils.formatCurrency(priceRisk) },
        { label: "Calculated Position Size", value: `${Utils.formatNumber(units, 4)} coins` },
        { label: "Total Order Valuation", value: Utils.formatCurrency(positionValue) }
      ],
      copyText: `Position Size:\nAccount: $${accountSize} | Risk: ${riskPct}%\nUnits: ${units.toFixed(4)} | Value: ${Utils.formatCurrency(positionValue)} | Max Loss: ${Utils.formatCurrency(dollarRisk)}`
    });
  },

  // 10. Risk Reward Calculator
  riskReward() {
    const entry = Utils.parseNumber(document.getElementById('entryPrice')?.value);
    const stopLoss = Utils.parseNumber(document.getElementById('stopLoss')?.value);
    const takeProfit = Utils.parseNumber(document.getElementById('takeProfit')?.value);

    if (entry <= 0 || stopLoss <= 0 || takeProfit <= 0) return;

    const risk = Math.abs(entry - stopLoss);
    const reward = Math.abs(takeProfit - entry);
    if (risk === 0) return;

    const ratio = reward / risk;
    const minWinRate = (1 / (1 + ratio)) * 100;

    Calculators.renderResult({
      primaryVal: `1 : ${ratio.toFixed(2)}`,
      secondaryVal: `Breakeven Win Rate: ${minWinRate.toFixed(1)}%`,
      isPositive: ratio >= 2,
      breakdown: [
        { label: "Per-Unit Risk Distance", value: Utils.formatCurrency(risk) },
        { label: "Per-Unit Reward Distance", value: Utils.formatCurrency(reward) },
        { label: "Risk-to-Reward Ratio", value: `1 : ${ratio.toFixed(2)}` },
        { label: "Required Win-Rate Edge", value: `${minWinRate.toFixed(1)}%` },
        { label: "Standard Rating", value: ratio >= 2 ? "Favorable (≥ 1:2)" : "Sub-optimal (< 1:2)" }
      ],
      copyText: `Risk/Reward:\nEntry: $${entry} | Stop: $${stopLoss} | Target: $${takeProfit}\nR:R Ratio: 1:${ratio.toFixed(2)} | Breakeven Win Rate: ${minWinRate.toFixed(1)}%`
    });
  },

  // 11. Futures Profit Calculator
  futuresProfit() {
    const direction = document.getElementById('direction')?.value || 'long';
    const entry = Utils.parseNumber(document.getElementById('entryPrice')?.value);
    const exit = Utils.parseNumber(document.getElementById('exitPrice')?.value);
    const margin = Utils.parseNumber(document.getElementById('margin')?.value);
    const leverage = Utils.parseNumber(document.getElementById('leverage')?.value, 10);

    if (entry <= 0 || exit <= 0 || margin <= 0 || leverage <= 0) return;

    const notional = margin * leverage;
    const units = notional / entry;
    const priceChangePct = ((exit - entry) / entry) * 100;

    let pnl = 0;
    if (direction === 'long') {
      pnl = (exit - entry) * units;
    } else {
      pnl = (entry - exit) * units;
    }

    const roe = (pnl / margin) * 100;

    Calculators.renderResult({
      primaryVal: Utils.formatCurrency(pnl),
      secondaryVal: `ROE: ${Utils.formatPercent(roe)} (${leverage}x)`,
      isPositive: pnl >= 0,
      breakdown: [
        { label: "Margin Collateral", value: Utils.formatCurrency(margin) },
        { label: "Effective Leverage", value: `${leverage}x` },
        { label: "Total Position Notional", value: Utils.formatCurrency(notional) },
        { label: "Underlying Price Move", value: Utils.formatPercent(priceChangePct) },
        { label: "Net Leveraged PnL", value: Utils.formatCurrency(pnl) }
      ],
      copyText: `Futures Profit:\n${direction.toUpperCase()} @ $${entry} -> $${exit} | Margin: $${margin} | ${leverage}x\nPnL: ${Utils.formatCurrency(pnl)} (ROE: ${Utils.formatPercent(roe)})`
    });
  },

  // 12. Leverage Calculator
  leverage() {
    const positionSize = Utils.parseNumber(document.getElementById('positionSize')?.value);
    const margin = Utils.parseNumber(document.getElementById('margin')?.value);

    if (margin <= 0 || positionSize <= 0) return;

    const effectiveLeverage = positionSize / margin;
    const maxDropBeforeLiquidation = (1 / effectiveLeverage) * 100;

    Calculators.renderResult({
      primaryVal: `${effectiveLeverage.toFixed(2)}x`,
      secondaryVal: `Theoretical Max Adverse Move: ~${maxDropBeforeLiquidation.toFixed(1)}%`,
      isPositive: effectiveLeverage <= 10,
      breakdown: [
        { label: "Position Notional", value: Utils.formatCurrency(positionSize) },
        { label: "Allocated Margin", value: Utils.formatCurrency(margin) },
        { label: "Effective Leverage", value: `${effectiveLeverage.toFixed(2)}x` },
        { label: "Ruin Threshold Distance", value: `~${maxDropBeforeLiquidation.toFixed(2)}%` }
      ],
      copyText: `Leverage:\nNotional: $${positionSize} | Margin: $${margin}\nEffective Leverage: ${effectiveLeverage.toFixed(2)}x`
    });
  },

  // 13. Liquidation Price Calculator
  liquidationPrice() {
    const direction = document.getElementById('direction')?.value || 'long';
    const entry = Utils.parseNumber(document.getElementById('entryPrice')?.value);
    const leverage = Utils.parseNumber(document.getElementById('leverage')?.value, 10);
    const maintMarginPct = Utils.parseNumber(document.getElementById('maintMarginPct')?.value, 0.5);

    if (entry <= 0 || leverage <= 0) return;

    // Isolated margin liquidation approximation:
    // Long: Liq = Entry * (1 - (1/leverage) + (maintMarginPct/100))
    // Short: Liq = Entry * (1 + (1/leverage) - (maintMarginPct/100))
    let liqPrice = 0;
    const mmFactor = maintMarginPct / 100;
    if (direction === 'long') {
      liqPrice = entry * (1 - (1 / leverage) + mmFactor);
    } else {
      liqPrice = entry * (1 + (1 / leverage) - mmFactor);
    }

    const distPct = (Math.abs(entry - liqPrice) / entry) * 100;

    Calculators.renderResult({
      primaryVal: Utils.formatCurrency(liqPrice),
      secondaryVal: `Adverse Distance: ${distPct.toFixed(2)}%`,
      isPositive: distPct >= 15,
      breakdown: [
        { label: "Entry Price", value: Utils.formatCurrency(entry) },
        { label: "Selected Leverage", value: `${leverage}x` },
        { label: "Maintenance Margin Buffer", value: `${maintMarginPct}%` },
        { label: "Estimated Liquidation Price", value: Utils.formatCurrency(liqPrice) },
        { label: "Distance to Total Ruin", value: `${distPct.toFixed(2)}%` }
      ],
      copyText: `Liquidation Price (${direction.toUpperCase()}):\nEntry: $${entry} | Leverage: ${leverage}x\nLiquidation: ${Utils.formatCurrency(liqPrice)} (${distPct.toFixed(2)}% away)`
    });
  },

  // 14. Margin Calculator
  margin() {
    const positionValue = Utils.parseNumber(document.getElementById('positionValue')?.value);
    const leverage = Utils.parseNumber(document.getElementById('leverage')?.value, 10);

    if (positionValue <= 0 || leverage <= 0) return;

    const initialMargin = positionValue / leverage;

    Calculators.renderResult({
      primaryVal: Utils.formatCurrency(initialMargin),
      secondaryVal: `Collateral Ratio: ${(100/leverage).toFixed(2)}%`,
      isPositive: true,
      breakdown: [
        { label: "Position Size (Notional)", value: Utils.formatCurrency(positionValue) },
        { label: "Contract Leverage", value: `${leverage}x` },
        { label: "Required Initial Margin", value: Utils.formatCurrency(initialMargin) },
        { label: "Borrowed Capital (Counterparty)", value: Utils.formatCurrency(positionValue - initialMargin) }
      ],
      copyText: `Margin Required:\nPosition Value: $${positionValue} | Leverage: ${leverage}x\nInitial Margin Required: ${Utils.formatCurrency(initialMargin)}`
    });
  },

  // 15. Position Value Calculator
  positionValue() {
    const price = Utils.parseNumber(document.getElementById('price')?.value);
    const amount = Utils.parseNumber(document.getElementById('amount')?.value);

    if (price <= 0 || amount <= 0) return;
    const total = price * amount;

    Calculators.renderResult({
      primaryVal: Utils.formatCurrency(total),
      secondaryVal: `${Utils.formatNumber(amount, 6)} Units @ ${Utils.formatCurrency(price)}`,
      isPositive: true,
      breakdown: [
        { label: "Unit Asset Price", value: Utils.formatCurrency(price) },
        { label: "Total Unit Count", value: Utils.formatNumber(amount, 8) },
        { label: "Aggregated Position Value", value: Utils.formatCurrency(total) }
      ],
      copyText: `Position Value:\nPrice: $${price} | Amount: ${amount}\nTotal Value: ${Utils.formatCurrency(total)}`
    });
  },

  // 16. Stop Loss Calculator
  stopLoss() {
    const entry = Utils.parseNumber(document.getElementById('entryPrice')?.value);
    const lossPct = Utils.parseNumber(document.getElementById('lossPct')?.value, 2.0);
    const direction = document.getElementById('direction')?.value || 'long';

    if (entry <= 0 || lossPct <= 0) return;

    let stopPrice = 0;
    if (direction === 'long') {
      stopPrice = entry * (1 - lossPct / 100);
    } else {
      stopPrice = entry * (1 + lossPct / 100);
    }

    const delta = Math.abs(entry - stopPrice);

    Calculators.renderResult({
      primaryVal: Utils.formatCurrency(stopPrice),
      secondaryVal: `Max Price Slip: ${Utils.formatCurrency(delta)} (-${lossPct}%)`,
      isPositive: true,
      breakdown: [
        { label: "Order Execution Entry", value: Utils.formatCurrency(entry) },
        { label: "Acceptable Drawdown Limit", value: `${lossPct}%` },
        { label: "Recommended Stop Order Trigger", value: Utils.formatCurrency(stopPrice) },
        { label: "Unit Risk Loss Allowance", value: Utils.formatCurrency(delta) }
      ],
      copyText: `Stop Loss (${direction.toUpperCase()}):\nEntry: $${entry} | Risk: ${lossPct}%\nStop Loss Trigger: ${Utils.formatCurrency(stopPrice)}`
    });
  },

  // 17. Take Profit Calculator
  takeProfit() {
    const entry = Utils.parseNumber(document.getElementById('entryPrice')?.value);
    const profitPct = Utils.parseNumber(document.getElementById('profitPct')?.value, 6.0);
    const direction = document.getElementById('direction')?.value || 'long';

    if (entry <= 0 || profitPct <= 0) return;

    let tpPrice = 0;
    if (direction === 'long') {
      tpPrice = entry * (1 + profitPct / 100);
    } else {
      tpPrice = entry * (1 - profitPct / 100);
    }

    const gainDelta = Math.abs(tpPrice - entry);

    Calculators.renderResult({
      primaryVal: Utils.formatCurrency(tpPrice),
      secondaryVal: `Target Gain: +${Utils.formatCurrency(gainDelta)} (+${profitPct}%)`,
      isPositive: true,
      breakdown: [
        { label: "Entry Price", value: Utils.formatCurrency(entry) },
        { label: "Desired Target Expansion", value: `+${profitPct}%` },
        { label: "Take Profit Limit Price", value: Utils.formatCurrency(tpPrice) },
        { label: "Unit Capital Gain", value: `+${Utils.formatCurrency(gainDelta)}` }
      ],
      copyText: `Take Profit (${direction.toUpperCase()}):\nEntry: $${entry} | Target Gain: ${profitPct}%\nTake Profit Target: ${Utils.formatCurrency(tpPrice)}`
    });
  },

  // 18. Futures ROI Calculator
  futuresRoi() {
    const leverage = Utils.parseNumber(document.getElementById('leverage')?.value, 10);
    const priceChangePct = Utils.parseNumber(document.getElementById('priceChangePct')?.value);

    const roe = leverage * priceChangePct;

    Calculators.renderResult({
      primaryVal: Utils.formatPercent(roe),
      secondaryVal: `${leverage}x Leverage Multiplier`,
      isPositive: roe >= 0,
      breakdown: [
        { label: "Leverage Multiplier", value: `${leverage}x` },
        { label: "Asset Price Movement", value: Utils.formatPercent(priceChangePct) },
        { label: "Amplified Return on Equity (ROE)", value: Utils.formatPercent(roe) }
      ],
      copyText: `Futures ROI:\nLeverage: ${leverage}x | Spot Move: ${priceChangePct}%\nEffective ROE: ${roe.toFixed(2)}%`
    });
  },

  // 19. Margin Requirement Calculator
  marginRequirement() {
    const notional = Utils.parseNumber(document.getElementById('notional')?.value);
    const maxLeverage = Utils.parseNumber(document.getElementById('maxLeverage')?.value, 20);
    const maintRatePct = Utils.parseNumber(document.getElementById('maintRatePct')?.value, 0.5);

    if (notional <= 0 || maxLeverage <= 0) return;

    const initialMargin = notional / maxLeverage;
    const maintMargin = (notional * maintRatePct) / 100;

    Calculators.renderResult({
      primaryVal: Utils.formatCurrency(initialMargin),
      secondaryVal: `Maintenance Threshold: ${Utils.formatCurrency(maintMargin)}`,
      isPositive: true,
      breakdown: [
        { label: "Contract Notional Size", value: Utils.formatCurrency(notional) },
        { label: "Max Leverage Tier", value: `${maxLeverage}x` },
        { label: "Required Initial Margin", value: Utils.formatCurrency(initialMargin) },
        { label: "Maintenance Margin Floor", value: Utils.formatCurrency(maintMargin) }
      ],
      copyText: `Margin Requirement:\nNotional: $${notional} | Leverage: ${maxLeverage}x\nInitial Margin: ${Utils.formatCurrency(initialMargin)} | Maintenance: ${Utils.formatCurrency(maintMargin)}`
    });
  },

  // 20. Risk Per Trade Calculator
  riskPerTrade() {
    const portfolio = Utils.parseNumber(document.getElementById('portfolio')?.value);
    const riskPct = Utils.parseNumber(document.getElementById('riskPct')?.value, 1.0);

    if (portfolio <= 0 || riskPct <= 0) return;
    const dollarRisk = (portfolio * riskPct) / 100;

    Calculators.renderResult({
      primaryVal: Utils.formatCurrency(dollarRisk),
      secondaryVal: `${riskPct}% of Total Portfolio`,
      isPositive: true,
      breakdown: [
        { label: "Total Trading Capital", value: Utils.formatCurrency(portfolio) },
        { label: "Max Risk Allocation Percentage", value: `${riskPct}%` },
        { label: "Maximum Dollar Risk on Loss", value: Utils.formatCurrency(dollarRisk) },
        { label: "Remaining Capital on Stop", value: Utils.formatCurrency(portfolio - dollarRisk) }
      ],
      copyText: `Risk Per Trade:\nPortfolio: $${portfolio} | Risk: ${riskPct}%\nMax Capital Risked: ${Utils.formatCurrency(dollarRisk)}`
    });
  },

  // 21. DCA Calculator
  dca() {
    const periodicAmount = Utils.parseNumber(document.getElementById('periodicAmount')?.value, 100);
    const purchaseCount = Utils.parseNumber(document.getElementById('purchaseCount')?.value, 12);
    const avgPrice = Utils.parseNumber(document.getElementById('avgPrice')?.value, 50000);
    const latestPrice = Utils.parseNumber(document.getElementById('latestPrice')?.value, 60000);

    if (periodicAmount <= 0 || purchaseCount <= 0 || avgPrice <= 0) return;

    const totalInvested = periodicAmount * purchaseCount;
    const totalCoins = totalInvested / avgPrice;
    const currentValue = totalCoins * latestPrice;
    const profit = currentValue - totalInvested;
    const roi = (profit / totalInvested) * 100;

    Calculators.renderResult({
      primaryVal: Utils.formatCurrency(currentValue),
      secondaryVal: `Profit: ${Utils.formatCurrency(profit)} (${Utils.formatPercent(roi)})`,
      isPositive: profit >= 0,
      breakdown: [
        { label: "Periodic Contribution", value: `${Utils.formatCurrency(periodicAmount)} × ${purchaseCount} times` },
        { label: "Total Capital Invested", value: Utils.formatCurrency(totalInvested) },
        { label: "Total Accumulated Units", value: Utils.formatNumber(totalCoins, 6) },
        { label: "Effective Average Buy Price", value: Utils.formatCurrency(avgPrice) },
        { label: "Current Portfolio Valuation", value: Utils.formatCurrency(currentValue) }
      ],
      copyText: `DCA Model:\nInvested: ${Utils.formatCurrency(totalInvested)} | Units: ${totalCoins.toFixed(6)}\nValue: ${Utils.formatCurrency(currentValue)} | PnL: ${Utils.formatCurrency(profit)} (${roi.toFixed(2)}%)`
    });
  },

  // 22. Bitcoin DCA Calculator
  bitcoinDca() {
    Calculators.dca();
  },

  // 23. Ethereum DCA Calculator
  ethereumDca() {
    Calculators.dca();
  },

  // 24. Compound Growth Calculator
  compoundGrowth() {
    const principal = Utils.parseNumber(document.getElementById('principal')?.value, 1000);
    const ratePct = Utils.parseNumber(document.getElementById('ratePct')?.value, 8.0);
    const years = Utils.parseNumber(document.getElementById('years')?.value, 5);
    const compoundsPerYear = Utils.parseNumber(document.getElementById('compoundsPerYear')?.value, 12);

    if (principal <= 0 || years <= 0) return;

    // A = P * (1 + r/n)^(n*t)
    const r = ratePct / 100;
    const futureVal = principal * Math.pow(1 + (r / compoundsPerYear), compoundsPerYear * years);
    const totalInterest = futureVal - principal;

    Calculators.renderResult({
      primaryVal: Utils.formatCurrency(futureVal),
      secondaryVal: `Earned Interest: +${Utils.formatCurrency(totalInterest)}`,
      isPositive: true,
      breakdown: [
        { label: "Initial Starting Capital", value: Utils.formatCurrency(principal) },
        { label: "Stated Annual Yield / APY", value: `${ratePct}%` },
        { label: "Compounding Horizon", value: `${years} Years` },
        { label: "Total Compounded Return", value: `+${Utils.formatCurrency(totalInterest)}` },
        { label: "Final Portfolio Balance", value: Utils.formatCurrency(futureVal) }
      ],
      copyText: `Compound Growth:\nPrincipal: $${principal} | Rate: ${ratePct}% | Years: ${years}\nFuture Value: ${Utils.formatCurrency(futureVal)} (Earned: ${Utils.formatCurrency(totalInterest)})`
    });
  },

  // 25. Investment Return Calculator
  investmentReturn() {
    const initial = Utils.parseNumber(document.getElementById('initialAmount')?.value);
    const finalVal = Utils.parseNumber(document.getElementById('finalAmount')?.value);
    const years = Utils.parseNumber(document.getElementById('years')?.value, 1);

    if (initial <= 0 || years <= 0) return;

    const totalReturnPct = ((finalVal - initial) / initial) * 100;
    const cagr = (Math.pow(finalVal / initial, 1 / years) - 1) * 100;

    Calculators.renderResult({
      primaryVal: Utils.formatPercent(totalReturnPct),
      secondaryVal: `Annualized CAGR: ${cagr.toFixed(2)}%`,
      isPositive: totalReturnPct >= 0,
      breakdown: [
        { label: "Starting Capital", value: Utils.formatCurrency(initial) },
        { label: "Terminal Valuation", value: Utils.formatCurrency(finalVal) },
        { label: "Investment Duration", value: `${years} Years` },
        { label: "Total Cumulative Return", value: Utils.formatPercent(totalReturnPct) },
        { label: "Compound Annual Growth Rate (CAGR)", value: `${cagr.toFixed(2)}%` }
      ],
      copyText: `Investment Return:\nInitial: $${initial} | Final: $${finalVal} | Horizon: ${years} yrs\nCumulative: ${totalReturnPct.toFixed(2)}% | CAGR: ${cagr.toFixed(2)}%`
    });
  },

  // 26. Portfolio Allocation Calculator
  portfolioAllocation() {
    const totalCapital = Utils.parseNumber(document.getElementById('totalCapital')?.value, 10000);
    const btcPct = Utils.parseNumber(document.getElementById('btcPct')?.value, 50);
    const ethPct = Utils.parseNumber(document.getElementById('ethPct')?.value, 30);
    const stablePct = Utils.parseNumber(document.getElementById('stablePct')?.value, 15);
    const altPct = Utils.parseNumber(document.getElementById('altPct')?.value, 5);

    const btcDollar = (totalCapital * btcPct) / 100;
    const ethDollar = (totalCapital * ethPct) / 100;
    const stableDollar = (totalCapital * stablePct) / 100;
    const altDollar = (totalCapital * altPct) / 100;

    Calculators.renderResult({
      primaryVal: Utils.formatCurrency(totalCapital),
      secondaryVal: `Allocated across 4 Segments`,
      isPositive: true,
      breakdown: [
        { label: `Bitcoin Allocation (${btcPct}%)`, value: Utils.formatCurrency(btcDollar) },
        { label: `Ethereum Allocation (${ethPct}%)`, value: Utils.formatCurrency(ethDollar) },
        { label: `Stablecoin Reserve (${stablePct}%)`, value: Utils.formatCurrency(stableDollar) },
        { label: `Alternative Assets (${altPct}%)`, value: Utils.formatCurrency(altDollar) }
      ],
      copyText: `Portfolio Allocation ($${totalCapital}):\nBTC: ${Utils.formatCurrency(btcDollar)} (${btcPct}%)\nETH: ${Utils.formatCurrency(ethDollar)} (${ethPct}%)\nStables: ${Utils.formatCurrency(stableDollar)} (${stablePct}%)\nAlts: ${Utils.formatCurrency(altDollar)} (${altPct}%)`
    });
  },

  // 27. Average Buy Price Calculator
  averageBuyPrice() {
    const p1 = Utils.parseNumber(document.getElementById('price1')?.value);
    const q1 = Utils.parseNumber(document.getElementById('qty1')?.value);
    const p2 = Utils.parseNumber(document.getElementById('price2')?.value);
    const q2 = Utils.parseNumber(document.getElementById('qty2')?.value);

    const totalCost = (p1 * q1) + (p2 * q2);
    const totalUnits = q1 + q2;
    if (totalUnits <= 0) return;

    const avgPrice = totalCost / totalUnits;

    Calculators.renderResult({
      primaryVal: Utils.formatCurrency(avgPrice),
      secondaryVal: `Total Coins: ${Utils.formatNumber(totalUnits, 4)}`,
      isPositive: true,
      breakdown: [
        { label: "First Buy Batch", value: `${q1} @ ${Utils.formatCurrency(p1)} (${Utils.formatCurrency(p1 * q1)})` },
        { label: "Second Buy Batch", value: `${q2} @ ${Utils.formatCurrency(p2)} (${Utils.formatCurrency(p2 * q2)})` },
        { label: "Total Capital Spent", value: Utils.formatCurrency(totalCost) },
        { label: "Weighted Average Buy Price", value: Utils.formatCurrency(avgPrice) }
      ],
      copyText: `Average Buy Price:\nBatch 1: ${q1} @ $${p1}\nBatch 2: ${q2} @ $${p2}\nWeighted Average Price: ${Utils.formatCurrency(avgPrice)}`
    });
  },

  // 28. Multiple Buy Price Calculator
  multipleBuyPrice() {
    Calculators.averageBuyPrice();
  },

  // 29. Target Price Calculator
  targetPrice() {
    const entry = Utils.parseNumber(document.getElementById('entryPrice')?.value);
    const desiredProfitPct = Utils.parseNumber(document.getElementById('desiredProfitPct')?.value, 25);

    if (entry <= 0) return;
    const target = entry * (1 + desiredProfitPct / 100);

    Calculators.renderResult({
      primaryVal: Utils.formatCurrency(target),
      secondaryVal: `+${desiredProfitPct}% Expansion Target`,
      isPositive: true,
      breakdown: [
        { label: "Entry Purchase Level", value: Utils.formatCurrency(entry) },
        { label: "Desired Gain Target", value: `+${desiredProfitPct}%` },
        { label: "Required Selling Exit Price", value: Utils.formatCurrency(target) }
      ],
      copyText: `Target Price:\nEntry: $${entry} | Desired Profit: +${desiredProfitPct}%\nTarget Price: ${Utils.formatCurrency(target)}`
    });
  },

  // 30. Required Return Calculator (Drawdown Recovery)
  requiredReturn() {
    const lossPct = Utils.parseNumber(document.getElementById('lossPct')?.value, 50);
    if (lossPct <= 0 || lossPct >= 100) return;

    // Required return = (loss / (100 - loss)) * 100
    const req = (lossPct / (100 - lossPct)) * 100;

    Calculators.renderResult({
      primaryVal: `+${req.toFixed(2)}%`,
      secondaryVal: `To recover from a -${lossPct}% loss`,
      isPositive: true,
      breakdown: [
        { label: "Incurred Loss Drawdown", value: `-${lossPct}%` },
        { label: "Remaining Capital Ratio", value: `${(100 - lossPct)}%` },
        { label: "Required Recovery Return", value: `+${req.toFixed(2)}%` }
      ],
      copyText: `Required Return to Break-Even:\nDrawdown: -${lossPct}%\nRequired Gain: +${req.toFixed(2)}%`
    });
  },

  // 31. Crypto Converter
  cryptoConverter() {
    const amount = Utils.parseNumber(document.getElementById('coinAmount')?.value, 1);
    const unitPrice = Utils.parseNumber(document.getElementById('unitPrice')?.value, 65000);

    const totalVal = amount * unitPrice;

    Calculators.renderResult({
      primaryVal: Utils.formatCurrency(totalVal),
      secondaryVal: `${amount} Units @ ${Utils.formatCurrency(unitPrice)}`,
      isPositive: true,
      breakdown: [
        { label: "Manual Unit Price Rate", value: Utils.formatCurrency(unitPrice) },
        { label: "Calculated Asset Volume", value: Utils.formatNumber(amount, 6) },
        { label: "Calculated Fiat Equivalent", value: Utils.formatCurrency(totalVal) }
      ],
      copyText: `Conversion:\n${amount} Coins @ $${unitPrice} = ${Utils.formatCurrency(totalVal)}`
    });
  },

  // 32. BTC to USD Calculator
  btcToUsd() {
    Calculators.cryptoConverter();
  },

  // 33. BTC to INR Calculator
  btcToInr() {
    const btcAmount = Utils.parseNumber(document.getElementById('coinAmount')?.value, 1);
    const btcInrPrice = Utils.parseNumber(document.getElementById('unitPrice')?.value, 5400000);

    const totalInr = btcAmount * btcInrPrice;

    Calculators.renderResult({
      primaryVal: Utils.formatCurrency(totalInr, 'INR'),
      secondaryVal: `${btcAmount} BTC @ ₹${Utils.formatNumber(btcInrPrice, 0)}`,
      isPositive: true,
      breakdown: [
        { label: "Manual BTC/INR Rate", value: `₹${Utils.formatNumber(btcInrPrice, 0)}` },
        { label: "Bitcoin Amount", value: `${btcAmount} BTC` },
        { label: "Total Indian Rupee Valuation", value: Utils.formatCurrency(totalInr, 'INR') }
      ],
      copyText: `BTC to INR:\n${btcAmount} BTC @ ₹${btcInrPrice} = ₹${totalInr.toLocaleString()}`
    });
  },

  // 34. ETH to USD Calculator
  ethToUsd() {
    Calculators.cryptoConverter();
  },

  // 35. ETH to INR Calculator
  ethToInr() {
    const ethAmount = Utils.parseNumber(document.getElementById('coinAmount')?.value, 1);
    const ethInrPrice = Utils.parseNumber(document.getElementById('unitPrice')?.value, 280000);

    const totalInr = ethAmount * ethInrPrice;

    Calculators.renderResult({
      primaryVal: Utils.formatCurrency(totalInr, 'INR'),
      secondaryVal: `${ethAmount} ETH @ ₹${Utils.formatNumber(ethInrPrice, 0)}`,
      isPositive: true,
      breakdown: [
        { label: "Manual ETH/INR Rate", value: `₹${Utils.formatNumber(ethInrPrice, 0)}` },
        { label: "Ethereum Amount", value: `${ethAmount} ETH` },
        { label: "Total Indian Rupee Valuation", value: Utils.formatCurrency(totalInr, 'INR') }
      ],
      copyText: `ETH to INR:\n${ethAmount} ETH @ ₹${ethInrPrice} = ₹${totalInr.toLocaleString()}`
    });
  },

  // 36. USDT to INR Calculator
  usdtToInr() {
    const usdtAmount = Utils.parseNumber(document.getElementById('coinAmount')?.value, 1000);
    const usdtRate = Utils.parseNumber(document.getElementById('unitPrice')?.value, 89.5);

    const totalInr = usdtAmount * usdtRate;

    Calculators.renderResult({
      primaryVal: Utils.formatCurrency(totalInr, 'INR'),
      secondaryVal: `${usdtAmount} USDT @ ₹${usdtRate}`,
      isPositive: true,
      breakdown: [
        { label: "Manual USDT/INR Rate", value: `₹${usdtRate}` },
        { label: "USDT Volume", value: `${usdtAmount} USDT` },
        { label: "Total Indian Rupee Valuation", value: Utils.formatCurrency(totalInr, 'INR') }
      ],
      copyText: `USDT to INR:\n${usdtAmount} USDT @ ₹${usdtRate} = ₹${totalInr.toLocaleString()}`
    });
  },

  // 37. Crypto Percentage Converter
  cryptoPercentageConverter() {
    const totalVal = Utils.parseNumber(document.getElementById('totalValue')?.value, 10000);
    const percentage = Utils.parseNumber(document.getElementById('percentage')?.value, 15);

    const result = (totalVal * percentage) / 100;

    Calculators.renderResult({
      primaryVal: Utils.formatCurrency(result),
      secondaryVal: `${percentage}% of ${Utils.formatCurrency(totalVal)}`,
      isPositive: true,
      breakdown: [
        { label: "Base Capital", value: Utils.formatCurrency(totalVal) },
        { label: "Percentage Fraction", value: `${percentage}%` },
        { label: "Resulting Portion", value: Utils.formatCurrency(result) }
      ],
      copyText: `Percentage Calculation:\n${percentage}% of $${totalVal} = ${Utils.formatCurrency(result)}`
    });
  },

  // 38. Satoshi Calculator
  satoshi() {
    const mode = document.getElementById('calcMode')?.value || 'btcToSats';
    const inputVal = Utils.parseNumber(document.getElementById('inputValue')?.value, 1);

    let btc = 0;
    let sats = 0;

    if (mode === 'btcToSats') {
      btc = inputVal;
      sats = inputVal * 100000000;
    } else {
      sats = inputVal;
      btc = inputVal / 100000000;
    }

    Calculators.renderResult({
      primaryVal: mode === 'btcToSats' ? Utils.formatSats(sats) : `${Utils.formatNumber(btc, 8)} BTC`,
      secondaryVal: mode === 'btcToSats' ? `From ${btc} BTC` : `From ${sats.toLocaleString()} SATS`,
      isPositive: true,
      breakdown: [
        { label: "Bitcoin Value", value: `${Utils.formatNumber(btc, 8)} BTC` },
        { label: "Satoshi Equivalent", value: `${Math.round(sats).toLocaleString()} SATS` },
        { label: "Conversion Ratio", value: "1 BTC = 100,000,000 SATS" }
      ],
      copyText: `Satoshi Conversion:\n${btc.toFixed(8)} BTC = ${Math.round(sats).toLocaleString()} SATS`
    });
  },

  // 39. Bitcoin Unit Converter
  bitcoinUnitConverter() {
    Calculators.satoshi();
  },

  // 40. Crypto Market Cap Calculator
  cryptoMarketCap() {
    const circulating = Utils.parseNumber(document.getElementById('circulatingSupply')?.value, 19700000);
    const price = Utils.parseNumber(document.getElementById('unitPrice')?.value, 65000);

    const mcap = circulating * price;

    Calculators.renderResult({
      primaryVal: Utils.formatCurrency(mcap),
      secondaryVal: `${Utils.formatNumber(circulating, 0)} Supply @ ${Utils.formatCurrency(price)}`,
      isPositive: true,
      breakdown: [
        { label: "Circulating Coin Supply", value: Utils.formatNumber(circulating, 0) },
        { label: "Per-Coin Unit Price", value: Utils.formatCurrency(price) },
        { label: "Market Capitalization", value: Utils.formatCurrency(mcap) }
      ],
      copyText: `Market Cap:\nSupply: ${circulating} | Price: $${price}\nMarket Cap: ${Utils.formatCurrency(mcap)}`
    });
  },

  // 41. Position Risk Calculator
  positionRisk() {
    Calculators.positionSize();
  },

  // 42. Trading Fee Calculator
  tradingFee() {
    const tradeVolume = Utils.parseNumber(document.getElementById('tradeVolume')?.value, 5000);
    const feeRatePct = Utils.parseNumber(document.getElementById('feeRatePct')?.value, 0.1);

    const feeAmount = (tradeVolume * feeRatePct) / 100;
    const netProceeds = tradeVolume - feeAmount;

    Calculators.renderResult({
      primaryVal: Utils.formatCurrency(feeAmount),
      secondaryVal: `Net Executed Value: ${Utils.formatCurrency(netProceeds)}`,
      isPositive: false,
      breakdown: [
        { label: "Nominal Trade Value", value: Utils.formatCurrency(tradeVolume) },
        { label: "Fee Tariff Rate", value: `${feeRatePct}%` },
        { label: "Deducted Exchange Commission", value: Utils.formatCurrency(feeAmount) },
        { label: "Remaining Net Capital", value: Utils.formatCurrency(netProceeds) }
      ],
      copyText: `Trading Fee:\nVolume: $${tradeVolume} @ ${feeRatePct}%\nFee Charged: ${Utils.formatCurrency(feeAmount)}`
    });
  },

  // 43. Slippage Calculator
  slippage() {
    const expected = Utils.parseNumber(document.getElementById('expectedPrice')?.value, 100);
    const executed = Utils.parseNumber(document.getElementById('executedPrice')?.value, 101.5);
    const quantity = Utils.parseNumber(document.getElementById('quantity')?.value, 10);

    const slipPerUnit = Math.abs(executed - expected);
    const slipPct = (slipPerUnit / expected) * 100;
    const totalSlipCost = slipPerUnit * quantity;

    Calculators.renderResult({
      primaryVal: `${slipPct.toFixed(2)}%`,
      secondaryVal: `Total Slippage Loss: ${Utils.formatCurrency(totalSlipCost)}`,
      isPositive: false,
      breakdown: [
        { label: "Quoted Expected Price", value: Utils.formatCurrency(expected) },
        { label: "Actual Executed Price", value: Utils.formatCurrency(executed) },
        { label: "Execution Slippage", value: `${slipPct.toFixed(2)}%` },
        { label: "Total Financial Impact", value: Utils.formatCurrency(totalSlipCost) }
      ],
      copyText: `Slippage:\nExpected: $${expected} | Executed: $${executed}\nSlippage: ${slipPct.toFixed(2)}% (Impact: ${Utils.formatCurrency(totalSlipCost)})`
    });
  },

  // 44. Risk Percentage Calculator
  riskPercentage() {
    Calculators.riskPerTrade();
  },

  // 45. Portfolio Profit Calculator
  portfolioProfit() {
    const initial = Utils.parseNumber(document.getElementById('initialPortfolio')?.value, 10000);
    const current = Utils.parseNumber(document.getElementById('currentPortfolio')?.value, 14500);

    const profit = current - initial;
    const roi = (profit / initial) * 100;

    Calculators.renderResult({
      primaryVal: Utils.formatCurrency(profit),
      secondaryVal: `Portfolio ROI: ${Utils.formatPercent(roi)}`,
      isPositive: profit >= 0,
      breakdown: [
        { label: "Starting Portfolio Basis", value: Utils.formatCurrency(initial) },
        { label: "Current Aggregated Value", value: Utils.formatCurrency(current) },
        { label: "Realized Net Expansion", value: Utils.formatCurrency(profit) },
        { label: "Total Return on Equity", value: Utils.formatPercent(roi) }
      ],
      copyText: `Portfolio Profit:\nInitial: $${initial} | Current: $${current}\nProfit: ${Utils.formatCurrency(profit)} (${roi.toFixed(2)}%)`
    });
  },

  // 46. Portfolio Loss Calculator
  portfolioLoss() {
    const initial = Utils.parseNumber(document.getElementById('initialPortfolio')?.value, 10000);
    const current = Utils.parseNumber(document.getElementById('currentPortfolio')?.value, 7500);

    const loss = initial - current;
    const lossPct = (loss / initial) * 100;

    Calculators.renderResult({
      primaryVal: `-${Utils.formatCurrency(loss)}`,
      secondaryVal: `Drawdown: -${lossPct.toFixed(2)}%`,
      isPositive: false,
      breakdown: [
        { label: "Starting Portfolio Basis", value: Utils.formatCurrency(initial) },
        { label: "Current Depressed Value", value: Utils.formatCurrency(current) },
        { label: "Portfolio Contraction", value: `-${Utils.formatCurrency(loss)}` },
        { label: "Drawdown Loss Percentage", value: `-${lossPct.toFixed(2)}%` }
      ],
      copyText: `Portfolio Loss:\nInitial: $${initial} | Current: $${current}\nLoss: -${lossPct.toFixed(2)}% (-${Utils.formatCurrency(loss)})`
    });
  },

  // 47. Price Change Calculator
  priceChange() {
    Calculators.percentageGain();
  },

  // 48. ATH/ATL Calculator
  athAtl() {
    const current = Utils.parseNumber(document.getElementById('currentPrice')?.value, 60000);
    const ath = Utils.parseNumber(document.getElementById('athPrice')?.value, 73750);
    const atl = Utils.parseNumber(document.getElementById('atlPrice')?.value, 3120);

    const downFromAth = ((ath - current) / ath) * 100;
    const upFromAtl = ((current - atl) / atl) * 100;

    Calculators.renderResult({
      primaryVal: `-${downFromAth.toFixed(1)}%`,
      secondaryVal: `Down from ATH | Up +${upFromAtl.toFixed(1)}% from ATL`,
      isPositive: false,
      breakdown: [
        { label: "Current Price", value: Utils.formatCurrency(current) },
        { label: "Historical All-Time High", value: Utils.formatCurrency(ath) },
        { label: "Drawdown from Peak ATH", value: `-${downFromAth.toFixed(2)}%` },
        { label: "Historical All-Time Low", value: Utils.formatCurrency(atl) },
        { label: "Recovery from Trough ATL", value: `+${upFromAtl.toFixed(2)}%` }
      ],
      copyText: `ATH/ATL Analysis:\nCurrent: $${current} | ATH: $${ath} | ATL: $${atl}\nDown from ATH: -${downFromAth.toFixed(2)}% | Up from ATL: +${upFromAtl.toFixed(2)}%`
    });
  },

  // 49. Market Cap Calculator
  marketCap() {
    Calculators.cryptoMarketCap();
  },

  // 50. Crypto Tax Estimator
  cryptoTax() {
    const costBasis = Utils.parseNumber(document.getElementById('costBasis')?.value, 10000);
    const proceeds = Utils.parseNumber(document.getElementById('proceeds')?.value, 18500);
    const taxRatePct = Utils.parseNumber(document.getElementById('taxRatePct')?.value, 20);

    const realizedGain = proceeds - costBasis;
    const estimatedTax = realizedGain > 0 ? (realizedGain * taxRatePct) / 100 : 0;
    const netAfterTax = proceeds - estimatedTax;

    Calculators.renderResult({
      primaryVal: Utils.formatCurrency(estimatedTax),
      secondaryVal: `Estimated Tax Due (Educational Estimate Only)`,
      isPositive: true,
      breakdown: [
        { label: "Acquisition Cost Basis", value: Utils.formatCurrency(costBasis) },
        { label: "Disposal Proceeds", value: Utils.formatCurrency(proceeds) },
        { label: "Net Realized Capital Gain", value: Utils.formatCurrency(realizedGain) },
        { label: "Applied Illustrative Tax Rate", value: `${taxRatePct}%` },
        { label: "Estimated Tax Liability", value: Utils.formatCurrency(estimatedTax) },
        { label: "Net Retained Proceeds", value: Utils.formatCurrency(netAfterTax) }
      ],
      copyText: `Crypto Tax Educational Estimate:\nCost Basis: $${costBasis} | Proceeds: $${proceeds}\nGain: ${Utils.formatCurrency(realizedGain)} | Tax Rate: ${taxRatePct}%\nEst. Tax: ${Utils.formatCurrency(estimatedTax)}`
    });
  },

  // Render Result Function
  renderResult({ primaryVal, secondaryVal, isPositive, breakdown, copyText }) {
    const heroBox = document.getElementById('resultHero');
    const primaryEl = document.getElementById('resultPrimaryVal');
    const secondaryEl = document.getElementById('resultSecondaryVal');
    const breakdownEl = document.getElementById('resultBreakdown');
    const copyBtn = document.getElementById('copyResultBtn');

    if (heroBox) {
      heroBox.className = `result-hero ${isPositive ? 'positive' : 'negative'}`;
    }
    if (primaryEl) primaryEl.textContent = primaryVal;
    if (secondaryEl) secondaryEl.textContent = secondaryVal;

    if (breakdownEl && breakdown) {
      breakdownEl.innerHTML = breakdown.map(item => `
        <div class="breakdown-row">
          <span class="breakdown-label">${item.label}</span>
          <span class="breakdown-value">${item.value}</span>
        </div>
      `).join('');
    }

    if (copyBtn && copyText) {
      copyBtn.onclick = () => Utils.copyToClipboard(copyText);
    }
  },

  reset(defaultFn) {
    const form = document.querySelector('.calc-form');
    if (form) form.reset();
    if (typeof defaultFn === 'function') defaultFn();
  }
};

window.Calculators = Calculators;
