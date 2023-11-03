function user(num) {
    return num * 5;
}

user.power = 3
const userdetail = console.log(user(5));
console.log(userdetail)
console.log(user.power)
console.log(user.prototype)


function createUser(username, score) {
    this.username = username;
    this.score = score;

}

createUser.prototype.increament = function(){
    this.score++
    
}

createUser.prototype.printme = function(){
    console.log(`the  price is: ${this.score}`)
}

user1 = new createUser("hitesh", 25)
user2 = new createUser("kajal", 55)


user1.printme()
user1.increament()





