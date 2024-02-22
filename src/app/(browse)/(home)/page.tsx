import { auth } from "@/lib/services/service.auth";
import Link from "next/link";
import { HomeLessonCard } from "@/app/(browse)/(home)/_components/HomeLessonCard";

const HomePage = async () => {
  const user = await auth();

  return (
    <div className="page h-full">
      <h1 className="h-[10%]">Главная</h1>
      <div className="p-5 rounded-3xl flex flex-col gap-16 min-h-[90%] bg-secondary">
        <div className="flex items-center justify-center">
          <Link
            href={user ? "/tutors/filter" : "login"}
            className="text-base lg:text-4xl bg-white font-bold w-[80%] lg:w-[50%] pt-5 pb-5 text-center rounded-2xl transition-all hover:bg-zinc-700 hover:text-white"
          >
            {user ? "Найти репетитора" : "Войдите, чтобы найти репетитора"}
          </Link>
        </div>
        {user && (
          <div className="flex flex-col items-center gap-8 px-1 py-5 lg:px-5 rounded-3xl bg-white">
            <h2 className="text-base lg:text-2xl font-semibold">Мои занятия</h2>
            {!!user.lessons && !!user.lessons.length ? (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-0 justify-items-center w-full">
                {[...user.lessons]
                  .sort((l1, l2) => +l1.start_time - +l2.start_time)
                  .slice(0, 3)
                  .map((lesson) => {
                    return <HomeLessonCard key={lesson.id} lesson={lesson} />;
                  })}
              </div>
            ) : (
              <h2 className="text-destructive">Вы не записаны на уроки!</h2>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
