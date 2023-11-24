const submitbtn = document.getElementById("submitbtn");
const cityname = document.getElementById("cityname");
const city_name = document.getElementById("city_name");

const temp = document.getElementById("temp");
const temp_status = document.getElementById("temp_status");
const day_str = document.getElementById("day_str");
const Today_data = document.getElementById("Today_data");


const datahide = document.querySelector(".middle_layer");

const getInfo = async (event) => {
  event.preventDefault();

  let cityval = cityname.value;
  if (cityval == "") {
    city_name.innerText = `Plz write the name before search`;
    datahide.classList.add("data_hide");
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=bc7206d07029f559910a1c79622b88c1`;
      const response = await fetch(url);
      const data = await response.json();
      const arrData = [data];

      city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
      temp.innerText = (arrData[0].main.temp - 273.0).toFixed(2);

      const tempStatus = arrData[0].weather[0].main;
      if (tempStatus == "sunny") {
        temp_status.innerHTML = "<i class='fa-solid fa-sun fas' style='color:#eccc68'></i>";
      }
      else if (tempStatus == "Clouds") {
        temp_status.innerHTML = "<i class='fa-solid fa-cloud fas' style='color:#f1f1f6'></i>";
      }
      else if (tempStatus == "Rainy") {
        temp_status.innerHTML = "<i class='fa-solid fa-cloud-rain fas' style = 'color:#a4b0be'></i>";
      }
      else {
        temp_status.innerHTML = "<i class='fa-solid fa-cloud fas' style='color:#f1f1f6'></i>";
      }

      datahide.classList.remove("data_hide");

    } catch {
      city_name.innerText = `Plz Enter current city Name`;
    }
  }
};

submitbtn.addEventListener("click", getInfo);


const getCurrentDay = () => {
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thuesday";
  weekday[5] = "Friday";
  weekday[6] = "saterday";
  let currentTime = new Date();
  let day = weekday[currentTime.getDay()];
  return day;
};
day_str.innerHTML = getCurrentDay();


const getCurrentTime = () => {
  var months = ["Jan", "Fab", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
  let now = new Date();
  var month = months[now.getMonth()];
  var date = now.getDate();

  return `${date} ${month} `;
};
Today_data.innerHTML = getCurrentTime();


