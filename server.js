require('dotenv').config({path: './config.env'})
const express = require('express')
const bodyParser = require('body-parser')
const connectDB = require('./config/db')
const errorHandler = require('./middleware/error')


//Connect Database
connectDB();

const app = express();

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json());
app.use('/api/auth', require('./routes/auth'));
app.use('/api/private', require('./routes/private'));

//Error handler (last piece of middleware)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

process.on('unhandledRejection', (err, promise) => {
    console.log(`Logged Error: ${err}`);
    server.close(() => process.exit(1));
})