"use client";
import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import { useLanguage } from "@/app/context/LanguageContext";

const MapSection = () => {
  const { translations } = useLanguage();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const destination = encodeURIComponent(
    "Christianshavns Voldgade 54 - 1424 København",
  );
  const directionsUrl = `https://www.google.com/maps/dir//${destination}`;

  const locationUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5241.322070410948!2d12.592179421903685!3d55.67275652738062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465253212a6354fd%3A0x64f7c10eacb3d4b!2sChristianshavns%20Voldgade%2054%2C%201424%20K%C3%B8benhavn!5e0!3m2!1sen!2sdk!4v1736181373995!5m2!1sen!2sdk";

  const infoItems = [
    {
      icon: "/icons/location.svg",
      title: translations["contact.subheading1"],
      description: "Christianshavns Voldgade 54 - 1424 København",
    },
    {
      icon: "/icons/phone-map.svg",
      title: translations["contact.subheading2"],
      description: "+45 31 62 06 93",
    },
    {
      icon: "/icons/email.svg",
      title: translations["contact.subheading3"],
      description: <a href="mailto:info@donnavino.dk">info@donnavino.dk</a>,
    },
  ];

  return (
    <section
      className="flex lg:m-6 m-2 flex-col md:flex-row bg-tertiary1-hover max-w-full md:rounded-[32px] rounded-[32px]"
      data-testid="map-section"
    >
      <div className="flex-1 md:rounded-[32px] rounded-none w-full">
        {isClient && (
          <iframe
            src={locationUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="md:rounded-l-[32px] rounded-t-[32px] min-h-[400px] "
            title="Interactive map showing our company location in Copenhagen"
            aria-label="Interactive map showing our location"
            role="region"
            aria-live="polite"
          ></iframe>
        )}
      </div>

      <article
        className="flex-1 bg-tertiary1-hover md:rounded-[32px] lg:my-6 my-2 rounded-b-[32px] w-full"
        aria-labelledby="contact-info"
      >
        <h2 className="lg:text-displayMedium text-displaySmall font-medium my-4 ml-8">
          {translations["contact.heading"]}
        </h2>
        <div className="space-y-8 mt-6 mb-4 lg:mx-8 m-6">
          {infoItems.map((item, index) => (
            <div className="flex items-start" key={index}>
              <div
                aria-hidden="true"
                className="p-2 md:w-16 md:h-16 w-9 h-9 bg-secondary-active rounded-[5px] flex justify-center items-center"
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="md:w-8 md:h-8 w-4 h-4"
                />
              </div>
              <div className="ml-6 flex md:mt-1 flex-col justify-center h-full space-y-2">
                <h3 className="text-labelXLarge font-semibold text-tertiary1-darker">
                  {item.title}
                </h3>
                <p className="text-bodyLarge text-tertiary1-darker">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
          <Button
            text={translations["contact.button-check"]}
            icon="/icons/map.svg"
            onClick={() => window.open(directionsUrl, "_blank")}
            variant="gray"
            ariaLabel="Check our location on Google Maps"
            testId="submit-button"
          />
        </div>
      </article>
    </section>
  );
};
export default MapSection;
