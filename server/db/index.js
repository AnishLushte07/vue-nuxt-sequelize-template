const Sequelize = require('sequelize')

const config = require('./config')

const sequelize = new Sequelize(config)

Object.getPrototypeOf(sequelize).setup = function setup() {
  console.log(this.models);
  [...Object.values(this.models)].forEach((model) => {
    if ('associate' in model) model.associate(this.models)
  })
}

module.exports = sequelize
