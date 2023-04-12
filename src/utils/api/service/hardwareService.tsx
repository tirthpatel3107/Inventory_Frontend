import { Hardware } from "../routes/apiRoutes";
import axiosInstance from "../AxiosInstance";

export const createHardware = async (data: any) => {
  return await axiosInstance.post(Hardware.CREATE_HARDWARE, data);
};

export const getAllHardwares = async (query: any) => {
  return await axiosInstance.get(`${Hardware.GET_ALL_HARDWARES}${query}`);
};

export const getHardware = async (id: String) => {
  return await axiosInstance.get(`${Hardware.GET_SINGLE_HARDWARE}/${id}`);
};

export const updateHardware = async (id: String, data: any) => {
  return await axiosInstance.put(`${Hardware.UPDATE_HARDWARE}/${id}`, data);
};

export const deleteHardware = async (id: String) => {
  return await axiosInstance.put(`${Hardware.DELETE_HARDWARE}/${id}`);
};

export const hardwareAssign = async (id: String, data: any) => {
  return await axiosInstance.put(
    `${Hardware.UPDATE_HARDWARE_ASSIGN}/${id}`,
    data
  );
};

export const hardwareUnassign = async (id: String, data: any) => {
  return await axiosInstance.put(
    `${Hardware.UPDATE_HARDWARE_UNASSIGN}/${id}`,
    data
  );
};

export const getAllUnassignHardwares = async () => {
  return await axiosInstance.get(Hardware.GET_ALL_UNASSIGN_HARDWARES);
};

export const getHardwareDashboard = async () => {
  return await axiosInstance.get(Hardware.GET_HARDWARE_DASHBOARD);
};
