"use client";

import React, { FC, useEffect, useRef } from "react";
import { IPeople } from "@/lib/types/IPeople";
import { useAppDispatch } from "@/lib/hooks/useAppDispatch";
import { getMessages } from "@/store/reducers/chat/actionCreators";
import { Message } from "@/app/(browse)/chats/[id]/_components/Message";
import { useAppSelector } from "@/lib/hooks/useAppSelector";

interface Props {
  authUser: IPeople;
  opponent: IPeople;
}

const Messages: FC<Props> = ({ opponent, authUser }) => {
  const dispatch = useAppDispatch();

  const messages = useAppSelector((state) => state.chat.messages);

  const bottom = useRef<HTMLDivElement>(null);

  useEffect(() => {
    dispatch(
      getMessages({ authId: String(authUser.id), id: String(opponent.id) }),
    );
    const timer = setInterval(() => {
      dispatch(
        getMessages({ authId: String(authUser.id), id: String(opponent.id) }),
      );
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    bottom.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col gap-4">
      {!!messages &&
        !!messages.length &&
        messages.map((message) => {
          return (
            <Message
              key={message.id}
              isAuthUser={message.sender.id === authUser.id}
              message={message}
            />
          );
        })}
      <div ref={bottom}></div>
    </div>
  );
};

export default Messages;
