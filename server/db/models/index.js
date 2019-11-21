const User = require('./user')
const Project = require('./project')
const ProjectBacker = require('./projectbacker')
const SecondaryPayment = require('./secondarypayment')

Project.belongsTo(User, {as: 'debtor'})

ProjectBacker.belongsTo(User, {as: 'backer'})
ProjectBacker.belongsTo(Project, {as: 'primaryProject'})

SecondaryPayment.belongsTo(Project, {as: 'secondaryPayment'})
SecondaryPayment.belongsTo(ProjectBacker, {as: 'projectBacker'})

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Project,
  ProjectBacker,
  SecondaryPayment
}
