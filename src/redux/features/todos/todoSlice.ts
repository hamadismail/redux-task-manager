import type { RootState } from "@/redux/store";
import type { ITask } from "@/redux/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
import { deleteUser } from "../users/userSlice";

interface InitialState {
  tasks: ITask[];
  filter: "all" | "high" | "medium" | "low";
}

const initialState: InitialState = {
  tasks: [
    {
      id: "jghjkldh",
      title: "Redux",
      description: "Learning Redux",
      dueDate: "2025-07-03",
      isCompleted: false,
      priority: "High",
      assignedTo: "jghjkldfh",
    },
  ],
  filter: "all",
};

type DraftTask = Pick<
  ITask,
  "title" | "description" | "dueDate" | "priority" | "assignedTo"
>;
const createTask = (taskData: DraftTask): ITask => {
  return {
    ...taskData,
    id: nanoid(),
    isCompleted: false,
    assignedTo: taskData.assignedTo ? taskData.assignedTo : null,
  };
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<DraftTask>) => {
      const taskData = createTask(action.payload);
      state.tasks.push(taskData);
    },
    toggleCompleteState: (state, action: PayloadAction<string>) => {
      state.tasks.forEach((task) =>
        task.id === action.payload
          ? (task.isCompleted = !task.isCompleted)
          : task
      );
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    filterTask: (
      state,
      action: PayloadAction<"all" | "high" | "medium" | "low">
    ) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(deleteUser, (state, action) => {
      state.tasks.forEach((task) =>
        task.assignedTo === action.payload ? (task.assignedTo = null) : task
      );
    });
  },
});

export const selectTasks = (state: RootState) => {
  const filter = state.todos.filter;
  const filteredTask = state.todos.tasks.filter(
    (task) => task.assignedTo !== null
  );

  if (filter === "low") {
    return state.todos.tasks.filter((task) => task.priority === "Low");
  } else if (filter === "medium") {
    return state.todos.tasks.filter((task) => task.priority === "Medium");
  } else if (filter === "high") {
    return state.todos.tasks.filter((task) => task.priority === "High");
  } else {
    return filteredTask;
  }
};

export const selectFilter = (state: RootState) => {
  return state.todos.filter;
};

export const { addTask, deleteTask, filterTask, toggleCompleteState } =
  todoSlice.actions;

export default todoSlice.reducer;
