import React from "react";
import { NextPage } from "next";
import { auth } from "@/lib/services/service.auth";
import { redirect } from "next/navigation";
import { ApiChats } from "@/lib/api/api.chats";
import { Message } from "@/app/(browse)/chats/[id]/_components/Message";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { sendMessage } from "@/actions/chats.actions";
import { Form } from "@/app/(browse)/chats/[id]/_components/Form";
import Messages from "@/app/(browse)/chats/[id]/_components/Messages";
import { ApiUsers } from "@/lib/api/api.users";

interface Props {
  params: {
    id: string;
  };
}

const ChatPage: NextPage<Props> = async ({ params }) => {
  const user = await auth();
  if (!user) redirect("/login");

  const opponent = await ApiChats.getUser({
    id: params.id,
  });

  if (!opponent) redirect("/chats");

  // const messages = await ApiChats.getChatMessages({
  //   authId: String(user.id),
  //   id: params.id,
  // });

  return (
    <div className="relative flex flex-col items-end h-full">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] lg:w-[15%] flex items-center justify-center z-[5] lg:py-1 rounded-xl text-base font-semibold bg-red-100">
        {opponent.name}
      </div>
      <div className="w-full flex flex-col gap-3 h-[100%] overflow-auto px-5">
        <Messages authUser={user} opponent={opponent} />
      </div>
      <div className="w-full h-[15%] pt-5">
        <Form authUser={user} id={params.id} />
      </div>
    </div>
  );
};

export default ChatPage;
