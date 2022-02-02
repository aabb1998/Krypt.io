const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

let users = [
	{
		user1: {
			watchlist: [
				{
					Bitcoin: 45098,
					amount: 0.3,
					time: "2018",
				},
			],
		},
		user2: {
			watchlist: [
				{
					Bitcoin: 45098,
					amount: 0.3,
					time: "2018",
				},
			],
		},
	},
];

var corsOptions = {
	origin: "http://localhost:5000",
	optionsSuccessStatus: 200,
};

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors(corsOptions));

app.post("/user/:uid", (req, res) => {
	const user = req.body;

	console.log(user);
	users.push(user);

	res.send("User added to database.");
});

app.get("/user/:uid", (req, res) => {
	res.json(users);
});

app.listen(5000, () => {
	console.log("Server started on port 5000");
});
