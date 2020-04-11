
window.onload = function() {
    
}

var map;
var markers = [];
var infoWindow;

function initMap() {
    var losAngeles = {
        lat: 34.063380, 
        lng: -118.358080
    };

    map = new google.maps.Map(document.getElementById('map'), {
        center: losAngeles,
        zoom: 11,
        animation: google.maps.Animation.DROP,
        mapTypeId: 'roadmap',     
        styles: [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8ec3b9"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1a3646"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#4b6878"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#64779e"
      }
    ]
  },
  {
    "featureType": "administrative.province",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#4b6878"
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#334e87"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#283d6a"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6f9ba5"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3C7680"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#304a7d"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#98a5be"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2c6675"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#255763"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#b0d5ce"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#98a5be"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#283d6a"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3a4762"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#0e1626"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#4e6d70"
      }
    ]
  }
]
    });
    infoWindow = new google.maps.InfoWindow();
    searchStores();
    //setOnClickListener();
}

function displayStores(stores){
    var storesHtml = '';
    for(var [index, store] of stores.entries()){
        var address = store['addressLines'];
        var phone = store['phoneNumber'];
        storesHtml += `
            <div class="store-container">
                <div class="store-info-container">
                    <div class="store-address">
                        <span>${address[0]}</span>
                        <span>${address[1]}</span>
                    </div>
                    <div class="store-phone-number">${phone}</div>
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
function searchStores(){
    var foundStores = [];
    var zipCode = document.getElementById('zip-code-input').value;
    console.log(zipCode);
    if(zipCode){
        for(var store of stores){
            var postal = store ['address']['postalCode'].substring(0, 4);
            if(postal == zipCode){
                foundStores.push(store);
            }
        }
    }
    else{
        foundStores = stores;
    }
    clearLocations();
    showStoresMarkers(foundStores);
    displayStores(foundStores);
    setOnClickListener();

    
}
function clearLocations(){
    infoWindow.close();
    for (var i = 0; i < markers.length; i++){
        markers[i].setMap(null);
    }
}

function setOnClickListener(stores){
    var storeElements = document.querySelectorAll('.store-container');
    storeElements.forEach(function(elem,index){
        elem.addEventListener('click', function(){
            new google.maps.event.trigger(markers[index],'click');
        })
    })
    
}

function showStoresMarkers(stores){
    var bounds = new google.maps.LatLngBounds();
    for(var [index, store] of stores.entries()){
        var latlng = new google.maps.LatLng(
            store["coordinates"]["latitude"],
            store["coordinates"]["longitude"]);
        var name = store["name"];
        var address = store["addressLines"][0];
        var openStatusText = store['openStatusText']
        var phoneNumber = store['phoneNumber']

        bounds.extend(latlng);
        createMarker(latlng, name, address, index+1, phoneNumber, openStatusText, phoneNumber);
    }
    map.fitBounds(bounds);
}

function createMarker(latlng, name, address, index,phoneNumber, openStatusText, phoneNumber){
    var html = `
    <div class="store-info-window">
           <div class="store-info-name">
           ${name}
           </div>
           <div class="store-info-status">
           </div>
           <div class="store-info-address">
           <div class="circle">
           <img src="https://cdn1.iconfinder.com/data/icons/holiday-and-recreation/91/06-512.png">
           </div>
           <a class="infos"href="https://www.google.com/maps/dir/?api=1&destination=${address}" targer="blank"> 
           ${address}
           </div>
           <div class="phoneNumber">
           <div  class="circle">
           <i class="fas fa-exclamation-triangle"></i>
           </div>
           </a>
           ${phoneNumber}
           </div>
    </div>

    `    ;
    
    
    var icon = {
        url: "http://icons.iconarchive.com/icons/sonya/swarm/256/Surfer-icon.png", // url
        scaledSize: new google.maps.Size(50, 50)
      };
      
    var marker = new google.maps.Marker({
      map: map,
      icon:icon,
      position: latlng,
      label: index.toString()
    });
    marker.addListener('click', toggleBounce);
    google.maps.event.addListener(marker, 'click', function() {
      infoWindow.setContent(html);
      infoWindow.open(map, marker);

    });
    function toggleBounce() {
      if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
      } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
      }

     
  }
  
  marker.addListener('click', toggleBounce);
  markers.push(marker);



}