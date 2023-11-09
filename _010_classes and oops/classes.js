
class user {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;


    }
    encryption() {
        return `${this.password}abc`
    }

    toUppercase() {
        return `${this.username.toUpperCase()}`
    }


}

const user1 = new user("kajal", "kajal@gmail.com", "123")
console.log(user1.toUppercase());
console.log(user1.encryption());


// behind the scene

function anotheruser(username,email,password){
this.username = username;
this.email = email;
this.password = password;
}

anotheruser.prototype.encryption= function(){
    return `${this.password}abc`
}

anotheruser.prototype.changetoUppercase= function(){
    return `${this.username.toUpperCase()}`
}
 const user2 = new anotheruser("raj","raj@gmail.com","123")

 console.log(user1.encryption());
 console.log(user1.changetoUppercase());