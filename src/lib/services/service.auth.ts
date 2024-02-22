import { ApiAuth } from "@/lib/api/api.auth";
import { getAccessToken } from "@/actions/auth.actions";

export const auth = async () => {
  const accessToken = getAccessToken();
  if (!accessToken) return null;
  try {
    const res = await ApiAuth.auth(accessToken);
    return res.user;
  } catch (err) {
    const error = err as Error;
    console.log("auth: " + error.message);
    return null;
  }
};
