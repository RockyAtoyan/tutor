import { ILesson } from "@/lib/types/ILesson";
import { FC } from "react";
import CalendarItem from "@/app/(browse)/schedule/_components/CalendarItem";
import { cn } from "@/lib/utils";
import { IPeopleLesson } from "@/lib/types/IPeople";

interface Props {
  lessons: IPeopleLesson[];
  currentLessonId?: string;
}

interface CalendarDay {
  date: Date;
  day: number;
  month: number;
  year: number;
  weekDay: string;
}

export interface CalendarDayWithLessons {
  date: Date;
  day: number;
  month: number;
  year: number;
  weekDay: string;
  lessons: IPeopleLesson[];
}

export const getMonth = (month: number) => {
  const months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];
  return months[month];
};

export const getWeekDay = (day: number) => {
  const days = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
  return days[day];
};

export const getDays = (lessons: IPeopleLesson[]) => {
  let nowDate;
  if ([0, 6].includes(new Date().getDay())) {
    nowDate = new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 2);
  } else {
    nowDate = new Date();
  }
  const nowDay = nowDate.getDay();
  const day: CalendarDay = {
    date: nowDate,
    day: nowDate.getDate(),
    month: nowDate.getMonth(),
    year: nowDate.getFullYear(),
    weekDay: getWeekDay(nowDate.getDay()),
  };
  const days: CalendarDay[] = [];
  let daysBefore = nowDate.getDay() - 1;
  while (daysBefore >= 0) {
    const date = new Date(nowDate.getTime() - 1000 * 60 * 60 * 24 * daysBefore);
    const day: CalendarDay = {
      date,
      day: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear(),
      weekDay: getWeekDay(date.getDay()),
    };
    days.push(day);
    daysBefore--;
  }
  let daysAfter = nowDate.getDay() - 1;
  while (daysAfter < 6) {
    const date = new Date(nowDate.getTime() + 1000 * 60 * 60 * 24 * daysAfter);
    const day: CalendarDay = {
      date,
      day: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear(),
      weekDay: getWeekDay(date.getDay()),
    };
    days.push(day);
    daysAfter++;
  }
  const calendar = days.slice(0, 5).map((day) => {
    const ls = lessons
      .filter((l) => {
        const ldate = new Date(l.start_time);
        return (
          ldate.getFullYear() === day.year &&
          ldate.getMonth() === day.month &&
          ldate.getDate() === day.day
        );
      })
      .sort((l1, l2) => +l1.start_time - +l2.start_time);
    return { ...day, lessons: ls };
  });
  return calendar;
};

export const getCalendarDays = (firstDay: CalendarDay, lessons: ILesson[]) => {
  const days: CalendarDay[] = [];
  while (days.length < 6) {
    const date = new Date(
      firstDay.date.getTime() + 1000 * 60 * 60 * 24 * (days.length + 1),
    );
    const day: CalendarDay = {
      date,
      day: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear(),
      weekDay: getWeekDay(date.getDay()),
    };
    days.push(day);
  }
  days.unshift(firstDay);
  const calendar = days.map((day) => {
    const ls = lessons.filter((l) => {
      const ldate = new Date(l.start_time);
      return (
        ldate.getFullYear() === day.year &&
        ldate.getMonth() === day.month &&
        ldate.getDate() === day.day
      );
    });
    return { ...day, lessons: ls };
  });
  return calendar;
};

export const times = [
  ["08:00"],
  ["09:00"],
  ["10:00"],
  ["11:00"],
  ["12:00"],
  ["13:00"],
  ["14:00"],
  ["15:00"],
  ["16:00"],
  ["17:00"],
  ["18:00"],
  ["19:00"],
  ["20:00", "21:00"],
];

export const Calendar: FC<Props> = ({ lessons }) => {
  const firstDay = {
    date: new Date(lessons[0].start_time),
    day: new Date(lessons[0].start_time).getDate(),
    month: new Date(lessons[0].start_time).getMonth(),
    year: new Date(lessons[0].start_time).getFullYear(),
    weekDay: getWeekDay(new Date(lessons[0].start_time).getDay()),
  };

  //const calendar = getCalendarDays(firstDay, lessons);
  const calendar = getDays(lessons);

  return (
    <div className="relative">
      {!!calendar && !!calendar.length && (
        <>
          <div className="hidden lg:flex flex-col h-full gap-1 absolute top-0 right-full translate-x-2">
            <div className="h-[3%] opacity-0">field</div>
            <div className={cn("h-full flex flex-col")}>
              {times.map((time, idx) => {
                return (
                  <h5
                    key={idx}
                    className={cn(
                      `relative flex flex-col gap-1 justify-between items-center text-[12px] font-bold  calendar-time after:bg-rose-50 last:before:bg-rose-50`,
                    )}
                    style={{
                      height: !time[1]
                        ? `calc(100% / ${times.length})`
                        : `calc(100% / ${times.length})`,
                    }}
                  >
                    <span>{time[0]}</span>
                    {time[1] && <span>{time[1]}</span>}
                  </h5>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 justify-items-center lg:h-[180vh] lg:pl-4">
            {calendar.map((day) => {
              if (day.weekDay === "Вс") return null;
              return (
                <CalendarItem
                  key={day.date.getTime()}
                  day={day}
                  blockHeight={times.length}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};
