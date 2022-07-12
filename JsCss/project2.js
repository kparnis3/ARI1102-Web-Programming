<!-- Second Page map-->
var mymap = L.map('mapid').setView([35.89275748785538, 14.504974052144172], 15)

L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=yRXaTEUYutp5xQ7q0b3i', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',

}).addTo(mymap);

var Icon = L.icon({
    iconUrl: 'images/pin-m-religious-christian5E74F32x.png',
    iconSize: [38,95],
    iconAnchor: [19,47.5],
    popupAnchor: [0,-40],
})

var marker2 = L.marker([35.89275748785538, 14.504974052144172], {icon:Icon}).addTo(mymap);
marker2.bindPopup("<b><i>Location of Church</i></b>").openPopup();