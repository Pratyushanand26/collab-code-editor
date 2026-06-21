import Editor, { useMonaco } from "@monaco-editor/react";
import { useEffect, useRef } from "react";
import { useRoomStore } from "../../store/roomStore";

export default function CodeEditor({ code, onChange }: { code: string, onChange: (val: string) => void }) {
  const { language } = useRoomStore();
  const monaco = useMonaco();
  
  useEffect(() => {
    if (monaco) {
      monaco.editor.defineTheme('custom-dark', {
        base: 'vs-dark', inherit: true, rules: [],
        colors: { 'editor.background': '#1a1d27', 'editor.lineHighlightBackground': '#24283b', 'editorLineNumber.foreground': '#565f89' }
      });
      monaco.editor.setTheme('custom-dark');
    }
  }, [monaco]);

  return <Editor height="100%" language={language} value={code} theme="custom-dark" onChange={v => onChange(v || "")} options={{ minimap: { enabled: false }, fontSize: 14, fontFamily: "monospace", padding: { top: 16 } }} />;
}
