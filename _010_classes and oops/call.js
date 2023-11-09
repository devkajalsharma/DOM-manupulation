// call & this



function setusername(username) {
    this.username = username;
    console.log("Username set");
}

function CreateUser(username, email, password) {
    // this.username = username;
    setusername.call(this, username);
    this.email = email;
    this.password = password;
}

const data = new CreateUser("kajal sharma", "123@gmail.com", "12345");

console.log(data);

//

// Function Definitions:

// we have two functions defined: setusername and CreateUser.
// setusername(username)  It takes a single parameter, username, and sets the username property of the object it's called on to the provided username. 
// It also logs the message "Username set" to the console.
// CreateUser Function:

// In the CreateUser function,  Instead of directly setting the username property, we are now using setusername.call(this, username). 
// This line calls the setusername function in the context of the CreateUser object, effectively setting the username property with the provided value. It's equivalent to what you were doing before but is now done via the setusername function.
// Object Creation:

// The const data line creates a new object by calling the CreateUser constructor with the new keyword. 
// The CreateUser constructor sets the username, email, and password properties on the object using the setusername function.
// Logging Object:

// The last line, console.log(data), logs the data object to the console, displaying the properties of the data object, 
// including username, email, and password.
// Here's a breakdown of what data looks like after it's created:

// data.username: "kajal sharma" (set by the setusername function called within the CreateUser constructor)
// data.email: "123@gmail.com" (set by the CreateUser constructor)
// data.password: "12345" (set by the CreateUser constructor)