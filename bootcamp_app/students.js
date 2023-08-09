const { Pool } = require('pg');

const pool = new Pool({
  user: 'neriman',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});



