import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createRoom } from "../../api/rooms";
import { Card } from "../ui/Card";
import { Loader2 } from "lucide-react";

export default function CreateRoomModal() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const handleCreate = async () => {
    setIsLoading(true);
    const { roomId } = await createRoom();
    navigate(`/room/${roomId}`);
  };
  return (
    <Card className="p-6 max-w-sm w-full">
      <h2 className="text-xl font-semibold mb-2">Create a New Room</h2>
      <button onClick={handleCreate} disabled={isLoading} className="w-full bg-primary hover:bg-primary-hover text-background font-semibold py-2.5 rounded-md flex items-center justify-center gap-2">
        {isLoading && <Loader2 size={18} className="animate-spin" />} Create Room
      </button>
    </Card>
  );
}
