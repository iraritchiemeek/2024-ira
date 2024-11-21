
import { SerializeLexical } from "./serialize";

interface RichTextProps {
  className?: string;
  content: any;
}

export default function RichText({ content }: RichTextProps) {
  if (!content) {
    return null;
  }

  return (
    <div>
      {content &&
        !Array.isArray(content) &&
        typeof content === "object" &&
        "root" in content &&
        SerializeLexical({ nodes: content?.root?.children })}
    </div>
  );
}
