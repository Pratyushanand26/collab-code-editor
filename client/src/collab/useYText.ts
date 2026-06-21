import { useEffect, useState } from "react";
import * as Y from "yjs";

import { createYDoc } from "./ydoc";
import { emitYjsUpdate } from "../socket/socketClient";

export function useYText(
  roomId: string
) {
  const [{ doc, text }] =
    useState(() =>
      createYDoc(roomId)
    );

  const [value, setValue] =
    useState("");

  useEffect(() => {
    const observer = () => {
      setValue(
        text.toString()
      );
    };

    text.observe(observer);

    setValue(
      text.toString()
    );

    return () => {
      text.unobserve(observer);
    };
  }, [text]);

  useEffect(() => {
    const updateHandler = (
      update: Uint8Array
    ) => {
      emitYjsUpdate(
        roomId,
        update
      );
    };

    doc.on(
      "update",
      updateHandler
    );

    return () => {
      doc.off(
        "update",
        updateHandler
      );
    };
  }, [doc, roomId]);

  return {
    value,
    text,
    doc,
  };
}