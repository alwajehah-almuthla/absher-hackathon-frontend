import {
  useQuery,
  useMutation,
  useQueryClient,
  type UseQueryResult,
  type UseMutationResult,
} from "@tanstack/react-query";
import { apiClient } from "./client";
import type {
  ApiResponse,
  Child,
  ChildLocation,
  CreateEventInput,
  Event,
  EventsPaginatedResponse,
  EventsQuery,
  NearbyTourismQuery,
  SeedAllResponse,
  SeedResponse,
  TourismPlace,
  UpdateEventInput,
  User,
} from "./types";

// ===============================================
// TABAANI (CHILD TRACKING) HOOKS
// ===============================================

/**
 * Get all children under 18 for a specific parent
 * @param parentNationalId - The parent's 10-digit national ID
 */
export const useChildren = (
  parentNationalId: string,
  enabled = true,
): UseQueryResult<Child[], Error> => {
  return useQuery({
    queryKey: ["tabaani", "children", parentNationalId],
    queryFn: async () => {
      const response = await apiClient
        .get(`api/tabaani/children/${parentNationalId}`)
        .json<ApiResponse<Child[]>>();
      return response.data;
    },
    enabled: enabled && !!parentNationalId && parentNationalId.length === 10,
  });
};

/**
 * Get a child's random location in Riyadh
 */
export const useChildLocation = (
  childId: string,
  enabled = true,
): UseQueryResult<ChildLocation, Error> => {
  return useQuery({
    queryKey: ["tabaani", "location", childId],
    queryFn: async () => {
      const response = await apiClient
        .get(`api/tabaani/location/${childId}`)
        .json<ApiResponse<ChildLocation>>();
      return response.data;
    },
    enabled: enabled && !!childId,
  });
};

// ===============================================
// EVENTS HOOKS
// ===============================================

/**
 * Get all events with pagination
 * @param params - Query parameters for pagination, filtering, and search
 */
export const useEvents = (
  params?: EventsQuery,
  enabled = true,
): UseQueryResult<EventsPaginatedResponse, Error> => {
  return useQuery({
    queryKey: ["events", params],
    queryFn: async () => {
      const searchParams: Record<string, string> = {};
      if (params?.page !== undefined) searchParams.page = params.page.toString();
      if (params?.limit !== undefined) searchParams.limit = params.limit.toString();
      if (params?.category) searchParams.category = params.category;
      if (params?.city) searchParams.city = params.city;
      if (params?.search) searchParams.search = params.search;

      const response = await apiClient
        .get("api/events", { searchParams })
        .json<ApiResponse<Event[]>>();

      return {
        data: response.data,
        meta: response.meta as EventsPaginatedResponse["meta"],
      };
    },
    enabled,
  });
};

/**
 * Get event details by ID
 */
export const useEvent = (
  eventId: string,
  enabled = true,
): UseQueryResult<Event, Error> => {
  return useQuery({
    queryKey: ["events", eventId],
    queryFn: async () => {
      const response = await apiClient
        .get(`api/events/${eventId}`)
        .json<ApiResponse<Event>>();
      return response.data;
    },
    enabled: enabled && !!eventId,
  });
};

/**
 * Create a new event
 */
export const useCreateEvent = (options?: {
  onSuccess?: () => void;
  onError?: () => void;
}): UseMutationResult<Event, Error, CreateEventInput> => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (eventData: CreateEventInput) => {
      const response = await apiClient
        .post("api/events", { json: eventData })
        .json<ApiResponse<Event>>();
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["events"] });
      options?.onSuccess?.();
    },
    onError: () => {
      options?.onError?.();
    },
  });
};

/**
 * Update an existing event
 */
export const useUpdateEvent = (options?: {
  onSuccess?: () => void;
  onError?: () => void;
}): UseMutationResult<
  Event,
  Error,
  { eventId: string; eventData: UpdateEventInput }
> => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ eventId, eventData }) => {
      const response = await apiClient
        .put(`api/events/${eventId}`, { json: eventData })
        .json<ApiResponse<Event>>();
      return response.data;
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["events"] });
      queryClient.invalidateQueries({ queryKey: ["events", variables.eventId] });
      options?.onSuccess?.();
    },
    onError: () => {
      options?.onError?.();
    },
  });
};

/**
 * Delete an event
 */
export const useDeleteEvent = (options?: {
  onSuccess?: () => void;
  onError?: () => void;
}): UseMutationResult<void, Error, string> => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (eventId: string) => {
      await apiClient.delete(`api/events/${eventId}`);
    },
    onSuccess: (_, eventId) => {
      queryClient.invalidateQueries({ queryKey: ["events"] });
      queryClient.invalidateQueries({ queryKey: ["events", eventId] });
      options?.onSuccess?.();
    },
    onError: () => {
      options?.onError?.();
    },
  });
};

// ===============================================
// TOURISM HOOKS
// ===============================================

/**
 * Get all tourism places
 */
export const useTourismPlaces = (): UseQueryResult<TourismPlace[], Error> => {
  return useQuery({
    queryKey: ["tourism", "explore"],
    queryFn: async () => {
      const response = await apiClient
        .get("api/tourism/explore")
        .json<ApiResponse<TourismPlace[]>>();
      return response.data;
    },
  });
};

/**
 * Get nearby tourism places
 */
export const useNearbyTourismPlaces = (
  params: NearbyTourismQuery,
  enabled = true,
): UseQueryResult<TourismPlace[], Error> => {
  return useQuery({
    queryKey: ["tourism", "nearby", params],
    queryFn: async () => {
      // Convert numbers to strings for URL search params
      const searchParams = {
        lat: params.lat.toString(),
        lng: params.lng.toString(),
        ...(params.radius !== undefined && { radius: params.radius.toString() }),
      };
      const response = await apiClient
        .get("api/tourism/nearby", { searchParams })
        .json<ApiResponse<TourismPlace[]>>();
      return response.data;
    },
    enabled: enabled && !!(params.lat && params.lng),
  });
};

/**
 * Get tourism place details by ID
 */
export const useTourismPlace = (
  placeId: string,
  enabled = true,
): UseQueryResult<TourismPlace, Error> => {
  return useQuery({
    queryKey: ["tourism", placeId],
    queryFn: async () => {
      const response = await apiClient
        .get(`api/tourism/${placeId}`)
        .json<ApiResponse<TourismPlace>>();
      return response.data;
    },
    enabled: enabled && !!placeId,
  });
};

// ===============================================
// SEED HOOKS (Development Only)
// ===============================================

/**
 * Seed users
 */
export const useSeedUsers = (): UseMutationResult<SeedResponse, Error, void> => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      const response = await apiClient
        .post("api/seed/users")
        .json<ApiResponse<SeedResponse>>();
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tabaani"] });
    },
  });
};

/**
 * Seed children
 */
export const useSeedChildren = (): UseMutationResult<
  SeedResponse,
  Error,
  void
> => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      const response = await apiClient
        .post("api/seed/children")
        .json<ApiResponse<SeedResponse>>();
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tabaani", "children"] });
    },
  });
};

/**
 * Seed events
 */
export const useSeedEvents = (): UseMutationResult<
  SeedResponse,
  Error,
  void
> => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      const response = await apiClient
        .post("api/seed/events")
        .json<ApiResponse<SeedResponse>>();
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["events"] });
    },
  });
};

/**
 * Seed tourism places
 */
export const useSeedTourism = (): UseMutationResult<
  SeedResponse,
  Error,
  void
> => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      const response = await apiClient
        .post("api/seed/tourism")
        .json<ApiResponse<SeedResponse>>();
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tourism"] });
    },
  });
};

/**
 * Seed all data (users → children → events → tourism)
 */
export const useSeedAll = (): UseMutationResult<
  SeedAllResponse,
  Error,
  void
> => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      const response = await apiClient
        .post("api/seed/all")
        .json<ApiResponse<SeedAllResponse>>();
      return response.data;
    },
    onSuccess: () => {
      // Invalidate all queries since everything was seeded
      queryClient.invalidateQueries({ queryKey: ["tabaani"] });
      queryClient.invalidateQueries({ queryKey: ["events"] });
      queryClient.invalidateQueries({ queryKey: ["tourism"] });
    },
  });
};

/**
 * Clear all seeded data
 */
export const useClearSeed = (): UseMutationResult<void, Error, void> => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      await apiClient.delete("api/seed/clear");
    },
    onSuccess: () => {
      // Invalidate all queries since everything was cleared
      queryClient.invalidateQueries({ queryKey: ["tabaani"] });
      queryClient.invalidateQueries({ queryKey: ["events"] });
      queryClient.invalidateQueries({ queryKey: ["tourism"] });
    },
  });
};
