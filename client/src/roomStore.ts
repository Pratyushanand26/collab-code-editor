import { create } from "zustand";

interface RoomState {
  roomId: string;
  language: string;

  setRoomId: (roomId: string) => void;
  setLanguage: (language: string) => void;
}

export const useRoomStore =
  create<RoomState>((set) => ({
    roomId: "",
    language: "javascript",

    setRoomId: (roomId) =>
      set({ roomId }),

    setLanguage: (language) =>
      set({ language }),
  }));