import axiosClient from "../axios";


export const flightAPI = {
  getAll: (params?: Record<string, any>) => axiosClient.get("/flights", { ...params }),
  search: (query: any) => axiosClient.get("/flights/search", { params: query }),
  getById: (id: number) => axiosClient.get(`/flights/${id}`),
};
