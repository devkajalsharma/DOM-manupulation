// const user = {
//     userName: "kajal",
//     logCount: 12,
//     isloggedIn: true,

//    Getallusers: function(){
//     console.log(`username: ${this.userName}`)
//    }
// }

// const UserOne = console.log(user.userName)

// const userTwo = console.log(`username: ${user.Getallusers()}`);


function user(userName, logCount, isloggedIn) {
    this.userName = userName;
    this.logCount = logCount;
    this.isloggedIn = isloggedIn;
    this.greeting = function () {
        console.log(`welcome: ${this.userName}`);
    }
}

const userOne = new user("hitesh", 12, true);
const userTwo = new user("kajal", 10, false);

console.log(userOne);
console.log(userTwo);
