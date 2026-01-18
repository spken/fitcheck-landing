import Image from "next/image";

export default function FinalCTA() {
  return (
    <section className="px-6 py-32 text-center">
      <h2 className="text-4xl md:text-5xl font-serif mb-10">
        Dress better today.
      </h2>
      <a href="#" className="relative inline-block glow">
        <Image
          src="/download.svg"
          alt="Download on the App Store"
          width={150}
          height={50}
        />
      </a>
    </section>
  );
}
