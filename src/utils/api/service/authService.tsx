import { Auth } from "../routes/apiRoutes";
import axiosInstance from "../AxiosInstance";

export const login = async (data: any) => {
  return await axiosInstance.post(Auth.LOGIN, data);
};
