const Category = require('./model')

const id = 'resourceCategory' // since res.user is set by passport

async function index() {
  const data = await Category.findAll()
  return { data }
}

async function load({ params }) {
  return Category.findById(params[id])
}

async function show({ resourceCategory }) {
  return { data: resourceCategory }
}

async function create({ body }) {
  const data = await new Category(body).save()
  return { data }
}

async function update({ body, resourceCategory }) {
  await resourceCategory.update(body)
  return { data: resourceCategory }
}

async function destroy({ resourceCategory }) {
  await resourceCategory.destroy()
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
