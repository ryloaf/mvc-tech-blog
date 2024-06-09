// import Express router, models and authentication middleware
const router = require('express').Router();
const { Post, Comments, User } = require('../models');
const auth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const dbPostData = await Post.findAll({
            include: {model: User},
            order: [['date_created', 'DESC']],
          });

        const homePost = dbPostData.map((post) =>
            post.get({ plain: true })
        );
        //console.log(homePost);
        res.render('homepage', {
            homePost,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

// router.get('/users', async (req, res) => {
    // if (req.session.loggedIn) {
    //     res.redirect('/login');
    //     return;
    // }
    // res.render('users');
//     try {
//         const users = await Users.findAll();
//         res.json(users);
//     } catch (error) {
//         console.error('Error fetching users:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });


// router.get('/dashboard',(req,res)=>{
//     if(!req.session.user) {
//         return res.redirect('/login')
//     }
//     User.findByPk(req.session.user.id, {
//         include: [Blog, Comment]
//     }).then(userData => {
//         const hbsData = userData.get({plain:true})
//         hbsData.loggedIn = req.session.user?true:false
//         res.render("dashboard", hbsData)
//     })
// })


// Login route
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/login');
        return;
    }
    res.render('login');
});

//route to let users make post
router.post('/post', async (req, res) => {
    console.log(req.body.title);
    try {
        const newPost = await Post.create(req.body);
        // return res.json(newPost);
        return;
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });
  
  //goes to post page by id
  router.get('/post/:id', (req, res) => {
    Post.findOne({
      where: {
          id: req.params.id
      },
      attributes: [
          'id',
          'title',
          'content',
          'date_created'
      ],
      include: [{
              model: Comments,
              attributes: ['id', 'content', 'post_id', 'date_created', 'user_id'],
              include: {
                  model: User,
                  attributes: ['name']
              }
          },
          {
              model: User,
              attributes: ['name']
          }
      ]
  })
  .then(dbPostData => {
      if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
      }
      const post = dbPostData.get({ plain: true });
      console.log(post);
      res.render('post', 
        { 
          post,
          loggedIn: req.session.loggedIn 
        });
  
  
  })
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
  });


module.exports = router;