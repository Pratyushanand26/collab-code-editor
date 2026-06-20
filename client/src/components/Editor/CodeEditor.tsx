import Editor from "@monaco-editor/react";

interface Props {
  language: string;
  code: string;
  onChange: (value: string) => void;
}

export default function CodeEditor({
  language,
  code,
  onChange,
}: Props) {
  return (
    <Editor
      height="70vh"
      language={language}
      value={code}
      theme="vs-dark"
      onChange={(value) =>
        onChange(value || "")
      }
    />
  );
}