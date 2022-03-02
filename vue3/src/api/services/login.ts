import { api } from "../instance";
import { Login } from "@/types/login";

// 登录
export const login = async (params: Login) => {
  const res = await api.get(`api/1/login`, { params });
  return res;
}
