// const name = "hitesh     "

// Object.prototype.truelength = function () {
//     console.log(`we provide true length`)
// }
// const data = name.truelength()




let myarray = ["thor", "spider"]

let heropower = {
    thor: "hammer",
    spider: "sling",

    getheroPower: function () {
        console.log(`spider herpower : ${this.spider}`)
    }
}

Object.prototype.kajal = function () {
    console.log(`kajal is present in all object`)
}
array.prototype.heyarray = function () {
    console.log(`i am only present for array`)
}
heropower.kajal()
myarray.kajal()
myarray.heyarray()
heropower.heyarray()



// example of creating method

const createanotherUser = "me&javascript    ";


// truelength method is created now
String.prototype.truelength = function () {
    console.log(`${this}`)
    console.log(`true length is : ${this.trim().length}`);
}

createanotherUser.truelength()
"string".truelength()

//practice work //

const students = {
    name: "raj",
    class: "5th"
};

const teacher = {
    makevideo: true
};

const teacherSupport = {
    isavailable: false,
    __proto__: teacher
};
// modern syntax //

console.log(teacherSupport)

Object.setPrototypeOf(teacherSupport, students)