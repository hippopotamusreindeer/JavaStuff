 document.addEventListener('DOMContentLoaded', function() {
    // Funktion zur Aktualisierung der ProgressBar
    console.log('DOMContentLoaded Event wurde ausgelöst.');
  function updateProgressBar(currentTotalSupply) {
    console.log('updateProgressBar Funktion wird aufgerufen.'); // Hinzugefügt


  // Rest des Codes
    // Finde die Div-Boxen und die darin enthaltenen Werte
     const currentTotalSupplyBox = document.getElementById('currentTotalSupplyBox');
     const burnedAmountBox = document.getElementById('burnedAmountBox');
     const currentTotalSupplyText = document.getElementById('paragraph-14');
     const burnedAmountText = document.getElementById('paragraph-18');
    
     // Füge Log-Nachrichten hinzu, um die Elemente zu überprüfen
    console.log('currentTotalSupplyBox:', currentTotalSupplyBox);
    console.log('burnedAmountBox:', burnedAmountBox);
    console.log('updateProgressBar Funktion wurde aufgerufen.');
    
    // Finde die Werte in den Div-Boxen
    const initialTotalSupply = 3924917000;
    const currentSupplyInEther = currentTotalSupply / 10**18;
   /*  const currentTotalSupply = 2024917000; //CURENTTOTALSUPPLY!!! */

    currentTotalSupplyBox.setAttribute('data-current-total-supply', currentSupplyInEther);
    currentTotalSupplyText.innerText = `${currentSupplyInEther.toFixed(0)}`;
    console.log('currentSupplyInEther', currentSupplyInEther);

    const burnedAmount = initialTotalSupply - currentSupplyInEther; //WERT!!!

    burnedAmountBox.setAttribute('data-burned-amount', burnedAmount);
    burnedAmountText.innerText = `${burnedAmount.toFixed(0)}`;
    console.log('data-current-total-supply:', currentTotalSupplyBox.getAttribute('data-current-total-supply'));
    console.log('data-burned-amount:', burnedAmountBox.getAttribute('data-burned-amount'));
    // Berechnung der ProgressBar-Breite
    const progressBarWidth =  100;
    currentWidth = (currentSupplyInEther / initialTotalSupply) * 100;
    // Setze die Breite der Div-Boxen entsprechend
    currentTotalSupplyBox.style.width = currentWidth + '%';
    burnedAmountBox.style.width = (100 - currentWidth) + '%';
  }

  let currentTotalSupply;
window.onload = function() {
  //etherscan API aufrufen
const apiURL = 'https://api-goerli.etherscan.io/api?module=stats&action=tokensupply&contractaddress=0xce5024A464407dE4e9b3048bAA8FA2B742e87546&apikey=CPW6W5N4CP57EWQUF7T52GRAWA7DPHXMYGG' 
  fetch(apiURL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const currentTotalSupply = (data.result); // Etherscan Antwort
            console.log("Total Supply: ", currentTotalSupply);
            // Rufe updateProgressBar mit dem geladenen Wert auf
            updateProgressBar(currentTotalSupply);
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
      }  

});
