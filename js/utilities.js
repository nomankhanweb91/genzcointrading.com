/**
 * GENZCOINTRADING.COM — UTILITIES
 * Pure Vanilla JS formatting, clipboard, and arithmetic helpers.
 */

const Utils = {
  formatCurrency(num, currency = 'USD', decimals = 2) {
    if (isNaN(num) || num === null || num === undefined) return '$0.00';
    const absNum = Math.abs(num);
    const sign = num < 0 ? '-' : '';
    
    let symbol = '$';
    if (currency === 'INR') symbol = '₹';
    else if (currency === 'EUR') symbol = '€';
    else if (currency === 'GBP') symbol = '£';

    // Format with commas
    const parts = absNum.toFixed(decimals).split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return `${sign}${symbol}${parts.join('.')}`;
  },

  formatNumber(num, decimals = 2) {
    if (isNaN(num) || num === null || num === undefined) return '0.00';
    const parts = Number(num).toFixed(decimals).split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
  },

  formatPercent(num, decimals = 2) {
    if (isNaN(num) || num === null || num === undefined) return '0.00%';
    const sign = num > 0 ? '+' : '';
    return `${sign}${Number(num).toFixed(decimals)}%`;
  },

  formatSats(num) {
    if (isNaN(num)) return '0 SATS';
    return `${Math.round(num).toLocaleString()} SATS`;
  },

  parseNumber(val, defaultVal = 0) {
    if (val === undefined || val === null || val === '') return defaultVal;
    const clean = String(val).replace(/,/g, '').trim();
    const num = parseFloat(clean);
    return isNaN(num) ? defaultVal : num;
  },

  copyToClipboard(text, label = 'Result copied to clipboard!') {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(() => {
        Utils.showToast(label);
      }).catch(() => {
        Utils.fallbackCopy(text, label);
      });
    } else {
      Utils.fallbackCopy(text, label);
    }
  },

  fallbackCopy(text, label) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      Utils.showToast(label);
    } catch (err) {
      console.error('Copy failed', err);
    }
    document.body.removeChild(textArea);
  },

  showToast(message) {
    let toast = document.getElementById('copyToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'copyToast';
      toast.className = 'copy-toast';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2500);
  }
};

window.Utils = Utils;
