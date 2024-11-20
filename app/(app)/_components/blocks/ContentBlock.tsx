import ContentGrid from "../layout/ContentGrid";
import Link from "../typography/Link";
type Props = {
  title: string;
  supporting?: any; 
  content: any; 
};

function RichText({ content }: { content: any }) {
  if (!content) return null;
  
  const serializer = (node: any, index: number) => {

    console.log(node);

    if (node.type === 'paragraph') {
      return (
        <p key={index} className="pb-2">
          {node.children.map((child: any, index: number) => serializer(child, index))}
        </p>
      );
    }
    
    if (node.type === 'link') {
      return (
        <Link 
          key={index} 
          href={node.fields.url}
          target={node.fields.newTab ? '_blank' : '_self'}
        >
          {node.children.map((child: any, index: number) => serializer(child, index))}
        </Link>
      );
    }
    
    if (node.type === 'text') {
      return node.text;
    }
    
    if (node.type === 'root') {
      return node.children.map((child: any, index: number) => serializer(child, index));
    }
    
    return null;
  };

  return <>{serializer(content, 0)}</>;
}

export default function ContentBlock({ title, supporting, content }: Props) {
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