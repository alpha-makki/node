const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/hrm");
const conn = mongoose.connection;

const emmployeeSchema = mongoose.Schema({
    name: String,
    email: String,
    password:String,
    gender: Number,
    basicSalary: Number,
    tax: Number,
    salary: Number
}, { autoCreate: false});
// userSchema.methods.userSalary = function(){
//     console.log('%s take home salary is %d', this.name, (this.basicSalary - ((this.basicSalary * this.tax) / 100)));
// }
const employee = mongoose.model('employee', emmployeeSchema);
const firstEmployee = new employee({name: 'Makki', email: 'makki@gmail.com', password:'abc123', gender: 0, basicSalary: 50000, tax: 8});

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
    });
})
console.log('Insert DAte:--', employee.find());
//firstUser.tax = 12;
//firstUser.userSalary();

