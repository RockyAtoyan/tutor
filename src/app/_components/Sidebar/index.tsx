import { auth } from "@/lib/services/service.auth";
import { Navigation } from "@/app/_components/Sidebar/Navigation";

export const Sidebar = async () => {
  const user = await auth();

  return <Navigation user={user} />;
};
