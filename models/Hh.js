
const db = require('../db/config');

const Hh = {};

Hh.findAll = () => {
  return db.query('SELECT * FROM happyhourvendors ORDER BY id ASC');
};

Hh.findById = (id) => {
  return db.one(`
    SELECT * FROM happyhourvendors
    WHERE id = $1
  `, [id]);
};

Hh.create = (hh) => {
  console.log('hh ' + hh.img);
  return db.one(`
    INSERT INTO happyhourvendors
    (name, hours, img, location, specials)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
  `, [hh.name, hh.hours, hh.img, hh.location, hh.specials]);
};

Hh.update = (hh, hhId) => {
  return db.one(`
    UPDATE happyhourvendors SET
    name = $1,
    hours = $2,
    img = $3,
    location = $4,
    specials = $5,
    WHERE id = $6
    RETURNING *
  `, [happyhourvendors.name, happyhourvendors.hours, happyhourvendors.img, happyhourvendors.location, happyhourvendors.specials,  userId]);
;
};

Hh.delete = (id) => {
  return db.none(`
    DELETE FROM happyhourvendors
    WHERE id = $1
  `, [id]);
};



module.exports = Hh;
