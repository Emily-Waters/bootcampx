SELECT 
  COUNT(assistance_requests.*)
    AS total_assistances,
  students.name 
FROM
  assistance_requests
JOIN 
  students
    ON students.id = assistance_requests.student_id
WHERE
  students.name = 'Elliot Dickinson'
GROUP BY 
  students.name;