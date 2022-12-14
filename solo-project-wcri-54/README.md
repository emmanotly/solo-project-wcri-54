*** Emma Ferguson's Solo Project ***
*** Codesmith WCRI 54 ***

*** An Introduction: ***
Welcome to my attempt at a revival of a dupe for our beloved classic Yik Yak!

Yik Yak, before its recent official revival with new and updated features, was a simple social media platform popular among college students.

The app would allow users to post anonymously, and each post would have the ability to be upvoted or downvoted. Users on classic Yik Yak would have a feed compromised of posts submitted within a local distance from them.

For simplicity's sake, I will be leaving out the location feature, and focusing on my MVP features:
  - displaying anonymous posts from multiple users
  - giving each post an upvote and downvote button that keeps track of the popularity (or unpopularity; negative scores are possible) score
    for each anonymous post

If time allows, I would like to incorporate the following stretch features:
  - allowing replies with upvote snd downvote options to anonymous posts

The simple days of classic Yik Yak allowed users to connect and share some laughs and confessions with fellow students at their universities

*** Please use this classic Yik Yak appropriately and responsibly ***

*** The Game Plan: ***
1. Create a very basic `index.html` file
2. Create a very basic `server.js` file
3. Set up `webpack.config.js` (dev-server is not necessary at this time, we will work on it later)
4. Set up a `package.json` file
  a) run `npm install` in the terminal
  b) run `npm init --yes` in the terminal for `package.json` to produce the `package-lock.json` file
5. Set up `server.json` boiler plate:
  a) require: `express`, `path`, declare the `PORT` to `localhost:3000`, delcare `app' and invoke `express`
  b) use: `express.json()`, `express.urlencoded()`
  c) create a catch all route (404 status) and global error handling (500 status)
  d) invoke the `.listen()` method to connext the server to `localhost:3000`
  e) `module.exports` the app
6. Planning out thte routers:
  a) the routers will invoke middleware that will perform functionality for the fetch requests that will be made in the react file later on; for this application, there will will only be the CRU components of CRUD:
    - Create: submit posts from the client
    - Read: display the posts from the user
    - Update: update and display the popularity/unpopularity
      of the posts in correspondence of the upvote and downvote options
  b) the first response should a `GET` request be for the `/` endpoint and respond by sending the file, and resolving the path to the `index.html` file
  c) the second router should handle the `POST` request made by the client to submit and display the client's anonymous posts
  d) the third router should handle the `PATCH` request in the event that the client upvotes or downvotes a post
7. Make `server` and `client` folders:
  a) move `server.js` into the `server` folder
  b) create a `controllers.js` file in the `server` folder as a file for middleware
  c) move the `index.html` file into the `client` folder
  d) later on, a `styles.css` file will go into this forlder, along with a `react.jsx` file
8. Set up a database:
  a) it's good practice to not store sensitive information where it will be public to anyone looking at the GitHub repo once committed and pushed, so to accomplish this, create a `.gitignore` file
  b) add the `node-modules` folder to `.gitignore`
  c) create a `db.js` file
    - add the `db.js` file to the `.gitignore` file
  d) declare a `model.js` file that will hold the schema and model for the mongoDB database
    - Schema: 
      * username, required
      * password, required
      * school, required
    - Model:
      * declare a variable and assign it to the invocation of mongoose's `.model` method, passing in the variable label as a sting and the schema variable
    - export the model
9. Work on the middleware; the middleware should match up with the functionality of its perspective server routers and react fetch requests:
  a) the middleware file should require the `model` file holding the schema for the database
