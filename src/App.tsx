import { AddTask } from "./components/modules/tasks/AddTask.tsx";
import TaskCard from "./components/modules/tasks/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "./components/ui/tabs";
import { useGetTasksQuery } from "./redux/api/baseApi";
import type { ITask } from "./redux/types";

function App() {
  const { data, isLoading, isError } = useGetTasksQuery(undefined, {
    pollingInterval: 30000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <div className="mt-6 max-w-6xl mx-auto flex justify-between">
        <AddTask />
        <div>
          <Tabs defaultValue="all">
            <TabsList>
              <TabsTrigger
                // onClick={() => dispatch(filterTask("all"))}
                value="all"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                // onClick={() => dispatch(filterTask("high"))}
                value="high"
              >
                High
              </TabsTrigger>
              <TabsTrigger
                // onClick={() => dispatch(filterTask("medium"))}
                value="medium"
              >
                Medium
              </TabsTrigger>
              <TabsTrigger
                // onClick={() => dispatch(filterTask("low"))}
                value="low"
              >
                Low
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>
      {!isLoading &&
        data.tasks.map((task: ITask, idx: number) => (
          <TaskCard task={task} key={idx} />
        ))}
    </>
  );
}

export default App;
