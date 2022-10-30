# Notes application API

This is the Application Tier for a simple Notes app. Built in [Node.js](https://nodejs.org/en/) and [Express.js](https://expressjs.com/). You are required to:
1. [Setup a connection to a SQL database.](https://github.com/sravanthi-reddy/notes-app-api/blob/master/config/appConfig.js#L27-L29)
2. [Upon connection success, create the relavent table(s) if it does not exist.](https://github.com/sravanthi-reddy/notes-app-api/blob/master/config/appConfig.js#L31-L33)
3. [Fetch all notes](https://github.com/sravanthi-reddy/notes-app-api/blob/master/src/controller/note.controller.js#L5-L59)
4. [Create a new note](https://github.com/sravanthi-reddy/notes-app-api/blob/master/src/controller/note.controller.js#L5-L60)
5. [Update an existing note](https://github.com/sravanthi-reddy/notes-app-api/blob/master/src/controller/note.controller.js#L62-L119)
6. [Delete an existing note](https://github.com/sravanthi-reddy/notes-app-api/blob/master/src/controller/note.controller.js#L121-L163)
7. [Search notes by content](https://github.com/sravanthi-reddy/notes-app-api/blob/master/src/controller/note.controller.js#L61-L116)
8. [Bulk delete all existing notes](https://github.com/sravanthi-reddy/notes-app-api/blob/master/src/controller/note.controller.js#L118-L156)


### Steps to setup:

1. Fork this repo and clone your forked repo. [How to do so?](https://docs.github.com/en/get-started/quickstart/fork-a-repo)


2. On your local machine, go to the folder and install dependencies
```bash
npm i

```

3. Run the app
```bash
npm start

```

4. Now server is listening on [http://localhost:3001](http://localhost:3001)
- If you go to [http://localhost:3001](http://localhost:3001) on your browser, you should see: `CSBC1010 Assignment 3 - My Notes`
- If you go to [http://localhost:3001/health](http://localhost:3001/health) on your browser, you should see: `API is working properly`
- If the above two links do not work as expected, please contact me.


### Dependencies 
- [Node v14+](https://nodejs.org/en/)
- [npm v6+](https://www.npmjs.com/)

### Related Project
- [clone the client repository from here](https://github.com/vivienfan/csbc1010-notes-app-client)
