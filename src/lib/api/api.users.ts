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
  }

  static async getTutor(id: string) {
    const res = await mainAxios.get<ITutor>(`/tutor/${id}`);
    return res.data;
  }

  static async getTutorReviews(id: string) {
    const res = await mainAxios.get<getTutorReviewsResponse>(
      `/tutor/${id}/reviews`,
    );
    return res.data.reviews;
  }

  static async getFilterSubjects() {
    const res = await mainAxios.get<getFilterSubjectsResponse>(
      `/tutors/filter/subjects`,
    );
    return res.data.subjects;
  }

  static async getFilterCities() {
    const res = await mainAxios.get<getFilterSubjectsResponse>(
      `/tutors/filter/cities`,
    );
    return res.data.subjects;
  }

  static async signToLesson(id: string, payload: SignToLessonPayload) {
    const res = await mainAxios.post(`/lessons/${id}`, payload);
    return res.data;
  }
}
