interface Props {
  language: string;
  onChange: (language: string) => void;
}

export default function LanguageSelector({
  language,
  onChange,
}: Props) {
  return (
    <select
      value={language}
      onChange={(e) =>
        onChange(e.target.value)
      }
    >
      <option value="javascript">
        JavaScript
      </option>

      <option value="python">
        Python
      </option>
    </select>
  );
}