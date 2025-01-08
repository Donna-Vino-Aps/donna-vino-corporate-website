import React from "react";

const OurValues = () => {
  return (
    <section className="our-values">
      <div className="container grid grid-cols-3 gap-4">
        {/* Column 1: Two images */}
        <div className="col-span-1">
          <img
            src="/images/our-values/photo-1.png"
            alt="Description of image 1"
            className="mb-4"
          />
          <img
            src="/images/our-values/photo-2.png"
            alt="Description of image 2"
          />
        </div>

        {/* Column 2: One image */}
        <div className="col-span-1">
          <img
            src="/images/our-values/photo-3.png"
            alt="Description of image 3"
          />
        </div>

        {/* Column 3: Title and text */}
        <div className="col-span-1">
          <p className="text-sm text-red-500">Our Values</p>
          <h2 className="text-2xl font-bold text-black">Donna Vino Values</h2>
          <p>
            Welcome to Donna Vino
            <br />
            Your destination for authentic Italian flavours.
          </p>
          <p>
            Donna Vino is the result of former Michelin sommelier Katrine
            Giorgio's passion for unique Italian wine. The vision is to provide
            guests with unique Italian flavours and the opportunity to discover
            wines from passionate winemakers who prioritise sustainable
            production. Unique flavours and sustainability go hand in hand for
            several reasons.
          </p>
        </div>
      </div>

      <h1 className="mt-10">Our Values Page</h1>
    </section>
  );
};

export default OurValues;
