const Sequelize = require('sequelize')
const sequelize = require('../../db')

const { DataTypes, Model } = Sequelize

class Order extends Model {
  static associate(model) {
    this.belongsTo(model.UserMap, {
      foreignKey: 'creatorId',
    })

    this.belongsTo(model.UserMap, {
      foreignKey: 'deleterId',
    })

    this.belongsTo(model.UserMap, {
      foreignKey: 'updaterId',
    })

    model.UserMap.hasMany(this)

    this.belongsTo(model.Order, {
      foreignKey: 'orderId',
    })

    model.Order.hasMany(this)

    this.belongsTo(model.ProductVariant, {
      foreignKey: 'productVariantId',
    })

    model.ProductVariant.hasMany(this)
  }
}

module.exports = Order.init({
  quantity: DataTypes.INTEGER,
}, {
  sequelize,
  paranoid: true,
  timestamps: true,
})

