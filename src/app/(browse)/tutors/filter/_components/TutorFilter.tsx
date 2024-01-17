"use client";

import { FC, useEffect, useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SelectField } from "@/app/(browse)/tutors/filter/_components/SelectField";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { getQueryString, getTutorsQuery } from "@/lib/api/api.users";
import { Loader } from "@/components/Loader";

export const subjects = [
  {
    label: "Математика",
    value: "Математика",
  },
  {
    label: "Физика",
    value: "Физика",
  },
  {
    label: "Информатика",
    value: "Информатика",
  },
];
export const cities = [
  {
    label: "Москва",
    value: "Москва",
  },
  {
    label: "Санкт-Петербург",
    value: "Санкт-Петербург",
  },
];

interface Props {
  subjects: Array<{ value: string; label: string }>;
  cities: Array<{ value: string; label: string }>;
}

export const TutorFilter: FC<Props> = ({
  subjects: filterSubjects,
  cities: filterCities,
}) => {
  const [isPending, startTransition] = useTransition();

  const router = useRouter();

  const [subject, setSubject] = useState("");
  const [city, setCity] = useState("");
  const [lessonType, setLessonType] = useState<"all" | "inperson" | "distant">(
    "all",
  );
  const [min, setMin] = useState("500");
  const [max, setMax] = useState("2000");

  const [error, setError] = useState<string | null>(null);

  const clickHandler = () => {
    if (!subject) {
      setError("Выберите предмет");
      return;
    }
    if (!city) {
      setError("Выберите город");
      return;
    }
    if (!lessonType) {
      setError("Выберите формат занятий");
      return;
    }
    setError(null);
    const query: getTutorsQuery = {
      city: city,
      lessonType,
      subject: subject,
      cost: {
        from: +min,
        to: +max,
      },
    };
    const string = getQueryString(query);
    startTransition(() => {
      router.push(`/tutors/1?${string}`);
    });
  };

  return (
    <>
      {isPending && <Loader />}
      <div>
        <div className="flex flex-col gap-3">
          <h2 className="text-base font-semibold">Предмет</h2>
          <div className="flex flex-col lg:flex-row lg:items-center gap-5">
            {subjects.map((sbj) => {
              return (
                <Button
                  key={sbj.value}
                  onClick={() => {
                    setSubject(sbj.value);
                  }}
                  variant={sbj.value === subject ? "destructive" : "default"}
                >
                  {sbj.label}
                </Button>
              );
            })}
          </div>
          <SelectField
            items={filterSubjects}
            value={subject}
            setValue={setSubject}
          />
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col gap-3">
          <h2 className="text-base font-semibold">Город</h2>
          <div className="flex flex-col lg:flex-row lg:items-center gap-5">
            {cities.map((c) => {
              return (
                <Button
                  key={c.value}
                  onClick={() => {
                    setCity(c.value);
                  }}
                  variant={c.value === city ? "destructive" : "default"}
                >
                  {c.label}
                </Button>
              );
            })}
          </div>
          <SelectField items={filterCities} value={city} setValue={setCity} />
        </div>
        <Separator className="my-6" />
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
        <Separator className="my-6" />
        <div className="flex flex-col gap-3">
          <h2 className="text-base font-semibold">Стоимость</h2>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span>от</span>
              <Input
                className="w-[100px]"
                value={min}
                onChange={(event) => {
                  if (
                    !isNaN(Number(event.currentTarget.value)) &&
                    Number(event.currentTarget.value) >= 0 &&
                    Number(event.currentTarget.value) <= 2500
                  ) {
                    setMin(event.currentTarget.value);
                  }
                }}
              />
            </div>
            <div className="flex items-center gap-2">
              <span>до</span>
              <Input
                className="w-[100px]"
                value={max}
                onChange={(event) => {
                  if (
                    !isNaN(Number(event.currentTarget.value)) &&
                    Number(event.currentTarget.value) <= 2500 &&
                    Number(event.currentTarget.value) >= 0
                  ) {
                    setMax(event.currentTarget.value);
                  }
                }}
              />
            </div>
          </div>
          <div className="my-4  w-full lg:w-4/12">
            <Slider
              value={[+min, +max]}
              max={2500}
              min={0}
              onValueChange={(value: any) => {
                setMin(String(value[0]));
                setMax(String(value[1]));
              }}
            />
          </div>
        </div>
        {error && (
          <h2 className="my-4 text-lg text-red-500 font-semibold">{error}</h2>
        )}
        <Button
          size={"lg"}
          className="my-8"
          variant={"outline"}
          onClick={clickHandler}
        >
          Поиск
        </Button>
      </div>
    </>
  );
};
