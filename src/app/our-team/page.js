"use client";
import React from "react";
import Button from "@/components/Button/Button";
import { useLanguage } from "@/app/context/LanguageContext";
import { getTeamMembers } from "@/data/teamMembers";
import TeamSection from "@/components/Team/TeamSection";

const OurTeam = () => {
  const { translations } = useLanguage();
  const teamMembers = getTeamMembers(translations);

  const coreTeamMembers = teamMembers.filter(
    (member) => member.variant === "core",
  );
  const techTeamMembers = teamMembers.filter(
    (member) => member.variant === "tech",
  );
  const designTeamMembers = teamMembers.filter(
    (member) => member.variant === "design",
  );

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
        <TeamSection
          title={translations["team.core-h3"]}
          members={coreTeamMembers}
        />
        <TeamSection
          title={translations["team.tech-h3"]}
          members={techTeamMembers}
        />
        <TeamSection
          title={translations["team.designers-h3"]}
          members={designTeamMembers}
        />
      </div>
    </div>
  );
};

export default OurTeam;
