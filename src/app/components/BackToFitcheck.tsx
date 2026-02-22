import Link from "next/link";

export default function BackToFitcheck() {
  return (
    <header className="px-6 py-6 max-w-4xl mx-auto">
      <Link
        href="/"
        className="text-xs tracking-wide text-[#8E8E8E] hover:text-[#FAFAFA] transition-colors"
      >
        ← Back to FITCHECK
      </Link>
    </header>
  );
}
