import { ITutorInTutorLesson } from "@/lib/types/ITutor";

export interface ILesson {
  id: number;
  tutor: ITutorInTutorLesson;
  subject: string;
  startDateTime: string | number;
  endDateTime: string | number;
  cost: number;
  link?: string;
}
