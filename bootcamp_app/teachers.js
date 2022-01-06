const { Pool } = require('pg');
const cohort = process.argv[2];

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool
  .query(`
    SELECT 
      DISTINCT(teachers.name)
        AS teacher,
      cohorts.name
        AS cohort
    FROM
      assistance_requests
    JOIN
      teachers
        ON assistance_requests.teacher_id = teachers.id
    JOIN
      students
        ON assistance_requests.student_id = students.id
    JOIN
      cohorts
        ON students.cohort_id = cohorts.id
    WHERE 
      cohorts.name = '${cohort || 'JUL02'}'
    ORDER BY
      teachers.name ASC;`)
  .then((res) => {
    console.log('connected');
    res.rows.forEach((row) => {
      console.log(`${row.cohort}: ${row.teacher}`);
    });
    pool.end();
  })
  .catch((err) => {
    console.log('Error: ',err);
  });