import * as Y from "yjs";

export function createYDoc(roomId: string) {
  const doc = new Y.Doc();

  const text = doc.getText("editor");

  const meta = doc.getMap("meta");

  meta.set("roomId", roomId);

  return {
    doc,
    text,
    meta,
  };
}