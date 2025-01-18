require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sequelize = require("./lib/sequelize");
const user = require("./models/user");
const app = express();

sequelize
  .sync()
  .then(() => {
    console.log("Database connected");
  })
  .catch((e) => {
    console.error("unable to connect to database");
  });
// const users = [
//   {
//     id: 1,
//     username: "bhc",
//     name: "bhanu",
//     repoCount: 105,
//     location: "delhi",
//   },
//   {
//     id: 2,
//     username: "bhc",
//     name: "bhanu",
//     repoCount: 105,
//     location: "delhi",
//   },
// ];
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  try {
    res.send("welcome to 2.3");
  } catch (e) {
    res.status(500).json(e);
  }
});
app.get("/user", async (req, res) => {
  try {
    const users = await user.findAll();
    res.status(200).json({ users });
  } catch (e) {
    res.status(500).json(e);
  }
});
app.get("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await user.findByPk(parseInt(id)); 

    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).send("User not found");
    }
  } catch (e) {
    console.error(e); 
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("server started"));
