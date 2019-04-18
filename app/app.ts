
// app/app.ts
import express from 'express';
import path from 'path';

const app = express();
const port = 8080;

// Configure Express to use ejs
app.set( "views", path.join(__dirname, "../src/views") );
app.set( "view engine", "ejs" );

app.get("/", (req, res) => {
  res.render("index");
});
// @ts-ignore
app.listen(port, (err) => {
  if(err) {
    console.error(err);
  }else{
    // tslint:disable-next-line:no-console
    console.log(`Example app listening on ${port}`);
  }
});
