"use client";

import React from "react";
import PhotoCard from "../Card/PhotoCard";

const ContentGridPhotoCards = () => {
  return (
    <div className="flex justify-center items-center">
      <div
        data-testid="testGrid"
        className="grid-cols-1 grid gap-4 p-4 md:grid-cols-2 mt-4"
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
          backgroundColor="#E0E0E0" // When passing as a prop, color has to be in hex
          fontColor="#101010" // When passing as a prop, color has to be in hex
          buttonBgColor="#2f2e2e" // When passing as a prop, color has to be in hex
          buttonFontColor="#ffffff" // When passing as a prop, color has to be in hex
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
          backgroundColor="#183F27" // When passing as a prop, color has to be in hex
          fontColor="#E8ECE9" // When passing as a prop, color has to be in hex
          buttonBgColor="#E8ECE9" // When passing as a prop, color has to be in hex
          buttonFontColor="#08160E" // When passing as a prop, color has to be in hex
        />
      </div>
    </div>
  );
};

export default ContentGridPhotoCards;
