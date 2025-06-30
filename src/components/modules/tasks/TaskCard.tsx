import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { deleteTask, toggleCompleteState } from "@/redux/features/todos/todoSlice";
import { useAppDispatch } from "@/redux/hooks";
import type { ITask } from "@/redux/types";

interface IProps {
  task: ITask;
}

const TaskCard = ({ task }: IProps) => {
  const dispatch = useAppDispatch();
  return (
    <div className="mt-4 max-w-6xl mx-auto border p-4 rounded-md">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <h2
            className={cn("size-3 rounded-full", {
              "bg-green-500": task.priority === "Low",
              "bg-yellow-500": task.priority === "Medium",
              "bg-red-500": task.priority === "High",
            })}
          ></h2>
          <h2 className={cn({"line-through": task.isCompleted})}>{task.title}</h2>
        </div>
        <div className="flex gap-3 items-center">
          <Button onClick={() => dispatch(deleteTask(task.id))} className="text-red-500">Del</Button>
          <Checkbox
            onClick={() => dispatch(toggleCompleteState(task.id))}
            className="text-green-500"
          />
        </div>
      </div>
      <div className="text-sm mt-2">{task.description}</div>
    </div>
  );
};

export default TaskCard;
