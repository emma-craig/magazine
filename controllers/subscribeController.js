const Subscribe = require("../models/SubscribeModel");

exports.subscribe = (req, res) => {

    // Creating a new user instance and saving it to the database
    const subscribe = new Subscribe(req.body);
    subscribe
      .save()
      .then((subscribe) => {
        res.json({
          name: subscribe.name,
          email: subscribe.email,
        });
      })
      .catch((err) => {
        let errorMessage = 'Something went wrong.';
        if (err.code === 11000) {
          errorMessage = 'Email already exists';
        }
        return res.status(500).json({ error: errorMessage });
      });
  };