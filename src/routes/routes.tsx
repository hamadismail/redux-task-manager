import App from "@/App";
import User from "@/components/modules/users/User";
import { NavigationMenuDemo } from "@/components/Navbar/Navbar";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: NavigationMenuDemo,
    children: [
      { index: true, Component: App },
      { path: "/user", Component: User },
    ],
  },
]);
