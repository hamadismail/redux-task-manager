import { ModeToggle } from "./components/mode-toggle";
import { Button } from "./components/ui/button";
import { selectTasks } from "./redux/features/todos/todoSlice";
import { useAppSelector } from "./redux/hooks";

function App() {
  const tasks = useAppSelector(selectTasks);
  console.log(tasks)
  return (
    <>
      <Button>Click me</Button>
      <ModeToggle />
    </>
  );
}

export default App;
