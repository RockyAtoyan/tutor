import { IPortfolio } from "@/lib/types/IPortfolio";
import { IEducation } from "@/lib/types/IEducation";

export interface IPeople {
  id: number;
  name: string;
  image: string;
  portfolio?: IPortfolio;
  gender: string;
  age: number;
  education: IEducation;
  subject: string[];
  lessons?: IPeopleLesson[];
  role: string;
}

export interface IPeopleLesson {
  id: number;
  tutor: IPeopleLessonTutor;
  subject: string;
  start_time: string | number | Date;
  end_time: string | number | Date;
  cost: number;
  link?: string;
}

export interface IPeopleLessonTutor {
  id: number;
  name: string;
  image: string;
  gender: string;
  age: number;
  role: string;
  cost: number;
}
