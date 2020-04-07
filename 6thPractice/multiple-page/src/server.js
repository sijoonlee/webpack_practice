const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');


app.get('/hello-world/', (req, res) => {
  //req.send("some");
  const pathToHtmlFIle = path.resolve(__dirname, '../dist/hello-world.html');
  const contentFromHtmlFile = fs.readFileSync(pathToHtmlFIle, 'utf-8');
  res.send(contentFromHtmlFile); // this doesn't include css
});

app.get('/kiwi/', (req, res) => {
  //req.send("some");
  const pathToHtmlFIle = path.resolve(__dirname, '../dist/kiwi.html');
  const contentFromHtmlFile = fs.readFileSync(pathToHtmlFIle, 'utf-8');
  res.send(contentFromHtmlFile); // this doesn't include css
});

app.use('/static', express.static(path.resolve(__dirname, '../dist'))); 
// this will find assets 
// like below <link href="/static/styles.e08eb44558ecea211cec.css"
// from dist folder

app.listen(3000, ()=>{
  console.log("server up");
});