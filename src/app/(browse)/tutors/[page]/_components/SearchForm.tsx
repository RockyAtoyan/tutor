"use client";

import React, { FC, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";
import { getQueryString } from "@/lib/api/api.users";
import { redirect, useRouter } from "next/navigation";

interface Props {
  searchParams: any;
}

const SearchForm: FC<Props> = ({ searchParams }) => {
  const form = useRef<HTMLFormElement>(null);

  const router = useRouter();

  const searchHandler = async (data: FormData) => {
    const value = data.get("search");
    if (!value) {
      const params = { ...searchParams };
      delete params.search;
      const str = getQueryString({
        ...params,
      });
      return router.push(`/tutors/1?${str}`);
    }
    const str = getQueryString({
      ...searchParams,
      search: value,
    });
    router.push(`/tutors/1?${str}`);
  };

  return (
    <form
      ref={form}
      className="relative lg:absolute w-full lg:w-[30%] lg:top-[50%] lg:-translate-y-1/2 lg:left-[50%] lg:-translate-x-1/2"
      action={searchHandler}
    >
      <Input
        placeholder="Поиск репетиторов"
        name="search"
        defaultValue={searchParams.search || ""}
      />
      <Button
        size="icon"
        variant="link"
        className="absolute top-[50%] -translate-y-1/2 right-[5px]"
      >
        <SearchIcon />
      </Button>
    </form>
  );
};

export default SearchForm;
