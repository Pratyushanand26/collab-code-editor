import { Terminal } from "lucide-react";
import { useExecutionStore } from "../../store/executionStore";

export default function OutputPanel() {
  const { output, isLoading, error } = useExecutionStore();
  return (
    <div className="flex flex-col h-full bg-surface border-l border-border">
      <div className="flex items-center gap-2 px-4 py-2 border-b border-border bg-surface shrink-0">
        <Terminal size={16} className="text-text-muted" /><span className="text-sm font-semibold text-text-muted uppercase">Output</span>
      </div>
      <div className="p-4 overflow-y-auto flex-1 font-mono text-sm">
        {isLoading && <div className="text-primary animate-pulse">Executing...</div>}
        {!isLoading && error && <div className="text-danger">{error}</div>}
        {!isLoading && output && (
          <div className="flex flex-col gap-4">
            {output.stdout && <pre className="text-text-main">{output.stdout}</pre>}
            {output.stderr && <pre className="text-danger">{output.stderr}</pre>}
            <div className={`mt-2 pt-2 border-t border-border ${output.exitCode === 0 ? 'text-success' : 'text-danger'}`}>Exited with code {output.exitCode}</div>
          </div>
        )}
      </div>
    </div>
  );
}
