// Global type declarations for Google Maps
declare global {
  interface Window {
    google: typeof google;
  }
  
  namespace google {
    namespace maps {
      class Map {
        constructor(mapDiv: HTMLElement, opts?: any);
      }
      class DirectionsService {
        constructor();
        route(request: any, callback: any): void;
      }
      class DirectionsRenderer {
        constructor(opts?: any);
        setMap(map: Map): void;
        setDirections(result: any): void;
      }
      class Marker {
        constructor(opts: any);
        setAnimation(animation: any): void;
        addListener(event: string, handler: () => void): void;
      }
      class InfoWindow {
        constructor(opts: any);
        open(map: Map, marker: Marker): void;
        close(): void;
      }
      class Polyline {
        constructor(opts: any);
        setMap(map: Map): void;
      }
      class LatLng {
        constructor(lat: number, lng: number);
      }
      class Size {
        constructor(width: number, height: number);
      }
      class Point {
        constructor(x: number, y: number);
      }
      namespace event {
        function addListener(instance: any, eventName: string, handler: () => void): void;
      }
      enum MapTypeId {
        ROADMAP = 'roadmap'
      }
      enum Animation {
        DROP = 1
      }
    }
  }
}

export {};
