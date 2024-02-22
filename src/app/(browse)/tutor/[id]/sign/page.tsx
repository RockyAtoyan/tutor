import { NextPage } from "next";
import { auth } from "@/lib/services/service.auth";
import { notFound, redirect } from "next/navigation";
import { ApiUsers } from "@/lib/api/api.users";
import Image from "next/image";
import { TutorSignForm } from "@/app/(browse)/tutor/[id]/sign/_components/TutorSignForm";

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

  return (
    <div className="page">
      <h1>Запись к преподавателю</h1>
      <TutorSignForm tutor={tutor} authUser={user} />
    </div>
  );
};

export default TutorPage;
