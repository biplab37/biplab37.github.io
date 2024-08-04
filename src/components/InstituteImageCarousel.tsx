import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { image_list } from "@/content/data";

export function InstituteImageCarousel() {
  return (
    <Carousel opts={{ loop: true }}>
      <CarouselContent>
        {image_list.map((image) => (
          <CarouselItem key={image.id}>
            <img
              src={image.src}
              alt={image.alt}
              className="rounded-lg shadow-md"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
