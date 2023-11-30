const express = require('express');
const router = express.Router();
const postController = require('../routes/authController');

router.get('/', postController.getHomepage);

router.get('/:postId', postController.viewPost);

router.post('/:postId/comment', postController.addComment);

module.exports = router;
