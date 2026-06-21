import { Play, Loader2 } from "lucide-react";
export default function RunButton({ onRun, isLoading }: { onRun: () => void, isLoading: boolean }) {
  return (
    <button onClick={onRun} disabled={isLoading} className="flex items-center gap-2 bg-primary hover:bg-primary-hover text-background font-semibold px-4 py-1.5 rounded-md disabled:opacity-50">
      {isLoading ? <Loader2 size={16} className="animate-spin" /> : <Play size={16} />}
      <span>{isLoading ? "Running..." : "Run Code"}</span>
    </button>
  );
}
