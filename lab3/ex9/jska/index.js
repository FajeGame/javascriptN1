class Employee{
    constructor(name, department, phoneNumber, salary) {
        this.name = name
        this.department = department
        this.phoneNumber = phoneNumber
        this.salary = salary
    }
    print(){
        for(let i in this){
            console.log(`${i}: ${this[i]}`)
        }
    }
}

let VasiaEmployee = new Employee("Вася", "Пушкинский", "8-800-555-353-35", 12563)
VasiaEmployee.print()

