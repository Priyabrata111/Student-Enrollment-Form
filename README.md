# Student-Enrollment-Form Using Json Power DB
# Name: Priyabrata Mondal
# Email ID: priyabratamondal622@gmail.com
# Github Profile: https://github.com/Priyabrata111
# LinkedIn Profile: https://www.linkedin.com/in/priyabrata-mondal-64a555206/

# Project title : Student Enrollment Form
# Project link : https://github.com/Priyabrata111/Student-Enrollment-Form 
# Description 
A student enrollment form is created using JSON Power DB where the data of student ( Roll No, Full Name, Class, Date of Birth, Adress and Enrollment date) is stored in database with the name of SchoolDB and relation of STUDENT-TABLE. The token used in this project is : 90933101|-31949318403483461|90951180 and the primary key is : Roll-No
# Benefits of using JsonPowerDB
- Schema Free so it's easy to maintain
- Serverless supports
- very fast response
- Reduces cost approximately 50% with high performance
- Secured
- Simple to use
# Release History on github
This project is uploaded on Github on 24th June 2023
# Illustration
There are three control buttons Save, Update and Reset at the bottom of the form. On page load or any control button click, an empty form is displayed and the cursor  remains at the first input field which is Roll No in this case in the form which have the primary key in the relation. 
 ### User enters a data
 - The Data primary key of the data (Roll-No) is not present in the database so all the three control buttons will be active.
 - The primary key of the data is present in the database. so only two control buttons (Change, Reset) will be active and the details of the student will be automatically filled in the respective place of the form. In this condition Roll-No will also get disabled.

After save the data or updaating the data into database the form will automatically restart and cursor will move to Roll-No  (primary-key).
Blank space is not allowed through the form. An alert message will be shown if this condition will occur.
# Scope of functionalities
This project can be implemented to track record of different student enrolled in different courses in any school, college, and university. This project can also help to store the data of employees of different companies.
# Examples of use

- Enter details to save in DB



![1st](https://github.com/Priyabrata111/Student-Enrollment-Form/assets/70628777/f9e4f44d-3df9-47ca-8d03-3099cdaf19c4)

- Alert message to show the sucess status

![2nd](https://github.com/Priyabrata111/Student-Enrollment-Form/assets/70628777/1af4b775-c7f0-4268-a4f8-216767704120)

- After Sucessfully saved in DB

 ![3rd](https://github.com/Priyabrata111/Student-Enrollment-Form/assets/70628777/96e129ab-67ec-42a8-8ce3-513855311a87)

- After Entering Existing Roll-No

![4th](https://github.com/Priyabrata111/Student-Enrollment-Form/assets/70628777/00d1d772-ad90-48db-a7e7-d34dc89a37e9)

- Alert Message to show sucess status

![5th](https://github.com/Priyabrata111/Student-Enrollment-Form/assets/70628777/146d69fa-1fbc-41b2-94cb-d76ce0147fd0)

- After changing the Student adress details in DB

![6th](https://github.com/Priyabrata111/Student-Enrollment-Form/assets/70628777/7c4b031f-9af4-4350-b4af-812a0619c63a) 

# Project status
Sucessfully Completed
# Sources
- Introduction to JsonPowerDB - V2.0 : https://careers.login2explore.com/course/view.php?id=14 
- JPDB API Command Reference : https://login2explore.com/jpdb/docs.html 

  


