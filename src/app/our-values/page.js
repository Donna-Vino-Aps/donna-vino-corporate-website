import React from "react";
import OurValues from "../../components/OurValues/OurValues";
import ThematicCardsValues from "@/components/ContentGrid/ThematicCardsValues";

const OurValuesPage = () => {
  return (
    <div className="w-full flex flex-col gap-16">
      <OurValues />
      <ThematicCardsValues />
    </div>
  );
};

export default OurValuesPage;
