const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const path = require('path');
const { sequelize } = require('./models');
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

app.engine('handlebars', exphbs({ defaultLayout: 'layout' }));
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
  secret: process.env.SESSION_SECRET || 'secret',
  resave: false,
  saveUninitialized: true,
}));

sequelize.sync({ force: false }).then(() => {
  console.log('Database synced');
});

app.use('/auth', authRoutes);
app.use('/posts', postRoutes);

app.get('/', (req, res) => {
    const fetchedPosts =[];

    res.render('home', { posts: fetchedPosts });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
