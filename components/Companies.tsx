import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export default function Companies() {
  const logos = [
    { src: "/assets/logos/amazon.png", alt: "Amazon" },
    { src: "/assets/logos/google.png", alt: "Google" },
    { src: "/assets/logos/netflix.png", alt: "Netflix" },
    { src: "/assets/logos/meta.png", alt: "Meta" },
    { src: "/assets/logos/apple.png", alt: "Apple" },
  ];

  return (
    <div className="bg-transparent pb-2 sm:pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-wrap justify-center text-center">
          <div className="w-full lg:w-6/12 px-4">
            <h1 className="text-gray-900 text-3xl font-bold mb-4">
              {/* Our members have gotten offers from these companies */}
              Get offers from these companies
            </h1>
          </div>
        </div>
        {/* <div> */}
        <div>
          <InfiniteMovingCards
            items={logos}
            direction="right"
            speed="normal"
           />
        </div>
      </div>
    </div>
  );
}
