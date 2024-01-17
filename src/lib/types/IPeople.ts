import { IPortfolio } from "@/lib/types/IPortfolio";
import { IEducation } from "@/lib/types/IEducation";
import { ILesson } from "@/lib/types/ILesson";

export interface IPeople {
  id: number;
  name: string;
  image: string;
  portfolio?: IPortfolio;
  gender: string;
  age: number;
  education: IEducation;
  subject: string[];
  lessons?: ILesson[];
  role: string;
}
