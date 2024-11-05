const express =  require("express");
const app = express();
const jwt = require("jsonwebtoken")

const user = [
    {
        name: "inguun",
        id: "1"
    },
    {
        name: "Khangal",
        id: "2"
    },
    {
        name: "Ushuu",
        id: "3"
    }
];

app.get("/user", (req, res) => {
    const token = req.headers.authorization;
    res.send(user)
    jwt.verify(token, "key", (err) => {
        if (err) {
            res.send("incorrect token")
        }
});
if(token) {
    res.send(user) 
} else {
    res.send("this is not in our list")
}
});

app.post('/login', (req, res) => {
  const body = req.body
  const safetyToken =  jwt.sign(body, "key");
  console.log(body)
  res.send("done")
})

app.listen(3000, console.log("server working"));
