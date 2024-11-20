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
  | SerializedParagraphNode['children'][number];

const isParagraphNode = (node: SerializedNode): node is SerializedParagraphNode => {
  return node.type === 'paragraph';
};

const isLinkNode = (node: SerializedNode): node is SerializedLinkNode => {
  return node.type === 'link';
};

const isTextNode = (node: SerializedNode): node is SerializedTextNode => {
  return node.type === 'text';
};

const isRootNode = (node: SerializedNode): node is DefaultTypedEditorState['root'] => {
  return node.type === 'root';
};

type RichTextProps = {
  content: SerializedNode;
}

function RichText({ content }: RichTextProps) {
  if (!content) return null;
  
  const serializer = (node: SerializedNode, index: number): React.ReactNode => {
    if (!node) return null;

    if (isParagraphNode(node)) {
      return (
        <p key={index} className="pb-2">
          {node.children?.map((child, i) => serializer(child, i))}
        </p>
      );
    }

    if (isLinkNode(node)) {
      return (
        <Link key={index} href={node.fields?.url || '#'}>
          {node.children?.map((child, i) => serializer(child, i))}
        </Link>
      );
    }

    if (isTextNode(node)) {
      return node.text;
    }

    if (isRootNode(node)) {
      return node.children?.map((child, i) => serializer(child, i));
    }

    return null;
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