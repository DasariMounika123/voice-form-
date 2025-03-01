// Speech Recognition Setup
document.getElementById("sign-in-btn").addEventListener("click", function() {
    const username = document.getElementById("username").value.trim();
    if (username) {
        localStorage.setItem("user", username);
        window.location.href = "form-selection.html";
    } else {
        alert("Please use voice input to enter your username.");
    }
});
