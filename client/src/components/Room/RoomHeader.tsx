import { Copy, Users, Wifi, WifiOff } from "lucide-react";
import { useRoomStore } from "../../store/roomStore";
import UserAvatarStack from "./UserAvatarStack";

export default function RoomHeader() {
  const { roomId, isConnected, users } = useRoomStore();
  const copyRoomId = () => roomId && navigator.clipboard.writeText(roomId);

  return (
    <header className="h-14 border-b border-border bg-surface flex items-center justify-between px-4 shrink-0">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 bg-primary rounded flex items-center justify-center font-bold text-background">CE</div>
          <span className="font-semibold text-text-main hidden sm:block">Collab Editor</span>
        </div>
        <div className="h-6 w-[1px] bg-border mx-2" />
        <button onClick={copyRoomId} className="flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-surface-hover text-sm text-text-muted hover:text-text-main">
          <span className="font-mono">{roomId}</span><Copy size={14} />
        </button>
      </div>
      <div className="flex items-center gap-6">
        <UserAvatarStack users={users} />
        <div className="flex items-center gap-2 text-sm px-3 py-1 rounded-full bg-background border border-border">
          {isConnected ? <><Wifi size={14} className="text-success" /><span className="text-success">Connected</span></> : <><WifiOff size={14} className="text-danger" /><span className="text-danger">Offline</span></>}
        </div>
      </div>
    </header>
  );
}
