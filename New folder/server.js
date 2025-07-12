const express = require("express");
const path = require("path");
const fs = require("fs");
const apiRoutes = require('./api/apiRoutes');
const errorHandler = require('./middlewares/ErrorHandler');
const loggerMiddleware = require('./middlewares/Logger');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');


const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "images"))); // Serve images

// Serve pages
app.get("/", (req, res) => res.status(200).sendFile(path.join(__dirname, "views", "index.html")));
app.get("/signup", (req, res) => res.status(200).sendFile(path.join(__dirname, "views", "signup.html")));
app.get("/login", (req, res) => res.status(200).sendFile(path.join(__dirname, "views", "login.html")));
app.get("/aboutus", (req, res) => res.status(200).sendFile(path.join(__dirname, "views", "aboutus.html")));
app.get("/bookappointment", (req, res) => res.status(200).sendFile(path.join(__dirname, "views", "bookappointment.html")));
app.get("/dashborddoctor", (req, res) => res.status(200).sendFile(path.join(__dirname, "views", "dashborddoctor.html")));
app.get("/dashbordpatient", (req, res) => res.status(200).sendFile(path.join(__dirname, "views", "dashbordpatient.html")));


app.use('/api', apiRoutes); // API Routes

app.use(errorHandler); // Error Handler Middleware
app.use(loggerMiddleware); // Logger Middleware
app.use(helmet()); // Helmet Middleware
app.use(cors()); // Cors Middleware
app.use(morgan('tiny')); // Morgan Middleware

// Start Server
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`)); 
