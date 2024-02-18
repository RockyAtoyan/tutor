import { IPeople } from "@/lib/types/IPeople";
import { IMessage } from "@/lib/types/IMessage";
import { mainAxios } from "@/lib/api/axios.instances";

export interface getChatsPayload {
  id: string;
}

export interface getUserPayload {
  id: string;
}

export interface getUserResponse {
  user: IPeople | null;
}

export interface getChatsResponse {
  chats: Array<{
    id: number;
    user: IPeople;
    lastMessage: string;
  }>;
}

export interface getMessagesPayload {
  authId: string;
  id: string;
}

export interface getMessagesResponse {
  messages: Array<IMessage>;
}

export interface sendMessagePayload {
  authId: string;
  id: string;
  message: {
    text: string;
  };
}

export interface sendMessageResponse {
  authId: string;
  id: string;
  message: {
    text: string;
  };
}

export class ApiChats {
  static async getUserChats({ id }: getChatsPayload) {
    const res = await mainAxios.get<
      Array<{
        id: number;
        user: IPeople;
        lastMessage: string;
      }>
    >(`/user/${id}/chats`);
    return res.data;
  }
  static async getUser({ id }: getChatsPayload) {
    const res = await mainAxios.get<getUserResponse>(`/user/${id}`);
    return res.data.user;
  }

  static async getChatMessages({ authId, id }: getMessagesPayload) {
    const res = await mainAxios.get<getMessagesResponse>(
      `/user/${authId}/chat/${id}`,
    );
    return res.data.messages;
  }

  static async sendMessage(payload: sendMessagePayload) {
    const res = await mainAxios.post<sendMessageResponse>(
      `/user/${payload.id}/message`,
      payload,
    );
    return res.data;
  }
}
