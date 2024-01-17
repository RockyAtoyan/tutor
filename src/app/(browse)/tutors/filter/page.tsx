import { auth } from "@/lib/services/service.auth";
import { redirect } from "next/navigation";
import { TutorFilter } from "@/app/(browse)/tutors/filter/_components/TutorFilter";
import { ApiUsers } from "@/lib/api/api.users";

const Filter = async () => {
  const user = await auth();
  if (!user) redirect("/login");

  const filterSubjects = await ApiUsers.getFilterSubjects();
  const filterCities = await ApiUsers.getFilterCities();

  return (
    <div className="page">
      <h1>Фильтры</h1>
      <div className="flex flex-col gap-5">
        <h2 className="text-lg font-extrabold">Выберите характеристики</h2>
        <TutorFilter subjects={filterSubjects} cities={filterCities} />
      </div>
    </div>
  );
};

export default Filter;
