function startVoiceRecognition(inputId) {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "en-US";

    recognition.onresult = (event) => {
        document.getElementById(inputId).value = event.results[0][0].transcript;
    };

    recognition.start();
}
