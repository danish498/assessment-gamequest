"use client";
import { Icons } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import React, { useState } from "react";
import OptimizedImageWithFallback from "../common/fallback-image";
import { TrendingProduct } from "@/type/types";
import StarRating from "./rating";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  addItem,
  getCurrentQuantityById,
} from "@/features/cart/service/cartSlice";
import { useRouter } from "next/navigation";

const ProductCard = ({ item }: { item: TrendingProduct }) => {
  const isFav = false;
  const [isHovered, setIsHovered] = useState(false);

  const dispatch = useAppDispatch();

  const router = useRouter();

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  const currentQuantity = useAppSelector(getCurrentQuantityById(item.id));

  const isInCart = currentQuantity > 0;

  const handleByNowClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    const newItem = {
      id: item.id,
      name: item.title,
      quantity: 1,
      unitPrice: item.price,
      totalPrice: item.price * 1,
      image: item.image,
    };

    dispatch(addItem(newItem));
  };

  const handleViewCart = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    router.push("/cart");
  };

  return (
    <Card
      className="relative flex flex-col border-gray-100 bg-[#fef3bc] shadow-md border rounded-lg w-full max-w-[375px] overflow-hidden"
      key={item.title}
    >
      <button onClick={() => router.push(`/product-details/${item.id}`)}>
        <div className="relative flex mx-4 mt-3 rounded-xl h-72 overflow-hidden">
          <OptimizedImageWithFallback
            src={item.image}
            // Note--  send the empty string to check the fallback image over here
            // src=""
            alt="product image"
          />

          <div className="top-0 right-0 absolute m-2">
            <button
              className={`rounded-full w-10 h-10 ${
                isHovered || isFav ? "bg-red-200" : "bg-gray-200"
              } p-0 border-0 flex items-center justify-center text-${
                isHovered || isFav ? "red" : "gray"
              }-500 ml-4`}
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
            >
              {isHovered || isFav ? (
                <Icons.heart size={22} fill="red" stroke="2px" />
              ) : (
                <Icons.heart size={22} fill="gray" stroke="2px" />
              )}
            </button>
          </div>
        </div>
        <div className="p-4">
          <h5 className="font-abonsi text-slate-900 text-xl tracking-tight">
            {item.title}
          </h5>
          <StarRating rating={item.rating} totalStars={5} />
          <div className="flex items-center"></div>

          <div className="flex items-center gap-4 my-3">
            <p className="text-2xl">${item.price}</p>

            {isInCart ? (
              <Button
                className="bg-primary ml-auto px-6 sm:px-9 py-2 sm:py-3 rounded-full w-full"
                onClick={handleViewCart}
              >
                View Cart
              </Button>
            ) : (
              <Button
                className="bg-[#E58E27] ml-auto px-6 sm:px-9 py-2 sm:py-3 rounded-full w-full"
                onClick={handleByNowClick}
              >
                BY Now
              </Button>
            )}
          </div>
        </div>
      </button>
    </Card>
  );
};

export default ProductCard;
