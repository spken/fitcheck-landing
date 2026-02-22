import Link from "next/link";
import BackToFitcheck from "../components/BackToFitcheck";
import Footer from "../components/Footer";

export const metadata = {
  title: "Support - FITCHECK",
  description: "Get help with FITCHECK. Browse our FAQ or reach out directly.",
};

export default function Support() {
  return (
    <main className="min-h-screen bg-[#0F0F0F] text-[#FAFAFA] font-sans">
      <BackToFitcheck />

      <article className="px-6 py-12 max-w-4xl mx-auto space-y-16">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-serif italic">Support</h1>
          <p className="text-[#8E8E8E] leading-relaxed max-w-2xl">
            Need help with FITCHECK? We&apos;re here for you. Browse the FAQ
            below or reach out directly and we&apos;ll get back to you as soon
            as possible.
          </p>
        </div>

        <section className="space-y-6">
          <h2 className="text-2xl font-serif italic text-[#FAFAFA]">
            Frequently Asked Questions
          </h2>

          <div className="border-t border-[#8E8E8E]/20 divide-y divide-[#8E8E8E]/20">
            <details className="group py-5">
              <summary className="flex items-center justify-between cursor-pointer list-none [&::-webkit-details-marker]:hidden text-[#FAFAFA]/90 hover:text-[#FAFAFA] transition-colors">
                <span>What is FITCHECK?</span>
                <span className="text-[#8E8E8E] text-xl shrink-0 ml-4 transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-[#8E8E8E] leading-relaxed pr-8">
                FITCHECK is an AI-powered outfit scanner. Point your camera at
                any outfit and get instant feedback on your look.
              </p>
            </details>

            <details className="group py-5">
              <summary className="flex items-center justify-between cursor-pointer list-none [&::-webkit-details-marker]:hidden text-[#FAFAFA]/90 hover:text-[#FAFAFA] transition-colors">
                <span>How do I scan an outfit?</span>
                <span className="text-[#8E8E8E] text-xl shrink-0 ml-4 transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-[#8E8E8E] leading-relaxed pr-8">
                Open the app, tap the camera button, and point it at your
                outfit. FITCHECK will analyze your look and give you feedback
                within seconds.
              </p>
            </details>

            <details className="group py-5">
              <summary className="flex items-center justify-between cursor-pointer list-none [&::-webkit-details-marker]:hidden text-[#FAFAFA]/90 hover:text-[#FAFAFA] transition-colors">
                <span>Why does FITCHECK need camera access?</span>
                <span className="text-[#8E8E8E] text-xl shrink-0 ml-4 transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-[#8E8E8E] leading-relaxed pr-8">
                Camera access is required to scan your outfits. Without it, the
                core feature of the app cannot function. You can update this
                permission in your iPhone&apos;s Settings &gt; FITCHECK &gt;
                Camera.
              </p>
            </details>

            <details className="group py-5">
              <summary className="flex items-center justify-between cursor-pointer list-none [&::-webkit-details-marker]:hidden text-[#FAFAFA]/90 hover:text-[#FAFAFA] transition-colors">
                <span>My scan isn&apos;t working. What should I do?</span>
                <span className="text-[#8E8E8E] text-xl shrink-0 ml-4 transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-[#8E8E8E] leading-relaxed pr-8">
                Make sure you have a stable internet connection and that camera
                access is enabled. If the issue persists, try closing and
                reopening the app, or contact us below.
              </p>
            </details>

            <details className="group py-5">
              <summary className="flex items-center justify-between cursor-pointer list-none [&::-webkit-details-marker]:hidden text-[#FAFAFA]/90 hover:text-[#FAFAFA] transition-colors">
                <span>How do I manage or cancel my subscription?</span>
                <span className="text-[#8E8E8E] text-xl shrink-0 ml-4 transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-[#8E8E8E] leading-relaxed pr-8">
                Subscriptions are managed through your Apple ID. Go to Settings
                &gt; [your name] &gt; Subscriptions on your iPhone to view or
                cancel your FITCHECK subscription.
              </p>
            </details>

            <details className="group py-5">
              <summary className="flex items-center justify-between cursor-pointer list-none [&::-webkit-details-marker]:hidden text-[#FAFAFA]/90 hover:text-[#FAFAFA] transition-colors">
                <span>How do I delete my account?</span>
                <span className="text-[#8E8E8E] text-xl shrink-0 ml-4 transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-[#8E8E8E] leading-relaxed pr-8">
                You can delete your account directly within the app under
                Settings &gt; Delete Account. This will permanently remove your
                data.
              </p>
            </details>

            <details className="group py-5">
              <summary className="flex items-center justify-between cursor-pointer list-none [&::-webkit-details-marker]:hidden text-[#FAFAFA]/90 hover:text-[#FAFAFA] transition-colors">
                <span>What data does FITCHECK collect?</span>
                <span className="text-[#8E8E8E] text-xl shrink-0 ml-4 transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-[#8E8E8E] leading-relaxed pr-8">
                Please refer to our{" "}
                <Link
                  href="/privacy"
                  className="text-[#FAFAFA] underline hover:text-white"
                >
                  Privacy Policy
                </Link>{" "}
                for full details on what data we collect and how it&apos;s
                used.
              </p>
            </details>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-serif italic text-[#FAFAFA]">
            Contact Us
          </h2>
          <p className="text-[#FAFAFA]/90 leading-relaxed max-w-2xl">
            Can&apos;t find what you&apos;re looking for? Send us a message and
            we&apos;ll get back to you within 1–2 business days.
          </p>
          <a
            href="mailto:hello@tryfitcheck.co"
            className="inline-block text-[#FAFAFA] underline underline-offset-4 hover:text-[#FAFAFA]/70 transition-colors"
          >
            hello@tryfitcheck.co
          </a>
        </section>

        <div className="pt-4 border-t border-[#8E8E8E]/20">
          <p className="text-sm text-[#8E8E8E]">
            For urgent issues, please include your Apple ID email and a
            description of the problem so we can assist you faster.
          </p>
        </div>
      </article>

      <Footer />
    </main>
  );
}
