"use server";

import { auth } from "@/lib/services/service.auth";
import { ApiUsers } from "@/lib/api/api.users";
import { revalidatePath } from "next/cache";

export interface SignToLessonPayload {
  // date: Date;
  time: string;
  lessonType: string;
  tutorId: number;
  authId: number;
  subject: string;
  startDateTime: string;
  endDateTime: string;
}

export const signToLesson = async (
  id: string,
  payload: SignToLessonPayload,
) => {
  const user = await auth();
  if (!user) return null;
  try {
    const res = await ApiUsers.signToLesson(id, payload);
    revalidatePath("/");
    revalidatePath("/tutor/[id]", "page");
    revalidatePath("/schedule");
    return res;
  } catch (e) {
    const error = e as Error;
    console.log(error.message);
    return null;
  }
};
