const Hh = require('../models/Hh');

const hhController = {};

hhController.index = (req, res) => {
  Hh.findAll()
    .then(hh => {
      res.render('hh/hh-index', {
        hh: hh,
        auth: (req.user) ? true : false,
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
  Hh.create({
    title: req.body.title,
    description: req.body.description,
    category: req.body.category,
    status: req.body.status,
  }, req.user.id).then(hh => {
    res.redirect(`/hh/${hh.id}`);
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
    title: req.body.title,
    description: req.body.description,
    category: req.body.category,
    completion: req.body.completion,
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
