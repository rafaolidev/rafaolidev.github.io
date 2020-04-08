function initMap() {

    var losAngeles = {
        lat: 34.063380, 
        lng: -118.358080
      };
    map = new google.maps.Map(document.getElementById('map'), {
      center: losAngeles,
      zoom: 11,
      mapTypeId: 'roadmap',
    });
    var manhattan = {
        lat: 33.885442,
        lng: -118.411091
        
    };
    var hermosabeach = {
        lat: 33.860387,
        lng: -118.400573
        
    };
    var redondobeach = {
        lat: 33.846439,
        lng: -118.391473
        
    };
    var burnoutbeach = {
        lat: 33.815820,
        lng: -118.390278
        
    };
    var marker = new google.maps.Marker({
        position: manhattan,
        icon: {    
            url: drawMarker("#000")
          },
        map: map,
        title: '209-201 12th St,\n Manhattan Beach,\n CA 90266, EUA'
      });
      var marker = new google.maps.Marker({
        position: hermosabeach,
        icon: {    
            url: drawMarker("#000")
          },
        map: map,
        title: 'Hermosa Beach,\n CA 90254,\n EUA'
      });
      var marker = new google.maps.Marker({
        position: redondobeach,
        icon: {    
            url: drawMarker("#000")
          },
        map: map,
        title: '1898-1800 Esplanade,\n Redondo Beach,\n CA 90277, EUA',
      });
      var marker = new google.maps.Marker({
        position: burnoutbeach,
        icon: {    
            url: drawMarker("#000")
          },
        map: map,
        title: '1898-1800 Esplanade,\n Redondo Beach,\n CA 90277, EUA'
      });
      
      function drawMarker(color){
        return 'data:image/svg+xml;utf-8, \
        <svg width="54px" height="54px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="umbrella-beach" class="svg-inline--fa fa-umbrella-beach fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M115.38 136.9l102.11 37.18c35.19-81.54 86.21-144.29 139-173.7-95.88-4.89-188.78 36.96-248.53 111.8-6.69 8.4-2.66 21.05 7.42 24.72zm132.25 48.16l238.48 86.83c35.76-121.38 18.7-231.66-42.63-253.98-7.4-2.7-15.13-4-23.09-4-58.02.01-128.27 69.17-172.76 171.15zM521.48 60.5c6.22 16.3 10.83 34.6 13.2 55.19 5.74 49.89-1.42 108.23-18.95 166.98l102.62 37.36c10.09 3.67 21.31-3.43 21.57-14.17 2.32-95.69-41.91-187.44-118.44-245.36zM560 447.98H321.06L386 269.5l-60.14-21.9-72.9 200.37H16c-8.84 0-16 7.16-16 16.01v32.01C0 504.83 7.16 512 16 512h544c8.84 0 16-7.17 16-16.01v-32.01c0-8.84-7.16-16-16-16z"></path></svg>';
      }

  } 