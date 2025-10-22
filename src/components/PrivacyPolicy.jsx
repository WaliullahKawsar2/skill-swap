import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 bg-base-200 text-base-content">
      <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>
      <p className="mb-4 text-sm text-center text-base-content/60">
        Last updated: October 22, 2025
      </p>

      <section className="space-y-6">
        <p>
          Welcome to <span className="font-semibold">SkillSwap</span>. Your
          privacy is important to us. This Privacy Policy explains how we
          collect, use, and protect your personal information when you use our
          platform, website, and related services (collectively, “Services”).
        </p>

        <h2 className="text-xl font-semibold">1. Information We Collect</h2>
        <p>
          We collect personal information that you provide directly to us when
          you create an account, enroll in a course, or communicate with us. The
          types of information we may collect include:
        </p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Name, email address, and password</li>
          <li>Profile information (bio, skills, photos)</li>
          <li>Payment details (processed securely via third-party providers)</li>
          <li>Usage data such as pages visited, login times, and device info</li>
        </ul>

        <h2 className="text-xl font-semibold">2. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Provide and improve our Services</li>
          <li>Authenticate users and manage accounts</li>
          <li>Send updates, course notifications, and promotional offers</li>
          <li>Analyze usage to enhance user experience and security</li>
        </ul>

        <h2 className="text-xl font-semibold">3. Data Sharing and Disclosure</h2>
        <p>
          We do not sell your personal information. We may share your data with
          trusted third parties who perform services on our behalf, such as
          payment processors, analytics providers, and cloud hosting platforms.
          All partners are required to comply with applicable privacy laws.
        </p>

        <h2 className="text-xl font-semibold">4. Data Retention</h2>
        <p>
          We retain your information only for as long as necessary to fulfill
          the purposes described in this policy, unless a longer retention
          period is required by law.
        </p>

        <h2 className="text-xl font-semibold">5. Cookies and Tracking</h2>
        <p>
          We use cookies and similar tracking technologies to enhance your
          browsing experience, analyze site traffic, and personalize content.
          You can manage cookie preferences through your browser settings.
        </p>

        <h2 className="text-xl font-semibold">6. Security</h2>
        <p>
          We implement appropriate technical and organizational measures to
          protect your information from unauthorized access, alteration,
          disclosure, or destruction. However, no method of transmission over
          the internet is completely secure.
        </p>

        <h2 className="text-xl font-semibold">7. Your Rights</h2>
        <p>
          You have the right to access, correct, or delete your personal data.
          You can update your account information directly or contact us for
          assistance. You may also withdraw consent for marketing emails at any
          time.
        </p>

        <h2 className="text-xl font-semibold">8. Children’s Privacy</h2>
        <p>
          Our Services are not directed to individuals under 13 years of age.
          We do not knowingly collect personal information from children. If you
          believe a child has provided us with data, please contact us so we can
          delete it.
        </p>

        <h2 className="text-xl font-semibold">9. International Data Transfers</h2>
        <p>
          If you access our Services from outside Bangladesh, please note that
          your information may be transferred and processed in countries that
          may not provide the same level of data protection as your jurisdiction.
        </p>

        <h2 className="text-xl font-semibold">10. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with an updated “Last Updated” date.
        </p>

        <h2 className="text-xl font-semibold">11. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy or our data
          practices, please contact us at:
        </p>
        <p className="text-base-content/60">
          Email: support@skillswap.com <br />
          Address: Sylhet, Bangladesh
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
