const User = require('./model')

const id = 'resourceUserMap' // since res.user is set by passport

async function index() {
  const data = await User.findAll()
  return { data }
}

async function load({ params }) {
  return User.findById(params[id])
}

async function show({ resourceUserMap }) {
  return { data: resourceUserMap }
}

async function create({ body }) {
  const data = await new User(body).save()
  return { data }
}

async function update({ body, resourceUserMap }) {
  await resourceUserMap.update(body)
  return { data: resourceUserMap }
}

async function destroy({ resourceUserMap }) {
  await resourceUserMap.destroy()
  return { ok: true }
}

module.exports = {
  id,
  index,
  load,
  show,
  create,
  update,
  destroy,
}
