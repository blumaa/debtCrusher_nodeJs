/* fetch all projects */

export const FETCH_PROJECTS = 'FETCH_PROJECTS'

export const getProjects = projects => ({type: FETCH_PROJECTS, projects})
export const fetchProjects = () => {
  return async dispatch => {
    try {
      const response = await fetch('/api/projects')
      const json = await response.json()
      dispatch(getProjects(json))
    } catch (error) {
      console.error('Error fetching projects:', error)
    }
  }
}

/* Create a project */

export const POST_PROJECT = 'POST_PROJECT'

export const triggerPostProject = project => ({type: POST_PROJECT, project})

export const postProject = project => {
  console.log('hello', project)
  return async dispatch => {
    try {
      const reqObj = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({project})
      }
      const response = await fetch('/api/projects/', reqObj)
      const json = await response.json()
      dispatch(triggerPostProject(json))
    } catch (error) {
      console.error('Error fetching user:', error)
    }
  }
}

/* Get a single project */

export const GET_PROJECT = 'GET_PROJECT'

export const getProject = project => ({type: GET_PROJECT, project})

export const fetchProject = id => {
  console.log('current user id', id)
  return async dispatch => {
    try {
      const response = await fetch('/api/projects/' + id)
      const json = await response.json()
      console.log(json)
      dispatch(getProject(json))
    } catch (error) {
      console.error('Error fetching user:', error)
    }
  }
}

/* empty project */
export const EMPTY_PROJECT = 'EMPTY_PROJECT'

export const emptyProject = () => ({
  type: EMPTY_PROJECT
})

/* Get current users project */

export const GET_CURRENT_USER_PROJECT = 'GET_CURRENT_USER_PROJECT'

export const fetchCurrentProject = id => ({type: GET_CURRENT_USER_PROJECT, id})

/* empty current users project */
export const EMPTY_CURRENT_USER_PROJECT = 'EMPTY_CURRENT_USER_PROJECT'

export const emptyCurrentProject = () => ({
  type: EMPTY_CURRENT_USER_PROJECT
})

/**
 * INITIAL STATE
 */
const defaultProjects = {
  projects: []
}

/**
 * REDUCER
 */
export default function(state = defaultProjects, action) {
  switch (action.type) {
    case POST_PROJECT:
      return {
        projects: [...state.projects, action.project],
        current_project: action.project
      }
    case FETCH_PROJECTS:
      return {
        projects: action.projects
      }
    case GET_PROJECT:
      return {
        ...state,
        singleProject: action.project
      }
    case EMPTY_PROJECT:
      return {
        ...state,
        singleProject: null
      }
    case GET_CURRENT_USER_PROJECT:
      const project = state.projects.filter(
        project => project.debtorId == action.id
      )
      return {
        ...state,
        currentProject: project[0]
      }
    case EMPTY_CURRENT_USER_PROJECT:
      return {
        ...state,
        currentProject: null
      }
    default:
      return state
  }
}
