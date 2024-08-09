let totalKazanc = 0;
let currentCurrency = 'TL';
const exchangeRates = {
    'TL': 1,
    'USD': 0.030, // Örnek Dolar kuru (1 TL = 0.036 USD)
    'RUB': 2.61   // Örnek Ruble kuru (1 TL = 3.48 RUB)
};

function addTransaction() {
    const satinAlim = parseFloat(document.getElementById('satinalim').value);
    const satis = parseFloat(document.getElementById('satis').value);

    if (isNaN(satinAlim) || isNaN(satis)) {
        alert('Lütfen geçerli bir değer girin.');
        return;
    }

    const kazanc = satis - satinAlim;
    totalKazanc += kazanc;

    const historyDiv = document.getElementById('history');
    const transactionDiv = document.createElement('div');
    transactionDiv.classList.add('transaction');
    transactionDiv.innerHTML = `
        <p>Alındı: ${satinAlim} TL</p>
        <p>Satıldı: ${satis} TL</p>
        <p>Kazanç: ${kazanc} TL</p>
        <p>Tarih: ${new Date().toLocaleString()}</p>
    `;
    historyDiv.appendChild(transactionDiv);
    historyDiv.scrollTop = historyDiv.scrollHeight;

    updateKazancDisplay();
    document.getElementById('satinalim').value = '';
    document.getElementById('satis').value = '';
}

function updateKazancDisplay() {
    const kazancElement = document.getElementById('kazanc');
    const convertedKazanc = totalKazanc * exchangeRates[currentCurrency];
    kazancElement.textContent = `${convertedKazanc.toFixed(2)} ${currentCurrency}`;
}

function resetHistory() {
    totalKazanc = 0;
    updateKazancDisplay();
    document.getElementById('history').innerHTML = '';
}

function updateCurrency() {
    currentCurrency = document.getElementById('currency').value;
    updateKazancDisplay();
}
