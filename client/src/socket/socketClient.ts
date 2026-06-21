import { io, Socket } from "socket.io-client";

const SOCKET_URL =
  import.meta.env.VITE_SOCKET_URL ||
  "http://localhost:3000";

let socket: Socket | null = null;

export const connectSocket = () => {
  if (!socket) {
    socket = io(SOCKET_URL);

    socket.on("connect", () => {
      console.log(
        "SOCKET CONNECTED",
        socket?.id
      );
    });
  }

  return socket;
};

export const getSocket = () => socket;

export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
};

export const joinRoom = (
  roomId: string
) => {
  socket?.emit(
    "join-room",
    roomId
  );
};

export const emitYjsUpdate = (
  roomId: string,
  update: Uint8Array
) => {
  socket?.emit(
    "yjs-update",
    {
      roomId,
      update: Array.from(update),
    }
  );
};