var database = [
    {
        username: "Kolawole",
        password: "Oyewole"
    },
    {
        username: "Steven",
        password: "Esheti"
    }
];

var newsFeed = [
    {
        username: "Samuel",
        timeline: "Life just tire person"
    },
    {
        username: "Saola",
        timeline: "I love Anu"
    }
];

var userNamePrompt = prompt("What's your username");
var passwordPrompt = prompt("What's your password");

function signin(username, password) {
    if (username === database[0].username,database[1].username &&
    password === database[0].password,database[1].password) {
        console.log(newsFeed);
    } else {
        alert("Wrong Username or Password")
    }
}
signin(userNamePrompt, passwordPrompt);