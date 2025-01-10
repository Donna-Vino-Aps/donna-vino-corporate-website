import React from "react";
import { render, screen } from "@testing-library/react";
import MemberCard from "../../components/Card/MemberCard";

describe("MemberCard Component", () => {
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

  test("should renders the MemberCard component correctly", () => {
    render(<MemberCard />);

    const teamImage = screen.getByAltText("img");
    expect(teamImage).toBeInTheDocument();
  });

  test("should renders MemberCard with correct names and titles", () => {
    teamMembers.forEach((member) => {
      render(<MemberCard name={member.name} title={member.title} />);

      const teamNameElement = screen.getByText(member.name);
      expect(teamNameElement).toBeInTheDocument();

      const teamNameTitleElement = screen.getByText(member.title);
      expect(teamNameTitleElement).toBeInTheDocument();
    });
  });
});
