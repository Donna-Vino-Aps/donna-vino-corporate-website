"use client";

import React from "react";
import PhotoCard from "../Card/PhotoCard";

const PhotoCardsWineTasting = () => {
  return (
    <div
      className="flex w-full justify-center items-center"
      data-testid="photo-cards-wine-tasting"
    >
      <div
        data-testid="testGrid"
        className="grid-cols-1 grid gap-4 p-4 md:grid-cols-2 mt-2 xl:mt-4 -mb-4 xl:mb-0"
      >
        <PhotoCard
          imageUrl="/images/card-unsplash-wine-tasting.jpg"
          title={
            <span>
              Wine
              <br />
              tasting with dinner
            </span>
          }
          smallScreenTitle={
            <span>
              Wine tasting with
              <br />
              dinner
            </span>
          }
          description="Experience an unforgettable Italian wine dinner guided by sommelier Katrine Giorgio. Discover rare wines paired with antipasti, pasta, and dessert prepared by our chef Riccardo Lara."
          buttonIcon="/icons/calender-alt-1-gray.svg"
          buttonLabel="Book in the shop"
          backgroundColor="#E0E0E0"
          fontColor="#101010"
          buttonBgColor="#2f2e2e"
          buttonFontColor="#ffffff"
        />
        <PhotoCard
          imageUrl="/images/card-unsplash-wine-table.jpg"
          title={
            <span>
              Wine
              <br />
              tasting with dinner for companies
            </span>
          }
          smallScreenTitle={
            <span>
              Wine tasting with
              <br />
              dinner for
              <br />
              companies
            </span>
          }
          description="Strengthen team bonds with a tailored Italian wine tasting experience. Perfect for team building, networking, or a relaxing evening with dinner."
          buttonIcon="/icons/phone.svg"
          buttonLabel="Contact us"
          backgroundColor="#183F27"
          fontColor="#E8ECE9"
          buttonBgColor="#E8ECE9"
          buttonFontColor="#08160E"
        />
      </div>
    </div>
  );
};

export default PhotoCardsWineTasting;
