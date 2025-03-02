document.addEventListener("DOMContentLoaded", function () {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    const signInField = document.getElementById("signin-input");
    const signInButton = document.getElementById("signin-button");

    if (!signInField || !signInButton) {
        console.error("Sign-in input or button not found.");
        return;
    }

    recognition.onresult = function (event) {
        const transcript = event.results[0][0].transcript.trim();
        signInField.value = transcript;
    };

    recognition.onerror = function (event) {
        console.error("Speech recognition error:", event.error);
    };

    document.getElementById("mic-button").addEventListener("click", function () {
        recognition.start();
    });

    signInButton.addEventListener("click", function () {
        if (signInField.value.trim() !== "") {
            localStorage.setItem("user_signed_in", "true"); // Store sign-in state
            window.location.href = "form-selection.html"; // Redirect to form selection
        } else {
            alert("Please enter your name using voice input.");
        }
    });
});
