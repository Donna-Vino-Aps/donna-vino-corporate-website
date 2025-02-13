"use client";
import React from "react";
import MemberCard from "@/components/Card/MemberCard";
import Button from "@/components/Button/Button";
import { useLanguage } from "@/app/context/LanguageContext";

const OurTeam = () => {
  const { translations } = useLanguage();
  const teamMembers = [
    {
      tabindex: 0,
      img: "/images/team/photo-katrine.png",
      name: "Katrine Giogio",
      title: translations["team.kat.title"],
      description: translations["team.kat.description"],
      links: "/icons/linkedin-alt-light.svg",
    },
    {
      tabindex: 1,
      img: "/images/team/photo-ricardo.png",
      name: "Ricardo Lara",
      title: translations["team.ric.title"],
      description: translations["team.ric.description"],
      links: "/icons/linkedin-alt-light.svg",
    },
    {
      tabindex: 2,
      img: "/images/team/photo-davide.png",
      name: "Davide Zampieri",
      title: translations["team.dav.title"],
      description: translations["team.dav.description"],
      links: "/icons/linkedin-alt-light.svg",
    },
    {
      tabindex: 3,
      img: "/images/team/dv-lenin-resize.jpg",
      name: "Lenin Del Rio",
      title: translations["team.lead-fullstack"],
      description: translations["team.1.description"],
      links: "/icons/linkedin-alt-light.svg",
    },
    {
      tabindex: 4,
      img: "/images/team/dv-ana-resize.jpg",
      name: "Ana Gabriela Guzman",
      title: translations["team.fullstack"],
      description: translations["team.2.description"],
      links: "/icons/github.svg",
    },
    {
      tabindex: 5,
      img: "/images/team/dv-yuejiao-resize.jpg",
      name: "Yuejiao Shi",
      title: translations["team.fullstack"],
      description: translations["team.3.description"],
      links: "/icons/linkedin-alt-light.svg",
    },
    {
      tabindex: 6,
      img: "/images/team/dv-lenin-resize.jpg",
      name: "Simon Berglund",
      title: translations["team.fullstack"],
      description: translations["team.4.description"],
      links: "/icons/linkedin-alt-light.svg",
    },
    {
      tabindex: 7,
      img: "/images/team/dv-alejandro-resize.jpg",
      name: "Alejandro Gispert",
      title: translations["team.fullstack"],
      description: translations["team.5.description"],
      links: "/icons/linkedin-alt-light.svg",
    },
    {
      tabindex: 8,
      img: "/images/team/dv-fransisco-resize.jpg",
      name: "Fransisco Estrada",
      title: translations["team.fullstack"],
      description: translations["team.6.description"],
      links: "/icons/linkedin-alt-light.svg",
    },
    {
      tabindex: 9,
      img: "/images/team/dv-kritika-resize.jpg",
      name: "Kritika Shenoy",
      title: translations["team.social-media"],
      description: translations["team.7.description"],
      links: "/icons/linkedin-alt-light.svg",
    },
  ];

  return (
    <div className="flex justify-center px-2" data-testid="our-team-container">
      <div className="w-full">
        <section className="py-4 sm:mx-8">
          <Button
            text={translations["button.go-back"]}
            icon="/icons/back-arrow.svg"
            variant="redLine"
            ariaLabel="Go back"
            testId="go-back-button"
            onClick={() => {
              history.go(-1);
            }}
          />
        </section>
        <header>
          <p
            className="text-center text-primary-normal mt-6"
            data-testid="our-team-tagline"
          >
            {translations["team.hashtag"]}
          </p>

          <h2
            className="text-displayMedium md:text-displayLarge text-center"
            data-testid="our-team-title"
          >
            {translations["team.heading"]}
          </h2>
        </header>
        <section className="flex flex-col justify-center items-center w-full">
          <p
            className="text-titleMedium text-tertiary1-gray mt-4 text-center mb-4 max-w-[476px]"
            data-testid="our-team-description"
          >
            {translations["team.paragraph"]}
          </p>
        </section>
        <div>
          <h3 className="text-displaySmall font-roboto text-tertiary1-normal text-center mt-2 md:mt-5">
            {translations["team.core-h3"]}
          </h3>
          <section
            className="flex flex-wrap gap-4 justify-center py-6"
            data-testid="team-cards-container"
            aria-labelledby="our-team-title"
          >
            {teamMembers.slice(0, 2).map((teamMember) => (
              <MemberCard
                key={teamMember.tabindex}
                img={teamMember.img}
                name={teamMember.name}
                description={teamMember.description}
                title={teamMember.title}
                links={teamMember.links}
              />
            ))}
          </section>
        </div>
        <div>
          <h3 className="text-displaySmall font-roboto text-tertiary1-normal text-center mt-2 md:mt-5">
            {translations["team.tech-h3"]}
          </h3>
          <section
            className="flex flex-wrap gap-4 justify-center py-6"
            data-testid="team-cards-container"
            aria-labelledby="our-team-title"
          >
            {teamMembers.slice(2, 10).map((teamMember) => (
              <MemberCard
                key={teamMember.tabindex}
                img={teamMember.img}
                name={teamMember.name}
                description={teamMember.description}
                title={teamMember.title}
                links={teamMember.links}
              />
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
