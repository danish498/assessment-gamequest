"use client";

import React, { useEffect, useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import Link from "next/link";
import MobileHeader from "./mobile-header";

import "@/assets/css/mobile-header.css";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Icons } from "@/assets/icons";
import { profileImg } from "@/assets/image";
import Image from "next/image";

const Header = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [activeHoverNotification, setHoverNotification] = useState<number>();

  let itemCount = 3;
  const pathname = usePathname();

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 800);
  };

  useEffect(() => {
    // Check if the code is running in the browser before accessing window
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth <= 800);
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const handleMouseEnter = (value: number) => {
    setHoverNotification(value);
  };

  return (
    <div className="top-0 z-10 sticky flex items-center bg-[#1E1D16] px-10 py-6">
      <div className="flex justify-between items-center gap-3 w-full">
        <div className="flex items-center gap-2 md:gap-10">
          <div>
            <h3
              className={cn(
                "w-full object-contain  group-hover:hidden font-press text-2xl text-primary uppercase",
                pathname === "/" ? "invisible" : "block"
              )}
            >
              GQ
            </h3>
          </div>

          {isMobile ? (
            <MobileHeader />
          ) : (
            <div className="flex items-center gap-4 h-6">
              <Link href="/" className="font-semibold text-white">
                Home
              </Link>
              <Separator orientation="vertical" className="bg-white" />
              <Link href="/products" className="font-semibold text-white">
                Game Store
              </Link>
              <Separator orientation="vertical" />
              <p className="font-semibold text-white">Leaderboard</p>
            </div>
          )}
        </div>
        <div className="flex items-center gap-4 h-7">
          <div className="md:block relative hidden">
            <Input
              className="bg-inherit px-10 rounded-full md:w-48 lg:w-96 text-white"
              placeholder="What are you looking for?"
            />
            <Icons.search color="white" className="top-2 left-3 absolute" />
          </div>
          <Separator
            orientation="vertical"
            className="md:block hidden bg-white"
          />

          <div className="flex items-center gap-4 h-7">
            {/* <Icons.notification /> */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button>
                  <Icons.notification />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[350px]" align="end">
                <DropdownMenuLabel>
                  <div className="font-medium text-black">Notifications</div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <div className="space-y-1 -mx-1 max-h-[336px] overflow-y-auto">
                  {[1, 2, 3, 4, 5].map((item, index) => (
                    <div
                      key={index}
                      className={`cursor-pointer relative flex items-center px-5 py-2 mt-2 first:mt-0 border-l-4  ${
                        index === activeHoverNotification
                          ? "border-[#E58E27] bg-[#E58E27]/5"
                          : "hover:bg-slate-100 border-transparent"
                      }`}
                      onMouseEnter={() => handleMouseEnter(index)}
                    >
                      <div className="flex-none border-slate-200 mr-1 border rounded-md w-12 h-12 overflow-hidden image-fit">
                        <Image
                          src={profileImg}
                          alt="GameQuest profile image"
                          className="object-cover size-full"
                        />
                      </div>
                      <div className="flex-1 ml-2 overflow-hidden">
                        <div className="flex items-center">
                          <a
                            href=""
                            className="mr-5 font-medium text-[13px] truncate"
                          >
                            Highlander & Rooadster @ Min.60-70% Off | Sale Ends
                            at midnight!
                          </a>
                          <div className="ml-auto text-slate-400 text-xs whitespace-nowrap">
                            August 17, 2024
                          </div>
                        </div>
                        <div className="mt-0.5 w-full text-[13px] text-slate-500 truncate">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed eu tortor ipsum.
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="justify-center underline cursor-pointer">
                  See all Notification
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Separator orientation="vertical" />
            <div className="relative">
              <Icons.cart />
              {itemCount > 0 && (
                <span className="top-0 right-0 absolute bg-red-500 px-1.5 py-0.5 rounded-full font-bold text-white text-xs">
                  {itemCount}
                </span>
              )}
            </div>
            <Separator orientation="vertical" />
            <Icons.profile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
