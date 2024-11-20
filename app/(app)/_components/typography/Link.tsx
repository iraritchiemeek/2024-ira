import { PropsWithChildren } from "react";
import { default as NextLink } from "next/link";

export default function Link({
  href,
  children,
  target,
}: PropsWithChildren<{ href: string; target?: string }>) {
  return (
    <NextLink href={href} className="underline" target={target}>
      {children}
    </NextLink>
  );
}
