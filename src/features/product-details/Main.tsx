"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Icons } from "@/assets/icons";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { TProductDetailsData } from "@/type/types";
import { getProductDetailsData } from "./service";
import StarRating from "@/components/products/rating";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import OptimizedImageWithFallback from "@/components/common/fallback-image";
import ProductDetailsSkeleton from "@/components/loader/product-details-skeleton";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  addItem,
  decrementItem,
  getCurrentQuantityById,
  incrementItem,
} from "../cart/service/cartSlice";

const ProductDetails = ({ params }: { params: { slug: string } }) => {
  const [quantity, setQuantity] = useState(1);
  const [inCart, setInCart] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const [productDetailsData, setProductDetailsData] =
    useState<TProductDetailsData>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>();

  const dispatch = useAppDispatch();

  const totalItemQuantity = useAppSelector(
    getCurrentQuantityById(Number(params.slug))
  );

  const isInCart = totalItemQuantity > 0;

  const handleAddToCart = (item: TProductDetailsData) => {
    const newItem = {
      id: item.id,
      name: item.title,
      quantity: 1,
      unitPrice: item.price,
      totalPrice: item.price * 1,
      image: item.images[0],
    };
    dispatch(addItem(newItem));
  };

  const handleDelete = () => {
    setInCart(false);
    setQuantity(1); // Reset quantity when item is deleted
  };

  const handleIncrement = (id: number) => {
    dispatch(incrementItem(id));
  };

  const handleDecrement = (id: number) => {
    dispatch(decrementItem(id));
  };

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await getProductDetailsData(params.slug);
        const detailData: TProductDetailsData = {
          id: response.id,
          brand: response.brand,
          title: response.title,
          description: response.description,
          price: response.price,
          rating: response.rating,
          images: response.images,
        };

        setProductDetailsData(detailData);
      } catch (error: any) {
        setErrorMessage(error.message);
        console.error(error);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [params.slug]);

  if (errorMessage) {
    return (
      <p className="flex justify-center items-center h-screen text-2xl">
        {errorMessage}
      </p>
    );
  }

  if (isLoading) {
    return <ProductDetailsSkeleton />;
  }

  if (!productDetailsData) {
    return null; // Render nothing if data is not available
  }

  return (
    <section className="relative overflow-hidden">
      <Link
        href="/products"
        className="top-4 md:top-8 left-4 md:left-8 absolute"
      >
        <>
          <Icons.chevronLeft className="mr-2" color="white" size={24} />
        </>
      </Link>
      <div className="mx-auto px-5 py-24 container">
        <div className="flex flex-wrap mx-auto lg:w-4/5">
          <Carousel className="mx-auto aspect-w-4 lg:w-1/3 max-w-[700px]">
            <CarouselContent>
              {productDetailsData?.images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex justify-center items-center p-6 aspect-square">
                        <figure className="mx-auto aspect-w-4 lg:w-1/3 max-w-[700px] aspect-h-3">
                          <OptimizedImageWithFallback
                            src={image}
                            alt="Product details Image"
                          />
                        </figure>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          <div className="mt-6 lg:mt-0 lg:py-6 lg:pl-16 w-full lg:w-1/2">
            <h2 className="text-sm tracking-widest">
              {productDetailsData?.brand}
            </h2>
            <p className="mb-1 font-medium text-3xl title-font">
              {productDetailsData?.title}
            </p>
            <div className="flex mb-4">
              <span className="flex items-center">
                <StarRating
                  rating={productDetailsData?.rating || 0}
                  totalStars={5}
                />
              </span>
            </div>
            <p className="border-gray-200 mt-6 mb-5 pb-5 border-b-2 leading-relaxed">
              {productDetailsData?.description}
            </p>
            <div className="flex justify-between md:mt-11">
              <span className="font-medium text-2xl title-font">
                ${productDetailsData?.price}
              </span>

              {isInCart ? (
                <>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <button
                        onClick={() => handleDecrement(productDetailsData.id)}
                        className="flex justify-center items-center bg-[#E58E27] hover:bg-primary px-2.5 py-1 rounded-full font-medium text-center text-sm text-white"
                      >
                        -
                      </button>
                      <p className="mx-2">{totalItemQuantity}</p>
                      <button
                        onClick={() => handleIncrement(productDetailsData.id)}
                        className="flex justify-center items-center bg-[#E58E27] hover:bg-primary px-2.5 py-1 rounded-full font-medium text-center text-sm text-white"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <button className="flex justify-center items-center bg-[#E58E27] px-3 py-1 rounded-md text-sm text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2 w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    View Cart
                  </button>
                </>
              ) : (
                <button
                  className="flex justify-center items-center bg-[#E58E27] px-3 py-1 rounded-md text-sm text-white"
                  onClick={() => handleAddToCart(productDetailsData)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  Add to Cart
                </button>
              )}

              <button
                className={`rounded-full w-10 h-10 ${
                  isHovered ? "bg-red-200" : "bg-gray-200"
                } p-0 border-0 flex items-center justify-center text-${
                  isHovered ? "red" : "gray"
                }-500 ml-4`}
                onMouseEnter={handleHover}
                onMouseLeave={handleHover}
              >
                {isHovered ? (
                  <Icons.heart size={22} fill="red" stroke="2px" />
                ) : (
                  <Icons.heart size={22} fill="gray" stroke="2px" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
