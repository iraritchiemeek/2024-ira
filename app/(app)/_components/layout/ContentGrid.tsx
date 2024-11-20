import { cn } from "@/app/(app)/_lib/utils";

export default function ContentGrid({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("grid grid-cols-6 [&>*]:px-2", className)}>
      {children}
    </div>
  );
}
