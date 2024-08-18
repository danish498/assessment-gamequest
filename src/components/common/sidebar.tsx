"use client";

import "@/assets/css/side-nav.css";

import sidebarMenu, { activityMenu } from "@/data/sidebarMenu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Separator } from "../ui/separator";

const allowedPaths = ["/", "/setting"];

const Sidebar = () => {
  const pathname: string = usePathname();

  if (!allowedPaths.includes(pathname)) {
    return;
  }
  return (
    <nav
      className="transition-all gamemano-side-nav group"
      id="gamemano-side-nav"
    >
      <div className="border-slate-200 mb-4 px-3 3xl:px-5 py-6">
        <div className="flex items-center w-fit h-9 intro-x">
          <h3 className="group-hover:block hidden w-full font-press text-primary text-xl object-contain">
            GameQuest
          </h3>

          <h3 className="block group-hover:hidden w-full font-press text-3xl text-primary uppercase object-contain">
            GQ
          </h3>
        </div>
      </div>
      <div className="w-full gamemano-side-nav-menu">
        <ul className="space-y-5 px-2.5 pb-10 max-h-[calc(100vh-77px)] overflow-y-auto no-scrollbar">
          {sidebarMenu.map((item, index) => (
            <li key={index}>
              <Link
                href={item?.pathname}
                className={`gamemano-side-menu ${
                  pathname === item.pathname && "gamemano-side-menu-active"
                }`}
              >
                <span className="group-hover:mr-1.5 mr-0 3xl:mr-1.5 min-w-[22px] text-white size-[22px]">
                  <item.icon />
                </span>
                <span className="group-hover:block 3xl:block hidden max-w-[180px] text-ellipsis text-white whitespace-nowrap overflow-hidden">
                  {item.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <Separator className="mt-5 mb-16" />
        <ul className="space-y-5 px-2.5 pb-10 max-h-[calc(100vh-77px)] overflow-y-auto no-scrollbar">
          {activityMenu.map((item, index) => (
            <li key={index}>
              <Link
                href={item?.pathname}
                className={`gamemano-side-menu ${
                  pathname === item.pathname && "gamemano-side-menu-active"
                }`}
              >
                <span className="group-hover:mr-1.5 mr-0 3xl:mr-1.5 min-w-[22px] text-white size-[22px]">
                  <item.icon />
                </span>
                <span className="group-hover:block 3xl:block hidden max-w-[180px] text-ellipsis text-white whitespace-nowrap overflow-hidden">
                  {item.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
