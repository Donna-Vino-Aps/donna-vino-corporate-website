import React from "react";
const { default: InfoCard } = require("../Card/InfoCard");
import "./ContentGridTextCards.css";

const ContentGridTextCards = () => {
  return (
    <div className="gridContainer">
      <div className="grid grid-cols-2 gap-4 p-4">
        <InfoCard
          title="Wine tasting with dinner"
          descriptionPart1="Treat your senses to an unforgettable experience by attending a unique Italian wine dinner at the idyllic ‘Slottet’, located in a picturesque courtyard in Christianshavn, just a stone's throw from the metro."
          descriptionPart2="An evening at Slottet is an immersion in Italian wine tradition, where you will be taken on a unique journey through the stories from the heart of the best vineyards, told by your personal sommelier, Katrine Giorgio."
          descriptionPart3="The wines are only available thanks to Katrine's personal connections and each bottle carries the story of passion, craftsmanship and tradition. The wine experience is accompanied by delicate snacks, antipasti, pasta, sourdough bread, extra virgin olive oil and dessert, prepared by your private Italian chef, Riccardo Lara."
          buttonIcon="/icons/calender-alt-1-gray.svg"
          buttonLabel="Book in the shop"
          backgroundColor="#E0E0E0" // When passing as a prop, color has to be in hex
          fontColor="#101010" // When passing as a prop, color has to be in hex
          buttonBgColor="#2f2e2e" // When passing as a prop, color has to be in hex
          buttonFontColor="#ffffff" // When passing as a prop, color has to be in hex
        />
        <InfoCard
          title="Wine tastings with dinner for companies"
          descriptionPart1="Corporate wine tasting is a unique opportunity to strengthen team relationships while exploring the world of Italian wines."
          descriptionPart2="With over 15 years of experience in fine dining restaurants, wine selection and wine levels are customised to your preferences, ensuring a high standard and quality experience."
          descriptionPart3="This event is ideal for team building, networking or just a relaxing evening where you can immerse yourself in the fascinating world of wine while enjoying an accompanying dinner."
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

export default ContentGridTextCards;
