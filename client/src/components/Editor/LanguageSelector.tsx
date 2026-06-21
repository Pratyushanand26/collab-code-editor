import { Code2 } from "lucide-react";
import { useRoomStore } from "../../store/roomStore";
export default function LanguageSelector() {
  const { language, setLanguage } = useRoomStore();
  return (
    <div className="flex items-center gap-2 bg-background border border-border rounded-md px-3 py-1.5">
      <Code2 size={16} className="text-text-muted" />
      <select value={language} onChange={(e) => setLanguage(e.target.value)} className="bg-transparent text-sm text-text-main outline-none cursor-pointer">
        <option value="javascript">JavaScript</option><option value="python">Python</option>
      </select>
    </div>
  );
}
