document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("signin-form");
    const voiceBtn = document.getElementById("voice-btn");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    // Function to enable speech recognition
    function startVoiceRecognition() {
        const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognition.lang = "en-US";
        recognition.start();

        recognition.onresult = function (event) {
            const spokenText = event.results[0][0].transcript.toLowerCase();
            
            // Simple command-based autofill
            if (spokenText.includes("email")) {
                emailInput.value = spokenText.replace("email", "").trim();
            } else if (spokenText.includes("password")) {
                passwordInput.value = spokenText.replace("password", "").trim();
            } else if (spokenText.includes("sign in")) {
                form.submit();
            }
        };
    }

    // Enable voice recognition when button is clicked
    voiceBtn.addEventListener("click", startVoiceRecognition);

    // Handle form submission
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (email && password) {
            // Simulate authentication (replace with actual validation)
            localStorage.setItem("authenticated", "true");
            window.location.href = "form-selection.html";
        } else {
            alert("Please enter valid credentials.");
        }
    });
});
