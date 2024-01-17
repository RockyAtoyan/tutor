import { NextPage } from "next";
import { auth } from "@/lib/services/service.auth";
import { notFound, redirect } from "next/navigation";
import { ApiUsers } from "@/lib/api/api.users";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/app/(browse)/tutor/[id]/_components/Slider";
import { Buttons } from "@/app/(browse)/tutor/[id]/_components/Buttons";

interface Props {
  params: {
    id: string;
  };
}

const TutorPage: NextPage<Props> = async ({ params }) => {
  const user = await auth();
  if (!user) redirect("/login");

  const tutor = await ApiUsers.getTutor(params.id);
  if (!tutor) {
    return notFound();
  }
  const reviews = await ApiUsers.getTutorReviews(String(tutor.id));

  return (
    <div className="page">
      <h1>Подробнее</h1>
      <div className="flex flex-col lg:flex-row items-stretch min-h-[80vh]">
        <div className="w-full lg:w-3/12 bg-accent flex flex-col gap-5 items-center p-3 rounded-3xl">
          <Image
            src={tutor.image || "/user.png"}
            alt={"tutor"}
            width={500}
            height={500}
            className="w-[150px] h-[150px] object-cover object-center rounded-full"
          />
          <div className="flex flex-col gap-3 items-center w-full">
            <Buttons id={tutor.id} />
            <Badge
              variant="destructive"
              className="text-base justify-center w-max"
            >
              от {tutor.cost} р.
            </Badge>
          </div>
        </div>
        <div className="w-full lg:w-9/12 px-4 lg:px-10 py-5">
          <h2 className="text-3xl text-center lg:text-start  font-bold">
            {tutor.name}
          </h2>
          <div className="mt-6 lg:mt-3 flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <Badge variant="outline" className="text-base">
              {tutor.age} года
            </Badge>
            <Badge variant="outline" className="text-base">
              {tutor.gender}
            </Badge>
            <Badge variant="outline" className="text-base">
              {tutor.education.institution.name}
            </Badge>
          </div>
          {!!reviews && !!reviews.length && (
            <div className="mt-14">
              <h2 className="mb-5 text-lg font-bold">Отзывы учеников</h2>
              <Slider reviews={reviews} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TutorPage;
