const db = require("./db");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);

  // This sync method is similar to migrations and db update
  // See docs for more info : https://sequelize.org/docs/v6/core-concepts/model-basics/
  db.sequelize.sync();
});

app.get("/", (req, res) => {
  res.json({ message: "This seems to be working" });
});

// url takes 2 params : name and surname eg: http://localhost:5000/newUser/ryan/zeelie
app.get("/newUser/:name/:surname", async (req, res) => {
  try {
    let { name, surname } = req.params;
    const User = db.Users;
    let result = await User.create({
      firstName: name,
      lastName: surname,
    });

    res.send(result);
  } catch (err) {
    res.send({ error: error });
  }
});

//Find All : http://localhost:5000/getUsers
app.get("/getUsers", async (req, res) => {
  try {
    const User = db.Users;

    let result = await User.findAll({ where: { firstName: "Sam" } });

    res.send(result);

  } catch (err) {

    console.log(err);
  }
});

// Get users by name : url takes 1 param : name and surname eg: http://localhost:5000/getUserByName/ryan
app.get("/getUserByName/:name", async (req, res) => {
  try {
    let { name } = req.params;

    const User = db.Users;

    let result = await User.findAll({ where: { firstName: name } });
    
    res.send(result);

  } catch (err) {
    console.log(err);
  }
});
