// ===============================================
// BASE API RESPONSE TYPE
// ===============================================

export type ApiResponse<T> = {
  success: boolean;
  message: string;
  data: T;
  meta?: Record<string, unknown>;
};

// ===============================================
// USER TYPES
// ===============================================

export type User = {
  id: string;
  nationalId: string;
  name: string;
  phone: string | null;
  birthDate: string;
  createdAt: string;
};

// ===============================================
// CHILDREN TYPES
// ===============================================

export type Child = {
  id: string;
  parentId: string;
  nationalId: string;
  name: string;
  birthDate: string;
  createdAt: string;
};

// ===============================================
// EVENTS TYPES
// ===============================================

export type Event = {
  id: string;
  name: string;
  description: string | null;
  city: string;
  latitude: string;
  longitude: string;
  registrationLink: string;
  startDate: string;
  endDate: string;
  category: string | null;
  imageUrl: string | null;
  createdAt: string;
};

// ===============================================
// TOURISM TYPES
// ===============================================

export type TourismPlace = {
  id: string;
  name: string;
  description: string | null;
  city: string;
  latitude: string;
  longitude: string;
  type: string | null;
  imageUrl: string | null;
  createdAt: string;
};

export type NearbyTourismQuery = {
  lat: number;
  lng: number;
  radius?: number; // in kilometers, default 10
};

// ===============================================
// TABAANI (CHILD TRACKING) TYPES
// ===============================================

export type ChildLocation = {
  childId: string;
  childName: string;
  latitude: number;
  longitude: number;
  address: string;
  timestamp: string;
};

// ===============================================
// SEED TYPES
// ===============================================

export type SeedResponse = {
  success: boolean;
  message: string;
  count: number;
};

export type SeedAllResponse = {
  users: number;
  children: number;
  events: number;
  tourism: number;
};
