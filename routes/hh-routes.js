const express = require('express');
const hhRouter = express.Router();

const hhController = require('../controllers/hh-controller');
const authHelpers = require('../services/auth-helpers');

hhRouter.get('/', hhController.index);

hhRouter.get('/new', authHelpers.loginRequired, (req, res) => {
  res.render('hh/hh-new', {
    auth: (req.user) ? true : false,
  });
});

hhRouter.get('/vendor', (req, res) => {
  res.render('./auth/vendor');
});
hhRouter.post('/', hhController.create);

hhRouter.get('/:id', hhController.show);
hhRouter.get('/:id/edit', hhController.edit);
//hhRouter.put('/:id', hhController.update);
hhRouter.delete('/:id', hhController.delete);

//hhRouter.put('/:id/complete', hhController.complete);


module.exports = hhRouter;
