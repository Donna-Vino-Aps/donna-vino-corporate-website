"use client";
import React from "react";
import Button from "../Button/Button";

const MapSection = () => {
  const locationUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5241.493541829231!2d12.58358672190343!3d55.67324322733157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4652533e8d361235%3A0xc1ba3e3332796500!2sWildersgade%2023%2C%201408%20K%C3%B8benhavn!5e0!3m2!1sen!2sdk!4v1736181373995!5m2!1sen!2sdk";

  const infoItems = [
    {
      icon: "/icons/location.svg",
      title: "Our Location",
      description: "Wildersgade 23, 1408 København K",
    },
    {
      icon: "/icons/phone-map.svg",
      title: "Phone Number",
      description: "+45 12 34 56 78",
    },
    {
      icon: "/icons/email.svg",
      title: "Email Address",
      description: "info@donnvino.dk",
    },
  ];

  return (
    <div className="flex md:m-6 m-2 flex-col lg:flex-row bg-tertiary1-hover max-w-full md:rounded-[32px] rounded-[32px] ">
      <div className="flex-1 md:rounded-[32px] rounded-none w-full">
        <iframe
          src={locationUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="md:rounded-l-[32px] rounded-t-[32px] min-h-[400px]"
          title="Map"
          aria-label="Interactive map showing our location"
        ></iframe>
      </div>

      <div className="flex-1 bg-tertiary1-hover md:rounded-[32px] md:my-6 my-2 rounded-b-[32px] w-full">
        <h2 className="md:text-displayMedium text-displaySmall font-medium my-4 ml-8">
          Where can you find us?
        </h2>
        <div className="space-y-8 mt-6 mb-4 md:mx-8 m-6">
          {infoItems.map((item, index) => (
            <div className="flex items-start" key={index}>
              <div className="p-2 md:w-16 md:h-16 w-9 h-9 bg-secondary-active rounded-[5px] flex justify-center items-center">
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
            text={"Check on Maps"}
            icon="/icons/map.svg"
            onClick={() => {}}
            variant="secondary-darker"
            ariaLabel="Check our location on Google Maps"
            testId="submit-button"
          />
        </div>
      </div>
    </div>
  );
};
export default MapSection;
