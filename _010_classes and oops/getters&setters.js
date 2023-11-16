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
