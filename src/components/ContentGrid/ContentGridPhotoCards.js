import React from "react";
import PhotoCard from "../Card/PhotoCard";
import "./ContentGridPhotoCards.css";

const ContentGridPhotoCards = () => {
  return (
    <div className="gridContainer">
      <div className="gridDiv grid grid-cols-2 gap-4 p-4">
        <PhotoCard
          imageUrl="/images/card-unsplash-wine-tasting.jpg"
          title="Wine tasting with dinner"
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
          title="Wine tasting with dinner for companies"
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
