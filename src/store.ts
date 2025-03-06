import { create, StateCreator } from "zustand";
import { devtools } from "zustand/middleware";

export interface UserSlice {
  username: string;
  email: string;
  setUsername: (username: string) => void;
  setEmail: (email: string) => void;
}

export interface PostsSlice {
  username: string;
}

export const createUserSlice: StateCreator<UserSlice> = (set) => ({
  username: "Kshitij",
  email: "kshitij@email.com",
  setUsername: (username: string) => set(() => ({ username })), // No need to spread state, This will only update the username
  setEmail: (email: string) => set(() => ({ email })),
});

export const createPostsSlice: StateCreator<PostsSlice> = (set) => ({
  username: "Kshitij_1",
  setUsername: (username: string) => set(() => ({ username })), // No need to spread state, This will only update the username
});

export const useAppStore = create(
  devtools<UserSlice & PostsSlice>((...a) => ({
    ...createUserSlice(...a),
    ...createPostsSlice(...a),
  }))
);
