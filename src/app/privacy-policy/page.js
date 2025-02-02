"use client";
import React from "react";
import Button from "@/components/Button/Button";
import { useLanguage } from "@/app/context/LanguageContext";

const PrivacyPolicy = () => {
  const { translations } = useLanguage();
  return (
    <div className="w-full flex flex-col gap-8">
      <div className="px-2 pt-4 sm:mx-8">
        <Button
          text={translations["button.go-back"]}
          icon="/icons/back-arrow.svg"
          variant="redLine"
          ariaLabel="Go back"
          testId="go-back-button"
          onClick={() => {
            history.go(-1);
          }}
        />
      </div>

      <div className="p-8">
        <h1
          className="text-displayMedium md:text-displayLarge font-barlow mb-6"
          data-testid="privacy-policy-title"
        >
          Privacy Policy
        </h1>
        <p className="text-bodyLarge mb-4" data-testid="last-updated">
          Last updated: <strong>Jan. 2025</strong>
        </p>

        <section className="mb-8">
          <h2
            className="text-headingMedium font-semibold mb-2"
            data-testid="intro-title"
          >
            Introduction
          </h2>
          <p className="text-bodyMedium" data-testid="intro-text">
            Welcome to <strong>Donna Vino ApS</strong> ("we", "us", or "our").
            Your privacy is important to us. This Privacy Policy explains how we
            collect, use, and protect your personal information when you visit
            our website{" "}
            <a
              href="https://donnavino.dk/"
              className="text-primary-normal underline"
            >
              https://donnavino.dk/
            </a>
            .
          </p>
        </section>

        <section className="mb-8">
          <h2
            className="text-headingMedium font-semibold mb-2"
            data-testid="data-collection-title"
          >
            What Data We Collect
          </h2>
          <p className="text-bodyMedium" data-testid="data-collection-text">
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
            How We Use Your Data
          </h2>
          <p className="text-bodyMedium" data-testid="usage-text">
            We use the collected data to:
          </p>
          <ul className="list-disc list-inside text-bodyMedium">
            <li>Improve the performance and user experience of our website.</li>
            <li>Respond to inquiries if you contact us.</li>
          </ul>
          <p className="text-bodyMedium mt-2" data-testid="usage-footer">
            We <strong>do not</strong> sell or share your data with third
            parties.
          </p>
        </section>

        <section className="mb-8">
          <h2
            className="text-headingMedium font-semibold mb-2"
            data-testid="cookies-title"
          >
            Cookies and Tracking Technologies
          </h2>
          <p className="text-bodyMedium" data-testid="cookies-text">
            We use cookies to analyze website traffic. You can accept or reject
            cookies via your browser settings. For more details, see our{" "}
            <a href="#" className="text-primary-normal underline">
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
            Your Rights Under GDPR
          </h2>
          <p className="text-bodyMedium" data-testid="rights-text">
            As a visitor from Denmark or the EU, you have rights regarding your
            personal data, including:
          </p>
          <ul className="list-disc list-inside text-bodyMedium">
            <li>The right to access, correct, or delete your data.</li>
            <li>The right to object to data processing.</li>
            <li>The right to withdraw consent (e.g., disabling cookies).</li>
          </ul>
          <p className="text-bodyMedium mt-2" data-testid="rights-footer">
            To exercise your rights, contact us at{" "}
            <a
              href="mailto:info@donnavino.dk"
              className="text-primary-normal underline"
            >
              info@donnavino.dk
            </a>
            .
          </p>
        </section>

        <section className="mb-8">
          <h2
            className="text-headingMedium font-semibold mb-2"
            data-testid="changes-title"
          >
            Changes to This Policy
          </h2>
          <p className="text-bodyMedium" data-testid="changes-text">
            We may update this policy. Any changes will be posted on this page
            with a revised "Last updated" date.
          </p>
        </section>

        <section className="mb-8">
          <h2
            className="text-headingMedium font-semibold mb-2"
            data-testid="contact-title"
          >
            Contact Information
          </h2>
          <p className="text-bodyMedium" data-testid="contact-text">
            If you have any questions about this Privacy Policy, please contact
            us:
          </p>
          <p className="text-bodyMedium" data-testid="contact-email">
            Email:{" "}
            <a
              href="mailto:info@donnavino.dk"
              className="text-primary-normal underline"
            >
              info@donnavino.dk
            </a>
          </p>
          <p className="text-bodyMedium" data-testid="contact-address">
            Address: C/O Glenn Leervad Bjørnhart, Strandlodsvej 23C, 8. tv, 2300
            København S
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
