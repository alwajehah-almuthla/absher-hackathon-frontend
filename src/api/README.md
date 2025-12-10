# Absher Hackathon - Frontend API Client

Type-safe React Query hooks for the Absher Hackathon Backend API.

## Installation

```bash
npm install @tanstack/react-query ky
# or
bun add @tanstack/react-query ky
```

## Setup

### 1. Configure QueryClient in your app

```tsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* Your app */}
    </QueryClientProvider>
  );
}
```

### 2. Copy the API client files

Copy the `frontend-api` folder to your frontend project (e.g., `src/lib/api/`).

## Usage Examples

### Tabaani (Child Tracking)

```tsx
import { useChildren, useChildLocation } from "@/lib/api/queries";

function ChildrenList() {
  const { data: children, isLoading } = useChildren();

  if (isLoading) return <div>Loading...</div>;

  return (
    <ul>
      {children?.map((child) => (
        <li key={child.id}>{child.name}</li>
      ))}
    </ul>
  );
}

function ChildLocationTracker({ childId }: { childId: string }) {
  const { data: location } = useChildLocation(childId);

  return (
    <div>
      <h3>{location?.childName}</h3>
      <p>Last seen at: {location?.address}</p>
      <p>Coordinates: {location?.latitude}, {location?.longitude}</p>
    </div>
  );
}
```

### Events

```tsx
import { useEvents, useEvent } from "@/lib/api/queries";

function EventsList() {
  const { data: events } = useEvents();

  return (
    <div>
      {events?.map((event) => (
        <div key={event.id}>
          <h3>{event.name}</h3>
          <p>{event.description}</p>
          <p>
            {event.startDate} - {event.endDate}
          </p>
        </div>
      ))}
    </div>
  );
}

function EventDetails({ eventId }: { eventId: string }) {
  const { data: event, isLoading } = useEvent(eventId);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1>{event?.name}</h1>
      <p>{event?.description}</p>
      <a href={event?.registrationLink}>Register</a>
    </div>
  );
}
```

### Tourism

```tsx
import {
  useTourismPlaces,
  useNearbyTourismPlaces,
  useTourismPlace,
} from "@/lib/api/queries";

function TourismPlaces() {
  const { data: places } = useTourismPlaces();

  return (
    <div>
      {places?.map((place) => (
        <div key={place.id}>
          <h3>{place.name}</h3>
          <p>{place.description}</p>
        </div>
      ))}
    </div>
  );
}

function NearbyPlaces() {
  const { data: nearbyPlaces } = useNearbyTourismPlaces({
    lat: 24.7,
    lng: 46.7,
    radius: 10, // 10km radius
  });

  return (
    <div>
      <h2>Places within 10km</h2>
      {nearbyPlaces?.map((place) => (
        <div key={place.id}>{place.name}</div>
      ))}
    </div>
  );
}
```

### Seed Data (Development Only)

```tsx
import {
  useSeedAll,
  useSeedUsers,
  useSeedChildren,
  useSeedEvents,
  useSeedTourism,
  useClearSeed,
} from "@/lib/api/queries";

function DevTools() {
  const seedAll = useSeedAll();
  const clearSeed = useClearSeed();

  return (
    <div>
      <button onClick={() => seedAll.mutate()}>
        Seed All Data
      </button>
      <button onClick={() => clearSeed.mutate()}>
        Clear All Data
      </button>
    </div>
  );
}
```

## API Endpoints

### Tabaani
- `GET /api/tabaani/children` - Get all children under 18
- `GET /api/tabaani/location/{childId}` - Get child's random location in Riyadh

### Events
- `GET /api/events` - List all events
- `GET /api/events/{eventId}` - Get event details

### Tourism
- `GET /api/tourism/explore` - Get all tourism places
- `GET /api/tourism/nearby?lat={lat}&lng={lng}&radius={radius}` - Get nearby places
- `GET /api/tourism/{placeId}` - Get tourism place details

### Seed (Development)
- `POST /api/seed/users` - Seed 5 users
- `POST /api/seed/children` - Seed 10 children
- `POST /api/seed/events` - Seed 8 events
- `POST /api/seed/tourism` - Seed 10 tourism places
- `POST /api/seed/all` - Seed all data
- `DELETE /api/seed/clear` - Clear all data

## Type Safety

All hooks are fully typed with TypeScript. Import types from `@/lib/api/types`:

```tsx
import type { Child, Event, TourismPlace, ChildLocation } from "@/lib/api/types";
```

## Error Handling

```tsx
function MyComponent() {
  const { data, isLoading, error } = useChildren();

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <div>{/* Render data */}</div>;
}
```

## Environment Variables

Set your API URL in `.env`:

```env
# Development
NODE_ENV=development

# Production
NODE_ENV=production
```

The client automatically uses:
- Development: `http://localhost:3333`
- Production: `https://api.absher-hackathon.com`
