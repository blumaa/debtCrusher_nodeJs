import React, {Component} from 'react'
import {connect} from 'react-redux'
import {postProject} from '../store/project'
import {Form, Button} from 'semantic-ui-react'

class CreateProjectForm extends Component {
  state = {
    name: '',
    goal: 0,
    school: '',
    debtorId: this.props.user.id
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log(this.state)
    this.props.triggerPostProject(this.state)
    this.setState({
      name: '',
      goal: 0,
      school: ''
    })
    this.props.history.push('/home')
  }

  handleChange = event => {
    const name = event.target.name
    this.setState({
      [name]: event.target.value
    })
    console.log(this.state)
  }

  render() {
    console.log('this b the user', this.props.user)
    return (
      <Form onSubmit={this.handleSubmit} className="ui spacer">
        <Form.Field>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Goal</label>
          <input
            type="text"
            name="goal"
            placeholder="goal"
            value={this.state.goal}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>School</label>
          <input
            type="text"
            name="school"
            placeholder="school"
            value={this.state.school}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    triggerPostProject: project => dispatch(postProject(project))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProjectForm)
