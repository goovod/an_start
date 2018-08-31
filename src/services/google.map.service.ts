import {Injectable, ElementRef, NgZone } from '@angular/core';
import {MapsAPILoader} from '@agm/core';
import { GoogleMapInterface } from '../models/GoogleMapInterface';
import { } from 'googlemaps';
import {FormGroup} from '@angular/forms';

@Injectable({ providedIn: 'root' })

export class GoogleMapService {
  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) {}
  init(searchElementRef: ElementRef, model: GoogleMapInterface, form?: FormGroup) {
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
          if (form) {
            form.get('address').setValue(place.formatted_address);
            form.get('latitude').setValue(place.geometry.location.lat());
            form.get('longitude').setValue(place.geometry.location.lng());
          }
          model.latitude = place.geometry.location.lat();
          model.longitude = place.geometry.location.lng();
          model.address = place.formatted_address;
        });
      });
    });
  }

  private setCurrentPosition(model: GoogleMapInterface) {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        model.latitude = position.coords.latitude;
        model.longitude = position.coords.longitude;
      });
    }
  }
}
