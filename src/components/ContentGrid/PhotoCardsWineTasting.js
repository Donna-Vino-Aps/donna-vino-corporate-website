"use client";

import React from "react";
import PhotoCard from "../Card/PhotoCard";
import { useLanguage } from "@/app/context/LanguageContext";
// import ComingSoonModal from "../Modal/ComingSoonModal";

const PhotoCardsWineTasting = () => {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const { translations } = useLanguage();
  return (
    <div
      className="grid grid-col-1 xl:grid-cols-2 w-full justify-center items-center gap-4 px-2 lg:p-2 lg:mt-2 place-items-center"
      data-testid="photo-cards-wine-tasting"
    >
      {/* Modal "Coming Soon"
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <ComingSoonModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </div>
      )} */}

      <PhotoCard
        imageUrl="/images/wine_tasting_with_dinner.jpeg"
        title={translations["pcard.big-left.heading"]}
        description={translations["pcard.big-left.paragraph"]}
        buttonIcon="/icons/calender-alt-1-gray.svg"
        buttonLabel={translations["pcard.big-left.button"]}
        buttonVariant="darkGreen"
        buttonTestId="book-in-shop-button"
        cardVariant="variant1"
        linkUrl="https://shop.donnavino.dk/"
      />
      <PhotoCard
        imageUrl="/images/wine_tasting_with_dinner_for_companies.jpeg"
        title={translations["pcard.big-right.heading"]}
        description={translations["pcard.big-right.paragraph"]}
        buttonIcon="/icons/phone.svg"
        buttonLabel={translations["pcard.big-right.button"]}
        buttonVariant="grayGreen"
        buttonTestId="contact-us-button"
        cardVariant="variant2"
        linkUrl="/contact"
      />
    </div>
  );
};

export default PhotoCardsWineTasting;
