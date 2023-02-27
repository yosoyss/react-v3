var express = require('express');
var mysql = require('mysql');
var cors = require('cors');
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var multer = require("multer");
var path = require("path");
var app = express();

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));


//set pth to upload files
app.use("/uploads", express.static("uploads"))

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
}));

// create session
app.use(session({
    key: "userId",
    secret: "komedi",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24, //one day
    },
})
);

// create mysql connection
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test2"
});

//connect mysql databse
con.connect((err) => {
    if (err) {
        console.log("Unable to connect db.");
    }
    console.log("Connected!");
});


//just for server testing demo
app.get("/re", (req, res) => {
    res.send("ok")
});

// insert new user reg data in mysql
app.post("/register", (req, res) => {
    //insert new reg user
    var sql = "insert into `users` (`name`, `email`, `pass`) value(?, ?, ?)";

    //fetch user if exist
    var fetchUser = "select * from `users` where `email` = ?";

    //store var data from input file using axios
    const name = req.body.name;
    const email = req.body.email;
    const pass = req.body.pass;

    //this query will get user from db if exist
    con.query(fetchUser, email, (err, result) => {
        //check if user exist
        if (result.length > 1) {

            //set var if user exist
            const isRegistered = true;

            res.send({ message: "User email already registered!", registered: isRegistered })
        }
        //if user not exist in db create new account
        else {
            con.query(sql, [name, email, pass], (err, result) => {
                if (err) {
                    console.log("err in query" + err);
                } else {
                    if (result) {
                        res.send(result);
                    }
                }

                // res.send("data inserted");
            });
        }
    });
});

//get login user info
app.get("/login", (req, res) => {
    if (req.session.user) {
        res.send({ loggedIn: true, user: req.session.user })
    } else {
        res.send({ loggedIn: false });
    }
})

//login system
app.post("/login", (req, res) => {
    var sql = "select * from `users` where `name` = ? and `pass` = ?";

    const name = req.body.name;
    const pass = req.body.pass;

    con.query(sql, [name, pass], (err, result) => {
        if (err) {
            res.send({ err: err })
        }
        //if user found
        if (result.length > 0) {
            var UserId = result[0].id;

            req.session.user = result;
            req.session.loggedIn = true;

            const login = true;
            // console.log(req.session.user)
            res.json({ auth: true, result: result, logged: login, });
        }
        else if (result.length == 0) {
            res.send({ message: "User account isn't exist" })
        }
        else {
            res.send({ auth: false, message: "Wrong username and password!" });
        }

        // res.send("data inserted");
    });
});

///set storage
const storage = multer.diskStorage({

    //set the path of file location where file stored
    destination: "uploads",

    //set file name
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({
    storage: storage
})

//post data if user upload anything
app.post('/upload', upload.single("file"), (req, res) => {

    //check if file exist or not
    if (!req.file) {
        console.log("No file upload");
    } else { //ipload file
        var filename = req.file.filename;

        var sql = "insert into `data` (`name`, `email`, `file_name`, `data`) values(?, ?, ?, ?)";

        //fetch if file exist
        var fetchData = "select * from `data` where `data` = ?";

        //get user name and email from session
        const name = req.session.user[0].name;
        const email = req.session.user[0].email;

        //img src to store in mysql
        const src = 'http://127.0.0.1:3001/uploads/' + filename;

        //fetch if upload file already exist
        con.query(fetchData, src, (err, result) => {
            //check if file exist
            if (result.length > 0) {

                //set var if file exist
                const fileExist = true;
                res.send({ message: "File is already Uploaded!", fileExist: fileExist })
            }
            //upload if filee is not exist
            else {
                //second query to upload files
                con.query(sql, [name, email, filename, src], (err, result) => {
                    if (err) {
                        res.send({ message: "Error" })
                    }

                    else { //if there is no error then send response to frontend
                        if (result) {
                            res.send({ message: "File uploaded sucessfully!" });
                        }
                    }

                    // res.send("data inserted");
                });
            }
        });
    }
})


//fetch user files
app.get("/fetch", (req, res) => {

    //get user data from user's email
    var sql = "select * from `data` where `email` = ?";
    try {
        const email = req.session.user[0].email;


        //mysql query
        con.query(sql, [email], (err, result) => {
            if (err) {
                res.send({ err: err })
            }
            //if data found
            if (result.length > 0) {

                //set var if data is exist
                const dataExist = true;

                //send repsonse
                res.send({ isDataExist: dataExist, result: result, message: "ok" });
            }

            else {
                res.send({ message: "You have not Upload any files yet!" });
            }
 
        });

    } catch (err) {
        console.log(err)
    }
});

//feedback contact us


//logout session
app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return console.log(err);
        }

        //clear cookies
        res.clearCookie("userId");
        res.send({ message: "logged out" });
    });
});

//store data of user
app.post('/post', (req, res) => {

});

//set server port
app.listen(3001, () => {
    console.log("Server is running!");
});