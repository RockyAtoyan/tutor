import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tutor | Расписание",
  description: "Научи обучение вместе с Tutor",
};
const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
