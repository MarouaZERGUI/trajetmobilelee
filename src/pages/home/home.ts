import {Component, Input, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  Start: any;
  End: any;

   geolocation: Geolocation;

  constructor(public navCtrl: NavController) {
  }

  ngOnInit(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };



        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: pos
        });



        var trafficLayer = new google.maps.TrafficLayer();
        trafficLayer.setMap(map);


        // Add marker
        const marker = new google.maps.Marker({position: pos, map: map});

      });
    }
  }

  calculateAndDisplayRoute() {

    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;

    navigator.geolocation.getCurrentPosition(function (position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: pos
      });
      directionsDisplay.setMap(map);

      var trafficLayer = new google.maps.TrafficLayer();
      trafficLayer.setMap(map);
    });

    if (this.End === undefined) {
      window.alert("Veuillez saisir une destination")
    }
    else if(this.Start === undefined)
    {
    }
    else {
      directionsService.route({
        origin: this.Start,
        destination: this.End,
        travelMode: 'TRANSIT'
      }, function (response, status) {
        if (status === 'OK') {
          directionsDisplay.setDirections(response);
        } else {
          window.alert('Les adresses spécifées sont erronées ! Veuillez réessayer');
        }
      });
    }
  }

  updateSearchResults()
  {
  }
}
