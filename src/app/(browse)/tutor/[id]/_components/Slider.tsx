import React, { FC } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { IReview } from "@/lib/types/IReview";
import { ReviewCard } from "@/app/(browse)/tutor/[id]/_components/ReviewCard";

interface Props {
  reviews: IReview[];
}

export const Slider: FC<Props> = ({ reviews }) => {
  return (
    <Carousel className="w-full lg:w-[80%] mx-auto">
      <CarouselContent>
        {reviews.map((review) => (
          <CarouselItem key={review.id}>
            <ReviewCard review={review} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
