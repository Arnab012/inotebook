const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
// const { json } = require('body-parser');
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
// const { createCollection } = require("../models/User");
const fetchuser = require("../middleware/fetchuser");
const jwt_secrete = "Arnabisa$bod";


// Create a User Login using :Post"/api/auth/createuser"  no login required

// route1 for the user createCollection

router.post(
  "/createuser",
  [
    body("name", "enter a VAlid name").isLength({ min: 3 }),
    body("email", "enter a vlaid email").isEmail(),
    body("password", "enter a valid password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    // if there is any error retuen bad request and show them in the display as a json
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });

    
    }

    // check weather the user with the same email already exit or not

    try {
      let user = await User.findOne({ email: req.body.email });

      if (user) {
        return res.status(400).json({ error: "sorry a user already exit" });
      }

      //create a new error
      const salt = await bcrypt.genSalt(10);

      const secpass = await bcrypt.hash(req.body.password, salt);
      user = await User.create({
        name: req.body.name,
        password: secpass,
        email: req.body.email,
      });

      const data = {
        user: {
          id: user.id,
        },
      };

      const authtoken = jwt.sign(data, jwt_secrete);

      res.json({ authtoken: authtoken });

      //catch error
    } catch (error) {
      console.error(error.message);
      res.status(500).send(" internal server  error occured");
    }
  }
);

// Authenticate  a User Login using :Post"/api/auth/login"  no login required

// route 2 for the AuthenticatorAssertionResponse

router.post(
  "/login",
  [
    body("email", "enter a vlaid email").isEmail(),
    body("password", "password can not beblank").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ error: "please try to login with right crediantils " });
      }
      const passwordcompare = await bcrypt.compare(password, user.password);
      if (!passwordcompare) {
        return res
          .status(400)
          .json({ error: "please try to login with right crediantils " });
      }
      const data = {
        user: {
          id: user.id,
        },
      };

      const authtoken = jwt.sign(data, jwt_secrete);
      res.json({ authtoken: authtoken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send(" internal server  error ");
    }
  }
);

// route 3 get looged in user details using   :Post"/api/auth/getuser" login required

router.post("/getuser", fetchuser, async (req, res) => {
  try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send(" internal server  error ");
  }
});
 
module.exports = router;

// here we will learn about jason web token for AuthenticatorAssertionResponse
