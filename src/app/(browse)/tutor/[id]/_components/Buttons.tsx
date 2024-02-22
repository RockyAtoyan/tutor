"use client";

import { useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Loader } from "@/components/Loader";
import { useRouter } from "next/navigation";

export const Buttons = ({ id }: { id: number }) => {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();
  return (
    <>
      {isPending && <Loader />}
      <Button
        //asChild
        variant={"default"}
        className="w-[50%]"
        onClick={() => {
          startTransition(() => {
            router.push(`/tutor/${id}/sign`);
          });
        }}
      >
        {/*<Link href={`/tutor/${id}/sign`}>Записаться</Link>*/}
        Записаться
      </Button>
      <Button
        //asChild
        variant={"outline"}
        className="w-[50%]"
        onClick={() => {
          startTransition(() => {
            router.push(`/chats/${id}`);
          });
        }}
      >
        {/*<Link href={`/chats/${id}`}>Написать</Link>*/}
        Написать
      </Button>
    </>
  );
};
