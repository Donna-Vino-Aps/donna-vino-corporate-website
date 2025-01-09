"use client";
import React from "react";
import TeamCard from "@/components/Card/TeamCard";

const OurTeam = () => {
  const teamMembers = [
    {
      tabindex: 0,
      img: "/images/team/photo-katrine.png",
      name: "Katrine Giogio",
      title: "Founder",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      links: "/icons/linkedin-alt-light.svg",
    },
    {
      tabindex: 1,
      img: "/images/team/photo-davide.png",
      name: "Davide Zampieri",
      title: "Co-Founder & Project Manager",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      links: "/icons/linkedin-alt-light.svg",
    },
    {
      tabindex: 2,
      img: "/images/team/photo-ricardo.png",
      name: "Ricardo Lara",
      title: "Head Chef & Cibi e Vini Owner",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      links: "/icons/linkedin-alt-light.svg",
    },
    {
      tabindex: 3,
      img: "/images/team/photo-rick.png",
      name: "Andrea Braschi",
      title: "Sales & BDR",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      links: "/icons/linkedin-alt-light.svg",
    },
    {
      tabindex: 4,
      img: "/images/team/photo-diana.png",
      name: "Diana Lorens",
      title: "FullStack Developer",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      links: "/icons/github.svg",
    },
    {
      tabindex: 5,
      img: "/images/team/photo-pablo.png",
      name: "Pablo Diaz",
      title: "Product Owner",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      links: "/icons/linkedin-alt-light.svg",
    },
  ];

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
          {teamMembers.map((teamMembers) => (
            <TeamCard
              key={teamMembers.tabindex}
              img={teamMembers.img}
              name={teamMembers.name}
              description={teamMembers.description}
              title={teamMembers.title}
              links={teamMembers.links}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
