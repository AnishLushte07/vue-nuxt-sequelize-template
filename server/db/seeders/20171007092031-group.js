module.exports = {
  up(db) {
    return db.bulkInsert('Group', [{
      name: 'Vendor',
    }, {
      name: 'Customer',
    }, {
      name: 'Admin',
    }], {})
  },

  down(db) {
    return db.bulkDelete('Group', null, {})
  },
}

