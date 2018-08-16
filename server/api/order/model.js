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

    this.belongsTo(model.Vendor, {
      foreignKey: 'vendorId',
    })

    model.Vendor.hasMany(this)

    this.belongsTo(model.Vendor, {
      foreignKey: 'customerCompanyId',
    })

    model.Vendor.hasMany(this)
  }
}

module.exports = Order.init({
  orderNo: DataTypes.INTEGER,
  orderDate: DataTypes.DATEONLY,
  customerName: DataTypes.STRING,
  customerCompanyName: DataTypes.STRING,
  customerRegAdd: DataTypes.STRING,
  vendorName: DataTypes.STRING,
  vendorRegName: DataTypes.STRING,
  VendorRegAdd: DataTypes.STRING,
  orderStatusId: {
    type: DataTypes.ENUM,
    values: ['New', 'Closed'],
  },
}, {
  sequelize,
  paranoid: true,
  timestamps: true,
})

