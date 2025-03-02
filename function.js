// Function to greet user
function greetUser(name) {
    console.log(`Welcome, ${name}!`);
}

// Function to validate email format
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Function to log out user
function logout() {
    console.log("User logged out");
}
