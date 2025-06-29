import type { RootState } from "@/redux/store";
import type { ITask } from "@/redux/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  tasks: ITask[];
  filter: "all" | "high" | "medium" | "low";
}

const initialState: InitialState = {
  tasks: [
    {
      id: "jkhfjkdsgh",
      title: "Redux",
      description: "Learing Redux",
      dueDate: "2026-05",
      isCompleted: false,
      priority: "High",
    },
    {
      id: "jhhfjkdsgh",
      title: "TypeScript",
      description: "Learing TypeScript",
      dueDate: "2026-09",
      isCompleted: false,
      priority: "Low",
    },
  ],
  filter: "all",
};

const todoSliece = createSlice({
  name: "todo",
  initialState,
  reducers: {},
});

export const selectTasks = (state: RootState) => {
  return state.todos.tasks;
};

export default todoSliece.reducer;
