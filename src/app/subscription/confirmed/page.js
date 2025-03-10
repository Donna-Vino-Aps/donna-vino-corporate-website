"use client";

import React from "react";
import Button from "@/components/Button/Button";

const SubscriptionConfirmed = () => {
  return (
    <section
      className="lg:my-4 flex flex-col justify-center items-center bg-primary-light sm:bg-dots-lg sm:bg-dots-size-lg bg-dots-sm bg-dots-size-sm"
      aria-labelledby="subscription-confirmed-title"
    >
      <div className="flex flex-col justify-center items-center sm:py-24 py-4 mx-2 max-w-[45rem]">
        <h1
          id="subscription-confirmed-title"
          className="text-displaySmall sm:text-displayMedium text-center mb-4 sm:mb-6 md:mb-8"
        >
          Thank you for verifying your email
        </h1>

        <p className="text-bodySmall sm:text-bodyMedium md:text-bodyLarge mb-4 sm:mb-6 md:mb-8 text-center">
          Thank you for confirming your email address. You are now successfully
          subscribed to our newsletter!
        </p>

        <p className="text-bodySmall sm:text-bodyMedium md:text-bodyLarge mb-4 sm:mb-6 md:mb-8 text-center">
          You'll receive our latest updates, exclusive content, and special
          offers as we release them. If at any time you wish to unsubscribe, you
          can do so by clicking the unsubscribe link in any of our emails.
        </p>

        <p className="text-bodySmall sm:text-bodyMedium md:text-bodyLarge mb-4 sm:mb-6 md:mb-8 text-center">
          We're excited to have you on this journey with us!
          <span role="img" aria-label="wine glass">
            &nbsp;🍷
          </span>
        </p>

        <Button
          text="Go to the Home Page"
          variant="greenGoHome"
          icon="/icons/home.svg"
          testId="home-button"
          linkUrl="/"
          linkWidth="w-full sm:w-[14.5rem]"
          ariaLabel="Navigate to home page"
        />
      </div>
    </section>
  );
};

export default SubscriptionConfirmed;
