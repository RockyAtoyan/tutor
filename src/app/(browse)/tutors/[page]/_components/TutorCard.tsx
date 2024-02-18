"use client";

import { IPeople } from "@/lib/types/IPeople";
import { FC, useTransition } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ITutor } from "@/lib/types/ITutor";
import { useRouter } from "next/navigation";
import { Loader } from "@/components/Loader";

interface Props {
  tutor: ITutor;
}

export const TutorCard: FC<Props> = ({ tutor }) => {
  const [isPending, startTransition] = useTransition();

  const router = useRouter();

  return (
    <div className="flex flex-col justify-between gap-4 w-[80%] bg-secondary p-4 rounded-2xl">
      {isPending && <Loader />}
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-6">
        <div className="flex w-[30%] items-center justify-center">
          <Image
            src={tutor.image || "/user.png"}
            alt={"tutor"}
            width={500}
            height={500}
            className="w-[100%] h-full object-cover object-center rounded-full"
          />
        </div>
        <div className="flex flex-col items-center w-full lg:w-[70%] p-2 rounded-2xl lg:items-start gap-2 bg-white">
          <h2 className="text-lg font-bold">{tutor.name}</h2>
          {!!tutor.subject.length && (
            <ul className="flex flex-col items-center lg:items-start gap-1 list-disc ml-[16px]">
              {tutor.subject.map((sbj) => {
                return (
                  <li
                    key={sbj}
                    className="text-[12px] font-semibold text-neutral-500"
                  >
                    {sbj}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <Button
          //asChild
          variant="outline"
          onClick={() => {
            startTransition(() => {
              router.push(`/tutor/${tutor.id}`);
            });
          }}
        >
          {/*<Link href={`/tutor/${tutor.id}`}>Подробнее</Link>*/}
          Подробнее
        </Button>
        <Badge variant="destructive">от {tutor.cost} р.</Badge>
      </div>
    </div>
  );
};
