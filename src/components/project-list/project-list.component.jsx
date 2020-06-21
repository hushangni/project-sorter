import React from 'react';
import Project from '../project/project.component';

import './project-list.css';

const ProjectList = (props) => {
  return (
    <ul>
      {
        props.filteredProjects.map( project =>
          <Project project={project} />
        )
      }
    </ul>
  )

}

export default ProjectList;