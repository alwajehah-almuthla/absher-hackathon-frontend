import type { TourismPlace } from "@/api/types";
import { LuMapPin } from "react-icons/lu";

interface TourismPlaceCardProps {
  place: TourismPlace;
}

const TourismPlaceCard = ({ place }: TourismPlaceCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md transition-shadow hover:shadow-lg p-6 flex flex-col gap-4">
      <div className="flex items-start justify-between">
        <h3 className="text-2xl font-semibold text-neutral-800 flex-1">
          {place.name}
        </h3>
        {place.type && (
          <span className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap mr-2">
            {place.type}
          </span>
        )}
      </div>

      {place.description && (
        <p className="text-neutral-600 text-sm line-clamp-3">
          {place.description}
        </p>
      )}

      <div className="space-y-2 text-neutral-600">
        <div className="flex items-center gap-2">
          <LuMapPin className="text-primary-500 flex-shrink-0" size={18} />
          <span className="text-sm font-medium">{place.city}</span>
        </div>
      </div>

      {place.imageUrl && (
        <div className="mt-2 h-48 rounded-lg overflow-hidden bg-neutral-100">
          {/* biome-ignore lint/a11y/useAltText: <explanation> */}
          <img
            src={place.imageUrl}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="mt-2 pt-4 border-t border-neutral-200">
        <div className="flex items-center justify-between text-sm text-neutral-500">
          <span>الإحداثيات:</span>
          <span className="font-mono text-xs">
            {Number.parseFloat(place.latitude).toFixed(4)}, {Number.parseFloat(place.longitude).toFixed(4)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TourismPlaceCard;
