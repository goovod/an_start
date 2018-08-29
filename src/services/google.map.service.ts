import {Injectable, ElementRef, NgZone } from '@angular/core';
import {MapsAPILoader} from '@agm/core';
import {GoogleMapInterface} from '../models/GoogleMapInterface';
import { } from 'googlemaps';

@Injectable({ providedIn: 'root' })

export class GoogleMapService {
  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) {}
  init(searchElementRef: ElementRef, model: GoogleMapInterface) {
    this.mapsAPILoader.load().then(() => {
      this.setCurrentPosition(model);
      const autocomplete = new google.maps.places.Autocomplete(searchElementRef.nativeElement, {
        types: ['address']
      });
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          const place: google.maps.places.PlaceResult = autocomplete.getPlace();

          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          model.latitude = place.geometry.location.lat();
          model.longitude = place.geometry.location.lng();
          model.address = place.formatted_address;
        });
      });
    });
  }

  private setCurrentPosition(model: GoogleMapInterface) {
    if ('geolocation' in navigator && model.address) {
      navigator.geolocation.getCurrentPosition((position) => {
        model.latitude = position.coords.latitude;
        model.longitude = position.coords.longitude;
      });
    }
  }
}
