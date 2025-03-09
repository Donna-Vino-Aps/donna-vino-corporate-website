"use client";

import Button from "@/components/Button/Button";

const VerifyEmail = () => {
  return (
    <section className="lg:my-4 flex flex-col justify-center items-center font-barlow bg-primary-light sm:bg-dots-lg sm:bg-dots-size-lg bg-dots-sm bg-dots-size-sm">
      <div className="flex flex-col justify-center items-center sm:py-24 py-4 mx-2 max-w-[44rem]">
        <h1 className="text-displaySmall sm:text-displayMedium font-barlow font-normal text-center leading-tight mb-4 sm:mb-6 md:mb-8">
          Finalize your subscription
        </h1>

        <p className="text-bodySmall sm:text-bodyMedium md:text-bodyLarge mb-4 sm:mb-6 md:mb-8 text-center">
          Thank you for signing up and verifying your email! ✅
        </p>

        <p className="text-bodySmall sm:text-bodyMedium md:text-bodyLarge mb-4 sm:mb-6 md:mb-8 text-center">
          To complete the verification of your newsletter subscription, please
          click the button below to confirm your email.
        </p>

        <p className="text-bodySmall sm:text-bodyMedium md:text-bodyLarge mb-4 sm:mb-6 md:mb-8 text-center">
          This will ensure you receive our exclusive updates, special offers,
          and curated wine experiences. We look forward to welcoming you on this
          exciting journey with us! 🍷
        </p>

        <Button
          text="Verify your newsletter subscription"
          variant="redVerify"
          icon="/icons/checkmark-circle.svg"
          testId="verify-button"
        />
      </div>
    </section>
  );
};

export default VerifyEmail;
