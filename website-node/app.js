const express = require('express');
const {insertContactUsForm} = require('./demo_db_connection');
var cors = require('cors');

const app = express();
const PORT = 3001;
app.use(express.json());
app.use(cors());


app.get('/', (req, res)=>{
    res.status(200);
    res.send('Welcome to root url of server');
})

// app.get('/userinfo', (req, res)=>{
//     getUsers((data)=>{
//         res.status(200);
//         res.send(JSON.stringify(data));
//     })
// })

app.post('/savecontactus', (req, res) => {
    //console.log(req.body);
    const form = req.body;
    insertContactUsForm(form);
    res.send();
})


app.listen(PORT, (error) =>{
	if(!error){
		console.log("Server is Successfully Running, and App is listening on port "+ PORT)

    }
	else
		console.log("Error occurred, server can't start", error);
	}
);
