import { mainAxios } from "@/lib/api/axios.instances";
import { IPeople } from "@/lib/types/IPeople";

export interface RegPayload {
  login: string;
  password: string;
}

export interface RegResponse {
  user: IPeople;
}

export interface LoginPayload {
  login: string;
  password: string;
  rememberMe?: boolean;
}

export interface LoginResponse {
  user: IPeople;
  accessToken: string;
}

export interface AuthResponse {
  user: IPeople;
}

export class ApiAuth {
  static async registration(payload: RegPayload) {
    const res = await mainAxios.post<RegResponse>("/registration", payload);
    return res.data;
  }

  static async login(payload: LoginPayload) {
    const res = await mainAxios.post<LoginResponse>("/login", payload);
    return res.data;
  }

  static async logout() {
    const res = await mainAxios.get("/logout");
    return res.data;
  }

  static async auth(token: string) {
    const res = await mainAxios.get<AuthResponse>("/auth", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  }
}
