import { fetchApi } from "./client";

export async function createRoom(): Promise<{ roomId: string }> {
  // TODO: Replace with real backend
  return new Promise((resolve) => setTimeout(() => resolve({ roomId: Math.random().toString(36).substring(7) }), 500));
}

export async function joinRoom(roomId: string): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, 500));
}
