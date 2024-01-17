import { FC } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon, StepBack } from "lucide-react";

interface Props {
  page: number;
  size: number;
  total: number;
  baseLink: string;
  queryString?: string;
}

export const Pagination: FC<Props> = ({
  page,
  size,
  total,
  baseLink,
  queryString,
}) => {
  return (
    <div className="flex items-center gap-4 w-full justify-end mt-[30px] select-none">
      <h3 className="font-semibold">
        Страница {page} из {Math.ceil(total / size)}
      </h3>
      <div className="flex items-center gap-2">
        <Button disabled={page <= 1} asChild={page > 1}>
          {page <= 1 ? (
            <ArrowLeftIcon />
          ) : (
            <Link href={`${baseLink}/${page - 1}?${queryString}`}>
              <ArrowLeftIcon />
            </Link>
          )}
        </Button>
        <Button
          disabled={page >= Math.ceil(total / size)}
          asChild={page < Math.ceil(total / size)}
        >
          {page >= Math.ceil(total / size) ? (
            <ArrowRightIcon />
          ) : (
            <Link href={`${baseLink}/${page + 1}?${queryString}`}>
              <ArrowRightIcon />
            </Link>
          )}
        </Button>
      </div>
    </div>
  );
};
