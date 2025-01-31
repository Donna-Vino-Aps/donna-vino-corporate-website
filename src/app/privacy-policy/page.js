"use client";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <section
      className="mt-6 relative flex flex-col w-full p-4 md:p-8 bg-white text-tertiary1-darker"
      role="main"
      aria-labelledby="privacy-policy-title"
      data-testid="privacy-policy"
    >
      <div className="max-w-4xl mx-auto">
        <h1
          className="text-displayMedium md:text-displayLarge font-barlow mb-6"
          id="privacy-policy-title"
          data-testid="privacy-policy-title"
        >
          Privacy Policy
        </h1>
        <p className="text-bodyLarge mb-4" data-testid="last-updated">
          Last updated: <strong>[Fecha]</strong>
        </p>

        <section className="mb-8">
          <h2
            className="text-headingMedium font-semibold mb-2"
            data-testid="intro-title"
          >
            1. Introduction
          </h2>
          <p className="text-bodyMedium" data-testid="intro-text">
            Welcome to <strong>[Your Website Name]</strong> ("we", "us", or
            "our"). Your privacy is important to us. This Privacy Policy
            explains how we collect, use, and protect your personal information
            when you visit our website{" "}
            <a href="/" className="text-primary-normal underline">
              [https://yourwebsite.dk]
            </a>
            .
          </p>
        </section>

        <section className="mb-8">
          <h2
            className="text-headingMedium font-semibold mb-2"
            data-testid="data-collection-title"
          >
            2. What Data We Collect
          </h2>
          <p
            className="text-bodyMedium mb-2"
            data-testid="data-collection-text"
          >
            We do not collect personal data unless you contact us directly.
            However, we may collect:
          </p>
          <ul className="list-disc list-inside text-bodyMedium">
            <li>
              <strong>Cookies and Usage Data</strong>: To improve our website,
              we use cookies and analytics tools.
            </li>
            <li>
              <strong>Contact Information</strong> (only if you voluntarily
              reach out via email or contact forms).
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2
            className="text-headingMedium font-semibold mb-2"
            data-testid="usage-title"
          >
            3. How We Use Your Data
          </h2>
          <p className="text-bodyMedium mb-2" data-testid="usage-text">
            We use the collected data to:
          </p>
          <ul className="list-disc list-inside text-bodyMedium">
            <li>Improve our website’s performance and user experience.</li>
            <li>Respond to inquiries if you contact us.</li>
          </ul>
          <p className="text-bodyMedium mt-2">
            We do <strong>not</strong> sell or share your data with third
            parties.
          </p>
        </section>

        <section className="mb-8">
          <h2
            className="text-headingMedium font-semibold mb-2"
            data-testid="cookies-title"
          >
            4. Cookies and Tracking Technologies
          </h2>
          <p className="text-bodyMedium">
            We use cookies to analyze website traffic. You can accept or reject
            cookies via your browser settings. For more details, see our
            <a href="#" className="text-primary-normal underline">
              {" "}
              Cookie Policy
            </a>
            .
          </p>
        </section>

        <section className="mb-8">
          <h2
            className="text-headingMedium font-semibold mb-2"
            data-testid="rights-title"
          >
            5. Your Rights Under GDPR
          </h2>
          <p className="text-bodyMedium mb-2" data-testid="rights-text">
            As a visitor from Denmark or the EU, you have rights regarding your
            personal data, including:
          </p>
          <ul className="list-disc list-inside text-bodyMedium">
            <li>The right to access, correct, or delete your data.</li>
            <li>The right to object to data processing.</li>
            <li>The right to withdraw consent (e.g., disabling cookies).</li>
          </ul>
          <p className="text-bodyMedium mt-2">
            To exercise your rights, contact us at
            <a
              href="mailto:your@email.dk"
              className="text-primary-normal underline"
            >
              {" "}
              your@email.dk
            </a>
            .
          </p>
        </section>

        <section className="mb-8">
          <h2
            className="text-headingMedium font-semibold mb-2"
            data-testid="changes-title"
          >
            6. Changes to This Policy
          </h2>
          <p className="text-bodyMedium">
            We may update this policy. Any changes will be posted on this page
            with a revised **"Last updated"** date.
          </p>
        </section>

        <section className="mb-8">
          <h2
            className="text-headingMedium font-semibold mb-2"
            data-testid="contact-title"
          >
            7. Contact Information
          </h2>
          <p className="text-bodyMedium">
            If you have any questions about this Privacy Policy, please contact
            us:
          </p>
          <p className="text-bodyMedium">
            📧 Email:
            <a
              href="mailto:your@email.dk"
              className="text-primary-normal underline"
            >
              {" "}
              your@email.dk
            </a>
          </p>
          <p className="text-bodyMedium">
            📍 Address: [Your Business Address, Denmark]
          </p>
        </section>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
