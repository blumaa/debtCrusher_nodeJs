const router = require('express').Router()
const {Project} = require('../db/models')
module.exports = router

/* Create */

router.post('/', async (req, res, next) => {
  try {
    const newProject = await Project.findOrCreate({
      where: {
        name: req.body.project.name,
        goal: req.body.project.goal,
        school: req.body.project.school,
        debtorId: req.body.project.debtorId
      }
    })
    res.json(newProject)
  } catch (err) {
    next(err)
  }
})

/* Index */

router.get('/', async (req, res, next) => {
  try {
    const projects = await Project.findAll()
    res.json(projects)
  } catch (err) {
    next(err)
  }
})

/* Show */

router.get('/:id', async (req, res, next) => {
  try {
    const project = await Project.findOne({
      where: {
        // like saying: SELECT * from pugs WHERE age = 7;
        id: req.params.id
      }
    })
    res.json(project)
  } catch (err) {
    next(err)
  }
})
