# Frontend API Usage Guide

## Quick Start

### 1. Import the default parent constant

```tsx
import { DEFAULT_PARENT_NATIONAL_ID } from "@/lib/api/constants";
```

### 2. Use in your components

```tsx
import { useChildren, useChildLocation } from "@/lib/api/queries";
import { DEFAULT_PARENT_NATIONAL_ID } from "@/lib/api/constants";

function App() {
  // Get children for the default test parent (محمد عبدالله العتيبي)
  const { data: children, isLoading } = useChildren(DEFAULT_PARENT_NATIONAL_ID);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1>My Children</h1>
      {children?.map((child) => (
        <ChildCard key={child.id} child={child} />
      ))}
    </div>
  );
}
```

## Complete Example: Child Tracking App

```tsx
import { useState } from "react";
import {
  useChildren,
  useChildLocation,
  useEvents,
  useTourismPlaces,
} from "@/lib/api/queries";
import { DEFAULT_PARENT_NATIONAL_ID, TEST_PARENTS } from "@/lib/api/constants";

function ChildTrackingApp() {
  const [selectedChildId, setSelectedChildId] = useState<string | null>(null);

  // Get children for the default parent
  const { data: children, isLoading: childrenLoading } = useChildren(
    DEFAULT_PARENT_NATIONAL_ID
  );

  // Get selected child's location
  const { data: location, isLoading: locationLoading } = useChildLocation(
    selectedChildId || "",
    !!selectedChildId // only fetch if a child is selected
  );

  // Get events
  const { data: events } = useEvents();

  // Get tourism places
  const { data: places } = useTourismPlaces();

  if (childrenLoading) {
    return <div>Loading children...</div>;
  }

  return (
    <div className="app">
      <header>
        <h1>Tabaani - Child Tracker</h1>
        <p>Parent: {TEST_PARENTS.PARENT_1.name}</p>
      </header>

      <section className="children-list">
        <h2>My Children</h2>
        {children?.map((child) => (
          <button
            key={child.id}
            onClick={() => setSelectedChildId(child.id)}
            className={selectedChildId === child.id ? "active" : ""}
          >
            {child.name}
          </button>
        ))}
      </section>

      {selectedChildId && (
        <section className="child-location">
          <h2>Current Location</h2>
          {locationLoading ? (
            <div>Loading location...</div>
          ) : (
            location && (
              <div>
                <p>
                  <strong>Child:</strong> {location.childName}
                </p>
                <p>
                  <strong>Location:</strong> {location.address}
                </p>
                <p>
                  <strong>Coordinates:</strong> {location.latitude},{" "}
                  {location.longitude}
                </p>
                <p>
                  <strong>Last Update:</strong>{" "}
                  {new Date(location.timestamp).toLocaleString()}
                </p>
                <button onClick={() => refetch()}>Refresh Location</button>
              </div>
            )
          )}
        </section>
      )}

      <section className="events">
        <h2>Upcoming Events</h2>
        <div className="events-grid">
          {events?.map((event) => (
            <div key={event.id} className="event-card">
              <h3>{event.name}</h3>
              <p>{event.description}</p>
              <p>
                {new Date(event.startDate).toLocaleDateString()} -{" "}
                {new Date(event.endDate).toLocaleDateString()}
              </p>
              <a href={event.registrationLink}>Register</a>
            </div>
          ))}
        </div>
      </section>

      <section className="tourism">
        <h2>Places to Visit in Riyadh</h2>
        <div className="places-grid">
          {places?.map((place) => (
            <div key={place.id} className="place-card">
              <h3>{place.name}</h3>
              <p>{place.description}</p>
              <p>
                <strong>Type:</strong> {place.type}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
```

## Using Different Test Parents

```tsx
import { TEST_PARENTS } from "@/lib/api/constants";

// Use a different parent
function ParentSelector() {
  const [selectedParentId, setSelectedParentId] = useState(
    TEST_PARENTS.PARENT_1.nationalId
  );

  const { data: children } = useChildren(selectedParentId);

  return (
    <div>
      <select
        value={selectedParentId}
        onChange={(e) => setSelectedParentId(e.target.value)}
      >
        {Object.entries(TEST_PARENTS).map(([key, parent]) => (
          <option key={key} value={parent.nationalId}>
            {parent.name} ({parent.children.length} children)
          </option>
        ))}
      </select>

      <div>
        {children?.map((child) => (
          <div key={child.id}>{child.name}</div>
        ))}
      </div>
    </div>
  );
}
```

## Real-time Location Tracking

```tsx
import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";

function RealTimeTracker({ childId }: { childId: string }) {
  const queryClient = useQueryClient();
  const { data: location } = useChildLocation(childId);

  // Refresh location every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      queryClient.invalidateQueries({
        queryKey: ["tabaani", "location", childId],
      });
    }, 10000);

    return () => clearInterval(interval);
  }, [childId, queryClient]);

  return (
    <div>
      <h3>{location?.childName}</h3>
      <p>Last seen: {location?.address}</p>
      <Map
        center={{
          lat: location?.latitude || 0,
          lng: location?.longitude || 0,
        }}
      />
    </div>
  );
}
```

## Nearby Tourism Places

```tsx
import { useNearbyTourismPlaces } from "@/lib/api/queries";

function NearbyPlaces({ childLocation }: { childLocation: ChildLocation }) {
  const { data: nearbyPlaces } = useNearbyTourismPlaces({
    lat: childLocation.latitude,
    lng: childLocation.longitude,
    radius: 5, // 5km radius
  });

  return (
    <div>
      <h3>Nearby Places ({nearbyPlaces?.length || 0})</h3>
      {nearbyPlaces?.map((place) => (
        <div key={place.id}>
          <h4>{place.name}</h4>
          <p>{place.description}</p>
        </div>
      ))}
    </div>
  );
}
```

## Development Tools

```tsx
import { useSeedAll, useClearSeed } from "@/lib/api/queries";

function DevTools() {
  const seedAll = useSeedAll();
  const clearSeed = useClearSeed();

  return (
    <div className="dev-tools">
      <h3>Development Tools</h3>
      <button
        onClick={() => seedAll.mutate()}
        disabled={seedAll.isPending}
      >
        {seedAll.isPending ? "Seeding..." : "Seed All Data"}
      </button>
      <button
        onClick={() => clearSeed.mutate()}
        disabled={clearSeed.isPending}
      >
        {clearSeed.isPending ? "Clearing..." : "Clear All Data"}
      </button>
      {seedAll.isError && <p>Error: {seedAll.error.message}</p>}
      {seedAll.isSuccess && <p>✓ Data seeded successfully!</p>}
    </div>
  );
}
```

## API Endpoints Reference

### Updated Tabaani Endpoint

```
GET /api/tabaani/children/{parentNationalId}
```

**Parameters:**
- `parentNationalId` (path) - 10-digit national ID of the parent

**Response:**
```json
{
  "success": true,
  "message": "Children retrieved successfully",
  "data": [
    {
      "id": "uuid",
      "parentId": "uuid",
      "nationalId": "1111111111",
      "name": "أحمد محمد العتيبي",
      "birthDate": "2010-03-15",
      "createdAt": "2025-12-10T..."
    }
  ]
}
```

### All Available Parents (Test Data)

| National ID | Name | Children Count |
|------------|------|----------------|
| 1001001001 | محمد عبدالله العتيبي | 2 |
| 1002002002 | أحمد سعد المطيري | 2 |
| 1003003003 | خالد فهد الدوسري | 2 |
| 1004004004 | عبدالرحمن ماجد الغامدي | 2 |
| 1005005005 | فيصل عمر الزهراني | 2 |
