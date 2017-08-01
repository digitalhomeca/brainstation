const express = require('express'),
      bodyParser = require('body-parser'),
      bcrypt = require('bcryptjs'),
      jwt = require('jsonwebtoken')
      app = express()

app.use(bodyParser.urlencoded({ extended: false })) 
app.use(bodyParser.json())
app.use(express.static('public'))

let users = []

// uses bcrypt to create user and hash then store in users array
app.post("/signup", (req, res) => {

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(req.body.password, salt, (err, hash) => {
            // Store hash in your password DB.
            if (err) throw err; 
            users.push({username: req.body.username, hash : hash})
            console.log(users)
            res.send("User Signed Up")
        });
    });
})

// login uses find function to  compare users input (from req.body.username) to see if user exists
app.post("/login", (req, res) => {
    let user = users.find((user) => {
        return user.username === req.body.username
    })

    // if users exists then compare input with password in users array

    if(user) {
        bcrypt.compare(req.body.password, user.hash, (err, result) => {
			if(result==true){
                let token =
                    jwt.sign({username: user.username}, 'secretkey');
                    res.json({token: token});
				//  res.send("Login Success")
			} else {
				res.status(403)
				   .send({token:null})
			}
		});
    } else {
        res.send("Invalid User")    
    }
})

app.get("/private", (req, res) => {
    jwt.verify(token, 'secretkey', (err,decoded) => {
        if (err) {
            res.status(403)
                .json({success: false,
                        message: 'No Authorization'});
     } else {
         res.send('Private Stuff');
     }
    }
    )
})

app.listen(8080, () => {
    console.log("Listening on port 8080")
})