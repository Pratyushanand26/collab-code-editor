import { useEffect } from "react";
import { useParams } from "react-router-dom";
import * as Y from "yjs";

import { useYText } from "../collab/useYText";

import {
  connectSocket,
  disconnectSocket,
  joinRoom,
  getSocket,
} from "../socket/socketClient";

export default function RoomPage() {
  const { roomId } = useParams<{ roomId: string }>();

  const {
    value,
    text,
    doc,
  } = useYText(
    roomId || "default"
  );

  useEffect(() => {
    if (!roomId) return;

    const socket = connectSocket();

    socket.on("connect", () => {
      console.log(
        "CONNECTED -> JOINING",
        roomId
      );

      joinRoom(roomId);

      socket.off("yjs-update");
      socket.on(
  "yjs-update",
  (updateArray: number[]) => {
    console.log(
      "RECEIVED UPDATE"
    );

    console.log(
      "BEFORE",
      text.toString()
    );
    console.log(updateArray);

    Y.applyUpdate(
      doc,
      new Uint8Array(
        updateArray
      )
    );

    console.log(
      "AFTER",
      text.toString()
    );
  }
);
    });

    return () => {
      disconnectSocket();
    };
  }, [roomId, doc]);

  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <h1>
        Room: {roomId}
      </h1>

      <h2>
        Current Text:
      </h2>

      <div
        style={{
          border: "1px solid black",
          padding: "20px",
          minHeight: "50px",
          marginBottom: "20px",
        }}
      >
        {value}
      </div>

      <button
        onClick={() => {
          console.log(
            "ADD A CLICKED"
          );

          text.insert(
            text.toString().length,
            "A"
          );
        }}
      >
        Add A
      </button>
    </div>
  );
}