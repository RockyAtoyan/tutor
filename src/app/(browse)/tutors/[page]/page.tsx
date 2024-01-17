import { NextPage } from "next";
import { auth } from "@/lib/services/service.auth";
import { redirect } from "next/navigation";
import { ApiUsers, getQueryString, getTutorsQuery } from "@/lib/api/api.users";
import { TutorCard } from "@/app/(browse)/tutors/[page]/_components/TutorCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import SearchForm from "@/app/(browse)/tutors/[page]/_components/SearchForm";
import { Pagination } from "@/components/Pagination";

interface Props {
  params: {
    page: string;
  };
  searchParams: {
    subject?: string;
    city?: string;
    lessonType?: "inperson" | "all";
    from?: string;
    to?: string;
    search?: string;
  };
}

const TutorPage: NextPage<Props> = async ({ params, searchParams }) => {
  const user = await auth();
  if (!user) redirect("/login");

  const query: any = {};
  for (const queryElement of Object.entries(searchParams)) {
    if (Object.hasOwnProperty.call(searchParams, queryElement[0])) {
      query[queryElement[0]] = queryElement[1];
    }
  }

  const { tutors, total } = await ApiUsers.getTutors({
    page: +params.page || 1,
    query: {
      city: query.city,
      subject: query.subject,
      cost: {
        from: query.from,
        to: query.to,
      },
      lessonType: query.lessonType,
    },
    search: query.search,
    size: query.size,
  });

  return (
    <div className="page">
      <h1 className={"flex flex-col gap-1 lg:gap-0 lg:block"}>
        <span>Подбор</span> <span>специалиста</span>
      </h1>
      <div className="relative mb-8 flex flex-col gap-3 lg:gap-0 lg:block">
        <Button asChild size={"sm"} variant={"outline"}>
          <Link href={"/tutors/filter"}>Назад к фильтрам</Link>
        </Button>
        <SearchForm searchParams={searchParams} />
      </div>
      {!!total && !!tutors.length && (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-5">
            {tutors.map((tutor) => {
              return <TutorCard key={tutor.id} tutor={tutor} />;
            })}
          </div>
          <div>
            <Pagination
              page={+params.page}
              size={tutors.length}
              total={total}
              baseLink={`/tutors`}
              queryString={getQueryString(searchParams)}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default TutorPage;
