require('dotenv').config();
const express = require('express');
const cors = require('cors');
const registerRoute = require('./Routes/routes');
const mongoose = require('mongoose');
const announcementsRouter = require("./Routes/announcements");
const session = require('express-session');
const MongoStore = require('connect-mongo');


const app = express();

const origins = ['http://localhost:5173', 'http://localhost:5173/profile',"http://localhost:4000/api/login", "http://localhost:5173/register", "http://localhost:4000/api/session-data"]
const url = "mongodb+srv://syneradmin:NoSaCh789@cluster0.qlfgxfu.mongodb.net/test";

app.use(express.json());
app.use(cors({
    origin: origins,
    credentials: true,
}));
app.use(session({
    secret: process.env.SECRET_KEY, 
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({mongoUrl: url}),
    cookie: { maxAge: 3600000}
}));

mongoose.connect(url, {useNewUrlParser: true});
const db = mongoose.connection;

db.on('error', (err) => {
    console.log(err)
});

db.once('open', () => {
    console.log('Connected to Database')
});

app.use('/api', registerRoute);
app.use('/announcements', announcementsRouter);


app.get('/api/session-data', (req, res) => {
    if (req.session.user) {
        res.json(req.session.user);
    } else {
        res.status(401).json({message: "Session not found"})
    }
})

app.post('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.log(err);
        }
        res.redirect('/login');
    });
});


const port = process.env.PORT || 4000;

app.listen(port, function() {
    console.log(`Server is up and running on port ${port}`)
});