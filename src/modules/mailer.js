const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: "joneivison355@gmail.com",
    pass: "iasmimoo001",
  },
  secure:true
});
// const transport = nodemailer.createTransport({
//   host: "smtp.mailtrap.io",
//   port: 2525,
//   auth: {
//     user: "fd4afb5eaea963",
//     pass: "ff46cfa50fe2bc",
//   },
// });

module.exports = transport
