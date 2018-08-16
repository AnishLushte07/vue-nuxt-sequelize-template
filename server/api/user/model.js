const bcrypt = require('bcrypt')
const Sequelize = require('sequelize')
const sequelize = require('../../db')

const { DataTypes, Model } = Sequelize

class User extends Model {
  /**
   * setup model CRUD operation association
   *   createdAt foreignKey creatorId as creator
   *   updatedAt foreignKey updaterId as updater
   *   paranoid  foreignKey deleterId as deleter
   * @param  {Object} model Sequelize source model
   * @return {void}       setup source model associations with User model
   */

  static associate() {
    this.belongsTo(this, {
      foreignKey: 'creatorId',
    })

    this.belongsTo(this, {
      foreignKey: 'deleterId',
    })

    this.belongsTo(this, {
      foreignKey: 'updaterId',
    })
  }

  static async getHash(password) {
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    return hash
  }

  static async hashPassword(user) {
    if (user.changed('password')) {
      user.set('password', await this.getHash(user.password))
    }
  }

  get name() {
    return `${this.firstName} ${this.lastName}`
  }
}

module.exports = User.init({
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  phoneNumber: DataTypes.STRING(20),
  password: DataTypes.CHAR(60).BINARY,
}, {
  sequelize,
  timestamps: true,
  paranoid: true,
  defaultScope: {
    attributes: { exclude: ['password'] },
  },
})

User.beforeSave(User.hashPassword)
