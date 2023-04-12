import { Employee } from "../routes/apiRoutes";
import axiosInstance from "../AxiosInstance";

export const createEmployee = async (data: any) => {
  return await axiosInstance.post(Employee.CREATE_EMPLOYEE, data);
};

export const getAllEmployees = async (query: any) => {
  return await axiosInstance.get(`${Employee.GET_ALL_EMPLOYEES}${query}`, );
};

export const getEmployee = async (id: String) => {
  return await axiosInstance.get(`${Employee.GET_SINGLE_EMPLOYEE}/${id}`);
};

export const updateEmployee = async (id: String, data: any) => {
  return await axiosInstance.put(`${Employee.UPDATE_EMPLOYEE}/${id}`, data);
};

export const deleteEmployee = async (id: String) => {
  return await axiosInstance.put(`${Employee.DELETE_EMPLOYEE}/${id}`);
};

export const getEmployeeList = async () => {
  return await axiosInstance.get(Employee.GET_EMPLOYEE_LIST);
};

export const getEmployeeListById = async (id: String) => {
  return await axiosInstance.get(`${Employee.GET_EMPLOYEE_LIST_BY_ID}/${id}`);
};

export const getEmployeeDashboard = async () => {
  return await axiosInstance.get(Employee.GET_EMPLOYEE_DASHBOARD);
};
