// Speech Recognition Setup
function signIn() {
    let username = document.getElementById("username").value;
    if (username.trim() !== "") {
        localStorage.setItem("username", username);
        localStorage.setItem("micEnabled", "true");
        window.location.href = "form-selection.html";
    } else {
        alert("Please enter a username.");
    }
}

function startVoiceInput() {
    let recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.start();
    recognition.onresult = function (event) {
        let speechResult = event.results[0][0].transcript;
        document.getElementById("username").value = speechResult;
        signIn();
    };
}
