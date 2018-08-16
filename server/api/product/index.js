const User = require('./model')

const id = 'resourceProduct' // since res.user is set by passport

async function index() {
  const data = await User.findAll()
  return { data }
}

async function load({ params }) {
  return User.findById(params[id])
}

async function show({ resourceProduct }) {
  return { data: resourceProduct }
}

async function create({ body }) {
  const data = await new User(body).save()
  return { data }
}

async function update({ body, resourceProduct }) {
  await resourceProduct.update(body)
  return { data: resourceProduct }
}

async function destroy({ resourceProduct }) {
  await resourceProduct.destroy()
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
