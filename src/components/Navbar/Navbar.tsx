import { NavigationMenu } from "@/components/ui/navigation-menu";
import { ModeToggle } from "../mode-toggle";

export function NavigationMenuDemo() {
  return (
    <div className="shadow-lg py-4">
      <NavigationMenu viewport={false} className="max-w-6xl mx-auto">
        <div className="flex w-full justify-between items-center">
          <h2>Nav.</h2>
          <div className="flex gap-4">
            <h2>Home</h2>
            <h2>Link</h2>
          </div>
          <ModeToggle />
        </div>
      </NavigationMenu>
    </div>
  );
}
