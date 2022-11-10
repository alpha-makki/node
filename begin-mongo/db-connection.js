const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017");
const conn = mongoose.connection;
const emmployeeSchema = mongoose.Schema({
    first_name: String,
    last_name: String,
    gender: Number,
    city_id: Number
}, {collection: "employee"});
// userSchema.methods.userSalary = function(){
//     console.log('%s take home salary is %d', this.name, (this.basicSalary - ((this.basicSalary * this.tax) / 100)));
// }
const employee = mongoose.model('hrm', emmployeeSchema);
const firstEmployee = new employee({first_name: 'Muhammed', last_name: 'Makki', gender: 0, city_id: 17});

conn.on('connected', function(){
    console.log('db connected succesfully');
});

conn.on('disconnected', function(){
    console.log('Disconnected Successfully');
});

conn.on('error', console.error.bind(console, 'error detected'));

conn.once('open', function(){
    firstEmployee.save(function(err, res) {
        if(err) throw err;
        console.log('res', res);
        conn.close();
    }, {collection: "employee"});
})
//firstUser.tax = 12;
//firstUser.userSalary();

