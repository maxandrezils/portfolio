// app/app.ts
import dotenv from 'dotenv'
import express from 'express';
import path from 'path';

dotenv.config();
const app = express();
const port = 7080;

// Configure Express to use ejs
app.set( "views", path.join(__dirname, "../src/views") );
app.set( "view engine", "ejs" );

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Example app listening on ${port}`);
});
