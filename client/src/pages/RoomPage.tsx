import { useParams } from "react-router-dom";

export default function RoomPage() {
  const { roomId } = useParams();

  return (
    <div>
      <h2>Room: {roomId}</h2>

      <div>
        Monaco editor goes here
      </div>

      <div>
        Output panel goes here
      </div>
    </div>
  );
}