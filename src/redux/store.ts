import { configureStore } from "@reduxjs/toolkit";
import taskReducer from './features/todos/todoSlice'
import userReducer from './features/users/userSlice'

export const store = configureStore({
  reducer: {
    todos: taskReducer,
    users: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
