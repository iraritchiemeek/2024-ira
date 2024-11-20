import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="text-xl leading-6 font-bold">
      Iyengar Yoga Centre
      <span>
        <br />
        of Wellington
        <br />
        New Zealand
      </span>
    </Link>
  );
}
