document.getElementById('togglePriceTrend').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default link behavior
  var priceTrendInfo = document.getElementById('priceTrendInfo');
  if (priceTrendInfo.style.display === 'none' || priceTrendInfo.style.display === '') {
    priceTrendInfo.style.display = 'block';
    this.textContent = 'Hide Price Trend'; // Change button text
  } else {
    priceTrendInfo.style.display = 'none';
    this.textContent = 'View Price Trend'; // Change button text back
  }
});
