"use client";

// biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

interface MapComponentProps {
  latitude: number;
  longitude: number;
  childName: string;
}

const MapComponent = ({ latitude, longitude, childName }: MapComponentProps) => {
  // Note: You'll need to add your Google Maps API key to environment variables
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";

  if (!apiKey) {
    return (
      <div className="flex items-center justify-center h-[600px] bg-neutral-100 rounded-lg border-2 border-dashed border-neutral-300">
        <div className="text-center p-8">
          <p className="text-neutral-600 mb-2">
            يرجى إضافة مفتاح Google Maps API
          </p>
          <p className="text-sm text-neutral-500">
            أضف NEXT_PUBLIC_GOOGLE_MAPS_API_KEY في ملف .env.local
          </p>
        </div>
      </div>
    );
  }

  return (
    <APIProvider apiKey={apiKey}>
      <div className="h-[600px] w-full rounded-lg overflow-hidden shadow-lg">
        <Map
          defaultCenter={{ lat: latitude, lng: longitude }}
          defaultZoom={15}
          mapId="DEMO_MAP_ID"
          gestureHandling="greedy"
          disableDefaultUI={false}
        >
          <Marker
            position={{ lat: latitude, lng: longitude }}
            title={`موقع ${childName}`}
          />
        </Map>
      </div>
    </APIProvider>
  );
};

export default MapComponent;
