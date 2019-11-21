import React, {Component} from 'react'

import {Navbar} from './components'
import Routes from './routes'
import {connect} from 'react-redux'
import {fetchProjects} from './store/project'

class App extends Component {
  componentDidMount = () => {
    this.props.getProjects()
  }

  render() {
    return (
      <div>
        <Navbar />
        <Routes />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProjects: () => dispatch(fetchProjects())
  }
}

export default connect(null, mapDispatchToProps)(App)
