const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "INSERT PASSWORD",
  database: "INSERT DATABASE",
});

app.post("/registerCustomer", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const phoneNumber = req.body.phoneNumber;
  const emailId = req.body.emailId;
  const username = req.body.username;
  const password = req.body.password;

  const sql =
    "INSERT INTO customer (first_name, last_name, phone_number, email_id, username, password) VALUES (?, ?, ?, ?, ?, ?)";

  console.log(sql);

  db.query(
    "INSERT INTO customer (first_name, last_name, phone_number, email_id, username, password) VALUES (?, ?, ?, ?, ?, ?)",
    [firstName, lastName, phoneNumber, emailId, username, password],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      if (result.length > 0) {
        res.send("Success");
        console.log("result");
      }
    }
  );
});

app.post("/loginCustomer", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM customer WHERE username = ? AND password = ?",
    [username, password],
    (err, result) => {
      if (err) {
        res.send("Error");
      }

      if (result.length > 0) {
        console.log("SUCCESSFUL LOGIN");
        res.send("Success");
      } else {
        console.log("NOT SUCCESSFUL");
        res.send("Wrong Username/Password Combination");
      }
    }
  );
});

app.post("/registerDriver", (req, res) => {
  const firstName = req.body.firstName;
  const middleInitial = req.body.middleInitial;
  const lastName = req.body.lastName;
  const phoneNumber = req.body.phoneNumber;
  const emailId = req.body.emailId;
  const username = req.body.username;
  const password = req.body.password;

  const sql =
    "INSERT INTO customer (first_name, middle_initial, last_name, phone_number, email_id, username, password) VALUES (?, ?, ?, ?, ?, ?, ?)";

  console.log(sql);

  db.query(
    "INSERT INTO driver (first_name, middle_initial, last_name, phone_number, email_id, username, password) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [
      firstName,
      middleInitial,
      lastName,
      phoneNumber,
      emailId,
      username,
      password,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      if (result.length > 0) {
        res.send("Success");
        console.log("result");
      }
    }
  );
});

app.post("/loginDriver", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM driver WHERE username = ? AND password = ?",
    [username, password],
    (err, result) => {
      if (err) {
        res.send("Error");
      }

      if (result.length > 0) {
        console.log("SUCCESSFUL LOGIN");
        res.send("Success");
      } else {
        console.log("NOT SUCCESSFUL");
        res.send("Wrong Username/Password Combination");
      }
    }
  );
});

app.listen(8081, () => {
  console.log("listening");
});
