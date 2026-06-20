interface Props {
  output: string;
}

export default function OutputPanel({
  output,
}: Props) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        minHeight: "150px",
      }}
    >
      <pre>{output}</pre>
    </div>
  );
}