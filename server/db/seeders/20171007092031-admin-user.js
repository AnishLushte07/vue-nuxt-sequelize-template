module.exports = {
  up(db) {
    return db.bulkInsert('User', [{
      firstName: 'Super',
      lastName: 'Admin',
      email: 'dvvrocks@gmail.com',
      phoneNumber: '+919664210745',
      password: '$2a$10$VIDdkh5ojwdPxIW.PJSYhuyg7Gf17ake.aL5ezseOThKsaIqmAlxS', // SuperAdmin
      creatorId: 1,
      updaterId: 1,
    }], {})
  },

  down(db) {
    return db.bulkDelete('User', null, {})
  },
}

