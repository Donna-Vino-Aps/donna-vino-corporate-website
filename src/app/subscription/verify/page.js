"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Button from "@/components/Button/Button";
import useFetch from "@/hooks/api/useFetch";
import { logInfo } from "@/utils/logging";

const VerifyEmail = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [verificationStatus, setVerificationStatus] = useState({
    isVerifying: false,
    error: null,
  });

  const { isLoading, error, data, performFetch } = useFetch(
    "/subscribe/confirm-subscription",
    "POST",
  );

  const handleVerification = async () => {
    if (!token) {
      setVerificationStatus({
        isVerifying: false,
        error: "Verification token is missing. Please check your email link.",
      });
      return;
    }

    setVerificationStatus({
      isVerifying: true,
      error: null,
    });

    try {
      await performFetch({
        token: token,
        subject: "Welcome to Donna Vino Newsletter",
        templateName: "emailWelcomeTemplate",
      });
    } catch (err) {
      logInfo("Verification error:", err);
      setVerificationStatus({
        isVerifying: false,
        error: "An error occurred during verification. Please try again.",
      });
    }
  };

  useEffect(() => {
    if (error) {
      setVerificationStatus({
        isVerifying: false,
        error:
          error.message || "Failed to verify subscription. Please try again.",
      });
    }
  }, [error]);

  useEffect(() => {
    if (data && data.success) {
      router.push("/subscription/confirmed");
    }
  }, [data, router]);

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
          Finalize your subscription
        </h1>

        <p className="text-bodySmall sm:text-bodyMedium md:text-bodyLarge mb-4 sm:mb-6 md:mb-8 text-center">
          Thank you for signing up and verifying your email!
          <span role="img" aria-label="checkmark">
            &nbsp;✅
          </span>
        </p>

        <p className="text-bodySmall sm:text-bodyMedium md:text-bodyLarge mb-4 sm:mb-6 md:mb-8 text-center">
          To complete the verification of your newsletter subscription, please
          click the button below to confirm your email.
        </p>

        <p className="text-bodySmall sm:text-bodyMedium md:text-bodyLarge mb-4 sm:mb-6 md:mb-8 text-center">
          This will ensure you receive our exclusive updates, special offers,
          and curated wine experiences. We look forward to welcoming you on this
          exciting journey with us!
          <span role="img" aria-label="wine glass">
            &nbsp;🍷
          </span>
        </p>

        <Button
          text={
            isLoading ? "Verifying..." : "Verify your newsletter subscription"
          }
          variant="redVerify"
          icon="/icons/checkmark-circle.svg"
          testId="verify-button"
          onClick={handleVerification}
          disabled={
            isLoading ||
            verificationStatus.isVerifying ||
            (data && data.success)
          }
          ariaLabel="Verify subscription"
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
};

export default VerifyEmail;
