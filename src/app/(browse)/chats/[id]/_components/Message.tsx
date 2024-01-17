import { IMessage } from "@/lib/types/IMessage";
import { FC } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Props {
  message: IMessage;
  isAuthUser: boolean;
}

export const Message: FC<Props> = ({ message, isAuthUser }) => {
  return (
    <div
      className={cn(
        "flex items-center ",
        isAuthUser ? "justify-end" : "justify-start",
      )}
    >
      <div
        className={
          "relative flex items-start gap-2 p-2 rounded-xl bg-secondary min-w-[150px] max-w-[200px] lg:min-w-[250px] lg:max-w-[500px]"
        }
      >
        <Image
          src={message.sender.image || "/user.png"}
          alt={"user"}
          width={500}
          height={500}
          className="hidden lg:block w-[50px] h-[50px] object-cover object-center rounded-full"
        />
        <div className="flex flex-col gap-[5px]">
          <h3 className="text-[10px] lg:text-sm font-semibold text-neutral-500">
            {message.sender.name}
          </h3>
          <h2 className="text-[12px] lg:text-lg font-medium text-wrap">
            {message.text}
          </h2>
        </div>
        <h5 className="absolute top-[8px] right-[10px] text-[10px] lg:text-sm">
          {message.time.slice(0, 5)}
        </h5>
      </div>
    </div>
  );
};
