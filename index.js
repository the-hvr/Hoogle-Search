
const express = require("express");
const axios = require("axios");
const path = require("path");

// Loads secret keys from .env file into process.env
require("dotenv").config();                 

const app = express();
const PORT = process.env.PORT || 8080;

//set EJS as templating engine
app.set("view engine", "ejs");

//set views folder
app.set("views", path.join(__dirname, "views"));    

//serve static files 
app.use(express.static(path.join(__dirname, "public/stylesheet")));
app.use(express.static(path.join(__dirname, "public/images")));
app.use(express.static(path.join(__dirname, "public/javascript")));

//home page route
app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/home", (req, res) => {
    res.render("home.ejs");
});

//search page route
app.get("/search", async (req, res) => {
    const { q } = req.query;
    
    if (!q) {
        return res.render("hoogle.ejs", { images : [], description : `Please enter a search term`, q});
    }

    let images = [];
    let description = "No description available";

    try {
        //fetch pixabay api
        let imageRes = await axios.get("https://pixabay.com/api/", 
            {
            params : {
                key : process.env.PIXABAY_KEY,
                q : q,
                per_page : 32,
                safesearch : true
            }
        }
        ); 
        images = imageRes.data.hits;
    }
    catch (err) {
        console.log("Pixabay Error", err);
    }

    //fetch wikipedia api
    try {
        let discripRes = await axios.get("https://en.wikipedia.org/api/rest_v1/page/summary/" + encodeURIComponent(q)); 
        description = discripRes.data.extract ;
    }
    catch (err) {
        console.log("Wikipedia Error", err);
    }

    res.render("hoogle.ejs", { images, description, q });
});

// app.get(`*`, (req, res) => {
//     res.status(404).render("error.ejs");
// })

app.use((req, res) => {
    res.status(404).render("error.ejs");
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});