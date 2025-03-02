document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            
            if (validateEmail(email)) {
                console.log("Logging in with email:", email);
                // Call Firebase auth function here if needed
            } else {
                alert("Invalid email format");
            }
        });
    }
});
