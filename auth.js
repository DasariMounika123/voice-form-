// Speech Recognition Setup
document.addEventListener("DOMContentLoaded", function () {
    function startVoiceRecognition(inputId) {
        const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognition.lang = "en-US";

        recognition.onresult = (event) => {
            document.getElementById(inputId).value = event.results[0][0].transcript;
        };

        recognition.onerror = (event) => {
            console.error("Speech Recognition Error:", event.error);
            alert("Speech recognition error. Please try again.");
        };

        recognition.start();
    }

    window.startVoiceRecognition = startVoiceRecognition;

    document.getElementById("signInBtn").addEventListener("click", function () {
        let username = document.getElementById("username").value.trim();
        if (username) {
            localStorage.setItem("user", username);
            window.location.href = "form-selection.html";
        } else {
            alert("Please enter or speak your name.");
        }
    });
});
