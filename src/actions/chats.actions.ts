"use server";

import { ApiChats, sendMessagePayload } from "@/lib/api/api.chats";
import { auth } from "@/lib/services/service.auth";
import { revalidatePath } from "next/cache";

export const sendMessage = async (payload: sendMessagePayload) => {
  const user = await auth();
  if (!user) return null;
  try {
    const res = await ApiChats.sendMessage(payload);
    revalidatePath("/chats/[id]", "page");
  } catch (e) {
    const error = e as Error;
    console.log(error.message);
    return null;
  }
};
