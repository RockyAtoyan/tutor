import { IPeople } from "@/lib/types/IPeople";
import { IMessage } from "@/lib/types/IMessage";
import { mainAxios } from "@/lib/api/axios.instances";

export interface getChatsPayload {
  id: string;
}

export interface getUserPayload {
  id: string;
}

export interface getUserResponse {
  user: IPeople | null;
}

export interface getChatsResponse {
  chats: Array<{
    id: number;
    user: IPeople;
    lastMessage: string;
  }>;
}

export interface getMessagesPayload {
  authId: string;
  id: string;
}

export interface getMessagesResponse {
  messages: Array<IMessage>;
}

export interface sendMessagePayload {
  authId: string;
  id: string;
  message: {
    text: string;
  };
}

export interface sendMessageResponse {
  authId: string;
  id: string;
  message: {
    text: string;
  };
}

export class ApiChats {
  static async getUserChats({ id }: getChatsPayload) {
    const res = await mainAxios.get<getChatsResponse>(`/user/${id}/chats`);
    return res.data.chats;
    // const mock = {
    //   chats: [
    //     {
    //       id: 3,
    //       user: {
    //         subject: [],
    //         age: 21,
    //         gender: "male",
    //         education: {
    //           field: "ok",
    //           level: "2",
    //           status: "student",
    //           institution: {
    //             info: "none",
    //             name: "SFEDU",
    //             type: "Government",
    //             location: "Russia",
    //             id: 12,
    //           },
    //           id: 21,
    //         },
    //         id: 1,
    //         name: "Ваня",
    //         image:
    //           "https://celes.club/uploads/posts/2022-10/thumbs/1666975077_30-celes-club-p-etsio-art-vkontakte-31.jpg",
    //         role: "student",
    //       },
    //       lastMessage: "Привет",
    //     },
    //     {
    //       id: 1,
    //       user: {
    //         subject: [],
    //         age: 21,
    //         gender: "male",
    //         education: {
    //           field: "ok",
    //           level: "2",
    //           status: "student",
    //           institution: {
    //             info: "none",
    //             name: "SFEDU",
    //             type: "Government",
    //             location: "Russia",
    //             id: 12,
    //           },
    //           id: 21,
    //         },
    //         id: 2,
    //         name: "Данил",
    //         image:
    //           "https://celes.club/uploads/posts/2022-10/thumbs/1666975077_30-celes-club-p-etsio-art-vkontakte-31.jpg",
    //         role: "student",
    //       },
    //       lastMessage: "Привет",
    //     },
    //     {
    //       id: 2,
    //       user: {
    //         subject: [],
    //         age: 21,
    //         gender: "male",
    //         education: {
    //           field: "ok",
    //           level: "2",
    //           status: "student",
    //           institution: {
    //             info: "none",
    //             name: "SFEDU",
    //             type: "Government",
    //             location: "Russia",
    //             id: 12,
    //           },
    //           id: 21,
    //         },
    //         id: 3,
    //         name: "Александр",
    //         image:
    //           "https://celes.club/uploads/posts/2022-10/thumbs/1666975077_30-celes-club-p-etsio-art-vkontakte-31.jpg",
    //         role: "student",
    //       },
    //       lastMessage: "Привет",
    //     },
    //     {
    //       id: 4,
    //       user: {
    //         subject: [],
    //         age: 21,
    //         gender: "male",
    //         education: {
    //           field: "ok",
    //           level: "2",
    //           status: "student",
    //           institution: {
    //             info: "none",
    //             name: "SFEDU",
    //             type: "Government",
    //             location: "Russia",
    //             id: 12,
    //           },
    //           id: 21,
    //         },
    //         id: 1,
    //         name: "Ваня",
    //         image:
    //           "https://celes.club/uploads/posts/2022-10/thumbs/1666975077_30-celes-club-p-etsio-art-vkontakte-31.jpg",
    //         role: "student",
    //       },
    //       lastMessage: "Привет",
    //     },
    //     {
    //       id: 5,
    //       user: {
    //         subject: [],
    //         age: 21,
    //         gender: "male",
    //         education: {
    //           field: "ok",
    //           level: "2",
    //           status: "student",
    //           institution: {
    //             info: "none",
    //             name: "SFEDU",
    //             type: "Government",
    //             location: "Russia",
    //             id: 12,
    //           },
    //           id: 21,
    //         },
    //         id: 2,
    //         name: "Данил",
    //         image:
    //           "https://celes.club/uploads/posts/2022-10/thumbs/1666975077_30-celes-club-p-etsio-art-vkontakte-31.jpg",
    //         role: "student",
    //       },
    //       lastMessage: "Привет",
    //     },
    //     {
    //       id: 6,
    //       user: {
    //         subject: [],
    //         age: 21,
    //         gender: "male",
    //         education: {
    //           field: "ok",
    //           level: "2",
    //           status: "student",
    //           institution: {
    //             info: "none",
    //             name: "SFEDU",
    //             type: "Government",
    //             location: "Russia",
    //             id: 12,
    //           },
    //           id: 21,
    //         },
    //         id: 3,
    //         name: "Александр",
    //         image:
    //           "https://celes.club/uploads/posts/2022-10/thumbs/1666975077_30-celes-club-p-etsio-art-vkontakte-31.jpg",
    //         role: "student",
    //       },
    //       lastMessage: "Привет",
    //     },
    //     {
    //       id: 8,
    //       user: {
    //         subject: [],
    //         age: 21,
    //         gender: "male",
    //         education: {
    //           field: "ok",
    //           level: "2",
    //           status: "student",
    //           institution: {
    //             info: "none",
    //             name: "SFEDU",
    //             type: "Government",
    //             location: "Russia",
    //             id: 12,
    //           },
    //           id: 21,
    //         },
    //         id: 2,
    //         name: "Данил",
    //         image:
    //           "https://celes.club/uploads/posts/2022-10/thumbs/1666975077_30-celes-club-p-etsio-art-vkontakte-31.jpg",
    //         role: "student",
    //       },
    //       lastMessage: "Привет",
    //     },
    //     {
    //       id: 9,
    //       user: {
    //         subject: [],
    //         age: 21,
    //         gender: "male",
    //         education: {
    //           field: "ok",
    //           level: "2",
    //           status: "student",
    //           institution: {
    //             info: "none",
    //             name: "SFEDU",
    //             type: "Government",
    //             location: "Russia",
    //             id: 12,
    //           },
    //           id: 21,
    //         },
    //         id: 3,
    //         name: "Александр",
    //         image:
    //           "https://celes.club/uploads/posts/2022-10/thumbs/1666975077_30-celes-club-p-etsio-art-vkontakte-31.jpg",
    //         role: "student",
    //       },
    //       lastMessage: "Привет",
    //     },
    //   ],
    // } as getChatsResponse;
    // return mock.chats;
  }
  static async getUser({ id }: getChatsPayload) {
    const res = await mainAxios.get<getUserResponse>(`/user/${id}`);
    return res.data.user;
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
    //         end_time: new Date().getTime() - 1000 * 60 * 60 * 5,
    //         start_time: new Date().getTime() - 1000 * 60 * 60 * 6,
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
    //         start_time: new Date().getTime() + 1000 * 60 * 60 * 24 * 2,
    //         end_time:
    //           new Date().getTime() + 1000 * 60 * 60 * 24 * 2 + 1000 * 60 * 60,
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
    // } as getUserResponse;
    // return mock.user;
  }

  static async getChatMessages({ authId, id }: getMessagesPayload) {
    const res = await mainAxios.get<getMessagesResponse>(
      `/user/${authId}/chat/${id}`,
    );
    return res.data.messages;
    // const mock: getMessagesResponse = {
    //   messages: [
    //     {
    //       id: 1,
    //       sender: {
    //         subject: [],
    //         age: 21,
    //         gender: "male",
    //         education: {
    //           field: "ok",
    //           level: "2",
    //           status: "student",
    //           institution: {
    //             info: "none",
    //             name: "SFEDU",
    //             type: "Government",
    //             location: "Russia",
    //             id: 12,
    //           },
    //           id: 21,
    //         },
    //         id: 1,
    //         name: "Ваня",
    //         image:
    //           "https://celes.club/uploads/posts/2022-10/thumbs/1666975077_30-celes-club-p-etsio-art-vkontakte-31.jpg",
    //         lessons: [
    //           {
    //             id: 123,
    //             cost: 1000,
    //             end_time: "16 января 10:00",
    //             start_time: "16 января 09:00",
    //             subject: "Математика",
    //             tutor: {
    //               id: 2,
    //               name: "Балканский А.",
    //               cost: 2500,
    //               image: "",
    //               gender: "male",
    //               age: 32,
    //               role: "tutor",
    //             },
    //           },
    //           {
    //             id: 124,
    //             cost: 1000,
    //             end_time: "16 января 10:00",
    //             start_time: "16 января 09:00",
    //             subject: "Математика",
    //             tutor: {
    //               id: 2,
    //               cost: 2500,
    //               image: "",
    //               name: "Балканский А.",
    //               gender: "male",
    //               age: 32,
    //               role: "tutor",
    //             },
    //           },
    //           {
    //             id: 125,
    //             cost: 1000,
    //             end_time: "16 января 10:00",
    //             start_time: "16 января 09:00",
    //             subject: "Математика",
    //             tutor: {
    //               id: 2,
    //               cost: 2500,
    //               image: "",
    //               name: "Балканский А.",
    //               gender: "male",
    //               age: 32,
    //               role: "tutor",
    //             },
    //           },
    //         ],
    //         role: "student",
    //       },
    //       receiver: {
    //         subject: [],
    //         age: 21,
    //         gender: "male",
    //         education: {
    //           field: "ok",
    //           level: "2",
    //           status: "student",
    //           institution: {
    //             info: "none",
    //             name: "SFEDU",
    //             type: "Government",
    //             location: "Russia",
    //             id: 12,
    //           },
    //           id: 21,
    //         },
    //         id: 2,
    //         name: "Данил",
    //         image:
    //           "https://celes.club/uploads/posts/2022-10/thumbs/1666975077_30-celes-club-p-etsio-art-vkontakte-31.jpg",
    //         role: "student",
    //       },
    //       text: "Привет " + Math.random() * 10,
    //       subjects: "",
    //       time: new Date().toLocaleTimeString(),
    //     },
    //     {
    //       id: 2,
    //       sender: {
    //         subject: [],
    //         age: 21,
    //         gender: "male",
    //         education: {
    //           field: "ok",
    //           level: "2",
    //           status: "student",
    //           institution: {
    //             info: "none",
    //             name: "SFEDU",
    //             type: "Government",
    //             location: "Russia",
    //             id: 12,
    //           },
    //           id: 21,
    //         },
    //         id: 2,
    //         name: "Данил",
    //         image:
    //           "https://celes.club/uploads/posts/2022-10/thumbs/1666975077_30-celes-club-p-etsio-art-vkontakte-31.jpg",
    //         role: "student",
    //       },
    //       receiver: {
    //         subject: [],
    //         age: 21,
    //         gender: "male",
    //         education: {
    //           field: "ok",
    //           level: "2",
    //           status: "student",
    //           institution: {
    //             info: "none",
    //             name: "SFEDU",
    //             type: "Government",
    //             location: "Russia",
    //             id: 12,
    //           },
    //           id: 21,
    //         },
    //         id: 1,
    //         name: "Ваня",
    //         image:
    //           "https://celes.club/uploads/posts/2022-10/thumbs/1666975077_30-celes-club-p-etsio-art-vkontakte-31.jpg",
    //         lessons: [
    //           {
    //             id: 123,
    //             cost: 1000,
    //             end_time: "16 января 10:00",
    //             start_time: "16 января 09:00",
    //             subject: "Математика",
    //             tutor: {
    //               id: 2,
    //               name: "Балканский А.",
    //               cost: 2500,
    //               image: "",
    //               gender: "male",
    //               age: 32,
    //               role: "tutor",
    //             },
    //           },
    //           {
    //             id: 124,
    //             cost: 1000,
    //             end_time: "16 января 10:00",
    //             start_time: "16 января 09:00",
    //             subject: "Математика",
    //             tutor: {
    //               id: 2,
    //               cost: 2500,
    //               image: "",
    //               name: "Балканский А.",
    //               gender: "male",
    //               age: 32,
    //               role: "tutor",
    //             },
    //           },
    //           {
    //             id: 125,
    //             cost: 1000,
    //             end_time: "16 января 10:00",
    //             start_time: "16 января 09:00",
    //             subject: "Математика",
    //             tutor: {
    //               id: 2,
    //               cost: 2500,
    //               image: "",
    //               name: "Балканский А.",
    //               gender: "male",
    //               age: 32,
    //               role: "tutor",
    //             },
    //           },
    //         ],
    //         role: "student",
    //       },
    //       text: "Привет " + Math.random() * 10,
    //       subjects: "",
    //       time: new Date().toLocaleTimeString(),
    //     },
    //     {
    //       id: 3,
    //       sender: {
    //         subject: [],
    //         age: 21,
    //         gender: "male",
    //         education: {
    //           field: "ok",
    //           level: "2",
    //           status: "student",
    //           institution: {
    //             info: "none",
    //             name: "SFEDU",
    //             type: "Government",
    //             location: "Russia",
    //             id: 12,
    //           },
    //           id: 21,
    //         },
    //         id: 1,
    //         name: "Ваня",
    //         image:
    //           "https://celes.club/uploads/posts/2022-10/thumbs/1666975077_30-celes-club-p-etsio-art-vkontakte-31.jpg",
    //         lessons: [
    //           {
    //             id: 123,
    //             cost: 1000,
    //             end_time: "16 января 10:00",
    //             start_time: "16 января 09:00",
    //             subject: "Математика",
    //             tutor: {
    //               id: 2,
    //               name: "Балканский А.",
    //               cost: 2500,
    //               image: "",
    //               gender: "male",
    //               age: 32,
    //               role: "tutor",
    //             },
    //           },
    //           {
    //             id: 124,
    //             cost: 1000,
    //             end_time: "16 января 10:00",
    //             start_time: "16 января 09:00",
    //             subject: "Математика",
    //             tutor: {
    //               id: 2,
    //               cost: 2500,
    //               image: "",
    //               name: "Балканский А.",
    //               gender: "male",
    //               age: 32,
    //               role: "tutor",
    //             },
    //           },
    //           {
    //             id: 125,
    //             cost: 1000,
    //             end_time: "16 января 10:00",
    //             start_time: "16 января 09:00",
    //             subject: "Математика",
    //             tutor: {
    //               id: 2,
    //               cost: 2500,
    //               image: "",
    //               name: "Балканский А.",
    //               gender: "male",
    //               age: 32,
    //               role: "tutor",
    //             },
    //           },
    //         ],
    //         role: "student",
    //       },
    //       receiver: {
    //         subject: [],
    //         age: 21,
    //         gender: "male",
    //         education: {
    //           field: "ok",
    //           level: "2",
    //           status: "student",
    //           institution: {
    //             info: "none",
    //             name: "SFEDU",
    //             type: "Government",
    //             location: "Russia",
    //             id: 12,
    //           },
    //           id: 21,
    //         },
    //         id: 2,
    //         name: "Данил",
    //         image:
    //           "https://celes.club/uploads/posts/2022-10/thumbs/1666975077_30-celes-club-p-etsio-art-vkontakte-31.jpg",
    //         role: "student",
    //       },
    //       text: "Привет " + Math.random() * 10,
    //       subjects: "",
    //       time: new Date().toLocaleTimeString(),
    //     },
    //     {
    //       id: 4,
    //       sender: {
    //         subject: [],
    //         age: 21,
    //         gender: "male",
    //         education: {
    //           field: "ok",
    //           level: "2",
    //           status: "student",
    //           institution: {
    //             info: "none",
    //             name: "SFEDU",
    //             type: "Government",
    //             location: "Russia",
    //             id: 12,
    //           },
    //           id: 21,
    //         },
    //         id: 2,
    //         name: "Данил",
    //         image:
    //           "https://celes.club/uploads/posts/2022-10/thumbs/1666975077_30-celes-club-p-etsio-art-vkontakte-31.jpg",
    //         role: "student",
    //       },
    //       receiver: {
    //         subject: [],
    //         age: 21,
    //         gender: "male",
    //         education: {
    //           field: "ok",
    //           level: "2",
    //           status: "student",
    //           institution: {
    //             info: "none",
    //             name: "SFEDU",
    //             type: "Government",
    //             location: "Russia",
    //             id: 12,
    //           },
    //           id: 21,
    //         },
    //         id: 1,
    //         name: "Ваня",
    //         image:
    //           "https://celes.club/uploads/posts/2022-10/thumbs/1666975077_30-celes-club-p-etsio-art-vkontakte-31.jpg",
    //         lessons: [
    //           {
    //             id: 123,
    //             cost: 1000,
    //             end_time: "16 января 10:00",
    //             start_time: "16 января 09:00",
    //             subject: "Математика",
    //             tutor: {
    //               id: 2,
    //               name: "Балканский А.",
    //               cost: 2500,
    //               image: "",
    //               gender: "male",
    //               age: 32,
    //               role: "tutor",
    //             },
    //           },
    //           {
    //             id: 124,
    //             cost: 1000,
    //             end_time: "16 января 10:00",
    //             start_time: "16 января 09:00",
    //             subject: "Математика",
    //             tutor: {
    //               id: 2,
    //               cost: 2500,
    //               image: "",
    //               name: "Балканский А.",
    //               gender: "male",
    //               age: 32,
    //               role: "tutor",
    //             },
    //           },
    //           {
    //             id: 125,
    //             cost: 1000,
    //             end_time: "16 января 10:00",
    //             start_time: "16 января 09:00",
    //             subject: "Математика",
    //             tutor: {
    //               id: 2,
    //               cost: 2500,
    //               image: "",
    //               name: "Балканский А.",
    //               gender: "male",
    //               age: 32,
    //               role: "tutor",
    //             },
    //           },
    //         ],
    //         role: "student",
    //       },
    //       text: "Привет " + Math.random() * 10,
    //       subjects: "",
    //       time: new Date().toLocaleTimeString(),
    //     },
    //     {
    //       id: 5,
    //       sender: {
    //         subject: [],
    //         age: 21,
    //         gender: "male",
    //         education: {
    //           field: "ok",
    //           level: "2",
    //           status: "student",
    //           institution: {
    //             info: "none",
    //             name: "SFEDU",
    //             type: "Government",
    //             location: "Russia",
    //             id: 12,
    //           },
    //           id: 21,
    //         },
    //         id: 1,
    //         name: "Ваня",
    //         image:
    //           "https://celes.club/uploads/posts/2022-10/thumbs/1666975077_30-celes-club-p-etsio-art-vkontakte-31.jpg",
    //         lessons: [
    //           {
    //             id: 123,
    //             cost: 1000,
    //             end_time: "16 января 10:00",
    //             start_time: "16 января 09:00",
    //             subject: "Математика",
    //             tutor: {
    //               id: 2,
    //               name: "Балканский А.",
    //               cost: 2500,
    //               image: "",
    //               gender: "male",
    //               age: 32,
    //               role: "tutor",
    //             },
    //           },
    //           {
    //             id: 124,
    //             cost: 1000,
    //             end_time: "16 января 10:00",
    //             start_time: "16 января 09:00",
    //             subject: "Математика",
    //             tutor: {
    //               id: 2,
    //               cost: 2500,
    //               image: "",
    //               name: "Балканский А.",
    //               gender: "male",
    //               age: 32,
    //               role: "tutor",
    //             },
    //           },
    //           {
    //             id: 125,
    //             cost: 1000,
    //             end_time: "16 января 10:00",
    //             start_time: "16 января 09:00",
    //             subject: "Математика",
    //             tutor: {
    //               id: 2,
    //               cost: 2500,
    //               image: "",
    //               name: "Балканский А.",
    //               gender: "male",
    //               age: 32,
    //               role: "tutor",
    //             },
    //           },
    //         ],
    //         role: "student",
    //       },
    //       receiver: {
    //         subject: [],
    //         age: 21,
    //         gender: "male",
    //         education: {
    //           field: "ok",
    //           level: "2",
    //           status: "student",
    //           institution: {
    //             info: "none",
    //             name: "SFEDU",
    //             type: "Government",
    //             location: "Russia",
    //             id: 12,
    //           },
    //           id: 21,
    //         },
    //         id: 2,
    //         name: "Данил",
    //         image:
    //           "https://celes.club/uploads/posts/2022-10/thumbs/1666975077_30-celes-club-p-etsio-art-vkontakte-31.jpg",
    //         role: "student",
    //       },
    //       text: "Привет " + Math.random() * 10,
    //       subjects: "",
    //       time: new Date().toLocaleTimeString(),
    //     },
    //     {
    //       id: 6,
    //       sender: {
    //         subject: [],
    //         age: 21,
    //         gender: "male",
    //         education: {
    //           field: "ok",
    //           level: "2",
    //           status: "student",
    //           institution: {
    //             info: "none",
    //             name: "SFEDU",
    //             type: "Government",
    //             location: "Russia",
    //             id: 12,
    //           },
    //           id: 21,
    //         },
    //         id: 2,
    //         name: "Данил",
    //         image:
    //           "https://celes.club/uploads/posts/2022-10/thumbs/1666975077_30-celes-club-p-etsio-art-vkontakte-31.jpg",
    //         role: "student",
    //       },
    //       receiver: {
    //         subject: [],
    //         age: 21,
    //         gender: "male",
    //         education: {
    //           field: "ok",
    //           level: "2",
    //           status: "student",
    //           institution: {
    //             info: "none",
    //             name: "SFEDU",
    //             type: "Government",
    //             location: "Russia",
    //             id: 12,
    //           },
    //           id: 21,
    //         },
    //         id: 1,
    //         name: "Ваня",
    //         image:
    //           "https://celes.club/uploads/posts/2022-10/thumbs/1666975077_30-celes-club-p-etsio-art-vkontakte-31.jpg",
    //         lessons: [
    //           {
    //             id: 123,
    //             cost: 1000,
    //             end_time: "16 января 10:00",
    //             start_time: "16 января 09:00",
    //             subject: "Математика",
    //             tutor: {
    //               id: 2,
    //               name: "Балканский А.",
    //               cost: 2500,
    //               image: "",
    //               gender: "male",
    //               age: 32,
    //               role: "tutor",
    //             },
    //           },
    //           {
    //             id: 124,
    //             cost: 1000,
    //             end_time: "16 января 10:00",
    //             start_time: "16 января 09:00",
    //             subject: "Математика",
    //             tutor: {
    //               id: 2,
    //               cost: 2500,
    //               image: "",
    //               name: "Балканский А.",
    //               gender: "male",
    //               age: 32,
    //               role: "tutor",
    //             },
    //           },
    //           {
    //             id: 125,
    //             cost: 1000,
    //             end_time: "16 января 10:00",
    //             start_time: "16 января 09:00",
    //             subject: "Математика",
    //             tutor: {
    //               id: 2,
    //               cost: 2500,
    //               image: "",
    //               name: "Балканский А.",
    //               gender: "male",
    //               age: 32,
    //               role: "tutor",
    //             },
    //           },
    //         ],
    //         role: "student",
    //       },
    //       text: "Привет " + Math.random() * 10,
    //       subjects: "",
    //       time: new Date().toLocaleTimeString(),
    //     },
    //     {
    //       id: 7,
    //       sender: {
    //         subject: [],
    //         age: 21,
    //         gender: "male",
    //         education: {
    //           field: "ok",
    //           level: "2",
    //           status: "student",
    //           institution: {
    //             info: "none",
    //             name: "SFEDU",
    //             type: "Government",
    //             location: "Russia",
    //             id: 12,
    //           },
    //           id: 21,
    //         },
    //         id: 1,
    //         name: "Ваня",
    //         image:
    //           "https://celes.club/uploads/posts/2022-10/thumbs/1666975077_30-celes-club-p-etsio-art-vkontakte-31.jpg",
    //         lessons: [
    //           {
    //             id: 123,
    //             cost: 1000,
    //             end_time: "16 января 10:00",
    //             start_time: "16 января 09:00",
    //             subject: "Математика",
    //             tutor: {
    //               id: 2,
    //               name: "Балканский А.",
    //               cost: 2500,
    //               image: "",
    //               gender: "male",
    //               age: 32,
    //               role: "tutor",
    //             },
    //           },
    //           {
    //             id: 124,
    //             cost: 1000,
    //             end_time: "16 января 10:00",
    //             start_time: "16 января 09:00",
    //             subject: "Математика",
    //             tutor: {
    //               id: 2,
    //               cost: 2500,
    //               image: "",
    //               name: "Балканский А.",
    //               gender: "male",
    //               age: 32,
    //               role: "tutor",
    //             },
    //           },
    //           {
    //             id: 125,
    //             cost: 1000,
    //             end_time: "16 января 10:00",
    //             start_time: "16 января 09:00",
    //             subject: "Математика",
    //             tutor: {
    //               id: 2,
    //               cost: 2500,
    //               image: "",
    //               name: "Балканский А.",
    //               gender: "male",
    //               age: 32,
    //               role: "tutor",
    //             },
    //           },
    //         ],
    //         role: "student",
    //       },
    //       receiver: {
    //         subject: [],
    //         age: 21,
    //         gender: "male",
    //         education: {
    //           field: "ok",
    //           level: "2",
    //           status: "student",
    //           institution: {
    //             info: "none",
    //             name: "SFEDU",
    //             type: "Government",
    //             location: "Russia",
    //             id: 12,
    //           },
    //           id: 21,
    //         },
    //         id: 2,
    //         name: "Данил",
    //         image:
    //           "https://celes.club/uploads/posts/2022-10/thumbs/1666975077_30-celes-club-p-etsio-art-vkontakte-31.jpg",
    //         role: "student",
    //       },
    //       text: "Привет " + Math.random() * 10,
    //       subjects: "",
    //       time: new Date().toLocaleTimeString(),
    //     },
    //     {
    //       id: 8,
    //       sender: {
    //         subject: [],
    //         age: 21,
    //         gender: "male",
    //         education: {
    //           field: "ok",
    //           level: "2",
    //           status: "student",
    //           institution: {
    //             info: "none",
    //             name: "SFEDU",
    //             type: "Government",
    //             location: "Russia",
    //             id: 12,
    //           },
    //           id: 21,
    //         },
    //         id: 2,
    //         name: "Данил",
    //         image:
    //           "https://celes.club/uploads/posts/2022-10/thumbs/1666975077_30-celes-club-p-etsio-art-vkontakte-31.jpg",
    //         role: "student",
    //       },
    //       receiver: {
    //         subject: [],
    //         age: 21,
    //         gender: "male",
    //         education: {
    //           field: "ok",
    //           level: "2",
    //           status: "student",
    //           institution: {
    //             info: "none",
    //             name: "SFEDU",
    //             type: "Government",
    //             location: "Russia",
    //             id: 12,
    //           },
    //           id: 21,
    //         },
    //         id: 1,
    //         name: "Ваня",
    //         image:
    //           "https://celes.club/uploads/posts/2022-10/thumbs/1666975077_30-celes-club-p-etsio-art-vkontakte-31.jpg",
    //         lessons: [
    //           {
    //             id: 123,
    //             cost: 1000,
    //             end_time: "16 января 10:00",
    //             start_time: "16 января 09:00",
    //             subject: "Математика",
    //             tutor: {
    //               id: 2,
    //               name: "Балканский А.",
    //               cost: 2500,
    //               image: "",
    //               gender: "male",
    //               age: 32,
    //               role: "tutor",
    //             },
    //           },
    //           {
    //             id: 124,
    //             cost: 1000,
    //             end_time: "16 января 10:00",
    //             start_time: "16 января 09:00",
    //             subject: "Математика",
    //             tutor: {
    //               id: 2,
    //               cost: 2500,
    //               image: "",
    //               name: "Балканский А.",
    //               gender: "male",
    //               age: 32,
    //               role: "tutor",
    //             },
    //           },
    //           {
    //             id: 125,
    //             cost: 1000,
    //             end_time: "16 января 10:00",
    //             start_time: "16 января 09:00",
    //             subject: "Математика",
    //             tutor: {
    //               id: 2,
    //               cost: 2500,
    //               image: "",
    //               name: "Балканский А.",
    //               gender: "male",
    //               age: 32,
    //               role: "tutor",
    //             },
    //           },
    //         ],
    //         role: "student",
    //       },
    //       text: "Привет " + Math.random() * 10,
    //       subjects: "",
    //       time: new Date().toLocaleTimeString(),
    //     },
    //   ],
    // };
    // return mock.messages;
  }

  static async sendMessage(payload: sendMessagePayload) {
    const res = await mainAxios.post<sendMessageResponse>(
      `/user/${payload.id}/message`,
      payload,
    );
    return res.data;
    // return true;
  }
}
