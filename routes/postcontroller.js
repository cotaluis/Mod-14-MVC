const { Post, Comment } = require('../models');

const postController = {
  getHomepage: async (req, res) => {
    
    const posts = await Post.findAll();

    res.render('home', { posts });
  },

  viewPost: async (req, res) => {
    const postId = req.params.postId;


    res.render('post', { post, comments });
  },

  addComment: async (req, res) => {
    const postId = req.params.postId;
    const { commentText } = req.body;

    res.redirect(`/posts/${postId}`);
  },
};

module.exports = postController;
