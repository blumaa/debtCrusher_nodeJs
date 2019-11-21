const repl = require('repl')
const {
  User,
  Project,
  ProjectBacker,
  SecondaryPayment
} = require('./server/db/models')
const db = require('./server/db')

// uncomment this to wipe DB
// db.sync({ force: true });
db.sync()
const replServer = repl.start({
  prompt: '> '
})

replServer.context.db = db
replServer.context.Project = Project
replServer.context.User = User
replServer.context.ProjectBacker = ProjectBacker
replServer.context.SecondaryPayment = SecondaryPayment
