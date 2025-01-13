import React from "react";
import Button from "../Button/Button";

const infoItems = [
  {
    icon: "/icons/location-red.svg",
    title: "Our Location",
    description: "Christianshavn, Copenhagen",
  },
  {
    icon: "/icons/phone-map-red.svg",
    title: "Phone Number",
    description: "(+45) 12 34 56 78",
  },
  {
    icon: "/icons/email-red.svg",
    title: "Email Address",
    description: "info@donnvino.dk",
  },
];

const ContactUs = () => {
  return (
    <section>
      <div className="flex flex-col lg:flex-row items-center justify-between lg:px-36 bg-primary-light lg:h-[829px] px-1.5">
        <img
          src="/design-elements/OvalSmall.png"
          className="lg:hidden block absolute right-0"
          data-testid="oval"
        />
        <div className="lg:w-[526px] w-full lg:pr-12">
          <h2 className="text-headlineMedium text-primary-normal pt-3.5">
            Contact Us
          </h2>
          <h1
            className="text-displayLarge text-tertiary1-darker font-barlow mt-0"
            id="title"
            data-testid="title"
          >
            Get in touch with us
          </h1>
          <p
            className="text-bodyLarge text-tertiary1-darker z-10"
            data-testid="description"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius
            tempor incididunt ut labore et dolore magna aliqua. Ut enim adiqua
            minim veniam quis nostrud exercitation ullamco
          </p>
          <div className="flex flex-col w-full">
            <div className="mt-6">
              {infoItems.map((item, index) => (
                <div className="flex items-start mb-6" key={index}>
                  <div className="p-2 md:w-16 md:h-16 w-9 h-9 bg-primary-active rounded-[5px] flex justify-center items-center">
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
            </div>
          </div>
        </div>

        <div className="lg:w-[470px] mt-12 md:mt-0">
          <div className="relative pb-3.5">
            <div className="bg-white p-8 rounded-lg shadow-md relative z-10">
              <form action="#" method="POST" className="space-y-4 z-50">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full border border-[#DFE4EA] rounded-md p-3 focus:outline-none focus:border-[#22AD5C]"
                />
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full border border-[#DFE4EA] rounded-md p-3 focus:outline-none focus:border-[#22AD5C]"
                />
                <input
                  type="tel"
                  placeholder="Your phone"
                  className="w-full border border-[#DFE4EA] rounded-md p-3 focus:outline-none focus:border-[#22AD5C]"
                />
                <textarea
                  placeholder="Your message"
                  className="w-full border border-[#DFE4EA] rounded-md p-3 focus:outline-none focus:border-[#22AD5C]"
                  rows="4"
                ></textarea>
                <Button
                  text="Send Message"
                  variant="secondary-normal"
                  ariaLabel="Send Message"
                  testId="secondary-normal-send-message-button"
                />
              </form>
            </div>
            <img
              src="/design-elements/DottedShapeSmall.svg"
              className="lg:hidden block absolute right-0 top-[-26px]"
              data-testid="oval"
            />
            <img
              src="/design-elements/Oval.svg"
              className="absolute z-0 -top-[50px] -right-[50px] hidden lg:block"
              data-testid="oval"
            />
            <img
              src="/design-elements/DottedShapeBig.svg"
              className="absolute right-[-3rem] top-[5rem] w-28 h-28 hidden lg:block"
              data-testid="dotted-shape-big"
            />
            <img
              src="/design-elements/DottedShapeBig.svg"
              className="absolute left-[-2rem] bottom-[-22px] w-28 h-28 hidden lg:block"
              data-testid="dotted-shape-big"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
