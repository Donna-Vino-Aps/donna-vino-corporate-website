"use client";
import React from "react";
import PropTypes from "prop-types";
import MemberCard from "@/components/Card/MemberCard";

const TeamSection = ({ title, members }) => {
  return (
    <section>
      <h3 className="text-displaySmall font-roboto text-tertiary1-normal text-center mt-2 md:mt-5">
        {title}
      </h3>
      <div
        className="flex flex-wrap gap-4 justify-center py-6"
        data-testid="team-cards-container"
        aria-labelledby="our-team-title"
      >
        {members.map((teamMember) => (
          <MemberCard
            key={teamMember.name}
            img={teamMember.img}
            name={teamMember.name}
            description={teamMember.description}
            variant={teamMember.variant}
            title={teamMember.title}
            links={teamMember.links}
          />
        ))}
      </div>
    </section>
  );
};

TeamSection.propTypes = {
  title: PropTypes.string.isRequired,
  members: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      variant: PropTypes.string,
      links: PropTypes.arrayOf(
        PropTypes.shape({
          icon: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired,
        }),
      ),
    }),
  ),
};

export default TeamSection;
