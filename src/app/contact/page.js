import MapSection from "@/components/Map/MapSection";
import ContactUs from "@/components/ContactUs/ContactUs";
import React from "react";

const Contact = () => {
  return (
    <div className="w-full mt-16" data-testid="contact-container">
      <ContactUs />
      <MapSection data-testid="map-section" />
    </div>
  );
};

export default Contact;
