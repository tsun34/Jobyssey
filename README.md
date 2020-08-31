# Jobyssey
Jobyssey is a job search tracking app with a platform for job seekers to share about their thoughts and experiences anonymously. 

Check out our live site! https://jobyssey.herokuapp.com/

## Background and Overview

Finding a job is hard, but Jobyssey is here to help you stay organized along your odyssey to success. No more messy spreadsheets. Jobyssey keeps track of every detail of your job application from application deadline and job description to networking contacts and preparation notes. On top of that, Jobyseey incorporates the d3-sankey library and generates personalized sankey diagrams to easily visualize the progress of job searching you have accomplished.

Jobyssey is not only an organization tool. It is also a safe place for job seekers to share their interviewing experiences. Under our explore page, users can search and view other job seekers’ experience at different companies. They are able to share about their own thoughts and interview experiences anonymously, too. Jobyssey dedicates to simplify your job search and create a collaborative environment for all job seekers to achieve their success.

Jobyssey is primarily built with the MERN stack, a combination of the following four technologies: MongoDB, Express, React and Node.

## Functionality & MVP
- [ ] User authorization: sign up and log in
- [ ] Demo user for easy presentation 
- [ ] Logged in users can create new jobs, as well as edit and delete existing jobs. 
- [ ] Visualization generator tracks job searching progress and creates an intuitive diagram of each stage of the job searching progress.
- [ ] Users can not only search jobs by stage/company/etc, but also explore more company info/comment.
- [ ] Company boards let users search companies by names and leave comments as anonymous.

## Technologies and Technical Challenges

## Wireframes

### Landing Page
![landing page wireframe](https://raw.githubusercontent.com/tsun34/Jobyssey/master/Wireframes/1.png)

### Add/Update Job Modal
![](https://raw.githubusercontent.com/tsun34/Jobyssey/master/Wireframes/2.png)

### My Progress Page (Visualization Page)
![](https://raw.githubusercontent.com/tsun34/Jobyssey/master/Wireframes/3.png)

### Explore Page
![](https://raw.githubusercontent.com/tsun34/Jobyssey/master/Wireframes/4.png)

### Company Review Page
![](https://raw.githubusercontent.com/tsun34/Jobyssey/master/Wireframes/5.png)


## Group Members and Work Breakdown

### Group Members and Logistics 
* Front-end group: Xiao, Maggie
* Back-end group: Charlotte, Philip
* The proposal  has a day-by-day breakdown for each group and individual. 
* The work should be pushed to heroku every night when heroku is being set up successfully.
* All group members will meet every day after lunch to discuss the work they did, challenges they have and the updated engineering design decisions.

### August31 
1. Build user auth, user model, user controller, session model, session controller, etc. - Backend
1. Build sign up/login modal - Frontend
1. Begin route setting up including splash page, login/sign up route, protected route, landing page, etc. - Frontend
1. Set up database and decide which data to save in database - Backend
1. Job modal and job controller - Backend
1. Polishing splash page and navigation bar - Frontend

### September1
1. Build homepage, finish job card rough draft and polishing- Frontend
1. Construct company model/controller, reviewing model/controller and seed company - Backend
1. Set up Heroku and seed the database - Backend

### September2
1. Build add/create job modal and styling - Frontend
1. Begin setting up 3D visualization - Backend
1. Build search/explore function for searching company reviews - Backend
1. Continue implementation of visualization on web using D3 library - Backend

### September3
1. Finish explore function and reviews page - Frontend
1. Export data to excel/google sheets - Backend
1. Refine Styling and polishing everything - Frontend
1. Bonus: adding demouser - Frontend
1. Finish testing and debugging - ALL

### September4
1. Last minute debugging and polishing - ALL
1. Complete Production ReadMe.md - ALL
