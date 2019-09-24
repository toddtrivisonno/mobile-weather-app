document.getElementById('submit').addEventListener('click', getReport);

function getReport() {
   console.log('submit pressed');
   
   let zip = document.getElementById('zipCode').value
   console.log(zip);
   
   const apiURL = 'api.openweathermap.org/data/2.5/weather?zip=';
   const apiKey = '596b042b52ac7e2e0c5b0b12e2dd4e6a';
   const zipURL = apiURL + zip + apiKey;
   console.log(zipURL);
}
