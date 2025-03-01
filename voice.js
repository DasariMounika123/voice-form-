document.addEventListener("DOMContentLoaded", function () {
    console.log("voice.js loaded successfully!");

    function startVoiceRecognition(inputId) {
        console.log("Voice recognition started for:", inputId);
        
        if (!window.SpeechRecognition && !window.webkitSpeechRecognition) {
            alert("Speech Recognition not supported in this browser.");
            return;
        }

        const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognition.lang = "en-US";

        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            console.log("Recognized Speech:", transcript);
            document.getElementById(inputId).value = transcript;
        };

        recognition.onerror = (event) => {
            console.error("Speech Recognition Error:", event.error);
            alert("Speech recognition error: " + event.error);
        };

        recognition.start();
    }

    window.startVoiceRecognition = startVoiceRecognition;
});
