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
    // const mock = {
    //   user: {},
    // } as RegResponse;
    // return mock;
  }

  static async login(payload: LoginPayload) {
    const res = await mainAxios.post<LoginResponse>("/login", payload);
    return res.data;
    // const mock = {
    //   user: {},
    //   accessToken: "token",
    // } as LoginResponse;
    // return mock;
  }

  static async logout() {
    const res = await mainAxios.get("/logout");
    return res.data;
    // const mock = {
    //   success: true,
    // };
    // return mock;
  }

  static async auth(token: string) {
    const res = await mainAxios.get<AuthResponse>("/auth", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
    // const mock = {
    //   user: {
    //     subject: [],
    //     age: 21,
    //     gender: "male",
    //     education: {
    //       field: "ok",
    //       level: "2",
    //       status: "student",
    //       institution: {
    //         info: "none",
    //         name: "SFEDU",
    //         type: "Government",
    //         location: "Russia",
    //         id: 12,
    //       },
    //       id: 21,
    //     },
    //     id: 1,
    //     name: "Иван",
    //     image:
    //       "https://celes.club/uploads/posts/2022-10/thumbs/1666975077_30-celes-club-p-etsio-art-vkontakte-31.jpg",
    //     lessons: [
    //       {
    //         id: 111,
    //         link: "",
    //         cost: 1000,
    //         start_time: new Date(2024, 0, 19, 14, 30),
    //         end_time: new Date(2024, 0, 16, 15, 30),
    //         subject: "Математика",
    //         tutor: {
    //           id: 213123,
    //           cost: 2500,
    //           image:
    //             "https://celes.club/uploads/posts/2022-10/thumbs/1666975077_30-celes-club-p-etsio-art-vkontakte-31.jpg",
    //           name: "Балканский А.",
    //           role: "tutor",
    //           age: 21,
    //           gender: "male",
    //         },
    //       },
    //       {
    //         id: 112,
    //         cost: 1000,
    //         start_time: new Date(2024, 0, 16, 20, 0),
    //         end_time: new Date(2024, 0, 16, 21, 0),
    //         subject: "Математика",
    //         tutor: {
    //           id: 213123,
    //           cost: 2500,
    //           image:
    //             "https://celes.club/uploads/posts/2022-10/thumbs/1666975077_30-celes-club-p-etsio-art-vkontakte-31.jpg",
    //           name: "Балканский А.",
    //           role: "tutor",
    //           age: 21,
    //           gender: "male",
    //         },
    //       },
    //       {
    //         id: 113,
    //         cost: 1000,
    //         start_time: new Date(2024, 0, 17, 16, 0),
    //         end_time: new Date(2024, 0, 17, 17, 0),
    //         subject: "Математика",
    //         tutor: {
    //           id: 213123,
    //           cost: 2500,
    //           image:
    //             "https://celes.club/uploads/posts/2022-10/thumbs/1666975077_30-celes-club-p-etsio-art-vkontakte-31.jpg",
    //           name: "Балканский А.",
    //           role: "tutor",
    //           age: 21,
    //           gender: "male",
    //         },
    //       },
    //       {
    //         id: 123,
    //         cost: 1000,
    //         start_time: new Date(2024, 0, 20, 14, 30),
    //         end_time: new Date(2024, 0, 20, 16, 30),
    //         subject: "Математика",
    //         tutor: {
    //           id: 213123,
    //           cost: 2500,
    //           image:
    //             "https://celes.club/uploads/posts/2022-10/thumbs/1666975077_30-celes-club-p-etsio-art-vkontakte-31.jpg",
    //           name: "Балканский А.",
    //           role: "tutor",
    //           age: 21,
    //           gender: "male",
    //         },
    //       },
    //       {
    //         id: 125,
    //         cost: 1000,
    //         start_time: new Date(2024, 0, 16, 13, 25),
    //         end_time: new Date(2024, 0, 16, 16, 25),
    //         subject: "Математика",
    //         tutor: {
    //           id: 213123,
    //           cost: 2500,
    //           image:
    //             "https://celes.club/uploads/posts/2022-10/thumbs/1666975077_30-celes-club-p-etsio-art-vkontakte-31.jpg",
    //           name: "Балканский А.",
    //           role: "tutor",
    //           age: 21,
    //           gender: "male",
    //         },
    //       },
    //       {
    //         id: 132,
    //         cost: 1000,
    //         start_time: new Date(2024, 0, 19, 8, 0),
    //         end_time: new Date(2024, 0, 19, 10, 0),
    //         subject: "Математика",
    //         tutor: {
    //           id: 213123,
    //           cost: 2500,
    //           image:
    //             "https://celes.club/uploads/posts/2022-10/thumbs/1666975077_30-celes-club-p-etsio-art-vkontakte-31.jpg",
    //           name: "Балканский А.",
    //           role: "tutor",
    //           age: 21,
    //           gender: "male",
    //         },
    //       },
    //       {
    //         id: 1323,
    //         cost: 1000,
    //         start_time: new Date(2024, 0, 20, 12, 0),
    //         end_time: new Date(2024, 0, 20, 13, 0),
    //         subject: "Математика",
    //         tutor: {
    //           id: 213123,
    //           cost: 2500,
    //           image:
    //             "https://celes.club/uploads/posts/2022-10/thumbs/1666975077_30-celes-club-p-etsio-art-vkontakte-31.jpg",
    //           name: "Балканский А.",
    //           role: "tutor",
    //           age: 21,
    //           gender: "male",
    //         },
    //       },
    //       {
    //         id: 1253,
    //         cost: 1000,
    //         start_time: new Date(2024, 0, 15, 8),
    //         end_time: new Date(2024, 0, 15, 10),
    //         subject: "Математика",
    //         tutor: {
    //           id: 213123,
    //           cost: 2500,
    //           image:
    //             "https://celes.club/uploads/posts/2022-10/thumbs/1666975077_30-celes-club-p-etsio-art-vkontakte-31.jpg",
    //           name: "Балканский А.",
    //           role: "tutor",
    //           age: 21,
    //           gender: "male",
    //         },
    //       },
    //     ],
    //     role: "student",
    //   },
    // } as AuthResponse;
    // return mock;
  }
}
