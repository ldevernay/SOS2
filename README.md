# Simplon Open Source (SOS) II


### Getting Started
Checkout this repo, install dependencies, then start the gulp process with the following:

```
> git clone git@github.com:ldevernay/SOS2.git
> cd SOS2
> npm install
> npm start
```

### Intent
The first version of SOS was adapted straight freecodecamp's [Open Source for Good](https://www.freecodecamp.org/nonprofits/). 
The idea is really great but the project is quite overcomplicated for our needs.
So, I decided to start again, this time from scratch.
Well, not exactly since I used [Stephen Grider's Redux/React boilerplate](https://github.com/StephenGrider/ReduxSimpleStarter). BTW, you should check his Udemy courses, they are AWESOME.
Bootstrap, React/Redux, Github API and here we go!

### Functionnal needs
* As a user, I should be able to see open source projects provided by Simplon,
* As a user, I can see easily access the repo, live demo and other useful infos from github for each project. 
* As a user, I can check at a glance which are the languages used on a project. 
* As an administrator/dev, it is easy for me to add a new project. 

### Branches
There three branches : 
* master : code which is deployed in production [none yet].
* staging : code which is deployed in pre-production [-> Heroku] to be tested.
* dev : the branch for all contributors to push on.


