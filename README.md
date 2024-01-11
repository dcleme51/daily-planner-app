# Daily-planner-App

In this project we will be creating code to build a Daily Planner Application with the ability to save tasks across a working day between 9am and 5pm. This app will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code that you write.

Installation In order to contribute to the task we must install Visual Studio Code. We would also need to install an extension within Visual Studio Code to run and open a live server in the browser such as in 'chrome' so we are able to see what appears within the console. We will require a terminal/bash to create a repository that will enable us to push the code base onto GitHub. For this we will need to install Gitbash as well.

For this challenge we were provided with the starter codes for the html, CSS and the JavaScript file. As part of the Acceptance Criteria the following requirements were executed. 

* Display the current day at the top of the calendar when a user opens the planner.
 
* Present timeblocks for standard business hours when the user scrolls down.
 
* Color-code each timeblock based on past, present, and future when the timeblock is viewed.
 
* Allow a user to enter an event when they click a timeblock

* Save the event in local storage when the save button is clicked in that timeblock.

* Persist events between refreshes of a page

First, we created a repository on GitHub in which we will save the changes and commits of to keep track of progress along with structuring the files. Using the acceptance Criteria as above we then pseudocode to break down each point using a variety of techniques including the use of classes, 'this' method to create the logic, functions and for loops to iterate through the different times across the daily planner from 9am to 5pm. In order to create the date, we used day.js and formatted this dd/mm/yyyy. We used if else statements to colour code past, present and future times. Furthermore, to create the save button, we used the local Storage attribute where users were able to input their 'task' in which this was recorded and upon refresh it would still persist. The styling of the daily planner was also handled using the provided starter CSS code to accomplish a polished look.  

Reflection: The assignment was challenging at first but I was able to use a variety of resource to help achieve the end result of this project where I was able to complete the daily planner. The main challenge for me was understanding this function and how to imply it into the logic.

Resources: 
* https://www.w3schools.com/js/default.asp
* https://day.js.org/docs/en/display/format

Credits: Instructor and TAs from the bootcamp, AskBSC community members and special thanks to tutor Scott Everet and Suresh Kumar for helping me across this challenge.

Licence I have chosen to go with the MIT licence as it allows people to do almost anything to the project to help improve the website further if required. It is also a simple and permissive I’m comparison to other licences. 
