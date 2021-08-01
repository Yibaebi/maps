// A key to add marker method. Any class/entity that wishes
// to utilize the add marker method must satisfy this interface
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
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
    const marker = new google.maps.Marker({ map: this.newMap, position: entity.location });
    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({ content: entity.markerContent() });
      infoWindow.open(this.newMap, marker);
    });
  }
}
