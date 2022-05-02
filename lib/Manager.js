// Properties: name, id, email, officeNumber
//Methods: getName(), getId(), getEmail(), getRole();
// return Manager

const Employee = require('./Employee');

class Manager extends Employee{
    constructor (name, id, email, officeNo){
        super(name, id, email);
        this.officeNo = officeNo;
    }

    getRole(){
        return 'Manager';
    }

    getOfficeNumber(){
        return this.officeNo;
    }
}

module.exports = Manager;