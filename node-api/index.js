var express = require("express");
var app = express();

app.get("/people", (req, res, next) => {
    res.json({
        people: [
            { name: "Wolfgang", title: "Vice President"},
            { name: "Jim", title: "Developer"},
            {name: "Daniel", title: "Tech Lead"},
        ],
        titles: [
            "Vice President",
            "Developer",
            "Tech Lead",
            "Project Manager"
        ]
    })
});

app.listen(3030, () => {
    console.log("Server running on port 3030")
});