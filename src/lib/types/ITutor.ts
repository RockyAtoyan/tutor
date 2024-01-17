import { IPortfolio } from "@/lib/types/IPortfolio";
import { IEducation } from "@/lib/types/IEducation";
import { ILesson } from "@/lib/types/ILesson";
export interface ITutor {
  id: number;
  name: string;
  image: string;
  portfolio?: IPortfolio;
  gender: string;
  age: number;
  education: IEducation;
  subject: string[];
  role: string;
  cost: number;
  lessons: ILesson[];
}

export interface ITutorInTutorLesson {
  id: number;
  name: string;
  image: string;
  portfolio?: IPortfolio;
  gender: string;
  age: number;
  education: IEducation;
  subject: string[];
  role: string;
  cost: number;
}

// export interface ILessonInTutor {
//   id: number;
//   tutor: ITutorInTutorLesson;
//   subject: string;
//   start_time: string | number;
//   end_time: string | number;
//   cost: number;
//   link?: string;
// }
