const { User } = require('../models');

const userData = [
  {
    name: 'Brahm',
    email: 'brahm@brahmvanhouzen.studio',
    password: 'password123',
  },
  {
    name: 'Odin',
    email: 'odinsfakeemail@email.com',
    password: 'password123',
  },
  {
    name: 'Grayson',
    email: 'G-unit@gmail.com',
    password: 'password123',
  },
];

const seedUser = () =>
  User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedUser;
