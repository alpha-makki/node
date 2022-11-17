const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/hrm");
//mongoose.connect("mongodb+srv://makki:makki11233@cluster0.7jpudci.mongodb.net/hrm?retryWrites=true&w=majority");

//mongodb+srv://makki:<password>@cluster0.7jpudci.mongodb.net/?retryWrites=true&w=majority
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
const firstEmployee = new employee({name: 'Khalid', email: 'khalid@gmail.com', password:'abc123', gender: 0, basicSalary: 55000, tax: 8});

conn.on('connected', function(){
    console.log('db connected succesfully');
});

conn.on('disconnected', function(){
    console.log('Disconnected Successfully');
});

conn.on('error', console.error.bind(console, 'error detected'));

conn.once('open', function(){
    // firstEmployee.save(function(err, res) {
    //     if(err) throw err;
    //     console.log('res', res);
    //     conn.close();
    // });
 
    // employee.find(function(err, res){
    //     if(err) throw err;
    //     console.log('Data:--', res);
    // });
    // employee.findOne({'name': 'Makki'}, function(err, res) {
    //     if(err) throw err;
    //     console.log('Found One:--', res)
    //     conn.close();
    // })
    // var id = '6375d4c6c8e74a270fb27c8a'
    // employee.findById({'_id' : id}, function(err, res){
    //     if (err) throw err;
    //     console.log('Found by id:--', res.email);
    //     conn.close;
    // })
})

//firstUser.tax = 12;
//firstUser.userSalary();

