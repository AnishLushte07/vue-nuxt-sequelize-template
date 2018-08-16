const User = require('./model')

const id = 'resourceProductVariant' // since res.user is set by passport

async function index() {
  const data = await User.findAll()
  return { data }
}

async function load({ params }) {
  return User.findById(params[id])
}

async function show({ resourceProductVariant }) {
  return { data: resourceProductVariant }
}

async function create({ body }) {
  const data = await new User(body).save()
  return { data }
}

async function update({ body, resourceProductVariant }) {
  await resourceProductVariant.update(body)
  return { data: resourceProductVariant }
}

async function destroy({ resourceProductVariant }) {
  await resourceProductVariant.destroy()
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
