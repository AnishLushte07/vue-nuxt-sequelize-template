const Group = require('./model')

const id = 'resourceGroup' // since res.user is set by passport

async function index() {
  const data = await Group.findAll()
  return { data }
}

async function load({ params }) {
  return Group.findById(params[id])
}

async function show({ resourceGroup }) {
  return { data: resourceGroup }
}

async function create({ body }) {
  const data = await new Group(body).save()
  return { data }
}

async function update({ body, resourceGroup }) {
  await resourceGroup.update(body)
  return { data: resourceGroup }
}

async function destroy({ resourceGroup }) {
  await resourceGroup.destroy()
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
