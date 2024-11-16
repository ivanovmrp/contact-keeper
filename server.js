const express = require('express');
const connectDB = require('./config/db');

const app = express();

// connect db
connectDB();

app.get('/', (req, res) => res.json({ msg: 'Welcome to Contact Keeper..'}));

const PORT = process.env.PORT || 5000;

// define routes
app.use('/api/users', require('./routes/users'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/auth', require('./routes/auth'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));