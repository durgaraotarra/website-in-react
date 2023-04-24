const mysql = require('mysql');

const connection =  mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: '',
    database: "userdata"
});


// const getUsers = (users) => {
//      connection.connect((err)=>{
//         if(err) throw err;
//         console.log("Connected");
//          connection.query('select * from users', (err,result) => {
//             if(err) throw err;
//             //console.log("user data base connected", result);
//             users(result);
//         })
//     })
// };

const insertContactUsForm = (form) =>{
    connection.connect((err)=>{
        if(err) throw err;
        const query = `INSERT INTO contact (first_name, last_name, email, country_code, phone_no, message) values ('${form.firstName}','${form.lastName}','${form.email}','${form.countryCode}','${form.phoneNo}','${form.message}')`;
        connection.query(query);
    })
}

module.exports = {
    insertContactUsForm
}