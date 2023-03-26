const sequelize = require('../config/connection');

const seedUser = require('./userSeedData');
const seedBlogPost = require('./blogSeedData');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedBlogPost();

  process.exit(0);
};

seedDatabase();
