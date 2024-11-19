import { getPayload } from "payload";
import config from "@payload-config";
import { notFound } from "next/navigation";
import FullWidthImage from "./_components/images/FullWidthImage";
import { Media } from "@/payload-types";

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
    </div>
  );
}
