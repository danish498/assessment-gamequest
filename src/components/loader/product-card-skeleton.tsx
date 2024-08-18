import React from "react";
import { Card } from "@/components/ui/card";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductCardSkeleton = () => {
  return (
    <Card className="relative flex flex-col border-gray-100 bg-[#fef3bc] shadow-md border rounded-lg w-full max-w-[375px] overflow-hidden">
      <div className="relative flex mx-4 mt-3 rounded-xl h-72 overflow-hidden">
        <Skeleton height="100%" width="100%" />
      </div>

      <div className="top-6 right-4 absolute">
        <Skeleton height={34} width={34} circle  className="mb-2 rounded-full" />
      </div>

      <div className="p-4">
        <Skeleton height={24} width="60%" className="mb-2" />
        <Skeleton height={20} width="50%" className="mb-4" />

        <div className="flex items-center">
          <Skeleton height={20} width="80%" className="mb-3" />
        </div>

        <div className="flex items-center gap-4 my-3">
          <Skeleton height={28} width="40%" />
          <Skeleton height={40} width="60%" className="ml-auto" />
        </div>
      </div>
    </Card>
  );
};

export default ProductCardSkeleton;
