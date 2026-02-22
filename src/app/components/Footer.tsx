import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-6 py-12 text-center text-xs text-[#8E8E8E] space-y-2">
      <p>© {new Date().getFullYear()} Matias Varela Cousillas</p>
      <p className="space-x-2">
        <Link href="/terms" className="hover:text-[#FAFAFA] transition-colors">
          Terms of Service
        </Link>
        <span>|</span>
        <Link href="/privacy" className="hover:text-[#FAFAFA] transition-colors">
          Privacy Policy
        </Link>
        <span>|</span>
        <Link href="/support" className="hover:text-[#FAFAFA] transition-colors">
          Support
        </Link>
      </p>
    </footer>
  );
}
