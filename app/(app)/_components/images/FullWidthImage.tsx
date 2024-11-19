import { Media } from "@/payload-types";
import Image from "next/image";

export default function FullWidthImage({ image }: { image: Media }) {
  
  if (!image?.url) return null;

  return (
    <div className="w-full h-[80vh] min-h-[600px] max-h-[1000px] relative">
      <Image
        src={image.url}
        alt={image.alt}
        fill
        className="object-cover"
      />
    </div>
  );
}
