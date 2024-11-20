export default function BackgroundGrid() {
  return (
    <div className="fixed h-screen w-screen pointer-events-none invisible md:visible inset-0">
      <div className="container mx-auto h-full grid grid-cols-6">
        {Array.from({ length: 6 }, (_, index) => (
          <div
            key={index}
            className={
              index === 0
                ? "border-x border-x-black opacity-25"
                : "border-r border-r-black opacity-25"
            }
          ></div>
        ))}
      </div>
    </div>
  );
}
