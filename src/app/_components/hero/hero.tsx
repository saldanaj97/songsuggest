import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero">
      <div className="flex h-screen w-screen flex-col justify-center">
        <Image
          src="/images/hero-gradient-sliced.png"
          layout="fill"
          objectFit="cover"
          alt="hero-gradient"
        />
        <div className="relative flex flex-row items-center justify-center gap-12 px-4 py-16">
          <div className="w-1/2 text-center text-white/50">
            Hero Photo Goes Here
          </div>
          <div className="flex w-1/2 flex-col font-extrabold text-white sm:text-[5rem]">
            <p className="text-center text-5xl tracking-tight">
              SongSuggest GPT
            </p>
            <div className="flex flex-col items-center gap-2">
              <p className="text-center text-xl font-normal tracking-normal">
                Explore endless melodies catered to your unique taste. Find your
                rhythm effortlessly with our AI artist recommendation.
              </p>
              <a
                href="#"
                className="rounded-full bg-action px-8 py-2 text-lg font-semibold text-white hover:bg-action/50"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
