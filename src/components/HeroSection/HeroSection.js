import React from "react";
import Button from "../Button/Button";
// import ComingSoonModal from "../Modal/ComingSoonModal";
import { useLanguage } from "@/app/context/LanguageContext";
import PropTypes from "prop-types";

const HeroSection = ({ hasCredits = false }) => {
  const { translations } = useLanguage();
  // const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      className="mt-6 relative flex justify-between flex-col w-full md:h-[44rem] md:flex-row bg-primary-light"
      role="banner"
      aria-label="Hero Section"
      aria-labelledby="title"
      data-testid="hero-section"
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

      <div
        className="relative flex flex-col p-4 md:p-8 pt-8 sm:pt-4 text-left justify-center md:w-1/2 gap-8"
        data-testid="hero-text-container"
      >
        <div className="absolute top-[0.7rem] right-[0.5rem] sm:right-auto sm:left-[2rem] sm:top-[2rem] flex justify-start z-0">
          <div className="w-[4.5rem] h-[6.75rem] sm:w-[10.35rem] sm:h-[6.93rem]">
            <img
              src="/design-elements/Dotted Shape.svg"
              alt=""
              className="absolute top-0 left:0 sm:top-auto sm:top-0 sm:right-0 w-[3rem] h-[3rem] sm:w-[4.6rem] sm:h-[4.6rem]"
              data-testid="dotted-shape-1"
            />
            <img
              src="/design-elements/Dotted Shape.svg"
              alt=""
              className="absolute bottom-0 right-0 sm:bottom-0 sm:left-0 w-[3rem] h-[3rem] sm:w-[4.6rem] sm:h-[4.6rem]"
              data-testid="dotted-shape-2"
            />
          </div>
        </div>
        <h1
          className="text-displayMedium sm:bg-primary-light md:text-displayLarge text-tertiary1-darker font-barlow z-10 w-[20.5rem] md:w-full xl:w-[35rem]"
          id="title"
          data-testid="title"
        >
          {translations["hero.heading"]}
        </h1>
        <p
          className="text-bodyLarge text-tertiary1-darker z-10"
          data-testid="description"
        >
          {translations["hero.paragraph"]}
        </p>
        <div className="flex flex-col w-full">
          <div className="flex flex-col w-full gap-4 sm:flex-row z-10 sm:bg-primary-light">
            <Button
              text={translations["hero.button-left"]}
              icon="/icons/cart.svg"
              variant="red"
              ariaLabel="Visit our shop"
              testId="get-started-button"
              linkUrl="https://shop.donnavino.dk/"
            />
            <Button
              text={translations["hero.button-right"]}
              icon="/icons/speech-bubble-19.svg"
              variant="redLine"
              ariaLabel="Contact us"
              testId="secondary-button"
              linkUrl="/contact"
            />
          </div>
          <div className="absolute bottom-[8.75rem] right-[1rem] flex justify-end sm:right-[3rem] sm:bottom-[2rem]">
            <div className="w-[7.5rem] h-[4.5rem] sm:w-[13.75rem] sm:h-[8.68rem] mb-[1rem] sm:mb-[0rem] z-0">
              <img
                src="/design-elements/Dotted Shape.svg"
                alt=""
                className="absolute top-0 right-0 w-[3rem] h-[3rem] sm:w-[5.8rem] sm:h-[5.8rem]"
                data-testid="dotted-shape-3"
              />
              <img
                src="/design-elements/Dotted Shape.svg"
                alt=""
                className="absolute bottom-0 left-0 w-[3rem] h-[3rem] sm:w-[5.8rem] sm:h-[5.8rem]"
                data-testid="dotted-shape-4"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative justify-center h-[22rem] md:h-[44rem] md:w-1/2 w-full">
        {hasCredits ? (
          <video
            className="inset-0 h-[22rem] rounded-t-[6.8rem] md:h-[44rem] md:rounded-tl-[6.8rem] rounded-b-[0.5rem] md:rounded-b-none md:rounded-tr-none object-cover w-full"
            autoPlay
            loop
            muted
            playsInline
            webkit-playsinline="true"
            role="region"
            aria-label="Background video for Hero Section"
            aria-hidden="true"
            data-testid="hero-video"
          >
            <source
              src="https://res.cloudinary.com/db3h63tns/video/upload/v1741092242/web-coorporate-hero-section_xi6jod.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            src="/images/card-unsplash-wine-tasting.avif"
            alt="Wine tasting card with glasses and people"
            className="inset-0 h-[22rem] rounded-t-[6.8rem] md:h-[44rem] md:rounded-tl-[6.8rem] rounded-b-[0.5rem] md:rounded-b-none md:rounded-tr-none object-cover w-full"
            data-testid="fallback-image"
          />
        )}
      </div>
    </section>
  );
};

HeroSection.propTypes = {
  hasCredits: PropTypes.bool,
};

export default HeroSection;
