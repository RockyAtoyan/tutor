import { auth } from "@/lib/services/service.auth";
import { redirect } from "next/navigation";
import { ApiChats } from "@/lib/api/api.chats";

interface Props {
  searchParams: {
    sel: string;
  };
}

const ChatsPage = async () => {
  return (
    <div className="page flex items-center justify-center h-full">
      <h1>Выберите, с кем хотите обменяться сообщениями!</h1>
    </div>
  );
};

export default ChatsPage;
