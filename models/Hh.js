
const db = require('../db/config');

const Hh = {};

Hh.findAll = () => {
  return db.query('SELECT * FROM hh ORDER BY id ASC');
};

Hh.findById = (id) => {
  return db.one(`
    SELECT * FROM hh
    WHERE id = $1
  `, [id]);
};

Hh.create = (hh, userId) => {
  return db.one(`
    INSERT INTO hh
    (venue, location, hours, vanue_id)
    VALUES ($1, $2, $3, $4)
    RETURNING *
  `, [hh.venue, hh.location, hh.hours, venue_id]);
};

Hh.update = (hh, hhId) => {
  return db.one(`
    UPDATE hh SET
    venue = $1,
    location = $2,
    hours = $3,
    WHERE id = $4
    RETURNING *
  `, [hh.venue, hh.location, hh.hours, venue_id]);
};

Hh.destroy = (id) => {
  return db.none(`
    DELETE FROM hh
    WHERE id = $1
  `, [id]);
};



module.exports = Hh;
