import {
  CalendarDayWithLessons,
  getMonth,
  times,
} from "@/app/(browse)/schedule/_components/Calendar";
import { FC } from "react";
import { ILesson } from "@/lib/types/ILesson";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Props {
  day: CalendarDayWithLessons;
  blockHeight: number;
}

export const LessonCard: FC<{
  lesson: ILesson;
  blocks?: number;
  blockHeight: number;
}> = ({ lesson, blocks, blockHeight }) => {
  const startDate = new Date(lesson.start_time);
  const endDate = new Date(lesson.end_time);

  const startTime = startDate.toLocaleTimeString().slice(0, 5);
  const endTime = endDate.toLocaleTimeString().slice(0, 5);
  const startC = startDate.getHours() - 8 + startDate.getMinutes() / 60;
  const endC = endDate.getHours() - 8 + endDate.getMinutes() / 60;
  const top = ((startC / (blocks || 13)) * 100).toFixed(2);
  return (
    <div
      className={cn(
        `lg:absolute left-0 w-full overflow-hidden bg-secondary p-2 flex flex-col gap-2 rounded-xl calendar-item`,
      )}
      style={{
        height: `calc((100% / ${blockHeight}) * ${endC - startC})`,
        top: `${top}%`,
      }}
    >
      <div className="flex items-start gap-2">
        <Image
          src={lesson.tutor.image || "/user.png"}
          alt={"tutor"}
          width={500}
          height={500}
          className="w-[30px] h-[30px] object-cover object-center rounded-full"
        />
        <div className="w-full flex flex-col gap-1">
          <h4 className="text-[12px] font-semibold">{lesson.tutor.name}</h4>
          <div className="flex items-center justify-between">
            <h4 className="text-[10px]">{lesson.subject}</h4>
            <h4 className="text-[12px] font-semibold">
              {startTime}-{endTime}
            </h4>
          </div>
        </div>
      </div>
      <div className="flex items-start gap-2 justify-center text-[12px]">
        <h3>Подключение:</h3>
        <Link
          className="text-red-400 hover:underline"
          href={lesson.link || "/"}
        >
          ссылка
        </Link>
      </div>
    </div>
  );
};

export const CalendarItem: FC<Props> = ({ day, blockHeight }) => {
  return (
    <div className="w-full h-auto lg:h-full flex flex-col gap-5 lg:gap-1 items-center border-x-2 border-secondary first:border-l-red-200 first:border-l-4 200 last:border-r-[4px]">
      <h3 className="h-[3%]">
        {day.day}, <span className="text-destructive">{day.weekDay}</span>
      </h3>
      <div className="relative flex flex-col gap-3 lg:block lg:gap-0 w-full h-auto lg:h-full px-2 overflow-hidden">
        {day.lessons.map((lesson) => {
          return (
            <LessonCard
              key={lesson.id}
              lesson={lesson}
              blockHeight={blockHeight}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CalendarItem;
