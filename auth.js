// Speech Recognition Setup
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.continuous = false;
recognition.lang = 'en-US';

// Function to start voice input
function startListening(inputId) {
    const inputField = document.getElementById(inputId);
    recognition.start();
    
    recognition.onresult = function(event) {
        inputField.value = event.results[0][0].transcript;
        
        if (inputId === 'email') {
            setTimeout(() => startListening('password'), 1000); // Move to password after email
        }
    };

    recognition.onerror = function(event) {
        console.error("Speech recognition error:", event.error);
    };
}

// Auto-start voice input on page load
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => startListening('email'), 500); // Start listening after half a second
});
