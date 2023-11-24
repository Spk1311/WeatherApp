const express = require("express");
const app = express();
const path = require("path");
const port = 8000;
const hbs = require("hbs");

// static path
const staticPath = path.join(__dirname,"./public");
app.use(express.static(staticPath));

// templates engine 
app.set("view engine","hbs");
templatesPath = path.join(__dirname,"./templates/views");
app.set("views",templatesPath);

partialsPath = path.join(__dirname,"./templates/partials");
hbs.registerPartials(partialsPath);


app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/weather", (req, res) => {
  res.render("weather");
});

app.get("*", (req, res) => {
  res.render("404err",{
    errDoct : "Opps ! Page Not Found"
  });
});

app.listen(port, () => {
  console.log(`Port is end ${port}`);
});
