import Link from "next/link";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#0F0F0F] text-[#FAFAFA] font-sans">
      <header className="px-6 py-6 max-w-4xl mx-auto">
        <Link href="/" className="text-xs tracking-wide text-[#8E8E8E] hover:text-[#FAFAFA] transition-colors">
          ← Back to FITCHECK
        </Link>
      </header>

      <article className="px-6 py-12 max-w-4xl mx-auto space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-serif italic">Privacy Policy</h1>
          <p className="text-[#8E8E8E]">Last Updated: January 23, 2026</p>
        </div>

        <div className="space-y-8 text-[#FAFAFA]/90 leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-2xl font-serif italic text-[#FAFAFA]">1. Introduction</h2>
            <p>
              Welcome to FITCHECK. We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application (&quot;App&quot;).
            </p>
            <p>
              By using FITCHECK, you agree to the collection and use of information in accordance with this Privacy Policy. If you do not agree with our policies and practices, please do not use the App.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif italic text-[#FAFAFA]">2. Information We Collect</h2>
            <h3 className="text-xl text-[#FAFAFA]">2.1 Account Information</h3>
            <p>
              When you create an account using Apple Sign-In, we collect:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Apple User ID:</strong> A unique identifier from Apple</li>
              <li><strong>Email address:</strong> If you choose to share it with us (or a private relay email from Apple)</li>
              <li><strong>Account creation date:</strong> When you first signed up</li>
            </ul>
            <p>
              We do not have access to your Apple password or other Apple account credentials.
            </p>

            <h3 className="text-xl text-[#FAFAFA]">2.2 Outfit Photographs</h3>
            <p>
              When you scan an outfit, we collect:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Photographs:</strong> Images you upload for outfit analysis</li>
              <li><strong>Image metadata:</strong> Upload date, time, and device information</li>
            </ul>
            <p>
              Your photographs are temporarily uploaded to secure storage (Supabase Storage) and sent to OpenAI&apos;s API for AI analysis. After analysis, we store only the image URL reference and analysis results in our database - not the photograph itself. The actual photograph file may be retained in storage for your viewing history, but is only accessible to you through your authenticated account. We do not share your photographs with other users or third parties (except as described in Section 4).
            </p>

            <h3 className="text-xl text-[#FAFAFA]">2.3 Analysis Data</h3>
            <p>
              After analyzing your outfit, we store:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Style scores:</strong> Ratings across six categories (fit, color, style, season, occasion, grooming)</li>
              <li><strong>AI-generated feedback:</strong> Tips and recommendations for improvement</li>
              <li><strong>Scan history:</strong> Records of your past analyses and trends over time</li>
            </ul>

            <h3 className="text-xl text-[#FAFAFA]">2.4 Subscription Information</h3>
            <p>
              For paid subscribers, we collect:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Subscription status:</strong> Whether you have an active subscription</li>
              <li><strong>Subscription tier:</strong> Free, paid, or unlimited</li>
              <li><strong>Purchase receipts:</strong> Validated through Apple&apos;s servers (we do not store payment card information)</li>
            </ul>
            <p>
              All payment processing is handled by Apple. We do not collect or store your credit card or payment information.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif italic text-[#FAFAFA]">3. How We Use Your Information</h2>
            <p>
              We use the information we collect for the following purposes:
            </p>

            <h3 className="text-xl text-[#FAFAFA]">3.1 To Provide Our Service</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Process and analyze your outfit photographs using AI</li>
              <li>Generate personalized style scores and recommendations</li>
              <li>Store your scan history for trend analysis</li>
              <li>Authenticate your account and manage your session</li>
            </ul>

            <h3 className="text-xl text-[#FAFAFA]">3.2 To Manage Subscriptions</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Verify your subscription status</li>
              <li>Enable or restrict features based on your subscription tier</li>
              <li>Prevent abuse and enforce fair use policies</li>
            </ul>

            <h3 className="text-xl text-[#FAFAFA]">3.3 To Improve Our Service</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Analyze usage patterns to enhance user experience</li>
              <li>Debug technical issues and improve app performance</li>
              <li>Train and improve our AI models (using aggregated, anonymized data only)</li>
              <li>Develop new features and functionality</li>
            </ul>

            <h3 className="text-xl text-[#FAFAFA]">3.4 To Communicate With You</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Send important updates about the App or your account</li>
              <li>Respond to your support requests</li>
              <li>Notify you about changes to our Terms or Privacy Policy</li>
            </ul>

            <h3 className="text-xl text-[#FAFAFA]">3.5 For Security and Legal Compliance</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Detect and prevent fraud or abuse</li>
              <li>Enforce our Terms of Service</li>
              <li>Comply with legal obligations</li>
              <li>Protect the rights and safety of our users</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif italic text-[#FAFAFA]">4. How We Share Your Information</h2>
            <p>
              We do not sell your personal information. We may share your information in the following limited circumstances:
            </p>

            <h3 className="text-xl text-[#FAFAFA]">4.1 Service Providers</h3>
            <p>
              We work with third-party service providers to operate our App:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Supabase:</strong> Database hosting and backend infrastructure (stores your account data, photographs, and analysis results)
              </li>
              <li>
                <strong>OpenAI:</strong> AI-powered outfit analysis (your photographs are sent to OpenAI&apos;s API for analysis, subject to OpenAI&apos;s data usage policies)
              </li>
              <li>
                <strong>Apple:</strong> Authentication (Apple Sign-In) and payment processing (in-app purchases)
              </li>
            </ul>
            <p>
              These service providers have access to your information only to perform services on our behalf and are obligated to protect your information in accordance with their privacy policies.
            </p>

            <h3 className="text-xl text-[#FAFAFA]">4.2 Legal Requirements</h3>
            <p>
              We may disclose your information if required to do so by law or in response to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Valid legal requests (subpoenas, court orders, or government demands)</li>
              <li>Protecting our rights, property, or safety</li>
              <li>Protecting the rights, property, or safety of our users or the public</li>
              <li>Investigating potential violations of our Terms of Service</li>
            </ul>

            <h3 className="text-xl text-[#FAFAFA]">4.3 Business Transfers</h3>
            <p>
              If FITCHECK is involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. We will notify you via email and/or prominent notice in the App before your information becomes subject to a different privacy policy.
            </p>

            <h3 className="text-xl text-[#FAFAFA]">4.4 Aggregated and Anonymized Data</h3>
            <p>
              We may share aggregated or anonymized information that cannot be used to identify you for analytics, research, or marketing purposes. For example, we might share statistics about overall usage patterns or style trends.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif italic text-[#FAFAFA]">5. Data Storage and Security</h2>
            <h3 className="text-xl text-[#FAFAFA]">5.1 Where We Store Your Data</h3>
            <p>
              Your data is stored on secure servers provided by Supabase, which may be located in various jurisdictions. By using the App, you consent to the transfer and storage of your information in these locations.
            </p>

            <h3 className="text-xl text-[#FAFAFA]">5.2 Security Measures</h3>
            <p>
              We implement industry-standard security measures to protect your information:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Encrypted data transmission using HTTPS/TLS</li>
              <li>Secure authentication via Apple Sign-In</li>
              <li>Access controls and authentication for our backend systems</li>
              <li>Regular security audits and updates</li>
              <li>Encrypted storage of sensitive data</li>
            </ul>
            <p>
              However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
            </p>

            <h3 className="text-xl text-[#FAFAFA]">5.3 Data Retention</h3>
            <p>
              We retain your information for as long as your account is active or as needed to provide you services. You may request deletion of your account and data at any time through the App settings.
            </p>
            <p>
              After account deletion, we will:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Permanently delete your photographs and analysis results</li>
              <li>Remove your account information from our active databases</li>
              <li>Retain limited information (such as transaction records) only as required by law or for legitimate business purposes</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif italic text-[#FAFAFA]">6. Your Privacy Rights</h2>
            <h3 className="text-xl text-[#FAFAFA]">6.1 Access and Portability</h3>
            <p>
              You have the right to access your personal information and request a copy of your data in a portable format. Contact us at the email below to request your data.
            </p>

            <h3 className="text-xl text-[#FAFAFA]">6.2 Deletion</h3>
            <p>
              You can delete your account at any time through the App settings under Profile → Account Settings → Delete Account. This will permanently remove:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Your account information</li>
              <li>All uploaded photographs</li>
              <li>All scan results and history</li>
              <li>Your subscription status (note: you must cancel your subscription separately through Apple)</li>
            </ul>

            <h3 className="text-xl text-[#FAFAFA]">6.3 Opt-Out of Communications</h3>
            <p>
              You can opt out of non-essential communications by adjusting your notification preferences in the App settings or by following the unsubscribe link in emails we send you.
            </p>

            <h3 className="text-xl text-[#FAFAFA]">6.4 California Privacy Rights</h3>
            <p>
              If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Right to know what personal information is collected, used, shared, or sold</li>
              <li>Right to delete personal information</li>
              <li>Right to opt-out of the sale of personal information (note: we do not sell personal information)</li>
              <li>Right to non-discrimination for exercising your privacy rights</li>
            </ul>

            <h3 className="text-xl text-[#FAFAFA]">6.5 European Privacy Rights</h3>
            <p>
              If you are located in the European Economic Area (EEA), you have rights under the General Data Protection Regulation (GDPR):
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Right of access to your personal data</li>
              <li>Right to rectification of inaccurate data</li>
              <li>Right to erasure (&quot;right to be forgotten&quot;)</li>
              <li>Right to restrict processing</li>
              <li>Right to data portability</li>
              <li>Right to object to processing</li>
              <li>Right to withdraw consent</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif italic text-[#FAFAFA]">7. Children&apos;s Privacy</h2>
            <p>
              FITCHECK is intended for users aged 13 and older. We do not knowingly collect personal information from children under 13. If you are under 13, please do not use the App or provide any information to us.
            </p>
            <p>
              If we learn that we have collected personal information from a child under 13 without parental consent, we will delete that information as quickly as possible. If you believe we have collected information from a child under 13, please contact us immediately.
            </p>
            <p>
              For users between 13 and 18, we recommend obtaining parental or guardian consent before using the App.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif italic text-[#FAFAFA]">8. Third-Party Services and Links</h2>
            <p>
              Our App integrates with third-party services that have their own privacy policies:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Apple Services:</strong> <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer" className="text-[#FAFAFA] underline hover:text-white">Apple Privacy Policy</a></li>
              <li><strong>Supabase:</strong> <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#FAFAFA] underline hover:text-white">Supabase Privacy Policy</a></li>
              <li><strong>OpenAI:</strong> <a href="https://openai.com/privacy/" target="_blank" rel="noopener noreferrer" className="text-[#FAFAFA] underline hover:text-white">OpenAI Privacy Policy</a></li>
            </ul>
            <p>
              We are not responsible for the privacy practices of these third-party services. We encourage you to review their privacy policies before using them.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif italic text-[#FAFAFA]">9. International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that differ from the laws of your country.
            </p>
            <p>
              When we transfer your information internationally, we implement appropriate safeguards to ensure your data receives an adequate level of protection, including:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Standard contractual clauses approved by the European Commission</li>
              <li>Certification schemes such as Privacy Shield (where applicable)</li>
              <li>Other legally recognized transfer mechanisms</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif italic text-[#FAFAFA]">10. Cookies and Tracking Technologies</h2>
            <p>
              Our mobile App does not use cookies or tracking technologies. We use only the following for app functionality:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Local Storage:</strong> To cache data and improve app performance</li>
              <li><strong>Device Identifiers:</strong> To uniquely identify your device for authentication and security purposes only</li>
            </ul>
            <p>
              We do not use analytics tools, advertising trackers, or any third-party tracking services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif italic text-[#FAFAFA]">11. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. When we make changes, we will:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Update the &quot;Last Updated&quot; date at the top of this page</li>
              <li>Notify you through the App or via email for material changes</li>
              <li>Obtain your consent where required by law</li>
            </ul>
            <p>
              Your continued use of the App after changes are posted constitutes your acceptance of the updated Privacy Policy. We encourage you to review this Privacy Policy periodically.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif italic text-[#FAFAFA]">12. Data Processing Legal Basis (GDPR)</h2>
            <p>
              If you are in the EEA, our legal basis for collecting and using your information depends on the specific information and context:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Contractual Necessity:</strong> Processing is necessary to provide our services to you</li>
              <li><strong>Consent:</strong> You have given us explicit permission (which you can withdraw at any time)</li>
              <li><strong>Legitimate Interests:</strong> Processing is necessary for our legitimate business interests (e.g., improving our service, fraud prevention)</li>
              <li><strong>Legal Obligation:</strong> Processing is required by law</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif italic text-[#FAFAFA]">13. Contact Us</h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="pl-4 space-y-2">
              <p className="font-semibold">FITCHECK</p>
              <p>Email: <a href="mailto:hello@tryfitcheck.co" className="hover:underline">hello@tryfitcheck.co</a></p>
            </div>
            <p>
              For privacy-related inquiries, we will respond within 30 days of receiving your request.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif italic text-[#FAFAFA]">14. Your Consent</h2>
            <p>
              By using FITCHECK, you acknowledge that you have read and understood this Privacy Policy and consent to the collection, use, and sharing of your information as described herein.
            </p>
          </section>

          <div className="pt-8 border-t border-[#8E8E8E]/20">
            <p className="text-sm text-[#8E8E8E]">
              This Privacy Policy is effective as of the date stated at the top. We reserve the right to modify this policy at any time, so please review it frequently.
            </p>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
