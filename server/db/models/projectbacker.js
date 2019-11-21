const Sequelize = require('sequelize')
const db = require('../db')

const ProjectBacker = db.define('loanbacker', {
  primaryPaymentPercentage: {
    type: Sequelize.INTEGER,
    defaultValue: 85
  },
  amount: {
    type: Sequelize.INTEGER
  },
  isPending: {
    type: Sequelize.BOOLEAN,
    defaultValue: true
  },
  isActive: {
    type: Sequelize.BOOLEAN,
    defaultValue: true
  }
})

// class methods are defined right on the model
ProjectBacker.findBackers = function(projectId) {
  // 'this' refers directly back to the model (the capital "P" Pug)
  return this.findAll({
    // could also be Pug.findAll
    where: {
      primaryProjectId: projectId // find all pugs where age is less than or equal to 1
    }
  })
}

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
module.exports = ProjectBacker
