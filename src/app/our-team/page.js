"use client";
import React from "react";
import MemberCard from "@/components/Card/MemberCard";
import Button from "@/components/Button/Button";
import { useLanguage } from "@/app/context/LanguageContext";

const OurTeam = () => {
  const { translations } = useLanguage();
  const teamMembersCore = [
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
      img: "/images/team/photo-rick.png",
      name: "Lenin Del Rio",
      title: translations["team.and.title"],
      description: translations["team.and.description"],
      links: "/icons/linkedin-alt-light.svg",
    },
    {
      tabindex: 4,
      img: "/images/team/photo-diana.png",
      name: "Ana Gabriela Guzman",
      title: translations["team.dia.title"],
      description: translations["team.dia.description"],
      links: "/icons/github.svg",
    },
    {
      tabindex: 5,
      img: "/images/team/photo-pablo.png",
      name: "Yuejiao Shi",
      title: translations["team.pab.title"],
      description: translations["team.pab.description"],
      links: "/icons/linkedin-alt-light.svg",
    },
    {
      tabindex: 6,
      img: "/images/team/photo-pablo.png",
      name: "Simon Berglund",
      title: translations["team.pab.title"],
      description: translations["team.pab.description"],
      links: "/icons/linkedin-alt-light.svg",
    },
    {
      tabindex: 7,
      img: "/images/team/photo-pablo.png",
      name: "Alejandro Gispert",
      title: translations["team.pab.title"],
      description: translations["team.pab.description"],
      links: "/icons/linkedin-alt-light.svg",
    },
    {
      tabindex: 8,
      img: "/images/team/photo-pablo.png",
      name: "Fransisco Estrada",
      title: translations["team.pab.title"],
      description: translations["team.pab.description"],
      links: "/icons/linkedin-alt-light.svg",
    },
    {
      tabindex: 8,
      img: "/images/team/photo-pablo.png",
      name: "Kritika Shenoy",
      title: translations["team.pab.title"],
      description: translations["team.pab.description"],
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
          <h3 className="text-displaySmall font-roboto text-tertiary1-normal text-center mt-5">
            {translations["team.core-h3"]}
          </h3>
          <section
            className="flex flex-wrap gap-4 justify-center py-8"
            data-testid="team-cards-container"
            aria-labelledby="our-team-title"
          >
            {teamMembersCore.slice(0, 2).map((teamMember) => (
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
          <h3 className="text-displaySmall font-roboto text-tertiary1-normal text-center mt-5">
            {translations["team.tech-h3"]}
          </h3>
          <section
            className="flex flex-wrap gap-4 justify-center py-8"
            data-testid="team-cards-container"
            aria-labelledby="our-team-title"
          >
            {teamMembersCore.slice(2, 6).map((teamMember) => (
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
