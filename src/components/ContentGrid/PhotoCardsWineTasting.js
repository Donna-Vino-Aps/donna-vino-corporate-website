"use client";

import React from "react";
import PhotoCard from "../Card/PhotoCard";

const PhotoCardsWineTasting = () => {
  return (
    <div
      className="grid grid-col-1 sm:grid-cols-2 w-full justify-center items-center gap-2 px-2 sm:p-2 place-items-center"
      data-testid="photo-cards-wine-tasting"
    >
      <PhotoCard
        imageUrl="/images/card-unsplash-wine-tasting.jpg"
        title="Wine tasting with dinner"
        description="Experience an unforgettable Italian wine dinner guided by sommelier Katrine Giorgio. Discover rare wines paired with antipasti, pasta, and dessert prepared by our chef Riccardo Lara."
        buttonIcon="/icons/calender-alt-1-gray.svg"
        buttonLabel="Book in the shop"
        buttonVariant="secondary-darker"
        buttonTestId="book-in-shop-button"
        cardVariant="variant1"
      />
      <PhotoCard
        imageUrl="/images/card-unsplash-wine-table.jpg"
        title="Wine tasting with dinner for companies"
        description="Strengthen team bonds with a tailored Italian wine tasting experience. Perfect for team building, networking, or a relaxing evening with dinner."
        buttonIcon="/icons/phone.svg"
        buttonLabel="Contact us"
        buttonVariant="secondary-light"
        buttonTestId="contact-us-button"
        cardVariant="variant2"
      />
    </div>
  );
};

export default PhotoCardsWineTasting;
