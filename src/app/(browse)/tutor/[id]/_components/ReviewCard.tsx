import React, { FC } from "react";
import { IReview } from "@/lib/types/IReview";
import Image from "next/image";

interface Props {
  review: IReview;
}

export const ReviewCard: FC<Props> = ({ review }) => {
  return (
    <div className="p-4 bg-secondary rounded-2xl flex flex-col gap-2">
      <div className="flex flex-col lg:flex-row items-center gap-3">
        <div className="flex items-center gap-5">
          <Image
            src={review.reviewer.image || "/user.png"}
            alt={"review"}
            width={500}
            height={500}
            className="w-[40px] h-[40px] lg:w-[70px] lg:h-[70px] object-cover object-center rounded-full"
          />
          <h2 className="font-bold">{review.reviewer.name}</h2>
        </div>
        <div className="w-full lg:w-[70%]">
          <h2 className="text-2xl text-center">{review.header}</h2>
        </div>
      </div>
      <div className="p-2">
        <p>{review.text}</p>
      </div>
    </div>
  );
};
