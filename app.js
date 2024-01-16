const express = require("express");
const { users_calc } = require("./routes/API/apirouter.js");
const dotenv = require("dotenv");
dotenv.config();
  
const app = express();



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
  
app.use("/ccal", express.static(__dirname + "/public/calculate"));
app.use(users_calc);

  
//app.use("/users", users_router);

app.listen(process.env.PORT || 3001, () => {
    console.log(`run on port ${process.env.PORT || 3001}`);
});

