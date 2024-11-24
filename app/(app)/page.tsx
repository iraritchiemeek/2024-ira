import { getPayload } from "payload";
import config from "@payload-config";
import { notFound } from "next/navigation";
import FullWidthImage from "./_components/images/FullWidthImage";
import { Media } from "@/payload-types";
import ContentBlock from "./_components/blocks/ContentBlock";

export default async function Home() {
  const payload = await getPayload({ config });

  const result = await payload.find({
    collection: "pages",
    where: {
      slug: {
        equals: "home",
      },
    },
  });

  const page = result.docs[0];
  const section1 = page.layout?.[0];

  if (!page) {
    return null;
  }

  return (
    <div className="w-full h-screen">
      <FullWidthImage image={page.bannerImage as Media} />
      <ContentBlock
        title={section1?.title}
        supporting={section1?.supporting}
        content={section1?.content}
      />
    </div>
  );
}
