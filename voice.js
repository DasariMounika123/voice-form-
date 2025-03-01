document.getElementById("mic-btn").addEventListener("click", function() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "en-US";
    recognition.start();

    recognition.onresult = function(event) {
        document.getElementById("username").value = event.results[0][0].transcript;
    };

    recognition.onerror = function() {
        alert("Voice input failed. Try again.");
    };
});
