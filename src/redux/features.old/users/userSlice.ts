import type { RootState } from "@/redux/store";
import type { IUser } from "@/redux/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  users: IUser[];
}

const initialState: InitialState = {
  users: [
    {
      id: "jghjkldfh",
      name: "Hamad",
    },
  ],
};

type DraftTask = Pick<IUser, "name">;

const createUser = (userData: DraftTask): IUser => {
  return { id: nanoid(), ...userData };
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<DraftTask>) => {
      const userData = createUser(action.payload);
      state.users.push(userData);
    },
    deleteUser: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

export const selectUsers = (state: RootState) => {
  return state.users.users;
};


export const { addUser, deleteUser } =
  userSlice.actions;

export default userSlice.reducer;
