import { IInstitution } from "@/lib/types/IInstitution";

export interface IEducation {
  id: number;
  level: string;
  field: string;
  //institution_id: number
  institution: IInstitution;
  status: string;
}
