const bcrypt = require('bcrypt');
const { User } = require('../models');

const authController = {
  signupForm: (req, res) => {
    res.render('signup');
  },

  signup: async (req, res) => {

    res.redirect('/auth/login');
  },

  loginForm: (req, res) => {
    res.render('login');
  },

  login: async (req, res) => {

    res.redirect('/');
  },

  logout: (req, res) => {
    
    req.session.destroy(() => {
      res.redirect('/');
    });
  },
};

module.exports = authController;
