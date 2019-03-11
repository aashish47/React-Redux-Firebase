import React from "react";

const ProjectDetails = props => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
            at! Unde quasi quos aspernatur quidem, dolore temporibus? Magnam,
            magni laboriosam earum dignissimos quibusdam quia molestias tempora
            obcaecati ipsum assumenda repellendus.
          </p>
        </div>
        <div className="card-action grey lighten-3 grey-text">
          <div>Posted by the net ninja</div>
          <div>2nd September, 2am </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
