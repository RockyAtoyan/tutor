import { ApiAuth } from "@/lib/api/api.auth";
import { getAccessToken } from "@/actions/auth.actions";

export const auth = async () => {
  const accessToken = getAccessToken();
  if (!accessToken) return null;
  try {
    const res = await ApiAuth.auth(accessToken);
    return res ? res.user : res;
  } catch (err) {
    const error = err as Error;
    return null;
  }
};
