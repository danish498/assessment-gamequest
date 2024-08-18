import { Icons } from "@/assets/icons";

const sidebarMenu = [
  {
    icon: Icons.home,
    pathname: "/",
    title: "Home",
  },
  {
    icon: Icons.message,
    pathname: "/message",
    title: "Message",
  },
  {
    icon: Icons.store,
    pathname: "/products",
    title: "Game Store",
  },
  {
    icon: Icons.payment,
    pathname: "/payment",
    title: "Payments",
  },
  {
    icon: Icons.dashboard,
    pathname: "/Dashboard",
    title: "Dashboard",
  },
  {
    icon: Icons.leaderboard,
    pathname: "/leaderboard",
    title: "Leaderboard",
  },
];

export const activityMenu = [
  {
    icon: Icons.settings,
    pathname: "/setting",
    title: "Setting",
  },
  {
    icon: Icons.logout,
    pathname: "/login",
    title: "Log Out",
  },
];

export default sidebarMenu;
