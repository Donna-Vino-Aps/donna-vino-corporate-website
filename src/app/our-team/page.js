import React from "react";
import TeamCard from "@/components/Cards/TeamCard";

const OurTeam = () => {
  return (
    <div className="flex justify-center">
      <div className="mt-10">
        <p className="text-center text-primary-normal mt-6">#OneTeamOneDream</p>
        <h2 className="text-displayMedium md:text-displayLarge text-center">
          Our Awesome Team
        </h2>
        <div className="flex flex-col justify-center items-center w-full">
          <p className="text-titleMedium text-tertiary1-gray mt-4 text-center mb-4 max-w-[476px]">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </p>
        </div>
        <div className="flex flex-wrap mx-6 gap-4 justify-center">
          <TeamCard img="/images/team/photo-katrine.png" />
          <TeamCard img="/images/team/photo-davide.png" />
          <TeamCard img="/images/team/photo-ricardo.png" />
          <TeamCard img="/images/team/photo-andrea.png" />
          <TeamCard img="/images/team/photo-pablo.png" />
          <TeamCard img="/images/team/photo-rick.png" />
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
