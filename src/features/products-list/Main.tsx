"use client";

import React, { useCallback, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Icons } from "@/assets/icons";
import { getAllCategories, getCategoryByProduct } from "./service";
import { TCategoriesData, TrendingProduct } from "@/type/types";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import ProductCard from "@/components/products/product-card";
import ProductCardSkeleton from "@/components/loader/product-card-skeleton";
import { helper } from "@/utils/helper";

import { useDebounce } from "@/hooks/useDebounce";

type SortOption = {
  sortBy: string;
  order: string;
};

const sortOptions: Record<string, SortOption> = {
  lowToHigh: { sortBy: "price", order: "asc" },
  hightToLow: { sortBy: "price", order: "desc" },
  highestRating: { sortBy: "rating", order: "desc" },
  lowestRating: { sortBy: "rating", order: "asc" },
};

const ProductList: React.FC = () => {
  const [categoriesList, setCategoriesList] = useState<TCategoriesData[]>([]);
  const [isCatLoading, setIsCatLoading] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [productList, setProductList] = useState<TrendingProduct[]>([]);
  const [selectedSort, setSelectedSort] = useState<string>("");
  const [totalCount, setTotalCount] = useState<number>(0);
  const [searchedValue, setSearchedValue] = useState<string>();
  const [isAllCat, setIsAllCat] = useState<boolean>(false);

  const [searched, setSearched] = useState("");
  const debouncedSearch = useDebounce(searched);

  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get("category");

  const [selectedRadioValue, setSelectedRadioValue] = useState<string>("all");

  useEffect(() => {
    if (!search) {
      router.replace(pathname + "?category=all");
    } else {
      setSelectedRadioValue(search);
    }
  }, [search, searchParams, pathname, router]);

  useEffect(() => {
    const fetchCategories = async () => {
      setIsCatLoading(true);
      try {
        const response = await getAllCategories();
        setCategoriesList(response);
      } catch (error: any) {
        console.error("Error while fetching the categories", error.response);
      } finally {
        setIsAllCat(true);
      }
      setIsCatLoading(false);
    };

    fetchCategories();
  }, []);

  const fetchData = useCallback(async () => {
    if (selectedRadioValue === undefined) return;

    const isAll = selectedRadioValue == "all";
    const isSort = selectedSort !== "";
    const isSearched = debouncedSearch !== "";

    const { sortBy, order } = sortOptions[selectedSort] || {};

    setIsLoading(true);
    try {
      const response = await getCategoryByProduct(
        isAll,
        selectedRadioValue,
        isSort,
        sortBy,
        order,
        isSearched,
        debouncedSearch
      );

      const productSummaries: TrendingProduct[] = response.products.map(
        (product: any) => ({
          id: product.id,
          title: product.title,
          price: product.price,
          rating: product.rating,
          image: product.images[0],
        })
      );
      setTotalCount(response.total);
      setProductList(productSummaries);
    } catch (error: any) {
      console.error("Error while fetching the products", error.response);
    }
    setIsLoading(false);
  }, [selectedRadioValue, selectedSort, debouncedSearch]);

  useEffect(() => {
    fetchData();
  }, [selectedRadioValue, selectedSort, fetchData]);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const handleCheckChange = (value: string) => {
    router.push(pathname + "?" + createQueryString("category", value));

    let searchValue = helper.capitalizeFirstLetter(value);
    setSearchedValue(searchValue);
    setSelectedSort("");
    setSearched("");
  };

  const handleSortSelect = (value: string) => {
    setSelectedSort(value);
    setSearchedValue("");
    setSearched("");
    router.push(pathname + "?" + createQueryString("category", "all"));
  };

  const handelChangeProduct = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearched(event.target.value);
    router.push(pathname + "?" + createQueryString("category", "all"));

    let searchValue = helper.capitalizeFirstLetter(event.target.value);
    setSearchedValue(searchValue);
    setSelectedSort("");
  };

  return (
    <>
      <div className="gap-5 sm:grid grid-cols-12 p-8 md:p-14">
        <div className="col-span-4 sm:col-span-3 lg:col-span-2">
          <div className="relative flex flex-col gap-5 bg-[#3D352A80] shadow-md p-5 rounded md:min-w-[150px]">
            <p>Category</p>
            <RadioGroup
              defaultValue={selectedRadioValue}
              value={selectedRadioValue}
              onValueChange={handleCheckChange}
            >
              {isAllCat && (
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="all"
                    id="all"
                    className={`border-[#838383] data-[state=checked]:border-primary w-5 h-5 peer`}
                  />
                  <Label
                    htmlFor="option-one"
                    className={`cursor-pointer text-lg font-medium text-[#838383] peer-data-[state=checked]:text-primary `}
                  >
                    All
                  </Label>
                </div>
              )}
              {isCatLoading ? (
                <p>Loader...</p>
              ) : (
                categoriesList.map((item, index) => (
                  <div className={`flex items-center space-x-2 `} key={index}>
                    <RadioGroupItem
                      value={item.slug}
                      id={item.slug}
                      disabled={isCatLoading}
                      className={`border-[#838383] data-[state=checked]:border-primary w-5 h-5 peer`}
                    />
                    <Label
                      htmlFor={item.slug}
                      className={`cursor-pointer text-lg font-medium text-[#838383] peer-data-[state=checked]:text-primary `}
                    >
                      {item.name}
                    </Label>
                  </div>
                ))
              )}
            </RadioGroup>
          </div>
        </div>

        <div className="flex flex-col col-span-8 sm:col-span-9 lg:col-span-10 mt-5 sm:mt-0">
          <div className="flex flex-wrap justify-between items-center mb-5">
            <div>
              <p className="font-normal text-xl">
                {searchedValue ? `Search results for ${searchedValue}` : ""}
              </p>
              <p className="font-light text-sm">
                {" "}
                {!isLoading ? `${totalCount}  results found` : ""}
              </p>
            </div>

            <div className="md:block relative hidden">
              <Input
                className="bg-inherit px-8 rounded-full md:w-48 focus:md:w-64 lg:w-52 focus:lg:w-80 h-8 text-white transition-all duration-300 ease-in-out"
                placeholder="Search your products..."
                onChange={handelChangeProduct}
                value={searched}
              />
              <Icons.search
                color="white"
                className="top-2 left-2 absolute w-4 h-4"
              />
            </div>

            <Select onValueChange={handleSortSelect}>
              <SelectTrigger className="ml-auto md:ml-0 rounded-full w-[100px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup className="text-white">
                  <SelectItem
                    className="focus:bg-[#E58E27] focus:text-white"
                    value="lowToHigh"
                  >
                    Price : Low to High
                  </SelectItem>
                  <SelectItem
                    className="focus:bg-[#E58E27] focus:text-white"
                    value="hightToLow"
                  >
                    Price : High to Low
                  </SelectItem>
                  <SelectItem
                    className="focus:bg-[#E58E27] focus:text-white"
                    value="highestRating"
                  >
                    Rating : Highest
                  </SelectItem>
                  <SelectItem
                    className="focus:bg-[#E58E27] focus:text-white"
                    value="lowestRating"
                  >
                    Rating : Lowest
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="gap-3 grid 1xs:grid-cols-2 lg:grid-cols-3">
            {isLoading ? (
              <>
                {Array.from({ length: 5 }, (_, i) => (
                  <ProductCardSkeleton key={i} />
                ))}
              </>
            ) : (
              productList.map((item, index) => (
                <ProductCard item={item} key={index} />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
