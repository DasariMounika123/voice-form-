// Speech Recognition Setup
function signIn() {
    let username = document.getElementById("username").value.trim();

    if (username) {
        localStorage.setItem("user", username);
        window.location.href = "form-selection.html"; // Redirect after sign-in
    } else {
        alert("Please enter or speak your name.");
    }
}
