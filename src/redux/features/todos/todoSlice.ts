import type { RootState } from "@/redux/store";
import type { ITask } from "@/redux/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

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
    },
  ],
  filter: "all",
};

type DraftTask = Pick<ITask, "title" | "description" | "dueDate" | "priority">;
const createTask = (taskData: DraftTask): ITask => {
  return { id: nanoid(), isCompleted: false, ...taskData };
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
});

export const selectTasks = (state: RootState) => {
  const filter = state.todos.filter;

  if (filter === "low") {
    return state.todos.tasks.filter((task) => task.priority === "Low");
  } else if (filter === "medium") {
    return state.todos.tasks.filter((task) => task.priority === "Medium");
  } else if (filter === "high") {
    return state.todos.tasks.filter((task) => task.priority === "High");
  } else {
    return state.todos.tasks;
  }
};

export const selectFilter = (state: RootState) => {
  return state.todos.filter;
};

export const { addTask, deleteTask, filterTask, toggleCompleteState } =
  todoSlice.actions;

export default todoSlice.reducer;
