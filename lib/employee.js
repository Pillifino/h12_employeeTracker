
class employee {
    constructor(firstName, lastName, role, manager) {
        this.firstName = firstName; // initialize parameter
        this.lastName = lastName; // initialize parameter
        this.role = role; // initialize parameter
        this.manager = manager
    }
    getFirstName() {
        return this.firstName;
    }
    getLastName() {
        return this.lastName;
    }
    getRole() {
        return this.role;
    }
    getRole2(){
        return "employee";
    }
    getManager() {
        return this.manager;
    }
    render() {
        
    }
}


module.exports = employee;