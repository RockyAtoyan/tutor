import { IPeople } from "@/lib/types/IPeople";

export interface IMessage {
  id: number;
  //sender_id: number
  //receiver_id:number
  sender: IPeople;
  receiver: IPeople;
  text: string;
  subjects: string;
  time: string;
}
