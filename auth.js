document.addEventListener("DOMContentLoaded", function () {
    const signInButton = document.getElementById("signin-button");
    const signInField = document.getElementById("signin-input");

    if (!signInButton || !signInField) {
        console.error("Sign-in elements not found!");
        return;
    }

    signInButton.addEventListener("click", function () {
        if (signInField.value.trim() !== "") {
            localStorage.setItem("user_signed_in", "true"); // Store sign-in state
            window.location.href = "form-selection.html"; // Redirect to form selection
        } else {
            alert("Please enter your name using voice input.");
        }
    });
});
