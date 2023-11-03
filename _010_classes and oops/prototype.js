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


