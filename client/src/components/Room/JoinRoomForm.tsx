import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../ui/Card";

export default function JoinRoomForm() {
  const navigate = useNavigate();
  const [roomId, setRoomId] = useState("");
  const handleJoin = (e: React.FormEvent) => { e.preventDefault(); if (roomId) navigate(`/room/${roomId.trim()}`); };
  return (
    <Card className="p-6 max-w-sm w-full">
      <h2 className="text-xl font-semibold mb-2">Join Room</h2>
      <form onSubmit={handleJoin} className="flex flex-col gap-4">
        <input type="text" value={roomId} onChange={(e) => setRoomId(e.target.value)} placeholder="Room ID" className="bg-background border border-border rounded-md px-4 py-2.5 text-sm text-text-main outline-none focus:border-primary" required />
        <button type="submit" className="w-full bg-surface-hover hover:bg-border text-text-main font-semibold py-2.5 rounded-md">Join</button>
      </form>
    </Card>
  );
}
