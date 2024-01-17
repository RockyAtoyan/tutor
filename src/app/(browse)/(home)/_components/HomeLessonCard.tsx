import { FC } from "react";
import { ILesson } from "@/lib/types/ILesson";
import Link from "next/link";
import { getMonth } from "@/app/(browse)/schedule/_components/Calendar";
import Image from "next/image";

interface Props {
  lesson: ILesson;
}

export const HomeLessonCard: FC<Props> = ({ lesson }) => {
  const startDate = new Date(lesson.start_time);
  const startTime =
    startDate.getDate() +
    " " +
    getMonth(startDate.getMonth()) +
    " " +
    startDate.toLocaleTimeString().slice(0, 5);

  return (
    <Link
      // href={`/schedule/?lesson=${lesson.id}`}
      href={`/schedule`}
      className="flex flex-col gap-7 p-5 rounded-3xl bg-zinc-300 text-zinc-700 w-[90%] lg:w-8/12"
    >
      <h2 className="text-2xl font-extrabold">{lesson.subject}</h2>
      <h4 className="text-lg font-semibold">{startTime}</h4>
      <div className="flex items-center gap-3 flex-col lg:flex-row">
        <Image
          src={lesson.tutor.image || "/user.png"}
          alt={"tutor"}
          width={500}
          height={500}
          className="w-[60px] h-[60px] object-cover object-center rounded-full"
        />
        <h3 className="text-lg font-semibold">{lesson.tutor.name}</h3>
      </div>
    </Link>
  );
};
