import { User } from './User';
import { Company } from './Company';

/**
 * Instructions to every other class on how they can be an argument to `addMarker`.
 * Defining this interface allowed us to do a few important things:
 * 1. Remove the number of explicit Classes as accepted types to addMarker
 * - Instead, all Classes that want to work with `CustomMap` now need to satisfy the interface `Mappable` to function correctly.
 * 2. Allowed us to export the interface definition to import into classes for implementation.
 * - This means that TS now has a way of telling us when a new instance of a class is created incorrectly by enforcing the interface definition through the `implements` statement.
 */
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export class CustomMap {
  /**
   * Reminder: the `private` modifier means that we can only ref `googleMap` WITHIN this `CustomMap` class.
   */
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      center: {
        lat: 0,
        lng: 0,
      },
      zoom: 1,
    });
  }

  /**
   * Adds a marker to the google map in the browser at the defined lat and lng values
   * @function addMarker
   * @param {Mappable} mappable serves as gatekeeper to this method as long as the interface is satisfied.
   */
  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
