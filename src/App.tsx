import { AddTask } from "./components/modules/tasks/AddTask";
import TaskCard from "./components/modules/tasks/TaskCard";
import { NavigationMenuDemo } from "./components/Navbar/Navbar";
import { Tabs, TabsList, TabsTrigger } from "./components/ui/tabs";
import { filterTask, selectTasks } from "./redux/features/todos/todoSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  const tasks = useAppSelector(selectTasks);
  const dispatch = useAppDispatch();
  return (
    <>
      <NavigationMenuDemo />
      <div className="mt-6 max-w-6xl mx-auto flex justify-between">
        <AddTask />
        <div>
          <Tabs defaultValue="all">
            <TabsList>
              <TabsTrigger
                onClick={() => dispatch(filterTask("all"))}
                value="all"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                onClick={() => dispatch(filterTask("high"))}
                value="high"
              >
                High
              </TabsTrigger>
              <TabsTrigger
                onClick={() => dispatch(filterTask("medium"))}
                value="medium"
              >
                Medium
              </TabsTrigger>
              <TabsTrigger
                onClick={() => dispatch(filterTask("low"))}
                value="low"
              >
                Low
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </>
  );
}

export default App;
