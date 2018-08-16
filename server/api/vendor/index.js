const User = require('./model')

const id = 'resourceVendor' // since res.user is set by passport

async function index() {
  const data = await User.findAll()
  return { data }
}

async function load({ params }) {
  return User.findById(params[id])
}

async function show({ resourceVendor }) {
  return { data: resourceVendor }
}

async function create({ body }) {
  const data = await new User(body).save()
  return { data }
}

async function update({ body, resourceVendor }) {
  await resourceVendor.update(body)
  return { data: resourceVendor }
}

async function destroy({ resourceVendor }) {
  await resourceVendor.destroy()
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
