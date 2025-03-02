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
            
            // Autofill based on voice commands
            if (spokenText.includes("email")) {
                emailInput.value = spokenText.replace("email", "").trim();
            } else if (spokenText.includes("password")) {
                passwordInput.value = spokenText.replace("password", "").trim();
            } else if (spokenText.includes("sign in")) {
                form.submit();
            }
        };

        recognition.onerror = function (event) {
            console.error("Speech recognition error:", event.error);
        };
    }

    // Attach voice recognition to button
    voiceBtn.addEventListener("click", startVoiceRecognition);

    // Handle form submission
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        // Simulate authentication (Replace with real authentication logic)
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        if (email && password) {
            // Store mic enabled status before redirect
            localStorage.setItem("micEnabled", "true");
            window.location.href = "form-selection.html"; // Redirect after login
        } else {
            alert("Please enter email and password.");
        }
    });
});
