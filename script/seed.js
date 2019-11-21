'use strict'

const db = require('../server/db')
const {User, Project, ProjectBacker} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({
      email: 'hector@gmail.com',
      password: '12345',
      displayName: 'Hector the Cat',
      birthDate: '2017-06-06',
      bio: 'I was born in MN and I had a sister named Imelda.',
      accountBalance: 100
    }),
    User.create({
      email: 'aaron@gmail.com',
      password: '12345',
      displayName: 'Aaron I have so much debt',
      birthDate: '1982-01-12',
      bio: 'Why the hell did I do a masters I have so much debt.',
      accountBalance: 10
    })
  ])

  /* const projects = await Promise.all([
    Project.create({name: 'Fund my student loans pls!', goal: '123', school: 'UIC'}),
  ]) */

  /* const projectbackers = await Promise.all([
    ProjectBacker.create({primaryProjectId: 1, backerId: 2, amount: 10}),
    ProjectBacker.create({primaryProjectId: 1, backerId: 1, amount: 30}),
  ]) */

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
  /* console.log(`seeded ${projects.length} projects`)
  console.log(`seeded successfully`)
  console.log(`seeded ${projectbackers.length} projectbackers`)
  console.log(`seeded successfully`) */
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
