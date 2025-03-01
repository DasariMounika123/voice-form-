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
});
