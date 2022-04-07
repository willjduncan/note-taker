# Note Taker
Module 11 Challenge

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

        

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)  
        



## Description

AS A small business owner

I WANT to be able to write and save notes

SO THAT I can organize my thoughts and keep track of tasks I need to complete

Note Taker is a program that allows a user to write, keep, and delete notes. The challenge is meant to test my ability to create the backend of a website and combine it with the frontend. It will prove my full-stack coding chops while giving me a chance to better my skills at Node and Express.js and become more familiar with Insomnia for testing. 

Once complete, the program should operate so that:

GIVEN a note-taking application

WHEN I open the Note Taker

THEN I am presented with a landing page with a link to a notes page

WHEN I click on the link to the notes page

THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column

WHEN I enter a new note title and the note’s text

THEN a Save icon appears in the navigation at the top of the page

WHEN I click on the Save icon

THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes

WHEN I click on an existing note in the list in the left-hand column

THEN that note appears in the right-hand column

WHEN I click on the Write icon in the navigation at the top of the page

THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column

The final product should allow a user to type notes and for the program to save them and keep them accessible and deletable. 

After downloading the starter code, getting npm, organizing files, and adding scaffolding, remembering to include the necessary middleware, I could begin to code, beginning with the server. Once everything was prepared, I focused on routing the two html pages, index and notes. I then focused on displaying notes through the api/notes route. The POST was accomplished thanks to studying Activity 5 of the In-Class activities of Module 11, specifically how to read the data file and then append a new item to the data file without deleting what was there. I added unique ids using the UUID package through npm. 

<!-- Once all the Acceptance Criteria were fulfilled, I added the DELETE ability.  -->




## Installation

<!-- Links to the repository and deployed website can be found at [Questions](#questions).

Because this project runs from the machine and not the browser, it cannot be deployed. The project is on github, however. You must first clone the repo, then run the command "npm install" on the Terminal/Command Line in order to download the dependencies. Make sure to also download inquirer, using "npm install inquirer". From there, you can fill out your team. If you want to run tests, you also have to install Jest, using "npm install jest --save-dev". -->


## Usage

<!-- Once the project is cloned and the dependencies downloaded, type "node index" to run the program. The program will provide you with multiple prompts to fill out. When you're done, your new webpage should appear in the dist/ folder for you to open up onto your preferred browser. 

Screenshots of the mockup and actual site are shown below

![screenshot of Mockup](/images/mockup.png)
![screenshot of Active Site](/images/screenshot-active.png)


Screenshots of the WorkForce Class, Engineer class, and page-template is below: 

![screenshot of WorkForce](/images/screenshot-workforce.png)
![screenshot of Engineer](/images/screenshot-engineer.png)
![screenshot of page-template](/images/screenshot-page-template.png)

A video explaining and demonstrating the app's functionality is below:

[https://drive.google.com/file/d/1fpUPzZ8xsgI8BrnhTcdO_vuMhYNBl-P1/view](https://drive.google.com/file/d/1fpUPzZ8xsgI8BrnhTcdO_vuMhYNBl-P1/view) -->


## Credits

<!-- The coding boot camp Professional README Guide found at https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide was used as a template for this README. The license was picked from [https://choosealicense.com/](https://choosealicense.com/).The WHEN/THEN section of this README was based off the project assignment Acceptance Criteria. No TAs or classmates were used in the making of this challenge. Most influence was taken particularly from Zookeepr of Module 11 and Activity 5 of the In-Class Assignments for Module 11. Stack Overflow, MDN Web Docs, W3, and Google were critical to my success. Node.js, Insomnia, Express.js, npm, and npm's UUID package were also used. -->



## Contributing

Other items to be added can be more data such as documents made for listmaking, or adding more properties to the current database such as time of creation or due date. Editable notes, or drag and drop functionality would give users more interaction with the page. Just make sure to keep things organized and in their respective folders. 


## Tests

No Jest tests written were made for this challenge, but Insomnia is a critical tool in letting us test the program's GET, POST, and DELETE methods. If you want to run tests, download Insomnia or some similar program, activate the program in Terminal using "npm start", and then use the Localhost URL to try the different methods. 



## Questions

My Github username is willjduncan.


My Github Profile can be found below:

[https://github.com/willjduncan](https://github.com/willjduncan)


The repository to this project is below:

[https://github.com/willjduncan/note-taker.git](https://github.com/willjduncan/note-taker.git)


For any additional questions, I can be reached at willdunc12@gmail.com.



## License

[view license link here](https://choosealicense.com/licenses/mit/)

        
MIT License

Copyright (c) [2022] [willjduncan]

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

