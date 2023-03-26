const router = require('express').Router();
const { User, Blog } = require('../models');

//Add withauth down the line when application is running

router.get('/', async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      limit: 5,
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const posts = blogData.map((post) => post.get({ plain: true }));

    res.render('homepage', {
      posts,
      // To convey login status of user to Auth functions
      // To convey user information to homepage for customization
      //logged_in: req.session.logged_in,
      // username: req.session.username,
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/view-all-posts', async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      limit: 5,
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const posts = blogData.map((post) => post.get({ plain: true }));

    res.render('view-all-posts', {
      posts,
      // To convey login status of user to Auth functions
      // To convey user information to homepage for customization
      //logged_in: req.session.logged_in,
      // username: req.session.username,
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
