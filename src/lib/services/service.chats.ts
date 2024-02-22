import { ApiChats } from "@/lib/api/api.chats";

export const getChats = async (userId: string) => {
  try {
    const chats = await ApiChats.getUserChats({ id: userId });
    return chats;
  } catch (e) {
    console.log(e);
    return [];
  }
};
