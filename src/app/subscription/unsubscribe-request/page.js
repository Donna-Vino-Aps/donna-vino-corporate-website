"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Button from "@/components/Button/Button";
import useFetch from "@/hooks/api/useFetch";
import { logInfo } from "@/utils/logging";
import { useLanguage } from "@/app/context/LanguageContext";
import PropTypes from "prop-types";
import SEO from "@/components/SEO/SEO";

function UnsubscribeRequestContent({ translations }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  const [unsubscribeRequestStatus, setUnsubscribeRequestStatus] = useState({
    isRequesting: false,
    error: null,
  });

  const { isLoading, error, data, performFetch } = useFetch(
    "/subscribe/unsubscribe-request",
    "POST",
  );

  const handleUnsubscribeRequest = async () => {
    if (!email) {
      setUnsubscribeRequestStatus({
        isRequesting: false,
        error: translations["unsubscribe-request.error-email"],
      });
      return;
    }

    setUnsubscribeRequestStatus({
      isRequesting: true,
      error: null,
    });

    try {
      await performFetch({
        email: email,
      });
    } catch (err) {
      logInfo("Unsubscribe request error:", err);
      setUnsubscribeRequestStatus({
        isRequesting: false,
        error: translations["unsubscribe-request.error-general"],
      });
    }
  };

  useEffect(() => {
    if (error) {
      setUnsubscribeRequestStatus({
        isRequesting: false,
        error:
          error.message || translations["unsubscribe-request.error-general"],
      });
    }
  }, [error, translations]);

  useEffect(() => {
    if (data && data.success) {
      router.push("/subscription/Unsubscribed");
    }
  }, [data, router]);

  return (
    <section
      className="lg:my-4 flex flex-col justify-center items-center bg-primary-light sm:bg-dots-lg sm:bg-dots-size-lg bg-dots-sm bg-dots-size-sm"
      aria-labelledby="unsubscribe-request-title"
    >
      <SEO
        title={translations["unsubscribe-request.title"]}
        description={translations["unsubscribe-request.description"]}
      />
      <div className="flex flex-col justify-center items-center sm:py-24 py-4 mx-2 max-w-[45rem]">
        <h1
          id="unsubscribe-request-title"
          className="text-displaySmall sm:text-displayMedium text-center mb-4 sm:mb-6 md:mb-8"
        >
          {translations["unsubscribe-request.heading"]}
        </h1>

        <p className="text-bodySmall sm:text-bodyMedium md:text-bodyLarge mb-4 sm:mb-6 md:mb-8 text-center">
          {translations["unsubscribe-request.paragraph1"]}
        </p>

        <p className="text-bodySmall sm:text-bodyMedium md:text-bodyLarge mb-4 sm:mb-6 md:mb-8 text-center">
          {translations["unsubscribe-request.paragraph2"]}
        </p>

        <Button
          text={
            isLoading
              ? translations["unsubscribe-request.button-loading"]
              : translations["unsubscribe-request.button"]
          }
          variant="redVerify"
          icon="/icons/checkmark-circle.svg"
          testId="unsubscribe-request-button"
          onClick={handleUnsubscribeRequest}
          disabled={
            isLoading ||
            unsubscribeRequestStatus.isRequesting ||
            (data && data.success)
          }
          ariaLabel={translations["unsubscribe-request.button"]}
        />

        {unsubscribeRequestStatus.error && (
          <div
            className="text-primary-normal text-bodyMedium my-6 text-center"
            aria-live="assertive"
            role="alert"
            data-testid="error-message"
          >
            {unsubscribeRequestStatus.error}
          </div>
        )}
      </div>
    </section>
  );
}

UnsubscribeRequestContent.propTypes = {
  translations: PropTypes.shape({
    "unsubscribe-request.error-token": PropTypes.string.isRequired,
    "unsubscribe-request.error-email": PropTypes.string.isRequired,
    "unsubscribe-request.error-general": PropTypes.string.isRequired,
    "unsubscribe-request.heading": PropTypes.string.isRequired,
    "unsubscribe-request.paragraph1": PropTypes.string.isRequired,
    "unsubscribe-request.paragraph2": PropTypes.string.isRequired,
    "unsubscribe-request.button-loading": PropTypes.string.isRequired,
    "unsubscribe-request.button": PropTypes.string.isRequired,
    "unsubscribe-request.title": PropTypes.string.isRequired,
    "unsubscribe-request.description": PropTypes.string.isRequired,
  }).isRequired,
};

const UnsubscribeRequestPage = () => {
  const { translations } = useLanguage();

  if (!translations) {
    return <div>{translations["unsubscribe-request.loading"]}</div>;
  }

  return (
    <Suspense
      fallback={<div>{translations["unsubscribe-request.loading"]}</div>}
    >
      <UnsubscribeRequestContent translations={translations} />
    </Suspense>
  );
};

export default UnsubscribeRequestPage;
