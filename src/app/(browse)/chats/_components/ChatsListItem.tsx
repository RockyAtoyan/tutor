import { IPeople } from "@/lib/types/IPeople";
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  user: IPeople;
  lastMessage: string;
}

export const ChatsListItem: FC<Props> = ({ user, lastMessage }) => {
  return (
    <Link
      href={`/chats/${user.id}`}
      className="flex flex-col lg:flex-row items-center gap-2 p-2 rounded-xl bg-white "
    >
      <Image
        src={user.image || "/user.png"}
        alt={"user"}
        width={500}
        height={500}
        className="w-[25px] h-[25px] lg:w-[50px] lg:h-[50px] object-cover object-center rounded-full"
      />
      <div className="flex flex-col gap-[5px] min-w-[100px] lg:min-w-max ">
        <h2 className="text-[10px] text-center lg:text-start lg:text-lg font-bold">
          {user.name}
        </h2>
        <h3 className="hidden lg:block text-sm font-semibold text-neutral-500">
          {lastMessage}
        </h3>
      </div>
    </Link>
  );
};
