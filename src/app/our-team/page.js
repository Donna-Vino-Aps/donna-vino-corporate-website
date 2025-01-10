import React from "react";
import TeamCard from "@/components/Card/TeamCard";

const OurTeam = () => {
  const teamMembers = [
    {
      tabindex: 0,
      img: "/images/team/photo-katrine.png",
      name: "Katrine Giogio",
      title: "Founder",
      links: "/icons/linkedin-alt-light.svg",
    },
    {
      tabindex: 1,
      img: "/images/team/photo-davide.png",
      name: "Davide Zampieri",
      title: "Co-Founder & Project Manager",
      links: "/icons/linkedin-alt-light.svg",
    },
    {
      tabindex: 2,
      img: "/images/team/photo-ricardo.png",
      name: "Ricardo Lara",
      title: "Head Chef & Cibi e Vini Owner",
      links: "/icons/linkedin-alt-light.svg",
    },
    {
      tabindex: 3,
      img: "/images/team/photo-rick.png",
      name: "Andrea Braschi",
      title: "Sales & BDR",
      links: "/icons/linkedin-alt-light.svg",
    },
    {
      tabindex: 4,
      img: "/images/team/photo-diana.png",
      name: "Diana Lorens",
      title: "FullStack Developer",
      links: "/icons/linkedin-alt-light.svg",
    },
  ];

  return (
    <div className="flex justify-center" data-testid="our-team-container">
      <div className="mt-10">
        {/* Add data-testid for the page title */}
        <p
          className="text-center text-primary-normal mt-6"
          data-testid="our-team-tagline"
        >
          #OneTeamOneDream
        </p>

        <h2
          className="text-displayMedium md:text-displayLarge text-center"
          data-testid="our-team-title"
        >
          Our Awesome Team
        </h2>

        <div className="flex flex-col justify-center items-center w-full">
          <p
            className="text-titleMedium text-tertiary1-gray mt-4 text-center mb-4 max-w-[476px]"
            data-testid="our-team-description"
          >
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </p>
        </div>

        {/* Team cards container */}
        <div
          className="flex flex-wrap mx-6 gap-4 justify-center"
          data-testid="team-cards-container"
        >
          {teamMembers.map((teamMember) => (
            <TeamCard
              key={teamMember.tabindex}
              img={teamMember.img}
              name={teamMember.name}
              title={teamMember.title}
              links={teamMember.links}
              data-testid="team-card"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
