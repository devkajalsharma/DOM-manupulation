class user {
    constructor(email, password) {
        this._email = email,
            this._password = password
    }
    get email() {
        return this._email.toUpperCase();
    }
    set email(value) {
        this._email = value;
    }

    get password() {
        return this._password.toUpperCase();
    }
    set password(value) {
        this._password = value;
    }
}

const me = new user("kajal@gmail.com", "12345")
console.log(me.email)
console.log(me.password)


// example 2
// emample 2
class person {
    constructor(name, age) {
        this.name = name,
            this.age = age
    }
    get name() {
        return this._name = this._name.toUpperCase();
    }
    set name(value) {
        this._name = value
    }

    get age() {
        return this._age 
    }
    set age(value) {
        if(value>=0 && value <=120){
            return this._age = value
        }
        else{
            console.error("invalid age entered")
        }
    }
}

const person1 = new person("suraj", 10)
console.log(person1.name)
console.log(person1.age)
