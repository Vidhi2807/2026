const express = require("express"); // require - import 
const app = express(); // installation file 


app.get("/", (req, res) => {
  res.send("home page");
  res.status(200);
});

const users = [
    {id:1, name :"vidhi", role:"student"},
    {id:1, name :"Devanshi", role:"student"},
    {id:1, name :"Dhvanit", role:"student"},
    {id:1, name :"Rani", role:"student"},
];

// app.get("/users", (req, res) => {
//     res.send("user data");
//     res.json(500);
//     res.status(500);
// });

app.get("/users", (req, res) => {
  res.status(200).json(users);
});


app.get("/even-odd", (req, res) => {
    res.send("even odd");
    res.json(500);
});


app.get("/even-odd", (req, res) => {
    // res.status(200).send("even odd");
    res.status(201).json({"key":"value"});
    
});



app.listen(3000, () => { // server 
  console.log("Server started on port 3000");
});
