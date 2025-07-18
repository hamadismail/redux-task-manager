import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import {
  deleteTask,
  toggleCompleteState,
} from "@/redux/features.old/todos/todoSlice";
import { selectUsers } from "@/redux/features.old/users/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import type { ITask } from "@/redux/types";

interface IProps {
  task: ITask;
}

const TaskCard = ({ task }: IProps) => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectUsers);
  const assignedUser = users.find((user) => user.id === task.assignedTo);

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
          <h2 className={cn({ "line-through": task.isCompleted })}>
            {task.title}
          </h2>
        </div>
        <div className="flex gap-3 items-center">
          <Button
            onClick={() => dispatch(deleteTask(task.id))}
            className="text-red-500"
          >
            Del
          </Button>
          <Checkbox
            onClick={() => dispatch(toggleCompleteState(task.id))}
            className="text-green-500"
          />
        </div>
      </div>
      <div className="text-sm mt-2">
        <p>
          <span className="font-bold">Created By: </span>
          {assignedUser ? assignedUser.name : "No one"}
        </p>
        <p>
          <span className="font-bold">Description:</span> {task.description}
        </p>
      </div>
    </div>
  );
};

export default TaskCard;
