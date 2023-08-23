const jwt = require("jsonwebtoken");
const { Users } = require("../models/user");
const bcrypt = require("bcrypt");
require("dotenv").config();
const SECRET = process.env.SECRET;

let createToken = (username, id) => {
  return jwt.sign({ username, id }, "50", { expiresIn: "2 days" });
};

module.exports = {
  login: async (req, res) => {
    try {
      let { username, password } = req.body;
      let foundUsers = await Users.findOne({ where: { username: username } });
      if (foundUsers) {
        const isAuthenticated = bcrypt.compareSync(
          password,
          foundUsers.hashedPass
        );
        if (isAuthenticated) {
          let token = createToken(
            foundUsers.dataValues.username,
            foundUsers.dataValues.id
          );
          const exp = Date.now() + 1000 * 60 * 60 * 48;
          console.log(foundUsers)
          const data = {
            username: foundUsers.dataValues.username,
            userId: foundUsers.dataValues.id,
            token: token,
            exp: exp,
          };
          res.status(200).send(data);
        } else {
          res.status(400).send("Password is incorrect");
        }
      } else {
        res.status(400).send("User does not exist.");
      }
    } catch (error) {
      console.error(error);
      res.status(400).send(error);
    }
  },
  
  register: async (req, res) => {
    try {
      let { username, password } = req.body;
      let foundUsers = await Users.findOne({ where: { username: username } });
      console.log(foundUsers)
      if (foundUsers) {
        res.status(400).send("Username is Taken!");
      } else {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        let newUsers = await User.create({
          username: username,
          hashedPass: hash,
        });
        console.log(newUsers)
        let token = createToken(
          newUsers.dataValues.username,
          newUsers.dataValues.id
        );
        const exp = Date.now() + 1000 * 60 * 60 * 48;

        const data = {
          username: newUsers.dataValues.username,
          userId: newUsers.dataValues.id,
          token: token,
          exp: exp,
        };
        res.status(200).send(data);
      }
    } catch (error) {
      console.error(error);
      res.status(400).send(error);
    }
  },
};
