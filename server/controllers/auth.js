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
      let { user, pwd } = req.body;
      console.log(user,pwd)
      let foundUsers = await Users.findOne({ where: { username: user } });
      if (foundUsers) {
        console.log('test2')
        const isAuthenticated = bcrypt.compareSync(
          pwd,
          foundUsers.password
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
      let { user, pwd } = req.body;
      let foundUsers = await Users.findOne({ where: { username: user} });
      console.log(foundUsers)
      if (foundUsers) {
        res.status(400).send("Username is Taken!");
      } else {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(pwd, salt);

        let newUsers = await Users.create({
          username: user,
          password: hash,
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
