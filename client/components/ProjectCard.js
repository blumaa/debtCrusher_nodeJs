import React, {Component} from 'react'
import {Card, Icon, Image, Button} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {fetchProject, emptyProject} from '../store/project'
import {Link} from 'react-router-dom'

class ProjectCard extends Component {
  render() {
    console.log(this.props.project)
    const {name, goal, school} = this.props.project
    return (
      <Card raised>
        <Card.Content>{name}</Card.Content>
        <Card.Content>{school}</Card.Content>
        <Card.Content extra>
          <Icon name="money" />Goal: {goal}
        </Card.Content>
        <Card.Content extra align="right">
          <Button as={Link} to={'/projects/' + this.props.project.id}>
            Project Details
          </Button>
        </Card.Content>
      </Card>
    )
  }
}

export default ProjectCard
