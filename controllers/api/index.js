const router = require('express').Router();
const userRoutes = require('./userRoutes');
const recipeRoutes = require('./blogPostRoutes');

router.use('/user', userRoutes);
router.use('/posts', blogPostRoutes);

module.exports = router;
