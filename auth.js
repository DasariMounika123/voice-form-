function signIn() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email && password) {
        localStorage.setItem("user", email);
        window.location.href = "form-selection.html"; // Redirect to form selection
    } else {
        alert("Enter valid credentials");
    }
}
