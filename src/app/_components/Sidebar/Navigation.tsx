"use client";

import { IPeople } from "@/lib/types/IPeople";
import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAppSelector } from "@/lib/hooks/useAppSelector";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/lib/hooks/useAppDispatch";
import { setMenuCollapse } from "@/store/reducers/service/reducer";
import { ArrowLeftToLine, ArrowRightToLine } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Props {
  user: IPeople | null;
}

export const Navigation: FC<Props> = ({ user }) => {
  const dispatch = useAppDispatch();

  const collapse = useAppSelector((state) => state.service.navCollapse);

  return (
    <div
      className={cn(
        "relative flex w-full lg:flex-col gap-16 transition-all h-[10%] lg:h-screen p-3 bg-neutral-800",
        collapse ? "lg:w-[60px]" : "lg:w-[200px]",
      )}
    >
      <Button
        onClick={() => {
          dispatch(setMenuCollapse(!collapse));
        }}
        variant={"secondary"}
        size={"icon"}
        className={cn(
          "transition-all absolute z-10 top-[50px] right-[-20px] hidden lg:flex",
          // collapse ? "left-1/2 -translate-x-1/2" : "right-0",
        )}
      >
        {!collapse ? <ArrowLeftToLine /> : <ArrowRightToLine />}
      </Button>
      <Link
        href={"/"}
        className={cn(
          "logo bg-destructive w-[50px] flex items-center justify-center text-center text-white rounded-[10px] text-xl transition-all",
          collapse ? "lg:w-[100%]" : "lg:w-[100%]",
        )}
      >
        {/*<span></span>*/}
        <span
          className={cn("text-xl font-bold", collapse ? "block" : "hidden")}
        >
          T
        </span>
        <span
          className={cn("text-xl font-bold", collapse ? "hidden" : "block")}
        >
          TUTOR
        </span>
      </Link>
      <nav className="flex lg:flex-col gap-10 text-white ">
        <Link
          href={"/"}
          className={cn(
            "flex items-center gap-2 transition-all lg:py-2",
            collapse
              ? "justify-center gap-0"
              : "lg:px-1 lg:rounded-xl lg:hover:bg-secondary",
          )}
        >
          <Image
            src={"/menu/menu-home.svg"}
            alt={"home"}
            width={30}
            height={30}
          />
          <Badge
            className={cn(
              "transition-opacity",
              collapse
                ? "opacity-0 invisible w-[0px] p-0 border-0"
                : "text-sm opacity-1 visible",
            )}
          >
            Главная
          </Badge>
        </Link>
        {user && (
          <>
            <Link
              href={"/chats"}
              className={cn(
                "flex items-center gap-2 transition-all lg:py-2",
                collapse
                  ? "justify-center gap-0"
                  : "lg:px-1 lg:rounded-xl lg:hover:bg-secondary",
              )}
            >
              <Image
                src={"/menu/menu-chat.svg"}
                alt={"home"}
                width={30}
                height={30}
              />
              <Badge
                className={cn(
                  "transition-opacity",
                  collapse
                    ? "opacity-0 invisible w-[0px] p-0 border-0"
                    : "text-sm opacity-1 visible",
                )}
              >
                Сообщения
              </Badge>
            </Link>
            <Link
              href={"/schedule"}
              className={cn(
                "flex items-center gap-2 transition-all lg:py-2",
                collapse
                  ? "justify-center gap-0"
                  : "lg:px-1 lg:rounded-xl lg:hover:bg-secondary",
              )}
            >
              <Image
                src={"/menu/menu-schedule.svg"}
                alt={"home"}
                width={30}
                height={30}
              />
              <Badge
                className={cn(
                  "transition-opacity",
                  collapse
                    ? "opacity-0 invisible w-[0px] p-0 border-0"
                    : "text-sm opacity-1 visible",
                )}
              >
                Расписание
              </Badge>
            </Link>
          </>
        )}
      </nav>
    </div>
  );
};
