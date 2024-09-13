const express = require('express');
const cors = require('cors');
const connectDB = require('./database/db.js');
const userRoutes = require('./routes/userRoute.js');
const expenseRoutes = require('./routes/expenseRoute.js');
require('dotenv').config();

const app = express();
app.use(cors(
   "*"
));
app.use(express.json());


// Routes
app.use('/users', userRoutes);
app.use('/expenses', expenseRoutes);

const PORT = process.env.PORT || 5000;

// Database connection
connectDB()

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
