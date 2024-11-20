import type { 
  DefaultTypedEditorState,
  SerializedParagraphNode,
  SerializedLinkNode,
  SerializedTextNode,
} from '@payloadcms/richtext-lexical';
import ContentGrid from "../layout/ContentGrid";
import Link from "../typography/Link";

type SerializedNode = 
  | SerializedParagraphNode 
  | SerializedLinkNode 
  | SerializedTextNode 
  | DefaultTypedEditorState['root']
  | (SerializedParagraphNode['children'][number]);

type RichTextProps = {
  content: SerializedNode;
}

function RichText({ content }: RichTextProps) {
  if (!content) return null;
  
  const serializer = (node: SerializedNode, index: number): React.ReactNode => {
    if (!node) return null;

    switch (node.type) {
      case 'paragraph': {
        return (
          <p key={index} className="pb-2">
            {(node as SerializedParagraphNode).children?.map((child, i: number) => serializer(child, i))}
          </p>
        );
      }
      case 'link': {
        return (
          <Link 
            key={index} 
            href={(node as SerializedLinkNode).fields?.url || '#'}
          >
            {(node as SerializedLinkNode).children?.map((child, i) => serializer(child as SerializedNode, i))}
          </Link>
        );
      }
      
      case 'text': {
        return (node as SerializedTextNode).text;
      }
      
      case 'root': {
        return (node as DefaultTypedEditorState['root']).children?.map((child, i) => serializer(child, i));
      }
      
      default:
        return null;
    }
  };

  return <>{serializer(content, 0)}</>;
}

type ContentBlockProps = {
  title: string;
  supporting?: DefaultTypedEditorState;
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
            <RichText content={supporting.root} />
          </div>
        )}

        <div className="col-span-2 col-start-4 max-w-prose">
          <RichText content={content.root} />
        </div>
      </ContentGrid>
    </div>
  );
} 