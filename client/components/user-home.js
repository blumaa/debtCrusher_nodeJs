import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Divider, Grid, Image, Segment, Button, Header} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import {fetchCurrentProject, emptyCurrentProject} from '../store/project'
import ProjectCard from './ProjectCard'

/**
 * COMPONENT
 */
class UserHome extends Component {
  componentDidMount = () => {
    this.props.getCurrentProject(this.props.user.id)
  }

  componentWillUnmount() {
    this.props.clearProject()
  }

  render() {
    console.log('current project', this.props.currentProject)
    const {
      id,
      email,
      displayName,
      bio,
      birthDate,
      accountBalance
    } = this.props.user
    return (
      <div className="ui spacer">
        <Segment>
          <Grid columns={2} relaxed="very" divided>
            <Grid.Column>
              <Image
                src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
                size="small"
                circular
              />
              <Header as="h3">{displayName}</Header>
              <p>Birth Date: {birthDate}</p>
              <p>
                Email: <a href="mailto:{email}">{email}</a>
              </p>
              <p>Bio: {bio}</p>
              <p>Account: ${accountBalance}</p>
            </Grid.Column>
            <Grid.Column>
              <p>My Projects / Student Loans</p>
              {this.props.currentProject ? (
                <ProjectCard project={this.props.currentProject} />
              ) : (
                <Button as={Link} to="/createProject">
                  Get Help With a Loan
                </Button>
              )}
            </Grid.Column>
          </Grid>
        </Segment>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapStateToProps = state => {
  return {
    user: state.user,
    currentProject: state.project.currentProject
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCurrentProject: id => dispatch(fetchCurrentProject(id)),
    clearProject: () => dispatch(emptyCurrentProject())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
