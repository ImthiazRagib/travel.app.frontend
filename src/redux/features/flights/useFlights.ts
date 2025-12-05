import { useQuery } from "@tanstack/react-query";
import type { QueryFunctionContext } from "@tanstack/react-query";
import axios from "axios";
import { flightAPI } from "../../../lib/api/flights.api";

/**
 * useFlights
 * - key: ['flights', params]
 * - returns: { data, isLoading, isError, refetch }
 *
 * @param params - search + filter params
 */
export const useFlights = (params: Record<string, any> = {}) => {
  return useQuery({
    // use a stable query key to cache & dedupe requests
    queryKey: ["flights", params],
    // queryFn receives context, but we pass params via closure
    queryFn: async ({ signal }: QueryFunctionContext) => {
      // If you want to support AbortSignal with axios:
      const source = axios.CancelToken.source();
      if (signal) {
        signal.addEventListener("abort", () => source.cancel("Query aborted"));
      }
      const res = await flightAPI.getAll({ ...params, _ts: Date.now() }); // add ts if you want to bust caches
      return res.data?.data || {};
    },
    // enabled: false, // ⛔️ prevents auto-fetch on component mount
    // react-query options:
    staleTime: 1000 * 30, // 30s data considered fresh
    gcTime: 1000 * 60 * 5, // 5 minutes cache
    retry: 1, // retry once on failure
    refetchOnWindowFocus: false,
  });
};
