const promise1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false
        if (!error) {
            resolve({ username: "kajal", password: "123" })
        }
        else {
            console.log("ERROR: something went wrong");
        }
    }, 1000)
})

promise1.then((user) => {
    console.log(user)
    return user.username

})
    .then(function (username) {
        console.log(username)
    }).catch(function () {
        console.log(error)
    })


const promise2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false
        if (!error) {
            resolve({ username: "kajal", password: "123" })
        }
        else {
            console.log("ERROR: something went wrong");
        }
    }, 1000)
})

promise2.then((user) => {
    console.log(user)
    return user.username

})
    .then(function (username) {
        console.log(username)
    }).catch(function () {
        console.log(error)
    }).finally(() => console.log("This is either resolved or rejected"))




// async and await

const newPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if(!error) {
            resolve({ username: "hitesh", rollno: "234" })
        }
        else
        reject('Something Went Wrong')
    }, 1000)
})

async function handlepromise(){
   try {
    const response = await newPromise
    console.log(response)
   } catch (error) {
    console.log(error)
   }
}
handlepromise()