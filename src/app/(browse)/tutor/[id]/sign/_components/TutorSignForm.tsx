"use client";

import React, { FC, useMemo, useState, useTransition } from "react";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { signToLesson } from "@/actions/tutor.actions";
import { useRouter } from "next/navigation";
import { SelectField } from "@/app/(browse)/tutors/filter/_components/SelectField";
import { toast } from "sonner";
import { ITutor } from "@/lib/types/ITutor";
import { Loader } from "@/components/Loader";

interface Props {
  tutor: ITutor;
}

export const TutorSignForm: FC<Props> = ({ tutor }) => {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const [subject, setSubject] = useState(
    tutor.subject
      ? Array.isArray(tutor.subject)
        ? tutor.subject[0].toLowerCase()
        : //@ts-ignore
          tutor.subject.toLowerCase()
      : undefined,
  );

  const [date, setDate] = useState<Date | undefined>(() => {
    if (tutor.lessons) {
      const date = new Date(tutor.lessons[0].start_time);
      const year = date.getFullYear();
      const month = date.getMonth();
      const day = date.getDate();
      return new Date(year, month, day);
    }
    return new Date();
  });
  const [time, setTime] = useState<string | null>(null);
  const [lessonType, setLessonType] = useState<"all" | "inperson">("all");
  const [location, setLocation] = useState<string | null>(null);

  const [error, setError] = useState<string | null>(null);

  const times = useMemo(() => {
    return tutor.lessons
      ?.filter((lesson) => {
        const lessonDate = new Date(lesson.start_time);
        return lessonDate.getFullYear() === date?.getFullYear() &&
          lessonDate.getMonth() === date?.getMonth() &&
          lessonDate.getDate() === date?.getDate() &&
          !Array.isArray(lesson.subject)
          ? lesson.subject.toLowerCase() === subject
          : Array.from(lesson.subject)
              .map((str) => str.toLowerCase())
              .includes(String(subject));
      })
      .map((lesson) => ({
        start: new Date(lesson.start_time).toLocaleTimeString().slice(0, 5),
        end: new Date(lesson.end_time).toLocaleTimeString().slice(0, 5),
      }));
  }, [date, subject]);

  const lessonsDays = tutor.lessons
    ?.filter((lesson) =>
      !Array.isArray(lesson.subject)
        ? lesson.subject.toLowerCase() === subject
        : Array.from(lesson.subject)
            .map((str) => str.toLowerCase())
            .includes(String(subject)),
    )
    .map((lesson) => {
      const date = new Date(lesson.start_time);
      const year = date.getFullYear();
      const month = date.getMonth();
      const day = date.getDate();
      return new Date(year, month, day);
    });

  const currentLesson = useMemo(() => {
    return tutor.lessons?.find((lesson) => {
      const lessonDate = new Date(lesson.start_time);
      return lessonDate.getFullYear() === date?.getFullYear() &&
        lessonDate.getMonth() === date?.getMonth() &&
        lessonDate.getDate() === date?.getDate() &&
        !Array.isArray(lesson.subject)
        ? lesson.subject.toLowerCase() === subject
        : Array.from(lesson.subject)
            .map((str) => str.toLowerCase())
            .includes(String(subject)) &&
            new Date(lesson.start_time).toLocaleTimeString().slice(0, 5) ===
              time?.slice(0, 5);
    });
  }, [date, subject, time]);

  const clickHandler = async () => {
    if (!date) {
      setError("Выберите дату");
      return;
    }
    if (!time) {
      setError("Выберите время");
      return;
    }
    if (!lessonType) {
      setError("Выберите формат занятия");
      return;
    }
    if (!location) {
      setError("Выберите место");
      return;
    }
    setError(null);
    if (currentLesson) {
      startTransition(() => {
        signToLesson(String(currentLesson.id), {
          date,
          time,
          location,
          lessonType,
        });
      });
      const res = await signToLesson(String(currentLesson.id), {
        date,
        time,
        location,
        lessonType,
      });
      if (res) {
        router.push(`/tutor/${tutor.id}`);
        toast.success(
          `Вы записались на занятие ${date.toLocaleDateString()} в ${
            time.split("-")[0]
          }`,
        );
      } else {
        toast.error("Ошибка!");
      }
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-stretch min-h-[80vh]">
      {isPending && <Loader />}
      <div className="w-full lg:w-3/12 flex flex-col gap-5 items-center p-3 rounded-3xl">
        <Image
          src={tutor.image || "/user.png"}
          alt={"tutor"}
          width={500}
          height={500}
          className="w-[150px] h-[150px] object-cover object-center rounded-full"
        />
        <div className="flex flex-col gap-3 items-center">
          {!!tutor.subject && !!tutor.subject.length && (
            <Select
              defaultValue={subject}
              onValueChange={(value: string) => {
                setSubject(value);
              }}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Выберите предмет" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Предметы</SelectLabel>
                  {tutor.subject.map((sbj) => {
                    return (
                      <SelectItem key={sbj} value={sbj.toLowerCase()}>
                        {sbj}
                      </SelectItem>
                    );
                  })}
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        </div>
      </div>
      <div className="w-full lg:w-9/12 px-2 lg:px-10 py-5 bg-accent rounded-3xl">
        <div className="flex flex-col lg:flex-row gap-16 items-stretch">
          <div className="flex flex-col gap-3">
            <h2 className="text-base font-semibold">Выберите дату</h2>
            <Calendar
              className="bg-white rounded-3xl"
              defaultMonth={date}
              mode="single"
              selected={date}
              onSelect={(value) => {
                setDate(value);
                setTime(null);
                setLocation(null);
              }}
              // disabled={disabledDays}
              modifiers={{
                lessons: lessonsDays || [],
              }}
              modifiersStyles={{
                lessons: { background: "hsl(var(--destructive) / 0.9)" },
              }}
            />
          </div>
          {!!times?.length ? (
            <div className="flex flex-col gap-10 w-full">
              <div className="flex flex-col gap-3">
                <h2 className="text-base font-semibold">Выберите время</h2>
                <div className="flex items-center flex-wrap gap-2">
                  {times.map((t, idx) => {
                    return (
                      <Badge
                        className="cursor-pointer text-lg"
                        key={idx}
                        onClick={() => {
                          setTime(`${t.start}-${t.end}`);
                        }}
                        variant={
                          time === `${t.start}-${t.end}`
                            ? "destructive"
                            : "default"
                        }
                      >
                        {t.start}
                      </Badge>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <h2 className="text-base font-semibold">Формат занятий</h2>
                <div className="flex items-center gap-3">
                  <SelectField
                    items={[
                      { value: "all", label: "Неважно" },
                      { value: "inperson", label: "Очно" },
                      { value: "distant", label: "Заочно" },
                    ]}
                    withoutSearch={true}
                    value={lessonType}
                    setValue={(value) => setLessonType(value as any)}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <h2 className="text-base font-semibold">Выберите адрес</h2>
                <div className="flex items-center flex-wrap gap-2">
                  {currentLesson?.locations.map((loc, idx) => {
                    return (
                      <Badge
                        className="cursor-pointer text-base"
                        key={idx}
                        onClick={() => {
                          setLocation(loc.toLowerCase());
                        }}
                        variant={
                          location === loc.toLowerCase()
                            ? "destructive"
                            : "default"
                        }
                      >
                        {loc}
                      </Badge>
                    );
                  })}
                </div>
              </div>

              {error && (
                <h2 className="my-4 text-lg text-red-500 font-semibold">
                  {error}
                </h2>
              )}

              <Button variant={"destructive"} onClick={clickHandler}>
                Подтвердить запись
              </Button>
            </div>
          ) : (
            <h2 className="text-3xl font-semibold mt-10">
              Нет доступных уроков!
            </h2>
          )}
        </div>
      </div>
    </div>
  );
};
