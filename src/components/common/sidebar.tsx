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
      className="gamemano-side-nav transition-all group"
      id="gamemano-side-nav"
    >
      <div className="3xl:px-5 px-3 py-6 mb-4  border-slate-200">
        <div className="flex items-center intro-x h-9 w-fit">
          <h3 className="w-full  object-contain 3xl:block hidden group-hover:block font-press text-xl  text-primary">
            GameQuest
          </h3>

          <h3 className="w-full  object-contain 3xl:hidden block group-hover:hidden font-press text-3xl  text-primary uppercase">
            GQ
          </h3>
        </div>
      </div>
      <div className="w-full gamemano-side-nav-menu">
        <ul className="px-2.5 pb-10 max-h-[calc(100vh-77px)] overflow-y-auto no-scrollbar space-y-5">
          {sidebarMenu.map((item, index) => (
            <li key={index}>
              <Link
                href={item?.pathname}
                className={`gamemano-side-menu ${
                  pathname === item.pathname && "gamemano-side-menu-active"
                }`}
              >
                <span className="size-[22px] min-w-[22px] 3xl:mr-1.5 mr-0 group-hover:mr-1.5 text-white">
                  <item.icon />
                </span>
                <span className="3xl:block hidden group-hover:block whitespace-nowrap text-ellipsis overflow-hidden max-w-[180px] text-white">
                  {item.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <Separator className="mb-16 mt-5" />
        <ul className="px-2.5 pb-10 max-h-[calc(100vh-77px)] overflow-y-auto no-scrollbar space-y-5">
          {activityMenu.map((item, index) => (
            <li key={index}>
              <Link
                href={item?.pathname}
                className={`gamemano-side-menu ${
                  pathname === item.pathname && "gamemano-side-menu-active"
                }`}
              >
                <span className="size-[22px] min-w-[22px] 3xl:mr-1.5 mr-0 group-hover:mr-1.5 text-white">
                  <item.icon />
                </span>
                <span className="3xl:block hidden group-hover:block whitespace-nowrap text-ellipsis overflow-hidden max-w-[180px] text-white">
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
