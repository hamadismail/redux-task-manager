import TaskCard from "./components/modules/tasks/TaskCard";
import { NavigationMenuDemo } from "./components/Navbar/Navbar";
import { selectTasks } from "./redux/features/todos/todoSlice";
import { useAppSelector } from "./redux/hooks";

function App() {
  const tasks = useAppSelector(selectTasks);
  console.log(tasks);
  return (
    <>
      <NavigationMenuDemo />
      {tasks.map(task => <TaskCard task={task}/>)}
    </>
  );
}

export default App;
