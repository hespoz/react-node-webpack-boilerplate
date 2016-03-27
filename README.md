# Prerequisites
In order to install this boilerplate you need to have installed on your machine the following tools.

- Node version >= 4
- npm
- Nodemon


# Installation
Clone the project from github:
```sh
$ git clone https://github.com/hespoz/react-node-webpack-boilerplate
```
Go to the directory where the project was downloaded
```sh
$ cd react-node-webpack-boilerplate/
```
Inside the directory we need to install all dependencies 
```sh
$ npm install
```
After installing we need to run the webpack script. Webpack will be listening for changes on the jsx and css files and each time those files change webpack will compile a single app.js file that will be placed on public directory.

```sh
$ npm run webpack-dev
```

Webpack will take few seconds to grab the jsx, css and generate the app.js file in public, once this tasks is done you will see something like this.

```sh

Hash: fb65c30180ed669b724b
Version: webpack 1.12.14
Time: 15287ms
         Asset      Size  Chunks             Chunk Names
        app.js    888 kB    0, 1  [emitted]  pageA, pageB
    styles.css  71 bytes       0  [emitted]  pageA
    app.js.map   1.01 MB    0, 1  [emitted]  pageA, pageB
styles.css.map  87 bytes       0  [emitted]  pageA
    + 219 hidden modules
Child extract-text-webpack-plugin:
        + 2 hidden modules

```
Then you need to run the nodejs server, we will use nodemon to detect when the js files of the server changes and rebuild the application on the fly.

```sh
$ npm run server-dev
```
If everything went fine you should see the following

```sh
[nodemon] 1.9.1
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node server.js`

Express server listening on port 3000
```
Then go and open http://localhost:3000/ url, and check if everything is working.

At this point you can open the project using your favorite IDE and start coding, each time you save a file the webpack and nodemon scripts will rebuild your application.
