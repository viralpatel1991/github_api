# Bookmark app
Bookmark app uses the GITHUB API for searching the repositories and bookmaring them. The app doesn't have DB, it stores the bookmarks into the text file on server.

## Installation
app requires [Node.js](https://nodejs.org/) v8+ to run.

### client:

Please run below command to install the dependencies, devDependencies and start the client on the local system.

```sh
$ cd client
$ npm install
$ npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### server:

The repositories are fetched from the GIHUB API according to user input. The bookmarks are saved into the file `server/db/data.txt` 

Please run below code to install the dependencies, devDependencies and start the local server.

```sh
$ cd server
$ npm install
$ npm start
```

#### API call documentation

| API | URL |
| ------ | ------ |
| Search repositories | /repositories/:repo |
| Bookmark repository | /repositories/bookmark/:id/save |
| Fetch Bookmarks | /repositories/bookmark/all |
| Remove Bookmark | /repositories/bookmark/:id/remove |