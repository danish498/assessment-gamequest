"use client";
import Sidebar from "@/components/common/sidebar";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Icons } from "@/assets/icons";

import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";
import "@/assets/css/embla.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { DotButton, useDotButton } from "@/components/embla-dot-button";
import { games } from "@/data/caresol-data";
import ProductCard from "@/components/products/product-card";
import Link from "next/link";
import { getTrendingProduct } from "@/service";
import { TrendingProduct } from "@/type/types";

const options: EmblaOptionsType = { loop: true, duration: 30 };

const Home = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Fade()]);
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const [trendingData, setTrendingData] = useState<TrendingProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await getTrendingProduct();

        const productSummaries: TrendingProduct[] = response.products.map(
          (product: any) => ({
            id: product.id,
            title: product.title,
            price: product.price,
            rating: product.rating,
            image: product.images[0],
          })
        );
        setTrendingData(productSummaries);
      } catch (error: any) {
        console.log(error);
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="pl-[85px] 3xl:pl-[265px]">
        <div
          className="min-h-[calc(100vh-99px)] transition-all"
          //  style={{ minHeight: `calc(100vh - 68px` }}
        >
          <div className="w-full embla">
            <div className="embla__viewport" ref={emblaRef}>
              <div className="embla__container">
                {games.map((item) => (
                  <div className="embla__slide" key={item.title}>
                    <div className="flex flex-col justify-center items-start gap-6 sm:gap-12 p-6 sm:p-10 md:p-20 w-full sm:w-10/12 lg:w-7/12">
                      <div>
                        <p className="font-poet text-4xl sm:text-5xl md:text-6xl whitespace-nowrap">
                          {item.title}
                        </p>
                        <p className="flex justify-center md:justify-end bg-[#1E1E1E] mt-2 p-1 sm:p-2 text-xs sm:text-sm uppercase">
                          RELEASE DATE: {item.release_date}
                        </p>
                      </div>

                      <div>
                        <p className="font-prosto text-sm sm:text-base">
                          {item.description}
                        </p>
                      </div>

                      <div className="flex sm:flex-row flex-col sm:items-center md:items-start gap-4 sm:gap-7">
                        <div className="flex flex-col items-start gap-2">
                          <Button className="bg-[#E58E27] px-6 sm:px-9 py-2 sm:py-3 rounded-full">
                            {item.buttons.try_for_free}
                          </Button>
                          <button className="text-sm hover:underline">
                            {item.buttons.buy_now}
                          </button>
                        </div>

                        <div className="flex items-center gap-2">
                          Available on:{" "}
                          <span className="text-3xl sm:text-4xl">
                            {item.available_on.ios.platform}
                          </span>
                          <item.available_on.ios.icon fill="white" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="bottom-8 left-1/2 absolute flex justify-center items-center embla__controls">
            <div className="embla__dots">
              {scrollSnaps.map((_, index) => (
                <DotButton
                  key={index}
                  onClick={() => onDotButtonClick(index)}
                  className={"embla__dot".concat(
                    index === selectedIndex ? " embla__dot--selected" : ""
                  )}
                />
              ))}
            </div>
          </div>
        </div>

        {/* 2nd Carousel Start */}

        <div className="bg-[#312718] mb-96 sm:p-5 md:p-5">
          <div className="flex md:flex-row xs:flex-col justify-between items-center py-5">
            <p className="font-press text-2xl text-primary uppercase">
              most trending
            </p>
            <Link href="/products" className="flex">
              <p className="uppercase">Go to Product Store</p>
              <Icons.arrowRight />
            </Link>
          </div>

          <Carousel opts={{ align: "start" }} className="w-full">
            <CarouselContent className="flex gap-x-3">
              {trendingData.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="flex-none sm:w-1/2 md:w-1/3 lg:w-1/4"
                >
                  <div className="p-1">
                    <ProductCard item={item} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* 2nd Carousel End */}
      </div>
    </>
  );
};

export default Home;
