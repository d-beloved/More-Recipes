 // The code segment below Imports all dependencies
 import dotenv from 'dotenv';
 import jwt from 'jsonwebtoken';
 import _ from 'lodash';
 import validator from 'validator';
 import db from '../models';
 
 dotenv.config();
 
 const Users = db.Users;
 const secret = process.env.SECRET_TOKEN;
 
 const userController = {
   /**
    * Sign up a new user
    * @param {*req} req 
    * @param {*res} res
    * @returns {*obj} obj 
    */
   create(req, res) {
     const body = req.body;
    //  const validator = new Validator(body, Users.createRules());
    console.log("body => ",req.body);
     if (validator.isEmail(body.email) && validator.isLowercase(body.password) && body.username) {
       // compares the pasword and if they don't match, it returns an error message
       if (body.confirmPassword !== body.password) {
         return res.status(401).json({ message: 'Password does not match' });
       }
       // Checks if the inputed email and username exists in the database
       Users.findOne({
         where: {
             email: body.email
            }
         })
         .then((users) => {
           if (users) {
             return res.status(404).send({ message: 'Someone beat you to it, the credential exists!' });
           }
           //Once all parameters check out, it gives a successful message and assigns a token to the user
           Users.create(body)
             .then((savedUser) => {
               const data = _.pick(savedUser, ['id', 'username']);
               const myToken = jwt.sign(data, secret, { expiresIn: 86400 });// the token expires after 24 hours
               return res.status(201).send({ message: 'Registration Successful', user: data, token: myToken });
             })
             .catch(error => res.status(500).send(error));
         })
         .catch((error) => {
           return res.status(500).send('An error occured while trying to create a user ', error.message);
         });
     } else {
       return res.status(401).json({ message: validator.errors.all() });
     }
   },
   /**
    * Log in User and validate user login requests
    * @param {*req} req 
    * @param {*res} res 
    */
   login(req, res) {
     const body = req.body;
     const validator = new Validator(body, User.loginRules());
     if (validator.fails()) {
       return res.status(400).json({ message: validator.errors.all() });
     }
     Users.findOne({
       where: {
         username: body.username
       }
     })
       .then((users) => {
         if (!users) {
           return Promise.reject({ code: 404, message: 'User not found, please register' });
         }
         if (!users.comparePassword(user, body.password)) {
           return res.status(400).send({ message: 'Password does not match the one in the record' });
         }
         //once the login details checkout, it assigns the user a token in order to access other functionalities
         const data = _.pick(user, ['id', 'username']);
         const myToken = jwt.sign(data, secret);
         return res.status(201).send({ message: 'You are Logged in successfully', token: myToken, });
       })
       .catch(error => res.status(503).send({ error }));
   }
 };
 
 export default userController;