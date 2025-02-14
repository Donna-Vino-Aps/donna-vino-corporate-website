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
      img: "/images/team/dv-katrine-resized.jpg",
      name: "Katrine Giogio",
      title: translations["team.kat.title"],
      description: translations["team.kat.description"],
      links: [
        {
          icon: "/icons/linkedin-alt-light.svg",
          url: "https://www.linkedin.com/in/katrine-giorgio-bj%C3%B8rnhart-9468b127a/",
        },
        {
          icon: "/icons/instagram-original.svg",
          url: "https://www.instagram.com/donna_vino_winetastings/",
        },
      ],
    },
    {
      tabindex: 1,
      img: "/images/team/photo-ricardo.png",
      name: "Ricardo Lara",
      title: translations["team.ric.title"],
      description: translations["team.ric.description"],
      links: [
        {
          icon: "/icons/linkedin-alt-light.svg",
          url: "https://www.linkedin.com/in/riccardo-lara-47268b284/",
        },
        {
          icon: "/icons/instagram-original.svg",
          url: "https://www.instagram.com/riccardo_lara_/",
        },
      ],
    },
    {
      tabindex: 2,
      img: "/images/team/photo-davide.png",
      name: "Davide Zampieri",
      title: translations["team.dav.title"],
      description: translations["team.dav.description"],
      links: [
        {
          icon: "/icons/linkedin-alt-light.svg",
          url: "https://www.linkedin.com/in/davidezampieri12/",
        },
        {
          icon: "/icons/globe.svg",
          url: "https://zampieridavide.com/",
        },
      ],
    },
    {
      tabindex: 3,
      img: "/images/team/dv-lenin-resize.jpg",
      name: "Lenin Del Rio",
      title: translations["team.lead-fullstack"],
      description: translations["team.1.description"],
      links: [
        {
          icon: "/icons/linkedin-alt-light.svg",
          url: "https://www.linkedin.com/in/len-del-rio-31a2882ab/",
        },
        {
          icon: "/icons/github-original.svg",
          url: "https://github.com/Lenindelrionicaragua",
        },
      ],
    },
    {
      tabindex: 4,
      img: "/images/team/dv-ana-resize.jpg",
      name: "Ana Gabriela Guzman",
      title: translations["team.fullstack"],
      description: translations["team.2.description"],
      links: [
        {
          icon: "/icons/linkedin-alt-light.svg",
          url: "https://www.linkedin.com/in/ana-gabriela-guzman-625ba3148/",
        },
        {
          icon: "/icons/github-original.svg",
          url: "https://github.com/anaCode26",
        },
      ],
    },
    {
      tabindex: 5,
      img: "/images/team/dv-yuejiao-resized2.jpg",
      name: "Yuejiao Shi",
      title: translations["team.fullstack"],
      description: translations["team.3.description"],
      links: [
        {
          icon: "/icons/linkedin-alt-light.svg",
          url: "https://www.linkedin.com/in/yuejiao-shi/",
        },
        {
          icon: "/icons/github-original.svg",
          url: "https://github.com/YuejiaoShi",
        },
      ],
    },
    {
      tabindex: 6,
      img: "/images/team/dv-simon-resize.jpg",
      name: "Simon Berglund",
      title: translations["team.fullstack"],
      description: translations["team.4.description"],
      links: [
        {
          icon: "/icons/linkedin-alt-light.svg",
          url: "https://www.linkedin.com/in/simon-berglund-75b15393/",
        },
        {
          icon: "/icons/github-original.svg",
          url: "https://github.com/SimonFromSweden",
        },
      ],
    },
    {
      tabindex: 7,
      img: "/images/team/dv-alejandro-resize.jpg",
      name: "Alejandro Gispert",
      title: translations["team.fullstack"],
      description: translations["team.5.description"],
      links: [
        {
          icon: "/icons/linkedin-alt-light.svg",
          url: "https://www.linkedin.com/in/alejandro-gispert/",
        },
        {
          icon: "/icons/github-original.svg",
          url: "https://github.com/AlejandroGispert",
        },
      ],
    },
    {
      tabindex: 8,
      img: "/images/team/dv-fransisco-resize.jpg",
      name: "Fransisco Estrada",
      title: translations["team.fullstack"],
      description: translations["team.6.description"],
      links: [
        {
          icon: "/icons/linkedin-alt-light.svg",
          url: "https://www.linkedin.com/in/francisco-estrada-webdeveloper/",
        },
        {
          icon: "/icons/github-original.svg",
          url: "https://github.com/FranciscoEstrada02",
        },
      ],
    },
    {
      tabindex: 9,
      img: "/images/team/dv-kritika-resized2.jpg",
      name: "Kritika Shenoy",
      title: translations["team.social-media"],
      description: translations["team.7.description"],
      links: [
        {
          icon: "/icons/linkedin-alt-light.svg",
          url: "https://www.linkedin.com/in/kritika-shenoy-204994127/",
        },
        {
          icon: "/icons/instagram-original.svg",
          url: "https://www.instagram.com/shenoysketches?igsh=MWd0MTBodDY2cWx5Yw==",
        },
      ],
    },
  ];

  return (
    <div className="flex justify-center px-2" data-testid="our-team-container">
      <div className="w-full max-w-[84rem]">
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
