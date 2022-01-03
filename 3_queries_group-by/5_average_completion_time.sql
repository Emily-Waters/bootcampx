SELECT students.name 
  AS student, 
AVG(assignment_submissions.duration)
  AS average_assigment_duration

FROM students

JOIN assignment_submissions 
  ON students.id = assignment_submissions.student_id

WHERE students.end_date IS NULL

GROUP BY student
ORDER BY average_assigment_duration DESC;