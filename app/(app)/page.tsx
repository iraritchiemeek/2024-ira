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

  if (!page) {
    notFound();
  }

  console.log(page);

  return (
    <div className="w-full h-screen">
      <FullWidthImage image={page.bannerImage as Media} />
      <ContentBlock title={page.layout[0].title} supporting={page.layout[0].supporting} content={page.layout[0].content} />
    </div>
  );
}
