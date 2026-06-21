import { create } from "zustand";
import { User } from "../types";

interface RoomState {
  roomId: string | null;
  language: string;
  users: User[];
  isConnected: boolean;
  setRoomId: (id: string | null) => void;
  setLanguage: (language: string) => void;
  setUsers: (users: User[]) => void;
  setConnectionStatus: (status: boolean) => void;
}

export const useRoomStore = create<RoomState>((set) => ({
  roomId: null, language: "javascript", users: [], isConnected: false,
  setRoomId: (roomId) => set({ roomId }),
  setLanguage: (language) => set({ language }),
  setUsers: (users) => set({ users }),
  setConnectionStatus: (isConnected) => set({ isConnected }),
}));
