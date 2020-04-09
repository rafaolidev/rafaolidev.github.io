
window.onload = function() {
  displayStores();
}
var map;
var markers = [];

function initMap() {

    var losAngeles = {
        lat: 34.063380, 
        lng: -118.358080
      };
    map = new google.maps.Map(document.getElementById('map'), {
      center: losAngeles,
      zoom: 11,
      mapTypeId: 'roadmap',
      styles: [
        {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
        {
          featureType: 'administrative.locality',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [{color: '#263c3f'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [{color: '#6b9a76'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{color: '#38414e'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry.stroke',
          stylers: [{color: '#212a37'}]
        },
        {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [{color: '#9ca5b3'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{color: '#746855'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{color: '#1f2835'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.fill',
          stylers: [{color: '#f3d19c'}]
        },
        {
          featureType: 'transit',
          elementType: 'geometry',
          stylers: [{color: '#2f3948'}]
        },
        {
          featureType: 'transit.station',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{color: '#17263c'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [{color: '#515c6d'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.stroke',
          stylers: [{color: '#17263c'}]
        }
      ],
      
    });
    infoWindow = new google.maps.InfoWindow();

    showStoresMarkers();
    
  } 

function displayStores(){
  var storesHtml ='';
  for(var [index, store] of stores.entries()){
    var address = store ['addressLines'];
    var phone = store ['phoneNumber'];
    storesHtml += `
    <div class="store-container">
                   <div class="store-info-container">
                          <div class="store-address">
                                 ${address[0]}<br> ${address[1]}
                          </div>
                          <div class="store-phone-number"> ${phone} </div>
                       </div>
                   <div class="store-number-container">
                       <div class="store-number"> 
                       ${index+1}
                       </div>
                   </div>
                 
            
                </div>
    
    `
    document.querySelector('.stores-list').innerHTML = storesHtml;
    
    
  
  }
}   

    
function showStoresMarkers(){
  var bounds = new google.maps.LatLngBounds();
  for(var [index, store] of stores.entries()){
      var latlng = new google.maps.LatLng(
          store["coordinates"]["latitude"],
          store["coordinates"]["longitude"]);
      var name = store["name"];
      var address = store["addressLines"][0];

      bounds.extend(latlng);
      createMarker(latlng, name, address, index+1)
  }
  map.fitBounds(bounds);
}

function createMarker(latlng, name, address, index){
  var icon = {
      url: "https://upload.wikimedia.org/wikipedia/sco/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/297px-Starbucks_Corporation_Logo_2011.svg.png", // url
      scaledSize: new google.maps.Size(35, 35)
    };
  var marker = new google.maps.Marker({
    map: map,
    position: latlng,
    animation: google.maps.Animation.DROP,
    icon:icon, 
  });
  var html = "<b>" + name + "</b> <br/>" + address;
  google.maps.event.addListener(marker, 'click', function() {
    infoWindow.setContent(html);
    infoWindow.open(map, marker);
  });
  markers.push(marker);
}



