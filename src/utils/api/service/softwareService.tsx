import { Software } from "../routes/apiRoutes";
import axiosInstance from "../AxiosInstance";

export const createSoftware = async (data: any) => {
  return await axiosInstance.post(Software.CREATE_SOFTWARE, data);
};

export const getAllSoftwares = async (query: any) => {
  return await axiosInstance.get(`${Software.GET_ALL_SOFTWARES}${query}`);
};

export const getSoftware = async (id: String) => {
  return await axiosInstance.get(`${Software.GET_SINGLE_SOFTWARE}/${id}`);
};

export const updateSoftware = async (id: String, data: any) => {
  return await axiosInstance.put(`${Software.UPDATE_SOFTWARE}/${id}`, data);
};

export const deleteSoftware = async (id: String) => {
  return await axiosInstance.put(`${Software.DELETE_SOFTWARE}/${id}`);
};

export const softwareAssign = async (id: String, data: any) => {
  return await axiosInstance.put(
    `${Software.UPDATE_SOFTWARE_ASSIGN}/${id}`,
    data
  );
};

export const softwareUnassign = async (id: String, data: any) => {
  return await axiosInstance.put(
    `${Software.UPDATE_SOFTWARE_UNASSIGN}/${id}`,
    data
  );
};

export const getAllUnassignSoftwares = async () => {
  return await axiosInstance.get(Software.GET_ALL_UNASSIGN_SOFTWARES);
};
