import Link from "next/link";
import Footer from "../components/Footer";

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-[#0F0F0F] text-[#FAFAFA] font-sans">
      <header className="px-6 py-6 max-w-4xl mx-auto">
        <Link href="/" className="text-xs tracking-wide text-[#8E8E8E] hover:text-[#FAFAFA] transition-colors">
          ← Back to FITCHECK
        </Link>
      </header>

      <article className="px-6 py-12 max-w-4xl mx-auto space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-serif italic">Terms of Service</h1>
          <p className="text-[#8E8E8E]">Last Updated: February 12, 2026</p>
        </div>

        <div className="space-y-8 text-[#FAFAFA]/90 leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-2xl font-serif italic text-[#FAFAFA]">1. Acceptance of Terms</h2>
            <p>
              Welcome to FITCHECK. By downloading, accessing, or using the FITCHECK mobile application (&quot;App&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, please do not use the App.
            </p>
            <p>
              FITCHECK is operated by FITCHECK (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). These Terms constitute a legally binding agreement between you and FITCHECK.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif italic text-[#FAFAFA]">2. Description of Service</h2>
            <p>
              FITCHECK is an AI-powered outfit analysis application that provides:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Outfit photograph analysis using artificial intelligence</li>
              <li>Style scoring across three categories: fit, color, and style, plus an overall score</li>
              <li>Detection of outfit style category (e.g., Streetwear, Casual, Minimalist, Business Casual, Old Money, Sporty)</li>
              <li>Personalized fashion tips and recommendations</li>
            </ul>
            <p>
              The service is provided on a paid subscription basis.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif italic text-[#FAFAFA]">3. User Accounts</h2>
            <h3 className="text-xl text-[#FAFAFA]">3.1 Account Creation</h3>
            <p>
              To use FITCHECK, you must create an account using Apple Sign-In. You agree to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Notify us immediately of any unauthorized access</li>
              <li>Be responsible for all activities under your account</li>
            </ul>
            <h3 className="text-xl text-[#FAFAFA]">3.2 Account Eligibility</h3>
            <p>
              You must be at least 13 years old to use FITCHECK. If you are under 18, you must have parental or guardian consent. By using the App, you represent that you meet these requirements.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif italic text-[#FAFAFA]">4. Subscription Tiers and Payments</h2>
            <h3 className="text-xl text-[#FAFAFA]">4.1 Paid Subscription</h3>
            <p>
              Paid subscribers gain access to unlimited outfit scans and enhanced features. Subscription pricing is displayed in the App and billed through Apple&apos;s in-app purchase system.
            </p>
            <h3 className="text-xl text-[#FAFAFA]">4.2 Billing and Renewal</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Subscriptions automatically renew unless canceled at least 24 hours before the end of the current period</li>
              <li>Your Apple account will be charged for renewal within 24 hours prior to the end of the current period</li>
              <li>You can manage subscriptions and turn off auto-renewal in your Apple account settings</li>
              <li>All payments are processed by Apple Inc. and subject to Apple&apos;s terms and conditions</li>
            </ul>
            <h3 className="text-xl text-[#FAFAFA]">4.3 Refunds</h3>
            <p>
              Refund requests are handled by Apple according to their refund policies. We do not have access to or control over Apple&apos;s billing system.
            </p>
            <h3 className="text-xl text-[#FAFAFA]">4.4 Fair Use Policy</h3>
            <p>
              While paid subscriptions offer unlimited scans, we reserve the right to temporarily suspend accounts showing suspicious activity or abuse patterns (e.g., automated or bot-driven scanning beyond reasonable personal use).
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif italic text-[#FAFAFA]">5. User Content and Conduct</h2>
            <h3 className="text-xl text-[#FAFAFA]">5.1 Your Content</h3>
            <p>
              You retain ownership of all photographs you upload (&quot;User Content&quot;). By uploading User Content, you grant FITCHECK:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>A non-exclusive, worldwide license to process and analyze your photos for the purpose of providing the service</li>
              <li>The right to use AI models to analyze your outfit photographs</li>
              <li>The right to store analysis results in our secure database</li>
            </ul>
            <p>
              Your photographs are sent to our AI provider for analysis and stored locally on your device. We do not permanently store your photographs on our servers.
            </p>
            <h3 className="text-xl text-[#FAFAFA]">5.2 Content Restrictions</h3>
            <p>
              You agree not to upload content that:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Violates any laws or regulations</li>
              <li>Contains nudity, sexually explicit content, or pornography</li>
              <li>Infringes on intellectual property rights of others</li>
              <li>Contains hate speech, harassment, or discriminatory content</li>
              <li>Depicts violence or illegal activities</li>
              <li>Contains malware or malicious code</li>
            </ul>
            <h3 className="text-xl text-[#FAFAFA]">5.3 Content Moderation</h3>
            <p>
              We reserve the right to review, remove, or refuse any User Content that violates these Terms or is otherwise objectionable.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif italic text-[#FAFAFA]">6. AI Analysis and Recommendations</h2>
            <h3 className="text-xl text-[#FAFAFA]">6.1 Nature of Service</h3>
            <p>
              FITCHECK uses artificial intelligence models to analyze outfit photographs and provide style recommendations. You understand and agree that:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>AI analysis is subjective and based on general style principles</li>
              <li>Recommendations are suggestions, not professional fashion advice</li>
              <li>Results may vary and are not guaranteed to be accurate</li>
              <li>The service is for entertainment and personal improvement purposes</li>
            </ul>
            <h3 className="text-xl text-[#FAFAFA]">6.2 No Professional Advice</h3>
            <p>
              FITCHECK does not provide professional fashion consulting, styling services, or expert advice. Our AI-generated recommendations should not be relied upon as professional guidance.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif italic text-[#FAFAFA]">7. Intellectual Property</h2>
            <h3 className="text-xl text-[#FAFAFA]">7.1 Our Rights</h3>
            <p>
              The App, including all software, designs, graphics, text, and other content (excluding User Content), is owned by FITCHECK and protected by copyright, trademark, and other intellectual property laws.
            </p>
            <h3 className="text-xl text-[#FAFAFA]">7.2 Limited License</h3>
            <p>
              We grant you a limited, non-exclusive, non-transferable, revocable license to use the App for personal, non-commercial purposes in accordance with these Terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif italic text-[#FAFAFA]">8. Privacy and Data Protection</h2>
            <p>
              Your privacy is important to us. Our collection, use, and protection of your personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our <Link href="/privacy" className="text-[#FAFAFA] underline hover:text-white">Privacy Policy</Link> to understand our practices.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif italic text-[#FAFAFA]">9. Disclaimers and Limitation of Liability</h2>
            <h3 className="text-xl text-[#FAFAFA]">9.1 &quot;As Is&quot; Service</h3>
            <p>
              THE APP IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
            </p>
            <h3 className="text-xl text-[#FAFAFA]">9.2 Service Availability</h3>
            <p>
              We do not guarantee that the App will be available at all times or that it will be free from errors, viruses, or other harmful components. We may suspend or discontinue the App at any time without notice.
            </p>
            <h3 className="text-xl text-[#FAFAFA]">9.3 Limitation of Liability</h3>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, FITCHECK SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES RESULTING FROM:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Your use or inability to use the App</li>
              <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
              <li>Any bugs, viruses, or other harmful code transmitted through the App</li>
              <li>Any errors or omissions in content or any loss or damage incurred as a result of the use of any content posted, emailed, transmitted, or otherwise made available through the App</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif italic text-[#FAFAFA]">10. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless FITCHECK, its officers, directors, employees, and agents from any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys&apos; fees) arising from:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Your use of the App</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any rights of another party</li>
              <li>Your User Content</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif italic text-[#FAFAFA]">11. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your account and access to the App at any time, with or without notice, for any reason, including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Violation of these Terms</li>
              <li>Fraudulent or illegal activity</li>
              <li>Abuse of the service</li>
              <li>Prolonged inactivity</li>
            </ul>
            <p>
              Upon termination, your right to use the App will immediately cease. You may also delete your account at any time through the App settings.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif italic text-[#FAFAFA]">12. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. When we make changes, we will update the &quot;Last Updated&quot; date at the top of this page. Your continued use of the App after changes are posted constitutes your acceptance of the modified Terms.
            </p>
            <p>
              We will notify you of material changes through the App or via email. Please review these Terms periodically.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif italic text-[#FAFAFA]">13. Third-Party Services</h2>
            <p>
              The App integrates with third-party services including:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Apple Sign-In:</strong> For authentication (subject to Apple&apos;s terms)</li>
              <li><strong>Apple In-App Purchases:</strong> For subscription management (subject to Apple&apos;s terms)</li>
              <li><strong>Supabase:</strong> For data storage and backend services</li>
              <li><strong>OpenAI:</strong> For AI-powered outfit analysis</li>
              <li><strong>Superwall:</strong> For subscription and paywall management</li>
            </ul>
            <p>
              Your use of these third-party services is subject to their respective terms and conditions. We are not responsible for the practices or policies of third-party services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif italic text-[#FAFAFA]">14. Governing Law and Dispute Resolution</h2>
            <h3 className="text-xl text-[#FAFAFA]">14.1 Governing Law</h3>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
            </p>
            <h3 className="text-xl text-[#FAFAFA]">14.2 Dispute Resolution</h3>
            <p>
              Any disputes arising from these Terms or your use of the App shall be resolved through binding arbitration in accordance with the American Arbitration Association&apos;s rules, except that you may assert claims in small claims court if your claims qualify.
            </p>
            <h3 className="text-xl text-[#FAFAFA]">14.3 Class Action Waiver</h3>
            <p>
              You agree that any arbitration or proceeding shall be limited to the dispute between you and FITCHECK individually. You waive any right to participate in a class action lawsuit or class-wide arbitration.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif italic text-[#FAFAFA]">15. Miscellaneous</h2>
            <h3 className="text-xl text-[#FAFAFA]">15.1 Entire Agreement</h3>
            <p>
              These Terms, together with our Privacy Policy, constitute the entire agreement between you and FITCHECK regarding your use of the App.
            </p>
            <h3 className="text-xl text-[#FAFAFA]">15.2 Severability</h3>
            <p>
              If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.
            </p>
            <h3 className="text-xl text-[#FAFAFA]">15.3 No Waiver</h3>
            <p>
              Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
            </p>
            <h3 className="text-xl text-[#FAFAFA]">15.4 Assignment</h3>
            <p>
              You may not assign or transfer these Terms or your rights hereunder without our prior written consent. We may assign our rights and obligations under these Terms without restriction.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif italic text-[#FAFAFA]">16. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <div className="pl-4">
              <p className="font-semibold">FITCHECK</p>
              <p>Email: <a href="mailto:hello@tryfitcheck.co" className="hover:underline">hello@tryfitcheck.co</a></p>
            </div>
          </section>

          <div className="pt-8 border-t border-[#8E8E8E]/20">
            <p className="text-sm text-[#8E8E8E]">
              By using FITCHECK, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
