import React from "react";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Icons } from "@/assets/icons";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";

const ProductDetailsSkeleton = () => {
  return (
    <section className="relative overflow-hidden">
      <Link
        href="/products"
        className="top-4 md:top-8 left-4 md:left-8 absolute"
      >
        <Icons.chevronLeft className="mr-2" color="white" size={24} />
      </Link>
      <div className="mx-auto px-5 py-24 container">
        <div className="flex flex-wrap mx-auto lg:w-4/5">
          {/* Carousel Skeleton */}
          <div className="w-full lg:w-1/2">
            <Carousel className="w-full max-w-xs">
              <CarouselContent>
                {[1, 2, 3].map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <div className="bg-white shadow-md rounded-md">
                        <div className="flex justify-center items-center p-6 aspect-square">
                          <Skeleton height={300} width={300} />
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          {/* Product Details Skeleton */}
          <div className="mt-6 lg:mt-0 lg:py-6 lg:pl-16 w-full lg:w-1/2">
            <Skeleton width={100} height={20} />
            <Skeleton width={200} height={30} className="mt-2" />
            <div className="flex items-center mt-4">
              <Skeleton width={100} height={20} />
              <Skeleton width={50} height={20} className="ml-3" />
            </div>
            <Skeleton count={4} height={10} className="mt-6 mb-5" />
            <div className="flex justify-between items-center mt-10">
              <Skeleton width={80} height={30} />
              <div className="flex items-center">
                <Skeleton circle width={30} height={30} />
                <Skeleton width={30} height={20} className="mx-2" />
                <Skeleton circle width={30} height={30} />
              </div>
              <Skeleton width={120} height={40} />
              <Skeleton circle width={40} height={40} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsSkeleton;
