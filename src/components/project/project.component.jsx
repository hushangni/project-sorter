import React from  'react';
import './project.css';

const Project = ({project}) => {
  return(
    <li>
      <img src={project.imgs[0].src} alt={project.imgs[0].alt} />
      <img src={project.imgs[1].src} alt={project.imgs[1].alt} />

      <div className="project-desc">
        <h2>{project.name}</h2>
        <ul className="tech-stack">
          {project.techStack.map(tech => {
            return <li>{tech}</li>
          })}
        </ul>
        <p>{project.desc}</p>
      </div>
    </li>
  )
}

export default Project;