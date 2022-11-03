const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password:String,
    gender: Number,
    basicSalary: Number,
    tax: Number,
    salary: Number
});
userSchema.methods.userSalary = function(){
    console.log('%s take home salary is %d', this.name, (this.basicSalary - ((this.basicSalary * this.tax) / 100)));
}
const user = mongoose.model('user', userSchema);
const firstUser = new user({name: 'Makki', email: 'makki@gmail.com', password:'abc123', gender: 0, basicSalary: 50000, tax: 8});
firstUser.tax = 12;
firstUser.userSalary();

