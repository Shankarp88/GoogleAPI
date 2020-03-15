//************ Javascript for GoogleMaps API Application ***************//

// wrap entire js code in event listener to make sure dom has loaded before running
document.addEventListener("DOMContentLoaded", function() {
  
// create variables to create the script tags that will be injected into the head of the DOM/html file
// then set the src attribute for the js_file being injected to the google maps api with key added
// then append it to the head tag
var js_file = document.createElement('script');
    js_file.type = 'text/javascript';
    js_file.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDVnaFb8qz7-L04Em2sogb8L_eVE2sFX4s&callback=initMap';
    document.getElementsByTagName('head')[0].appendChild(js_file);
    

var map;
// changing 'function initMap to window.initMap = function apparently solved the rendering problem by moving the function
// to the global scope so that when the api url makes the initMap callback (at the very end of url), it can be read. 
// Was getting an "uncaught promise error: initMap is not a function" until this was changed
window.initMap = function() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 33.76, lng: -84.39},
        zoom: 5
});
// set starting lat/long to Atlanta    
var myLatlng = new google.maps.LatLng(33.76, -84.39);
          
var mapOptions = {
zoom: 6.5,
center: myLatlng
};
    
var map = new google.maps.Map(
document.getElementById("map"),
mapOptions
);

var marker = new google.maps.Marker({
position: myLatlng,
title: "Atlanta,GA 'Capital of the South'"
});
    
marker.setMap(map);
    
}

});