const OrderDetail = require('./model')

const id = 'resourceOrderDetail' // since res.user is set by passport

async function index() {
  const data = await OrderDetail.findAll()
  return { data }
}

async function load({ params }) {
  return OrderDetail.findById(params[id])
}

async function show({ resourceOrderDetail }) {
  return { data: resourceOrderDetail }
}

async function create({ body }) {
  const data = await new OrderDetail(body).save()
  return { data }
}

async function update({ body, resourceOrderDetail }) {
  await resourceOrderDetail.update(body)
  return { data: resourceOrderDetail }
}

async function destroy({ resourceOrderDetail }) {
  await resourceOrderDetail.destroy()
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
