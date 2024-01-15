const express = require("express");
const { users_router } = require("./routes/users.routes.js");
const dotenv = require("dotenv");
dotenv.config();
  
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
  
app.use("/", express.static(__dirname + "/public"));
  
//app.use("/users", users_router);

app.listen(process.env.PORT || 3001, () => {
    console.log(`run on port ${process.env.PORT || 3001}`);
});
