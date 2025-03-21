import React from "react";
import { useState, useEffect } from "react";
import Button from "../Button/Button";
import useFetch from "@/hooks/api/useFetch";
import { useLanguage } from "@/app/context/LanguageContext";
import { isValidEmail } from "@/utils/validators";
import { logInfo } from "@/utils/logging";

const ContactUs = () => {
  const { translations } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const { performFetch, isLoading, error, data } = useFetch(
    "/contact-us",
    "POST",
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidEmail(formData.email)) {
      alert("The email format is invalid. Please enter a valid email address.");
      return;
    }

    await performFetch(formData);

    logInfo(`formData: ${JSON.stringify(formData)}`);

    if (data?.success) {
      alert("Message sent successfully");
      setFormData({ name: "", email: "", phone: "", message: "" });
    }
  };

  // Error handling
  useEffect(() => {
    if (error) {
      alert("Message could not be sent. Please try again later.");
    }
  }, [error]);

  const infoItems = [
    {
      icon: "/icons/location-red.svg",
      title: translations["contact.subheading1"],
      description: "Christianshavns Voldgade 54, 1424 København",
    },
    {
      icon: "/icons/phone-map-red.svg",
      title: translations["contact.subheading2"],
      description: "(+45) 31 62 06 93",
    },
    {
      icon: "/icons/email-red.svg",
      title: translations["contact.subheading3"],
      description: "info@donnvino.dk",
    },
  ];

  return (
    <section>
      <div className="flex flex-col md:flex-row items-center justify-between lg:px-36 bg-primary-light lg:h-[829px] px-1.5">
        <img
          src="/design-elements/OvalSmall.png"
          className="lg:hidden block absolute right-0"
          alt="Decorative oval shape small"
          data-testid="oval"
          aria-hidden="true"
        />
        <section className="relative lg:w-[576px] w-full left-2 px-2 md:left-0 md:ml-4 lg:ml-0 lg:pr-12 lg:bottom-2">
          <h2 className="text-headlineMedium md:text-headlineSmall lg:text-headlineMedium xl:text-headlineMedium text-primary-normal pt-3.5">
            {translations["contact.upper.subheading"]}
          </h2>
          <h1
            className="text-displayLarge md:text-displayMedium xl:text-displayLarge text-tertiary1-darker font-barlow mt-1 mb-2"
            data-testid="title"
          >
            {translations["contact.upper.heading"]}
          </h1>
          <p
            className="text-bodyLarge md:w-[80%] lg:w-[95%] md:text-bodyMedium lg:text-bodyLarge text-tertiary1-darker z-10"
            data-testid="description"
          >
            {translations["contact.upper.paragraph"]}
          </p>
          <div className="flex flex-col w-full hidden md:block">
            <div className="mt-6">
              {infoItems.map((item, index) => (
                <div className="flex items-start mb-6" key={index}>
                  <div className="p-2 lg:w-16 lg:h-16 w-9 h-9 bg-primary-active rounded-[5px] flex justify-center items-center">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="md:w-8 md:h-8 w-4 h-4"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-6 flex md:relative md:bottom-1 lg:bottom-0 lg:mt-2 flex-col justify-center h-full space-y-2">
                    <h3 className="text-labelXLarge md:text-labelLarge lg:text-labelXLarge font-semibold text-tertiary1-darker">
                      {item.title}
                    </h3>
                    <p className="text-bodyLarge md:text-bodyMedium lg:text-bodyLarge text-tertiary1-darker">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="md:w-[570px] lg:w-[380px] mt-4 md:mt-3 md:mr-2 lg:mt-0">
          <div className="relative pb-3.5">
            <section className="bg-white p-8 rounded-lg shadow-md relative z-10">
              <form
                action="#"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-4 z-50"
                aria-labelledby="contact-us-form"
              >
                <label htmlFor="name" className="sr-only">
                  {translations["contact.label-name"]}
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder={translations["contact.label-name"]}
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-[#DFE4EA] rounded-md p-3 focus:outline-none focus:border-[#22AD5C]"
                />
                <label htmlFor="email" className="sr-only">
                  {translations["contact.label-mail"]}
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder={translations["contact.label-mail"]}
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-[#DFE4EA] rounded-md p-3 focus:outline-none focus:border-[#22AD5C]"
                />
                <label htmlFor="phone" className="sr-only">
                  {translations["contact.label-phone"]}
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder={translations["contact.label-phone"]}
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-[#DFE4EA] rounded-md p-3 focus:outline-none focus:border-[#22AD5C]"
                />
                <label htmlFor="message" className="sr-only">
                  {translations["contact.label-message"]}
                </label>
                <textarea
                  placeholder={translations["contact.label-message"]}
                  name="message"
                  className="w-full border border-[#DFE4EA] rounded-md p-3 focus:outline-none focus:border-[#22AD5C]"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                ></textarea>
                {isLoading ? (
                  <div className="flex justify-center">
                    <div className="spinner border-4 border-t-4 border-gray-300 border-t-[#22AD5C] rounded-full w-10 h-10 animate-spin"></div>
                  </div>
                ) : (
                  <Button
                    type="submit"
                    onClick={handleSubmit}
                    text={translations["contact.button-submit"]}
                    variant="greenSubmit"
                    ariaLabel="Send Message"
                    testId="secondary-normal-send-message-button"
                  />
                )}
              </form>
            </section>
            <img
              src="/design-elements/DottedShapeSmall.svg"
              alt=""
              className="lg:absolute md:hidden block absolute right-0 top-[-26px]"
              data-testid="oval"
            />
            <img
              src="/design-elements/Oval.svg"
              alt=""
              className="absolute z-0 -top-[50px] -right-[50px] hidden lg:block"
              data-testid="oval"
              aria-hidden="true"
            />
            <img
              src="/design-elements/DottedShapeBig.svg"
              alt=""
              className="absolute right-[-3rem] top-[5rem] w-28 h-28 hidden lg:block"
              data-testid="dotted-shape-big"
              aria-hidden="true"
            />
            <img
              src="/design-elements/DottedShapeBig.svg"
              alt=""
              className="absolute left-[-2rem] bottom-[-22px] w-28 h-28 hidden lg:block"
              data-testid="dotted-shape-big"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
