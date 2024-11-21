import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical';
import ContentGrid from "../layout/ContentGrid";
import RichText from "../RichText";
import type {
  SerializedLexicalNode,
} from "lexical";


type ContentBlockProps = {
  title: string;
  supporting?: DefaultTypedEditorState | null;
  content: DefaultTypedEditorState;
}

export default function ContentBlock({ title, supporting, content }: ContentBlockProps) {
  return (
    <div className="container mx-auto py-24">
      <ContentGrid>
        <div className="col-start-2 col-span-1">
          <h2 className="text-2xl font-bold">{title}</h2>
        </div>

        {supporting && (
          <div className="col-span-1 max-w-prose">
            <RichText content={supporting} />
          </div>
        )}

        <div className="col-span-2 col-start-4 max-w-prose">
          <RichText content={content} />
        </div>
      </ContentGrid>
    </div>
  );
} 