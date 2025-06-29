import type { ITask } from "@/redux/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  tasks: ITask[];
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
};

const todoSliece = createSlice({
  name: "todo",
  initialState,
  reducers: {},
});

export default todoSliece.reducer;
