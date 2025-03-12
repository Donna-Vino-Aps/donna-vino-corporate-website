"use client";

import React, { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Button from "@/components/Button/Button";
import useFetch from "@/hooks/api/useFetch";
import { logInfo } from "@/utils/logging";
import { useLanguage } from "@/app/context/LanguageContext";

function VerifyEmailContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const { translations } = useLanguage();

  const [verificationStatus, setVerificationStatus] = useState({
    isVerifying: false,
    error: null,
  });

  const handleResponse = (response, error) => {
    if (error) {
      logInfo("Verification error:", error);
      setVerificationStatus({
        isVerifying: false,
        error: error.message || translations["verify.error-general"],
      });
      return;
    }

    if (response?.success) {
      router.push("/subscription/confirmed");
    } else {
      setVerificationStatus({
        isVerifying: false,
        error: translations["verify.error-general"],
      });
    }
  };

  const { isLoading, performFetch } = useFetch(
    "/subscribe/confirm-subscription",
    "POST",
    {},
    {},
    handleResponse,
  );

  const handleVerification = async () => {
    if (!token) {
      setVerificationStatus({
        isVerifying: false,
        error: translations["verify.error-token"],
      });
      return;
    }

    setVerificationStatus({ isVerifying: true, error: null });

    await performFetch({
      token,
      subject: "Welcome to Donna Vino Newsletter",
      templateName: "emailWelcomeTemplate",
    });
  };

  return (
    <section
      className="lg:my-4 flex flex-col justify-center items-center bg-primary-light sm:bg-dots-lg sm:bg-dots-size-lg bg-dots-sm bg-dots-size-sm"
      aria-labelledby="subscription-verification-title"
    >
      <div className="flex flex-col justify-center items-center sm:py-24 py-4 mx-2 max-w-[45rem]">
        <h1
          id="subscription-verification-title"
          className="text-displaySmall sm:text-displayMedium text-center mb-4 sm:mb-6 md:mb-8"
        >
          {translations["verify.heading"]}
        </h1>

        <p className="text-bodySmall sm:text-bodyMedium md:text-bodyLarge mb-4 sm:mb-6 md:mb-8 text-center">
          {translations["verify.paragraph1"]} ✅
        </p>

        <p className="text-bodySmall sm:text-bodyMedium md:text-bodyLarge mb-4 sm:mb-6 md:mb-8 text-center">
          {translations["verify.paragraph2"]}
        </p>

        <p className="text-bodySmall sm:text-bodyMedium md:text-bodyLarge mb-4 sm:mb-6 md:mb-8 text-center">
          {translations["verify.paragraph3"]} 🍷
        </p>

        <Button
          text={
            isLoading
              ? translations["verify.button-loading"]
              : translations["verify.button"]
          }
          variant="redVerify"
          icon="/icons/checkmark-circle.svg"
          testId="verify-button"
          onClick={handleVerification}
          disabled={isLoading || verificationStatus.isVerifying}
          ariaLabel={translations["verify.button"]}
        />

        {verificationStatus.error && (
          <div
            className="text-primary-normal text-bodyMedium my-6 text-center"
            aria-live="assertive"
            role="alert"
            data-testid="error-message"
          >
            {verificationStatus.error}
          </div>
        )}
      </div>
    </section>
  );
}

const VerifyEmail = () => (
  <Suspense fallback={<div>Loading verification page...</div>}>
    <VerifyEmailContent />
  </Suspense>
);

export default VerifyEmail;
