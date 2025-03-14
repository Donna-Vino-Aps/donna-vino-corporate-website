"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Button from "@/components/Button/Button";
import useFetch from "@/hooks/api/useFetch";
import { logInfo } from "@/utils/logging";
import { useLanguage } from "@/app/context/LanguageContext";

function UnsubscribeRequestContent({ translations }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [unsubscribeRequestStatus, setUnsubscribeRequestStatus] = useState({
    isRequesting: false,
    error: null,
  });

  const { isLoading, error, data, performFetch } = useFetch(
    "/subscribe/unsubscribe-request",
    "POST",
  );

  const handleUnsubscribeRequest = async () => {
    if (!token) {
      setUnsubscribeRequestStatus({
        isRequesting: false,
        error: translations["unsubscribe-request.error-token"],
      });
      return;
    }

    setUnsubscribeRequestStatus({
      isRequesting: true,
      error: null,
    });

    try {
      await performFetch({
        token: token,
        subject: "Unsubscribe Request",
        templateName: "unsubscribeSuccessTemplate",
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
      router.push("/subscription/unsubscribed");
    }
  }, [data, router]);

  return (
    <section
      className="lg:my-4 flex flex-col justify-center items-center bg-primary-light sm:bg-dots-lg sm:bg-dots-size-lg bg-dots-sm bg-dots-size-sm"
      aria-labelledby="unsubscribe-request-title"
    >
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
