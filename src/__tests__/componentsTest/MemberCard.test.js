import React from "react";
import { render, screen } from "@testing-library/react";
import MemberCard from "../../components/Card/MemberCard";
import { LanguageProvider } from "@/app/context/LanguageContext";
import enTranslations from "../../translations/en.json";
import dkTranslations from "../../translations/dk.json";

describe("MemberCard Component", () => {
  const teamMembers = [
    {
      tabindex: 0,
      img: "/images/team/photo-katrine.png",
      name: "Katrine Giogio",
      title: "Founder",
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
      title: "Head Chef & Cibi e Vini Owner",
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
      title: "Co-Founder & Project Manager",
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
  ];

  const renderMemberCard = (locale, member) => {
    const translations = locale === "en" ? enTranslations : dkTranslations;

    render(
      <LanguageProvider locale={locale} translations={translations}>
        <MemberCard
          name={member.name}
          title={member.title}
          img={member.img}
          links={member.links}
        />
      </LanguageProvider>,
    );
  };

  test("should render MemberCard component with image", () => {
    const member = teamMembers[0];
    renderMemberCard("en", member);

    const teamImage = screen.getByRole("figure");
    expect(teamImage).toBeInTheDocument();
  });

  test("should render MemberCard with correct names and titles in English", () => {
    teamMembers.forEach((member) => {
      renderMemberCard("en", member);

      const teamNameElement = screen.getByText(member.name);
      expect(teamNameElement).toBeInTheDocument();

      const teamNameTitleElement = screen.getByText(member.title);
      expect(teamNameTitleElement).toBeInTheDocument();
    });
  });

  test("should render MemberCard with correct names and titles in Danish", () => {
    teamMembers.forEach((member) => {
      renderMemberCard("dk", member);

      const teamNameElement = screen.getByText(member.name);
      expect(teamNameElement).toBeInTheDocument();

      const teamNameTitleElement = screen.getByText(member.title);
      expect(teamNameTitleElement).toBeInTheDocument();
    });
  });
});
