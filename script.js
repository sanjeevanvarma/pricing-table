const monthlyPrices = {
    USD: ['$9.99', '$19.99', '$44.99'],
    EUR: ['€8', '€17', '€44'],
    GBP: ['£5', '£15', '£35'],
    INR: ['₹499', '₹1299', '₹2999']
  };
  
  const annualPrices = {
    USD: ['$49.99', '$99.99', '$149.99'],
    EUR: ['€88', '€177', '€444'],
    GBP: ['£55', '£155', '£355'],
    INR: ['₹5999', '₹14999', '₹23999']
  };
  
  const currencySelect = document.getElementById('currency');
  const unitSelect = document.getElementById('unit');
  
  const basicPrice = document.getElementById('basic-price');
  const proPrice = document.getElementById('pro-price');
  const premiumPrice = document.getElementById('premium-price');
  
  const basicDuration = document.getElementById('basic-duration');
  const proDuration = document.getElementById('pro-duration');
  const premiumDuration = document.getElementById('premium-duration');
  
  const updatePricing = (currency, isAnnual) => {
    const prices = isAnnual ? annualPrices[currency] : monthlyPrices[currency];
    const duration = isAnnual ? '/ year' : '/ month';
  
    basicPrice.textContent = prices[0];
    proPrice.textContent = prices[1];
    premiumPrice.textContent = prices[2];
  
    basicDuration.textContent = duration;
    proDuration.textContent = duration;
    premiumDuration.textContent = duration;
  };
  
  updatePricing('USD', false);
  
  currencySelect.addEventListener('change', () => {
    const currency = currencySelect.value;
    const isAnnual = unitSelect.value === 'annually';
    updatePricing(currency, isAnnual);
  });
  
  unitSelect.addEventListener('change', () => {
    const currency = currencySelect.value;
    const isAnnual = unitSelect.value === 'annually';
    updatePricing(currency, isAnnual);
  });