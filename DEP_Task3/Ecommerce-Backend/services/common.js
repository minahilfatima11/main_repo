const passport = require('passport');
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, 
  auth: {
    user: 'fminahil@gmail.com', 
    pass: Minime, 
  },
});


exports.isAuth = (req, res, done) => {
  return passport.authenticate('jwt');
};

exports.sanitizeUser = (user) => {
  return { id: user.id, role: user.role };
};

exports.cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies['jwt'];
  }
  return token;
};


exports.sendMail = async function ({to, subject, text, html}){
    let info = await transporter.sendMail({
        from: '"E-commerce" <fminahil16343@gmail.com>', 
        to,
        subject,
        text,
        html
      });
    return info;  
}

exports.invoiceTemplate = function(order){

 return (``
 )


}