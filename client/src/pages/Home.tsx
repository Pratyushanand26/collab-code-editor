import { Code2 } from "lucide-react";
import CreateRoomModal from "../components/Room/CreateRoomModal";
import JoinRoomForm from "../components/Room/JoinRoomForm";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Code Together, <span className="text-primary">Instantly.</span></h1>
      </div>
      <div className="flex gap-6 w-full max-w-3xl justify-center">
        <CreateRoomModal />
        <JoinRoomForm />
      </div>
    </div>
  );
}
