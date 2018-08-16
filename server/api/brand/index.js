const Brand = require('./model')

const id = 'resourceBrand' // since res.user is set by passport

async function index() {
  const data = await Brand.findAll()
  return { data }
}

async function load({ params }) {
  return Brand.findById(params[id])
}

async function show({ resourceBrand }) {
  return { data: resourceBrand }
}

async function create({ body }) {
  const data = await new Brand(body).save()
  return { data }
}

async function update({ body, resourceBrand }) {
  await resourceBrand.update(body)
  return { data: resourceBrand }
}

async function destroy({ resourceBrand }) {
  await resourceBrand.destroy()
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
