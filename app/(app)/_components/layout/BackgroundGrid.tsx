import { cn } from "../../_lib/utils";

export default function BackgroundGrid() {
  return (
    <div className="fixed h-screen w-screen pointer-events-none invisible md:visible inset-0">
      <div className="container mx-auto h-full grid grid-cols-6">
        {Array.from({ length: 6 }, (_, index) => (
          <div
            key={index}
            className={cn(
              "border-yoga-blue/25",
              index === 0 ? "border-x-2" : "border-r-2"
            )}
          ></div>
        ))}
      </div>
    </div>
  );
}
