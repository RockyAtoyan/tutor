import { auth } from "@/lib/services/service.auth";
import { redirect } from "next/navigation";
import { ApiChats } from "@/lib/api/api.chats";
import { ChatsListItem } from "@/app/(browse)/chats/_components/ChatsListItem";
import { Metadata } from "next";
import { getChats } from "@/lib/services/service.chats";

export const metadata: Metadata = {
  title: "Tutor | Мессенджер",
  description: "Научи обучение вместе с Tutor",
};

const ChatsLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await auth();

  if (!user) redirect("/login");

  const chats = await getChats(String(user.id));

  return (
    <div className="page">
      <h1>Сообщения</h1>
      {!!chats && !!chats.length ? (
        <div className="flex flex-col lg:flex-row items-stretch gap-5 h-[80vh] overflow-hidden">
          <div className="flex lg:flex-col gap-4 w-auto lg:w-[25%] h-[18%] lg:h-auto overflow-auto p-2 lg:p-5 bg-secondary rounded-3xl">
            {chats.map((chat) => {
              return <ChatsListItem key={chat.user.id} {...chat} />;
            })}
          </div>
          <div className="h-[73%] lg:h-auto w-full lg:w-[73%]">{children}</div>
        </div>
      ) : (
        <h2 className="text-destructive">Пока пусто!</h2>
      )}
    </div>
  );
};

export default ChatsLayout;
