import React, {Component} from 'react'
import {Card, Icon, Image} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {fetchProject, emptyProject} from '../store/project'

class ProjectCard extends Component {
  componentDidMount = () => {
    console.log(this.props)
    if (this.props.match) {
      console.log(this.props.match.params.id)
      this.props.getProject(this.props.match.params.id)
    }
  }

  componentWillUnmount() {
    this.props.clearProject()
  }

  render() {
    console.log(!!this.props.project)
    if (this.props.project) {
      const {name, goal, school} = this.props.project
      return (
        <div className="ui spacer">
          <Card raised>
            <Card.Content>{name}</Card.Content>
            <Card.Content>{school}</Card.Content>
            <Card.Content extra>
              <Icon name="money" />Goal: {goal}
            </Card.Content>
          </Card>
        </div>
      )
    } else {
      return <div className="ui spacer">No project found</div>
    }
  }
}

const mapStateToProps = state => {
  console.log('mapstate project', state.project.singleProject)
  return {
    project: state.project.singleProject
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProject: id => dispatch(fetchProject(id)),
    clearProject: () => dispatch(emptyProject())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectCard)
