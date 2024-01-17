"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React, { FC, useRef } from "react";
import { sendMessage } from "@/store/reducers/chat/actionCreators";
import { IPeople } from "@/lib/types/IPeople";
import { SendIcon } from "lucide-react";
import { useAppDispatch } from "@/lib/hooks/useAppDispatch";

interface Props {
  authUser: IPeople;
  id: string;
}

export const Form: FC<Props> = ({ authUser, id }) => {
  const dispatch = useAppDispatch();

  const form = useRef<HTMLFormElement>(null);

  const sendMessageHandler = async (data: FormData) => {
    const message = {
      text: String(data.get("message")),
    };
    if (!message.text) return;
    // const res = await sendMessage({
    //   authId: String(authUser.id),
    //   id,
    //   message,
    // });
    await dispatch(
      sendMessage({
        authId: String(authUser.id),
        id,
        message: {
          text: message.text,
        },
      }),
    );
    form.current?.reset();
  };
  return (
    <form
      ref={form}
      action={sendMessageHandler}
      className="flex items-center gap-2 px-5"
    >
      <Input className="" name="message" placeholder="Напишите сообщение" />
      <Button variant={"destructive"}>
        <SendIcon />
      </Button>
    </form>
  );
};
