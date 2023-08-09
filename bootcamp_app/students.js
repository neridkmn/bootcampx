const { Pool } = require('pg');

const pool = new Pool({
  user: 'neriman',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.query(`
SELECT id, name, cohort_id
FROM students
LIMIT 5;
`)
.then(res => {
  res.rows.forEach(user => { // res.rows return a JS object so we can add more JS code after that. 
    console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort_id} cohort`);
  })
});

