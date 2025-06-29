import { AddTask } from "./components/modules/tasks/AddTask";
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
      <div className="mt-6 max-w-6xl mx-auto">
        <AddTask />
      </div>
      {tasks.map(task => <TaskCard task={task} key={task.id}/>)}
    </>
  );
}

export default App;
