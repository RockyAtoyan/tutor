import { auth } from "@/lib/services/service.auth";
import { redirect } from "next/navigation";
import { Calendar } from "@/app/(browse)/schedule/_components/Calendar";
import { NextPage } from "next";

interface Props {
  searchParams: {
    lesson: string;
  };
}

const SchedulePage: NextPage<Props> = async ({ searchParams }) => {
  const user = await auth();
  if (!user) redirect("/login");

  return (
    <div className="page overflow-hidden">
      <h1>Расписание</h1>
      {!!user.lessons && !!user.lessons.length ? (
        <div>
          <Calendar
            lessons={[...user.lessons].sort(
              (l1, l2) => +l1.start_time - +l2.start_time,
            )}
            currentLessonId={searchParams.lesson}
          />
        </div>
      ) : (
        <h2 className="text-destructive">Вы не записаны на уроки!</h2>
      )}
    </div>
  );
};

export default SchedulePage;
