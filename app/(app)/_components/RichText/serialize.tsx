// Reference: https://github.com/payloadcms/public-demo/blob/04c0345d299d0413ee0533d96cb8fd3240cd436c/src/app/_components/RichText/serialize/index.tsx

import type {
  SerializedParagraphNode,
  SerializedLinkNode,
  SerializedTextNode,
} from "@payloadcms/richtext-lexical";

import type { SerializedLexicalNode } from "lexical";

import { Fragment } from "react";
import Link from "../typography/Link";

const IS_BOLD = 1;


interface SerializeProps {
  nodes?: SerializedLexicalNode[];
}

export function SerializeLexical({ nodes }: SerializeProps) {
  if (!nodes) return null;

  return (
    <Fragment>
      {nodes.map((node, index) => {
        if (!node) return null;

        switch (node.type) {
          case 'paragraph': {
            const paragraphNode = node as SerializedParagraphNode;
            return (
              <p key={index} className="pb-2">
                {SerializeLexical({ nodes: paragraphNode.children })}
              </p>
            );
          }

          case 'link': {
            const linkNode = node as SerializedLinkNode;
            return (
              <Link key={index} href={linkNode.fields?.url || "#"}>
                {SerializeLexical({ nodes: linkNode.children })}
              </Link>
            );
          }

          case 'text': {
            const textNode = node as SerializedTextNode;
            return textNode.format & IS_BOLD ? (
              <strong key={index}>{textNode.text}</strong>
            ) : (
              textNode.text
            );
          }

          default:
            return null;
        }
      })}
    </Fragment>
  );
}
