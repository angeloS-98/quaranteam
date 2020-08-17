var path = require('path');
var fs = require('fs');
/*
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from '../../frontend/src/App'
*/
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const app = /*ReactDOMServer.renderToString(<App />);*/ 'ciao';

  const indexFile = path.resolve('../../frontend/public/index.html');
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    );
  });
});

module.exports = router;
