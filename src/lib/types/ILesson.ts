import { ITutorInTutorLesson } from "@/lib/types/ITutor";
import { IPeopleLessonTutor } from "@/lib/types/IPeople";

export interface ILesson {
  id: number;
  tutor: ITutorInTutorLesson;
  subject: string;
  start_time: string | number;
  end_time: string | number;
  cost: number;
  link?: string;
  locations: string[];
}
