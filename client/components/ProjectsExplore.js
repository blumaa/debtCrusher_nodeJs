import React from 'react'
import {Card} from 'semantic-ui-react'
import ProjectCard from './ProjectCard'
import {connect} from 'react-redux'

const ProjectsExplore = props => {
  console.log(props.projects)
  const allProjects = props.projects.map(project => {
    return <ProjectCard project={project} key={project.id} />
  })
  return (
    <div className="ui spacer">
      Help a student!
      <Card.Group itemsPerRow={3}>{allProjects}</Card.Group>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    projects: state.project.projects
  }
}

export default connect(mapStateToProps)(ProjectsExplore)
