const Order = require('./model')

const id = 'resourceOrder'

async function index() {
  const data = await Order.findAll()
  return { data }
}

async function load({ params }) {
  return Order.findById(params[id])
}

async function show({ resourceOrder }) {
  return { data: resourceOrder }
}

async function create({ body }) {
  const data = await new Order(body).save()
  return { data }
}

async function update({ body, resourceOrder }) {
  await resourceOrder.update(body)
  return { data: resourceOrder }
}

async function destroy({ resourceOrder }) {
  await resourceOrder.destroy()
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
