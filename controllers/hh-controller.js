const Hh = require('../models/Hh');

const hhController = {};

hhController.index = (req, res) => {
  Hh.findAll()
    .then(hh => {
      //console.log(hh)
      res.render('index', {
        hh: hh,
        // auth: (req.user) ? true : false,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

hhController.show = (req, res) => {
  Hh.findById(req.params.id)
    .then(hh => {
      res.render('hh/hh-show', {
        hh: hh,
        auth: (req.user) ? true : false,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

hhController.create = (req, res) => {
  // console.log(req.body);
  Hh.create({
    name: req.body.name,
    hours: req.body.hours,
    img: req.body.img,
    location: req.body.location,
    specials: req.body.specials

  }).then(hh => {
    res.redirect('/');
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

hhController.edit = (req, res) => {
  Hh.findById(req.params.id)
    .then(hh => {
      res.render('hh/hh-edit', {
        hh: hh,
        auth: (req.user) ? true : false,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

hhController.update = (req, res) => {
  Hh.update({
    name: req.body.name,
    hours: req.body.hours,
    location: req.body.location,
    specials: req.body.specials
  }, req.params.id).then(hh => {
    res.redirect(`/hh/${hh.id}`);
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

hhController.delete = (req, res) => {
  Hh.destroy(req.params.id)
    .then(() => {
      res.redirect('/hh');
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

// hhController.complete = (req, res) => {
//   Hh.complete(req.params.id)
//     .then(hh => {
//       res.json({
//         completed: true,
//       });
//     }).catch(err => {
//       console.log(err);
//       res.status(500).json({
//         err: err,
//         completed: false,
//       });
//     });
// };

module.exports = hhController;
