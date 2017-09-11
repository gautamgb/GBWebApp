var nodemailer =   require('nodemailer');
var mailgun =      require('nodemailer-mailgun-transport');

var auth = {
    auth: {
      api_key: process.env.MAILGUN_KEY,
      domain: 'seekgb.com'
    }
  };

var nodemailerMailgun = nodemailer.createTransport(mailgun(auth));

exports.getHome = function (req, res) {
  res.sendFile('public/index.html', {root: './'});
}

exports.postHome = function(req, res) {

  req.checkBody('name', 'Name cannot be blank').notEmpty();
  req.checkBody('email', 'Email is not valid').isEmail();
  req.checkBody('message', 'Message cannot be blank').notEmpty();

  var errors = req.validationErrors();

  if (errors) console.log(errors);

  var sender = req.body.email;
  var name = req.body.name;
  var body = req.body.message;

  var mailOptions = {
    to: 'gautamgb@gmail.com',
    from: sender,
    bcc: 'gautamgb@gmail.com',
    subject: 'Contact Form | GB Personal Website',
    html: name + '<br><br>' + body
  };

  // send mail with defined transport object
  nodemailerMailgun.sendMail(mailOptions, function(error) {
    if (error) {
      console.log(error);
      res.sendStatus(500);
      return
    }
    res.sendStatus(200);
  });
}
