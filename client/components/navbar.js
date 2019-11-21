import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn, current_user}) => (
  <div>
    <nav>
      {isLoggedIn ? (
        <div className="ui fixed inverted menu">
          {/* The navbar will show these links after you log in */}
          <NavLink to="/home" className="olive item">
            {current_user ? current_user : 'no user'}
          </NavLink>
          {/*<NavLNavink to="/FastLink">FastLink</NavLink> */}
          <NavLink to="/projects" className="item">
            Help a Student
          </NavLink>
          <NavLink to="/about" className="item">
            How It Works
          </NavLink>
          <NavLink to="#" onClick={handleClick} className="blue item">
            Logout
          </NavLink>
        </div>
      ) : (
        <div className="ui fixed inverted menu">
          {/* The navbar will show these links before you log in */}
          <NavLink to="/login" className="item">
            Login
          </NavLink>
          <NavLink to="/signup" className="item">
            Sign Up
          </NavLink>
        </div>
      )}
    </nav>
    <hr />
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    current_user: state.user.email
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
