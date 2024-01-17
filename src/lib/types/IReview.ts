import { IPeople } from "@/lib/types/IPeople";

export interface IReview {
  id: number;
  person_id: number;
  header: string;
  text: string;
  date: string;
  //reviewer_id: number
  reviewer: IPeople;
}
