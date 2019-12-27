import React from "react";

import UserProjects from "./UserProjects";
import UserEducation from "./UserEducation";
import UserExperience from "./UserExperience";

// Test Ideas
// renders certain section, depending on props
// renders 'nothing to show' when noExtras is true
// if no extras is true, that means that ALL sections should have a length of 0

function UserExtras(props) {
  const {
    noExtras,
    topSkills,
    additionalSkills,
    projects,
    education,
    experience,
    interestedLocations
  } = props;

  return (
    <section>
      {noExtras ? <p>Nothing to Show...</p> : null}

      {Array.isArray(topSkills) && topSkills.length > 0 ? (
        <section className="top-skills">
          {topSkills.map(skill => (
            <p key={skill}>{skill}</p>
          ))}
        </section>
      ) : null}

      {Array.isArray(additionalSkills) && additionalSkills.length > 0 ? (
        <section className="additional-skills">
          {additionalSkills.map(skill => (
            <p key={skill}>{skill}</p>
          ))}
        </section>
      ) : null}

      {Array.isArray(projects) && projects.length > 0 ? (
        <UserProjects projects={projects} />
      ) : null}

      {Array.isArray(education) && education.length > 0 ? (
        <UserEducation education={education} />
      ) : null}

      {Array.isArray(experience) && experience.length > 0 ? (
        <UserExperience experience={experience} />
      ) : null}

      {Array.isArray(interestedLocations) && interestedLocations.length > 0 ? (
        <section className="interested-locations">
          {interestedLocations.map(location => (
            <p key={location}>{location}</p>
          ))}
        </section>
      ) : null}
    </section>
  );
}

export default UserExtras;
