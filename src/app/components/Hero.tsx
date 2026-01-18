import Image from "next/image";

export default function Hero() {
  return (
    <section className="px-6 pt-24 pb-32 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <div className="space-y-8">
        <h1 className="text-5xl md:text-6xl">
          <span className="font-serif italic">Dress better.</span>
          <br />
          <span className="text-4xl md:text-5xl text-[#8E8E8E] font-normal">
            With certainty.
          </span>
        </h1>

        <p className="text-lg text-[#8E8E8E] max-w-md">
          Ever change outfits three times — not because they were bad, but
          because you weren't sure?
        </p>

        <a href="#" className="relative inline-block glow">
          <Image
            src="/download.svg"
            alt="Download on the App Store"
            width={150}
            height={50}
            className="hover:scale-102 transition-transform"
          />
        </a>
      </div>

      <div className="relative w-full max-w-sm mx-auto">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#2C2C2C] to-transparent blur-2xl opacity-40" />
        <Image
          src="/iphone-mockup.png"
          alt="FITCHECK app preview"
          width={360}
          height={720}
          className="relative rounded-3xl"
        />
      </div>
    </section>
  );
}
