interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
}

export class CustomMap {
  private newMap: google.maps.Map;
  constructor(elementId: string) {
    this.newMap = new google.maps.Map(document.getElementById(elementId), {
      zoom: 1,
      center: { lat: 0, lng: 0 },
    });
  }

  addMarker(entity: Mappable): void {
    new google.maps.Marker({ map: this.newMap, position: entity.location });
  }
}
