"use server";

import { ApiAuth, LoginPayload, RegPayload } from "@/lib/api/api.auth";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export const registration = async (payload: RegPayload) => {
  try {
    const res = await ApiAuth.registration(payload);
    return res.user;
  } catch (e) {
    const error = e as Error;
    console.log(error.message);
    return null;
  }
};

export const login = async (payload: LoginPayload) => {
  try {
    const { user, accessToken } = await ApiAuth.login(payload);
    console.log(user, accessToken);
    cookies().set("accessToken", accessToken);

    revalidatePath("/");
    return user;
  } catch (e) {
    const error = e as Error;
    console.log(error.message);
    return null;
  }
};

export const logout = async () => {
  try {
    const res = await ApiAuth.logout();
    console.log(res);
    revalidatePath("/");
    //redirect("/login");
    return res.success;
  } catch (e) {
    const error = e as Error;
    console.log(error.message);
    return null;
  }
};

export const getAccessToken = () => {
  const cks = cookies();
  const accessToken = cks.get("accessToken")?.value;
  if (!accessToken) return null;
  return accessToken;
};
