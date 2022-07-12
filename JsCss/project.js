<!-- Picture slides -->
var value = 0; /* Slides */
Display();
getAPI();

function Display() {
    var pictures = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    for (var i = 0; i < pictures.length; i++) {
        pictures[i].style.display = "none";
    }
    value++;

    if (value > pictures.length) {value = 1}

    for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    pictures[value-1].style.display = "block";
    dots[value-1].className += " active";
    setTimeout(Display, 6000);
}

<!-- Map -->
var map = L.map('map').setView([0, 0],1)
L.tileLayer('https://api.maptiler.com/maps/pastel/256/{z}/{x}/{y}.png?key=yRXaTEUYutp5xQ7q0b3i',
    {attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>', }).addTo(map);

var circle = L.circle([35.89233, 14.50483], {
    color: 'green',
    fillColor: '#41d600',
    fillOpacity: 0.2,
    radius: 370
    }).addTo(map);

circle.bindPopup("<b><i> Il-Furjana </i></b>").openPopup();

var cirgroup = new L.featureGroup([circle]);
map.fitBounds(cirgroup.getBounds());

<!-- Weather API -->
function getAPI()
{
    var request = new XMLHttpRequest();
    var hpath = "http://api.weatherapi.com/v1/current.json?key=4375ca364f624769ab6121821200812&q=Floriana";
    var jsonAPI;

    request.open("GET", hpath, false);
    request.send();

    jsonAPI = JSON.parse(request.responseText);
    console.log(jsonAPI);

    document.getElementById("demo").innerHTML = "<b>Temperature:</b> "+jsonAPI.current.temp_c+ "<span>&#8451;</span>";
    document.getElementById("demotwo").innerHTML = "<b>Humidity:</b> "+jsonAPI.current.humidity+ "%";
    document.getElementById("Dir").innerHTML = "<b>Wind:</b> " +jsonAPI.current.wind_dir+ ", " +jsonAPI.current.wind_kph+ "km/h";
    document.getElementById("demothree").innerHTML = "<b>Last updated:</b> "+jsonAPI.current.last_updated;


}

