import { NavigationMenu } from "@/components/ui/navigation-menu";
import { ModeToggle } from "../mode-toggle";
import { NavLink, Outlet } from "react-router";

export function NavigationMenuDemo() {
  return (
    <div>
      <div className="shadow-lg py-4">
        <NavigationMenu viewport={false} className="max-w-6xl mx-auto">
          <div className="flex w-full justify-between items-center">
            <h2>Nav.</h2>
            <div className="flex gap-4">
              <NavLink
                className={({ isActive }) => (isActive ? "text-red-500" : "")}
                to="/"
              >
                Task
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "text-red-500" : "")}
                to="/user"
              >
                User
              </NavLink>
            </div>
            <ModeToggle />
          </div>
        </NavigationMenu>
      </div>
      <div className="max-w-6xl mx-auto mt-4">
        <Outlet />
      </div>
    </div>
  );
}
