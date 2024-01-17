import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tutor | Войди в аккаунт и начинай обучение",
  description: "Научи обучение вместе с Tutor",
};
const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
