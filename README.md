About the project
• Developed a college counseling system with features including viewing colleges and branches , predicting
rank , predicting college , and cutoff analysis .
• Leveraged MySQL for database management, ensuring efficient data storage and retrieval.
• Utilized Express.js for backend development, enabling robust API development and efficient CRUD
operations .



How to run????
you will have to create the database to run this project.
https://docs.google.com/spreadsheets/d/1dS5r4Ox0LUqCyq1UorG4wSBKFIm3P3EDhKQr1sK1vnc/edit?gid=1971599139#gid=1971599139
this is the link to all the excel files (10-12) . You will have to use them to make your tables (make sure you make table for all the spreadsheet)
you can import the excel file(in form of csv) to mysql workbench . below is the link for how to do it
https://www.youtube.com/watch?v=ftlJoXEBmis

once you have the database to your self, now open the folder and locate to database.js

const mysql = require('mysql2');
module.exports = mysql.createConnection({
    host: 'localhost',
    user: 'root',    // your mysql username
    password: '',    // your mysql password(enter your password here)
    database: 'ccms'   // your mysql database name(the one you gave to ur database)
});

now open terminal and write npm start
this should run the express server 

now go the browser and type
http://localhost:3000/
