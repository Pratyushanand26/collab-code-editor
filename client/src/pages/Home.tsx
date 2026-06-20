import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Collaborative Code Editor</h1>

      <button
        onClick={() =>
          navigate("/room/demo-room")
        }
      >
        Enter Demo Room
      </button>
    </div>
  );
}