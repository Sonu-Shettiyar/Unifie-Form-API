const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const formDataRouter = require('./routes/form.route');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log('MongoDB database connection established successfully');
    app.listen(PORT, () => {
        console.log(`Server is running on port: ${PORT}`);
    });
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

app.use('/', formDataRouter);
