function startVoiceRecognition() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "en-US";

    recognition.onresult = (event) => {
        document.getElementById("username").value = event.results[0][0].transcript;
    };

    recognition.start();
}
