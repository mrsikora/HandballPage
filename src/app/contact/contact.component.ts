import { Component, OnInit } from '@angular/core';
import { } from '@types/googlemaps';

declare const google: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const mapProp = {
      zoom: 5,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    const uluru = { lat: 50.066361, lng: 19.901186 };
    const map = new google.maps.Map(document.getElementById('map'), { zoom: 15, center: uluru });
    const marker = new google.maps.Marker({ position: uluru, map: map });

  }

}
