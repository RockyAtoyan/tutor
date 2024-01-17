import { IPeople } from "@/lib/types/IPeople";
import { mainAxios } from "@/lib/api/axios.instances";
import { isObject } from "node:util";
import { IReview } from "@/lib/types/IReview";
import { SignToLessonPayload } from "@/actions/tutor.actions";
import { ITutor } from "@/lib/types/ITutor";

export interface getTutorsQuery {
  subject: string;
  city: string;
  lessonType: "inperson" | "all" | "distant";
  search?: string;
  cost: {
    from: number;
    to: number;
  };
}

export interface getTutorsPayload {
  page: number;
  size?: number;
  search?: string;
  query: getTutorsQuery;
}

export interface getTutorsResponse {
  tutors: ITutor[];
  total: number;
}

export interface getTutorResponse {
  tutor: ITutor;
}

export interface getTutorReviewsResponse {
  reviews: IReview[];
}

export interface getFilterSubjectsResponse {
  subjects: Array<{ value: string; label: string }>;
}

export const getQueryString = (query: any) => {
  const string = Object.entries(query).reduce((str, el) => {
    if (el[1] != "undefined") {
      if (typeof el[1] === "object" && !Array.isArray(el[1])) {
        str += `${getQueryString(el[1])}`;
      } else str += `${el[0]}=${el[1]}&`;
    }
    return str;
  }, "");
  return string;
};

export class ApiUsers {
  static async getTutors(payload: getTutorsPayload) {
    const query = getQueryString(payload.query);
    const res = await mainAxios.get<getTutorsResponse>(
      `/tutors/${payload.page}?${query}`,
    );
    return res.data;
    // const mock = {
    //   tutors: [
    //     {
    //       id: 1,
    //       name: "Арсений",
    //       image:
    //         "https://celes.club/uploads/posts/2022-10/thumbs/1666975077_30-celes-club-p-etsio-art-vkontakte-31.jpg",
    //       role: "teacher",
    //       age: 32,
    //       gender: "male",
    //       education: {
    //         id: 1,
    //         field: "",
    //         status: "",
    //         level: "2",
    //         institution: {
    //           info: "",
    //           id: 1,
    //           name: "SFEDU",
    //           type: "",
    //           location: "RUSSIA",
    //         },
    //       },
    //       subject: ["Программирование"],
    //       cost: 2500,
    //     },
    //     {
    //       cost: 2500,
    //       id: 2,
    //       name: "Арсений",
    //       image:
    //         "https://celes.club/uploads/posts/2022-10/thumbs/1666975077_30-celes-club-p-etsio-art-vkontakte-31.jpg",
    //       role: "teacher",
    //       age: 32,
    //       gender: "male",
    //       education: {
    //         id: 1,
    //         field: "",
    //         status: "",
    //         level: "2",
    //         institution: {
    //           info: "",
    //           id: 1,
    //           name: "SFEDU",
    //           type: "",
    //           location: "RUSSIA",
    //         },
    //       },
    //       subject: ["Программирование", "Математика"],
    //     },
    //     {
    //       cost: 2500,
    //       id: 3,
    //       name: "Арсений",
    //       image:
    //         "https://celes.club/uploads/posts/2022-10/thumbs/1666975077_30-celes-club-p-etsio-art-vkontakte-31.jpg",
    //       role: "teacher",
    //       age: 32,
    //       gender: "male",
    //       education: {
    //         id: 1,
    //         field: "",
    //         status: "",
    //         level: "2",
    //         institution: {
    //           info: "",
    //           id: 1,
    //           name: "SFEDU",
    //           type: "",
    //           location: "RUSSIA",
    //         },
    //       },
    //       subject: ["Математика"],
    //     },
    //     {
    //       cost: 2500,
    //       id: 4,
    //       name: "Арсений",
    //       image:
    //         "https://celes.club/uploads/posts/2022-10/thumbs/1666975077_30-celes-club-p-etsio-art-vkontakte-31.jpg",
    //       role: "teacher",
    //       age: 32,
    //       gender: "male",
    //       education: {
    //         id: 1,
    //         field: "",
    //         status: "",
    //         level: "2",
    //         institution: {
    //           info: "",
    //           id: 1,
    //           name: "SFEDU",
    //           type: "",
    //           location: "RUSSIA",
    //         },
    //       },
    //       subject: ["Информатика", "Математика"],
    //     },
    //     {
    //       cost: 2500,
    //       id: 5,
    //       name: "Арсений",
    //       image:
    //         "https://celes.club/uploads/posts/2022-10/thumbs/1666975077_30-celes-club-p-etsio-art-vkontakte-31.jpg",
    //       role: "teacher",
    //       age: 32,
    //       gender: "male",
    //       education: {
    //         id: 1,
    //         field: "",
    //         status: "",
    //         level: "2",
    //         institution: {
    //           info: "",
    //           id: 1,
    //           name: "SFEDU",
    //           type: "",
    //           location: "RUSSIA",
    //         },
    //       },
    //       subject: ["Информатика", "Математика"],
    //     },
    //     {
    //       cost: 2500,
    //       id: 6,
    //       name: "Арсений",
    //       image:
    //         "https://celes.club/uploads/posts/2022-10/thumbs/1666975077_30-celes-club-p-etsio-art-vkontakte-31.jpg",
    //       role: "teacher",
    //       age: 32,
    //       gender: "male",
    //       education: {
    //         id: 1,
    //         field: "",
    //         status: "",
    //         level: "2",
    //         institution: {
    //           info: "",
    //           id: 1,
    //           name: "SFEDU",
    //           type: "",
    //           location: "RUSSIA",
    //         },
    //       },
    //       subject: ["Информатика"],
    //     },
    //     // {
    //     //   id: 7,
    //     //   name: "Арсений",
    //     //   image:
    //     //       "https://celes.club/uploads/posts/2022-10/thumbs/1666975077_30-celes-club-p-etsio-art-vkontakte-31.jpg",
    //     //   role: "teacher",
    //     //   age: 32,
    //     //   gender: "male",
    //     //   education: {
    //     //     id: 1,
    //     //     field: "",
    //     //     status: "",
    //     //     level: "2",
    //     //     institution: {
    //     //       info: "",
    //     //       id: 1,
    //     //       name: "SFEDU",
    //     //       type: "",
    //     //       location: "RUSSIA",
    //     //     },
    //     //   },
    //     //   subject: "Программирование",
    //     // },
    //     // {
    //     //   id: 8,
    //     //   name: "Арсений",
    //     //   image:
    //     //       "https://celes.club/uploads/posts/2022-10/thumbs/1666975077_30-celes-club-p-etsio-art-vkontakte-31.jpg",
    //     //   role: "teacher",
    //     //   age: 32,
    //     //   gender: "male",
    //     //   education: {
    //     //     id: 1,
    //     //     field: "",
    //     //     status: "",
    //     //     level: "2",
    //     //     institution: {
    //     //       info: "",
    //     //       id: 1,
    //     //       name: "SFEDU",
    //     //       type: "",
    //     //       location: "RUSSIA",
    //     //     },
    //     //   },
    //     //   subject: "Программирование",
    //     // },
    //     // {
    //     //   id: 9,
    //     //   name: "Арсений",
    //     //   image:
    //     //       "https://celes.club/uploads/posts/2022-10/thumbs/1666975077_30-celes-club-p-etsio-art-vkontakte-31.jpg",
    //     //   role: "teacher",
    //     //   age: 32,
    //     //   gender: "male",
    //     //   education: {
    //     //     id: 1,
    //     //     field: "",
    //     //     status: "",
    //     //     level: "2",
    //     //     institution: {
    //     //       info: "",
    //     //       id: 1,
    //     //       name: "SFEDU",
    //     //       type: "",
    //     //       location: "RUSSIA",
    //     //     },
    //     //   },
    //     //   subject: "Программирование",
    //     // },
    //     // {
    //     //   id: 10,
    //     //   name: "Арсений",
    //     //   image:
    //     //       "https://celes.club/uploads/posts/2022-10/thumbs/1666975077_30-celes-club-p-etsio-art-vkontakte-31.jpg",
    //     //   role: "teacher",
    //     //   age: 32,
    //     //   gender: "male",
    //     //   education: {
    //     //     id: 1,
    //     //     field: "",
    //     //     status: "",
    //     //     level: "2",
    //     //     institution: {
    //     //       info: "",
    //     //       id: 1,
    //     //       name: "SFEDU",
    //     //       type: "",
    //     //       location: "RUSSIA",
    //     //     },
    //     //   },
    //     //   subject: "Программирование",
    //     // },
    //     // {
    //     //   id: 11,
    //     //   name: "Арсений",
    //     //   image:
    //     //       "https://celes.club/uploads/posts/2022-10/thumbs/1666975077_30-celes-club-p-etsio-art-vkontakte-31.jpg",
    //     //   role: "teacher",
    //     //   age: 32,
    //     //   gender: "male",
    //     //   education: {
    //     //     id: 1,
    //     //     field: "",
    //     //     status: "",
    //     //     level: "2",
    //     //     institution: {
    //     //       info: "",
    //     //       id: 1,
    //     //       name: "SFEDU",
    //     //       type: "",
    //     //       location: "RUSSIA",
    //     //     },
    //     //   },
    //     //   subject: "Программирование",
    //     // },
    //     // {
    //     //   id: 12,
    //     //   name: "Арсений",
    //     //   image:
    //     //       "https://celes.club/uploads/posts/2022-10/thumbs/1666975077_30-celes-club-p-etsio-art-vkontakte-31.jpg",
    //     //   role: "teacher",
    //     //   age: 32,
    //     //   gender: "male",
    //     //   education: {
    //     //     id: 1,
    //     //     field: "",
    //     //     status: "",
    //     //     level: "2",
    //     //     institution: {
    //     //       info: "",
    //     //       id: 1,
    //     //       name: "SFEDU",
    //     //       type: "",
    //     //       location: "RUSSIA",
    //     //     },
    //     //   },
    //     //   subject: "Программирование",
    //     // },
    //   ],
    //   total: 21,
    // } as getTutorsResponse;
    // return mock;
  }

  static async getTutor(id: string) {
    const res = await mainAxios.get<getTutorResponse>(`/tutor/${id}`);
    return res.data.tutor;
    // const mock: getTutorResponse = {
    //   tutor: {
    //     id: 1,
    //     name: "Арсений",
    //     image:
    //       "https://celes.club/uploads/posts/2022-10/thumbs/1666975077_30-celes-club-p-etsio-art-vkontakte-31.jpg",
    //     role: "teacher",
    //     age: 32,
    //     gender: "Мужчина",
    //     education: {
    //       id: 1,
    //       field: "",
    //       status: "",
    //       level: "2",
    //       institution: {
    //         info: "",
    //         id: 1,
    //         name: "Университет ИТМО",
    //         type: "",
    //         location: "RUSSIA",
    //       },
    //     },
    //     subject: ["Программирование", "Информатика", "Математика"],
    //     cost: 2500,
    //     portfolio: {
    //       id: 123,
    //       subjects: [],
    //       description: "",
    //       education_level: "2",
    //       lesson_cost_rub: 1230,
    //       working_schedule: "10:00 - 22:00",
    //     },
    //     lessons: [
    //       {
    //         id: 1,
    //         locations: ["Ломоносова 11", "Кронверкский Пр.49", "Белорусская 6"],
    //         tutor: {
    //           id: 1,
    //           name: "Арсений",
    //           image:
    //             "https://celes.club/uploads/posts/2022-10/thumbs/1666975077_30-celes-club-p-etsio-art-vkontakte-31.jpg",
    //           role: "teacher",
    //           age: 32,
    //           gender: "Мужчина",
    //           education: {
    //             id: 1,
    //             field: "",
    //             status: "",
    //             level: "2",
    //             institution: {
    //               info: "",
    //               id: 1,
    //               name: "Университет ИТМО",
    //               type: "",
    //               location: "RUSSIA",
    //             },
    //           },
    //           subject: ["Программирование", "Информатика", "Математика"],
    //           cost: 2500,
    //           portfolio: {
    //             id: 123,
    //             subjects: [],
    //             description: "",
    //             education_level: "2",
    //             lesson_cost_rub: 1230,
    //             working_schedule: "10:00 - 22:00",
    //           },
    //         },
    //         subject: "Программирование",
    //         cost: 2500,
    //         start_time: String(new Date(2024, 0, 17, 10)),
    //         end_time: String(new Date(2024, 0, 17, 12)),
    //       },
    //       {
    //         id: 2,
    //         locations: ["Ломоносова 9", "Кронверкский Пр.49", "Белорусская 6"],
    //         tutor: {
    //           id: 1,
    //           name: "Арсений",
    //           image:
    //             "https://celes.club/uploads/posts/2022-10/thumbs/1666975077_30-celes-club-p-etsio-art-vkontakte-31.jpg",
    //           role: "teacher",
    //           age: 32,
    //           gender: "Мужчина",
    //           education: {
    //             id: 1,
    //             field: "",
    //             status: "",
    //             level: "2",
    //             institution: {
    //               info: "",
    //               id: 1,
    //               name: "Университет ИТМО",
    //               type: "",
    //               location: "RUSSIA",
    //             },
    //           },
    //           subject: ["Программирование", "Информатика", "Математика"],
    //           cost: 2500,
    //           portfolio: {
    //             id: 123,
    //             subjects: [],
    //             description: "",
    //             education_level: "2",
    //             lesson_cost_rub: 1230,
    //             working_schedule: "10:00 - 22:00",
    //           },
    //         },
    //         subject: "Программирование",
    //         cost: 2500,
    //         start_time: String(new Date(2024, 0, 20, 14)),
    //         end_time: String(new Date(2024, 0, 20, 16)),
    //       },
    //       {
    //         id: 3,
    //         locations: ["Ломоносова 9", "Кронверкский Пр.49", "Белорусская 6"],
    //         tutor: {
    //           id: 1,
    //           name: "Арсений",
    //           image:
    //             "https://celes.club/uploads/posts/2022-10/thumbs/1666975077_30-celes-club-p-etsio-art-vkontakte-31.jpg",
    //           role: "teacher",
    //           age: 32,
    //           gender: "Мужчина",
    //           education: {
    //             id: 1,
    //             field: "",
    //             status: "",
    //             level: "2",
    //             institution: {
    //               info: "",
    //               id: 1,
    //               name: "Университет ИТМО",
    //               type: "",
    //               location: "RUSSIA",
    //             },
    //           },
    //           subject: ["Программирование", "Информатика", "Математика"],
    //           cost: 2500,
    //           portfolio: {
    //             id: 123,
    //             subjects: [],
    //             description: "",
    //             education_level: "2",
    //             lesson_cost_rub: 1230,
    //             working_schedule: "10:00 - 22:00",
    //           },
    //         },
    //         subject: "Программирование",
    //         cost: 2500,
    //         start_time: String(new Date(2024, 0, 16, 8)),
    //         end_time: String(new Date(2024, 0, 16, 9)),
    //       },
    //       {
    //         id: 4,
    //         locations: ["Ломоносова 9", "Кронверкский Пр.49", "Белорусская 6"],
    //         tutor: {
    //           id: 1,
    //           name: "Арсений",
    //           image:
    //             "https://celes.club/uploads/posts/2022-10/thumbs/1666975077_30-celes-club-p-etsio-art-vkontakte-31.jpg",
    //           role: "teacher",
    //           age: 32,
    //           gender: "Мужчина",
    //           education: {
    //             id: 1,
    //             field: "",
    //             status: "",
    //             level: "2",
    //             institution: {
    //               info: "",
    //               id: 1,
    //               name: "Университет ИТМО",
    //               type: "",
    //               location: "RUSSIA",
    //             },
    //           },
    //           subject: ["Программирование", "Информатика", "Математика"],
    //           cost: 2500,
    //           portfolio: {
    //             id: 123,
    //             subjects: [],
    //             description: "",
    //             education_level: "2",
    //             lesson_cost_rub: 1230,
    //             working_schedule: "10:00 - 22:00",
    //           },
    //         },
    //         subject: "Программирование",
    //         cost: 2500,
    //         start_time: String(new Date(2024, 0, 16, 10)),
    //         end_time: String(new Date(2024, 0, 16, 12)),
    //       },
    //       {
    //         id: 5,
    //         locations: ["Ломоносова 9", "Кронверкский Пр.49", "Белорусская 6"],
    //         tutor: {
    //           id: 1,
    //           name: "Арсений",
    //           image:
    //             "https://celes.club/uploads/posts/2022-10/thumbs/1666975077_30-celes-club-p-etsio-art-vkontakte-31.jpg",
    //           role: "teacher",
    //           age: 32,
    //           gender: "Мужчина",
    //           education: {
    //             id: 1,
    //             field: "",
    //             status: "",
    //             level: "2",
    //             institution: {
    //               info: "",
    //               id: 1,
    //               name: "Университет ИТМО",
    //               type: "",
    //               location: "RUSSIA",
    //             },
    //           },
    //           subject: ["Программирование", "Информатика", "Математика"],
    //           cost: 2500,
    //           portfolio: {
    //             id: 123,
    //             subjects: [],
    //             description: "",
    //             education_level: "2",
    //             lesson_cost_rub: 1230,
    //             working_schedule: "10:00 - 22:00",
    //           },
    //         },
    //         subject: "Информатика",
    //         cost: 2500,
    //         start_time: String(new Date(2024, 0, 16, 8)),
    //         end_time: String(new Date(2024, 0, 16, 9)),
    //       },
    //       {
    //         id: 6,
    //         locations: ["Ломоносова 9", "Кронверкский Пр.49", "Белорусская 6"],
    //         tutor: {
    //           id: 1,
    //           name: "Арсений",
    //           image:
    //             "https://celes.club/uploads/posts/2022-10/thumbs/1666975077_30-celes-club-p-etsio-art-vkontakte-31.jpg",
    //           role: "teacher",
    //           age: 32,
    //           gender: "Мужчина",
    //           education: {
    //             id: 1,
    //             field: "",
    //             status: "",
    //             level: "2",
    //             institution: {
    //               info: "",
    //               id: 1,
    //               name: "Университет ИТМО",
    //               type: "",
    //               location: "RUSSIA",
    //             },
    //           },
    //           subject: ["Программирование", "Информатика", "Математика"],
    //           cost: 2500,
    //           portfolio: {
    //             id: 123,
    //             subjects: [],
    //             description: "",
    //             education_level: "2",
    //             lesson_cost_rub: 1230,
    //             working_schedule: "10:00 - 22:00",
    //           },
    //         },
    //         subject: "Математика",
    //         cost: 2500,
    //         start_time: String(new Date(2024, 0, 16, 10)),
    //         end_time: String(new Date(2024, 0, 16, 12)),
    //       },
    //     ],
    //   },
    // };
    // return mock.tutor;
  }

  static async getTutorReviews(id: string) {
    const res = await mainAxios.get<getTutorReviewsResponse>(
      `/tutor/${id}/reviews`,
    );
    return res.data.reviews;
    // const mock: getTutorReviewsResponse = {
    //   reviews: [
    //     {
    //       id: 1,
    //       reviewer: {
    //         id: 1,
    //         name: "Алексей",
    //         image:
    //           "https://celes.club/uploads/posts/2022-10/thumbs/1666975077_30-celes-club-p-etsio-art-vkontakte-31.jpg",
    //         role: "teacher",
    //         age: 32,
    //         gender: "Мужчина",
    //         education: {
    //           id: 1,
    //           field: "",
    //           status: "",
    //           level: "2",
    //           institution: {
    //             info: "",
    //             id: 1,
    //             name: "Университет ИТМО",
    //             type: "",
    //             location: "RUSSIA",
    //           },
    //         },
    //         subject: ["Программирование"],
    //         portfolio: {
    //           id: 123,
    //           subjects: [],
    //           description: "",
    //           education_level: "2",
    //           lesson_cost_rub: 1230,
    //           working_schedule: "10:00 - 22:00",
    //         },
    //       },
    //       date: "14.01.2024",
    //       header: "Хороший преподаватель!",
    //       text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus dicta doloremque dolores, ducimus et eveniet explicabo labore laboriosam minima minus, non nostrum, quaerat repudiandae sit suscipit voluptatem? Distinctio, saepe.",
    //     },
    //     {
    //       id: 2,
    //       reviewer: {
    //         id: 2,
    //         name: "Александр",
    //         image:
    //           "https://celes.club/uploads/posts/2022-10/thumbs/1666975077_30-celes-club-p-etsio-art-vkontakte-31.jpg",
    //         role: "teacher",
    //         age: 32,
    //         gender: "Мужчина",
    //         education: {
    //           id: 1,
    //           field: "",
    //           status: "",
    //           level: "2",
    //           institution: {
    //             info: "",
    //             id: 1,
    //             name: "Университет ИТМО",
    //             type: "",
    //             location: "RUSSIA",
    //           },
    //         },
    //         subject: ["Программирование"],
    //         portfolio: {
    //           id: 123,
    //           subjects: [],
    //           description: "",
    //           education_level: "2",
    //           lesson_cost_rub: 1230,
    //           working_schedule: "10:00 - 22:00",
    //         },
    //       },
    //       date: "14.01.2024",
    //       header: "Хороший преподаватель!",
    //       text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus dicta doloremque dolores, ducimus et eveniet explicabo labore laboriosam minima minus, non nostrum, quaerat repudiandae sit suscipit voluptatem? Distinctio, saepe.",
    //     },
    //     {
    //       id: 3,
    //       reviewer: {
    //         id: 3,
    //         name: "Дмитрий",
    //         image:
    //           "https://celes.club/uploads/posts/2022-10/thumbs/1666975077_30-celes-club-p-etsio-art-vkontakte-31.jpg",
    //         role: "teacher",
    //         age: 32,
    //         gender: "Мужчина",
    //         education: {
    //           id: 1,
    //           field: "",
    //           status: "",
    //           level: "2",
    //           institution: {
    //             info: "",
    //             id: 1,
    //             name: "Университет ИТМО",
    //             type: "",
    //             location: "RUSSIA",
    //           },
    //         },
    //         subject: ["Программирование"],
    //         portfolio: {
    //           id: 123,
    //           subjects: [],
    //           description: "",
    //           education_level: "2",
    //           lesson_cost_rub: 1230,
    //           working_schedule: "10:00 - 22:00",
    //         },
    //       },
    //       date: "14.01.2024",
    //       header: "Хороший преподаватель!",
    //       text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus dicta doloremque dolores, ducimus et eveniet explicabo labore laboriosam minima minus, non nostrum, quaerat repudiandae sit suscipit voluptatem? Distinctio, saepe.",
    //     },
    //   ],
    // };
    // return mock.reviews;
  }

  static async getFilterSubjects() {
    const res = await mainAxios.get<getFilterSubjectsResponse>(
      `/tutors/filter/subjects`,
    );
    return res.data.subjects;
    // const mock = {
    //   subjects: [
    //     { label: "Русский язык", value: "Русский язык" },
    //     { label: "Английский язык", value: "Английский язык" },
    //   ],
    // } as getFilterSubjectsResponse;
    // return mock.subjects;
  }

  static async getFilterCities() {
    const res = await mainAxios.get<getFilterSubjectsResponse>(
      `/tutors/filter/cities`,
    );
    return res.data.subjects;
    // const mock = {
    //   subjects: [
    //     { label: "Ростов-на-Дону", value: "Ростов-на-Дону" },
    //     { label: "Челябинск", value: "Челябинск" },
    //   ],
    // } as getFilterSubjectsResponse;
    // return mock.subjects;
  }

  static async signToLesson(id: string, payload: SignToLessonPayload) {
    const res = await mainAxios.post(`/lessons/${id}`, payload);
    return res.data;
    // return true;
  }
}
