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
          {translations["privacy.h1"]}
        </h1>
        <p className="text-bodyLarge mb-4" data-testid="last-updated">
          {translations["privacy.updated"]} <strong>Jan. 2025</strong>
        </p>

        <section className="mb-8">
          <h2
            className="text-headingMedium font-semibold mb-2"
            data-testid="intro-title"
          >
            {translations["privacy.h2-1"]}
          </h2>
          <p className="text-bodyMedium" data-testid="intro-text">
            {translations["privacy.p1"]} <strong>Donna Vino ApS</strong> (
            {translations["privacy.variations"]}). {translations["privacy.p2"]}{" "}
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
            {translations["privacy.h2-2"]}
          </h2>
          <p className="text-bodyMedium" data-testid="data-collection-text">
            {translations["privacy.p3"]}
          </p>
          <ul className="list-disc list-inside text-bodyMedium">
            <li>
              <strong>{translations["privacy.item1-strong"]}</strong>:{" "}
              {translations["privacy.item1-p"]}
            </li>
            <li>
              <strong>{translations["privacy.item2-strong"]}</strong> (
              {translations["privacy.item1-p"]}).
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2
            className="text-headingMedium font-semibold mb-2"
            data-testid="usage-title"
          >
            {translations["privacy.h2-3"]}
          </h2>
          <p className="text-bodyMedium" data-testid="usage-text">
            {translations["privacy.p4"]}:
          </p>
          <ul className="list-disc list-inside text-bodyMedium">
            <li>{translations["privacy.item3"]}</li>
            <li>{translations["privacy.item4"]}</li>
          </ul>
          <p className="text-bodyMedium mt-2" data-testid="usage-footer">
            {translations["privacy.p5-1"]}{" "}
            <strong>{translations["privacy.p5-2"]}</strong>{" "}
            {translations["privacy.p5-3"]}
          </p>
        </section>

        <section className="mb-8">
          <h2
            className="text-headingMedium font-semibold mb-2"
            data-testid="cookies-title"
          >
            {translations["privacy.h2-4"]}
          </h2>
          <p className="text-bodyMedium" data-testid="cookies-text">
            {translations["privacy.p5"]}{" "}
            <a href="#" className="text-primary-normal underline">
              {translations["cookie.policy"]}
            </a>
            .
          </p>
        </section>

        <section className="mb-8">
          <h2
            className="text-headingMedium font-semibold mb-2"
            data-testid="rights-title"
          >
            {translations["privacy.h2-5"]}
          </h2>
          <p className="text-bodyMedium" data-testid="rights-text">
            {translations["privacy.p6"]}
          </p>
          <ul className="list-disc list-inside text-bodyMedium">
            <li>{translations["privacy.item5"]}</li>
            <li>{translations["privacy.item6"]}</li>
            <li>{translations["privacy.item7"]}</li>
          </ul>
          <p className="text-bodyMedium mt-2" data-testid="rights-footer">
            {translations["privacy.p7"]}{" "}
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
            {translations["privacy.h2-6"]}
          </h2>
          <p className="text-bodyMedium" data-testid="changes-text">
            {translations["privacy.p8"]}
          </p>
        </section>

        <section className="mb-8">
          <h2
            className="text-headingMedium font-semibold mb-2"
            data-testid="contact-title"
          >
            {translations["privacy.h2-7"]}
          </h2>
          <p className="text-bodyMedium" data-testid="contact-text">
            {translations["privacy.p9"]}
          </p>
          <p className="text-bodyMedium" data-testid="contact-email">
            {translations["privacy.mail"]}{" "}
            <a
              href="mailto:info@donnavino.dk"
              className="text-primary-normal underline"
            >
              info@donnavino.dk
            </a>
          </p>
          <p className="text-bodyMedium" data-testid="contact-address">
            {translations["privacy.address"]}: C/O Glenn Leervad Bjørnhart,
            Strandlodsvej 23C, 8. tv, 2300 København S
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
