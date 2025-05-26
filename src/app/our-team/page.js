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
      img: "/images/team/kat-giorgio-full-resize.png",
      name: "Katrine Giorgio",
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
      name: "Riccardo Lara",
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
      tabindex: 3,
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
      tabindex: 4,
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
      tabindex: 5,
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
      tabindex: 6,
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
      tabindex: 7,
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
      tabindex: 8,
      img: "/images/team/photo-lilia.jpg",
      name: "Lilia Fois",
      title: translations["team.fullstack"],
      description: translations["team.8.description"],
      links: [
        {
          icon: "/icons/linkedin-alt-light.svg",
          url: "https://www.linkedin.com/in/liliafois/",
        },
        {
          icon: "/icons/github-original.svg",
          url: "https://github.com/LilynTech",
        },
      ],
    },
    {
      tabindex: 9,
      img: "/images/team/photo-natalia.jpg",
      name: "Natalia Lapina",
      title: translations["team.fullstack"],
      description: translations["team.9.description"],
      links: [
        {
          icon: "/icons/linkedin-alt-light.svg",
          url: "https://www.linkedin.com/in/natalia-lapina",
        },
        {
          icon: "/icons/github-original.svg",
          url: "https://github.com/Natata08",
        },
      ],
    },
    {
      tabindex: 10,
      img: "/images/team/photo-yingping.jpg",
      name: "Yingping Ma",
      title: translations["team.fullstack"],
      description: translations["team.10.description"],
      links: [
        {
          icon: "/icons/linkedin-alt-light.svg",
          url: "https://www.linkedin.com/in/yingping-ma/",
        },
        {
          icon: "/icons/github-original.svg",
          url: "https://github.com/YingpMa",
        },
      ],
    },
    {
      tabindex: 11,
      img: "/images/team/photo-anna .jpg",
      name: "Anna",
      title: translations["team.fullstack"],
      description: translations["team.11.description"],
      links: [
        {
          icon: "/icons/linkedin-alt-light.svg",
          url: "http://linkedin.com/in/anna-rozenbachs-bb3a3a8b",
        },
        {
          icon: "/icons/github-original.svg",
          url: "https://github.com/AnnaRozenbachs",
        },
      ],
    },
    {
      tabindex: 12,
      img: "/images/team/photo-halyna.jpg",
      name: "Halyna Bondar",
      title: translations["team.fullstack"],
      description: translations["team.12.description"],
      links: [
        {
          icon: "/icons/linkedin-alt-light.svg",
          url: "https://www.linkedin.com/in/halyna-bondar-a5854b261/",
        },
        {
          icon: "/icons/github-original.svg",
          url: "https://github.com/halynabondar",
        },
      ],
    },
    {
      tabindex: 13,
      img: "/images/team/photo-carlos.jpg",
      name: "Carlos Andrade",
      title: translations["team.fullstack"],
      description: translations["team.13.description"],
      links: [
        {
          icon: "/icons/linkedin-alt-light.svg",
          url: "https://www.linkedin.com/in/carlandrade13/",
        },
        {
          icon: "/icons/github-original.svg",
          url: "https://github.com/carlandrade",
        },
        {
          icon: "/icons/globe.svg",
          url: "https://carlosandrade.dev/",
        },
      ],
    },
    {
      tabindex: 14,
      img: "",
      name: "",
      title: translations[""],
      description: translations[""],
      links: [
        {
          icon: "/icons/linkedin-alt-light.svg",
          url: "",
        },
        {
          icon: "/icons/globe.svg",
          url: "",
        },
      ],
    },
    {
      tabindex: 15,
      img: "",
      name: "",
      title: translations[""],
      description: translations[""],
      links: [
        {
          icon: "/icons/linkedin-alt-light.svg",
          url: "",
        },
        {
          icon: "/icons/globe.svg",
          url: "",
        },
      ],
    },
    {
      tabindex: 16,
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
      tabindex: 17,
      img: "/images/team/photo-brenda.jpg",
      name: "Brenda Novella Ragazzini",
      title: translations["team.ux/ui-project-manager"],
      description: translations["team.20.description"],
      links: [
        {
          icon: "/icons/linkedin-alt-light.svg",
          url: "https://www.linkedin.com/in/brenda-novella-ragazzini-788b342a4",
        },
        {
          icon: "/icons/globe.svg",
          url: "https://www.brendauxdesign.com",
        },
      ],
    },
    {
      tabindex: 18,
      img: "/images/team/photo-chiara.jpg",
      name: "Chiara Esposito",
      title: translations["team.ux/ui-project-manager"],
      description: translations["team.21.description"],
      links: [
        {
          icon: "/icons/linkedin-alt-light.svg",
          url: "https://www.linkedin.com/in/chiara-esposito-jpen/",
        },
        {
          icon: "/icons/globe.svg",
          url: "https://chiaraespositoportfolio.framer.website/",
        },
      ],
    },
    {
      tabindex: 19,
      img: "/images/team/photo-lazar.jpg",
      name: "Lazar Gheorghe Alexandru",
      title: translations["team.ux/ui"],
      description: translations["team.22.description"],
      links: [
        {
          icon: "/icons/linkedin-alt-light.svg",
          url: "https://www.linkedin.com/in/gheorghe-alexandru-lazar/",
        },
        {
          icon: "/icons/globe.svg",
          url: "https://lazaralexandru.my.canva.site/",
        },
      ],
    },
    {
      tabindex: 20,
      img: "/images/team/photo-alessandra.jpg",
      name: "Alessandra Annoni",
      title: translations["team.ux/ui"],
      description: translations["team.23.description"],
      links: [
        {
          icon: "/icons/linkedin-alt-light.svg",
          url: "https://www.linkedin.com/in/alessandra-annoni-1a3aa2204/",
        },
      ],
    },

    {
      tabindex: 21,
      img: "/images/team/photo-florencia.jpg",
      name: "Maria Florencia Martinez",
      title: translations["team.ux/ui"],
      description: translations["team.24.description"],
      links: [
        {
          icon: "/icons/linkedin-alt-light.svg",
          url: "https://www.linkedin.com/in/maria-florencia-martinez-uxuidesigner/",
        },
      ],
    },
    {
      tabindex: 22,
      img: "/images/team/photo-serena.jpg",
      name: "Serena Tizzano",
      title: translations["team.ux/ui"],
      description: translations["team.25.description"],
      links: [
        {
          icon: "/icons/linkedin-alt-light.svg",
          url: "https://www.linkedin.com/in/seretizz",
        },
        {
          icon: "/icons/globe.svg",
          url: "https://serenatizzano0.wixstudio.com/seretizz",
        },
      ],
    },
    {
      tabindex: 23,
      img: "/images/team/photo-daniela.jpg",
      name: "Daniela Ronchetti",
      title: translations["team.ux/ui"],
      description: translations["team.26.description"],
      links: [
        {
          icon: "/icons/linkedin-alt-light.svg",
          url: "https://www.linkedin.com/in/daniela-ronchetti-2869a4244/",
        },
        {
          icon: "/icons/instagram-original.svg",
          url: "https://www.instagram.com/dani.ronchetti/?next=%2F",
        },
      ],
    },
    {
      tabindex: 24,
      img: "/images/team/photo-federica.jpg",
      name: "Federica Catastini",
      title: translations["team.ux/ui"],
      description: translations["team.27.description"],
      links: [
        {
          icon: "/icons/linkedin-alt-light.svg",
          url: "https://www.linkedin.com/in/federica-catastini/",
        },
        {
          icon: "/icons/globe.svg",
          url: "https://www.behance.net/federicacatastini",
        },
      ],
    },
    {
      tabindex: 25,
      img: "",
      name: "",
      title: translations[""],
      description: translations[""],
      links: [
        {
          icon: "/icons/linkedin-alt-light.svg",
          url: "",
        },
        {
          icon: "/icons/instagram-original.svg",
          url: "",
        },
      ],
    },
    {
      tabindex: 26,
      img: "",
      name: "",
      title: translations[""],
      description: translations[""],
      links: [
        {
          icon: "/icons/linkedin-alt-light.svg",
          url: "",
        },
        {
          icon: "/icons/globe.svg",
          url: "",
        },
      ],
    },
    {
      tabindex: 27,
      img: "",
      name: "",
      title: translations[""],
      description: translations[""],
      links: [
        {
          icon: "/icons/linkedin-alt-light.svg",
          url: "",
        },
        {
          icon: "/icons/globe.svg",
          url: "",
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
                variant="core"
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
            {teamMembers.slice(2, 14).map((teamMember) => (
              <MemberCard
                key={teamMember.tabindex}
                img={teamMember.img}
                name={teamMember.name}
                variant="tech"
                description={teamMember.description}
                title={teamMember.title}
                links={teamMember.links}
              />
            ))}
          </section>
        </div>
        <div>
          <h3 className="text-displaySmall font-roboto text-tertiary1-normal text-center mt-2 md:mt-5">
            {translations["team.designers"]}
          </h3>
          <section
            className="flex flex-wrap gap-4 justify-center py-6"
            data-testid="team-cards-container"
            aria-labelledby="our-team-title"
          >
            {teamMembers.slice(17, 25).map((teamMember) => (
              <MemberCard
                key={teamMember.tabindex}
                img={teamMember.img}
                name={teamMember.name}
                variant="tech"
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
