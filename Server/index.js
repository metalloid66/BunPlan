import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import mongoose from "mongoose";
import { Recipe } from "./models/recipe.js";
import bodyParser from "body-parser";
import { dbURI } from "./config.js";
// let dbURI = process.env.dbURI; // for production
// // let dbURI = process.env.dbURI
// //   ? process.env.dbURI
// //   : import("./config.js").then((exports) => {
// //       dbURI = exports.dbURI;
// //     });

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const port = process.env.PORT || 3001; // For server deployment

// Mongoose Database setup
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => console.log("connected to recipe DB"))
  .catch((err) => console.log(err));

// Accepting form data
app.use(bodyParser.json()); //change with something else
app.use(express.static("public"));
app.use(express.static(path.resolve(__dirname, "../Client/build")));
app.use(express.urlencoded({ extended: true }));

/* Route handling */

// Getting all recipes
app.get("/recipes", (req, res) => {
  Recipe.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

// Adding a new recipe
app.post("/add-recipe", (req, res) => {
  const recipe = new Recipe(req.body);
  recipe
    .save()
    .then((result) => {
      res.redirect("/recipes");
    })
    .catch((err) => {
      console.log(err);
    });
});

// Getting A recipe by id
app.get("/recipes/:id", (req, res) => {
  const id = req.params.id;
  Recipe.findById(id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

// Update A Recipe by id
app.put("/recipes/:id", async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );
    res.json(recipe);
    // res.json({ redirect: "/recipes" });
  } catch (err) {
    console.log(err);
    res.status(500).send(`Server error`);
  }
});

// Delete A Recipe
app.delete("/recipes/:id", (req, res) => {
  const id = req.params.id;
  Recipe.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/recipes" });
    })
    .catch((err) => {
      console.log(err);
    });
});

// Redirect all unhandled get requests to /recipes
app.get("*", (req, res) => {
  // res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  res.redirect("/recipes");
});

// Port listening
app.listen(port, () =>
  console.log(`listening to bunplanner backend on port ${port}`)
);

// app.use((req, res) => {
//   res.header({ "Access-Control-Allow-Origin": "*" });
// });
