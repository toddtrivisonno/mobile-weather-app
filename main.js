document.getElementById('submit').addEventListener('click', getReport);


function getReport() {
   console.log('submit pressed');

   let zip = document.getElementById('zipCode').value;
   console.log(zip);

   const apiURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
   const apiKey = '&APPID=596b042b52ac7e2e0c5b0b12e2dd4e6a';
   const zipURL = apiURL + zip + apiKey;

   console.log(zipURL);

   fetch(zipURL)
      .then(
         function (x) {
            console.log(x);
            if(x.status === 200) {
               $('.alert').addClass('d-none').removeClass('show');
               return x.json();
            } else {
               $('.alert').removeClass('d-none').addClass('show');
               // document.getElementById('error').setAttribute('display', d-block);
            }
         }
      ).then(
         function (response) {
               let city = response.name;
               document.getElementById('city').innerHTML = city;

               let tempK = response.main.temp;
               document.getElementById('kel').innerHTML = Math.round(tempK) + " K";

               let tempC = response.main.temp;
               document.getElementById('cel').innerHTML = Math.round(Number(tempC - 273.15)) + " C";

               let tempF = response.main.temp;
               document.getElementById('fahr').innerHTML = Math.round(Number((tempF - 273.15) * (9 / 5) + 32)) + " F";

               let condition = response['weather'][0]['main'];
               document.getElementById('condition').innerHTML = condition;

               let seasonIcon = response['weather'][0]['icon'];
               const iconURL = "http://openweathermap.org/img/w/" + seasonIcon + ".png";
               document.getElementById('seasonDisplay').innerHTML = '<img src="' + iconURL + '">';



               console.log(response);
            
         })
}

//ids = "city", "fahr", "cel", "kel", "condition", "seasonDisplay"
//keys = "name", "main.temp", weather.main, weather.icon