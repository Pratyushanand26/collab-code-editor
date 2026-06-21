import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

import executeRoutes from "./routes/execute.routes";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/health", (_, res) => {
  res.json({
    service: "server",
    status: "ok",
  });
});

app.use("/api/execute", executeRoutes);

const httpServer = http.createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

const currentRoom = new Map<string, string>();

io.on("connection", (socket) => {
  console.log("client connected", socket.id);

  socket.on("join-room", (roomId: string) => {
    const previousRoom =
      currentRoom.get(socket.id);

    if (previousRoom) {
      socket.leave(previousRoom);
    }

    socket.join(roomId);

    currentRoom.set(
      socket.id,
      roomId
    );

    console.log(
      `${socket.id} joined ${roomId}`
    );
  });

  socket.on(
  "yjs-update",
  ({ roomId, update }) => {
    console.log(
      "update length",
      update.length
    );

    console.log(
      update
    );

    socket
      .to(roomId)
      .emit(
        "yjs-update",
        update
      );
  }
);

  socket.on("disconnect", () => {
    currentRoom.delete(socket.id);

    console.log(
      "client disconnected",
      socket.id
    );
  });
});

httpServer.listen(3000, () => {
  console.log("server running on 3000");
});