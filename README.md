About the project  
• Developed a college counseling system with features including viewing colleges and branches , predicting
rank , predicting college , and cutoff analysis .  
• Leveraged MySQL for database management, ensuring efficient data storage and retrieval.  
• Utilized Express.js for backend development, enabling robust API development and efficient CRUD operations .  




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


MIT License

Copyright (c) [2024] [Sudhanshu SIngh, IIITA]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


