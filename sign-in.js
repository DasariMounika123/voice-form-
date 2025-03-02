function signInWithVoice() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.start();

    recognition.onresult = (event) => {
        const result = event.results[0][0].transcript;
        document.getElementById('username').value = result; // Assuming user speaks the username
        document.getElementById('password').value = 'voice-password'; // Use a default password for voice sign-in
        signIn();
    };

    recognition.onspeechend = () => {
        recognition.stop();
    };

    recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
    };
}

function signInWithText() {
    signIn();
}

function signIn() {
    // Here you can add authentication logic if needed
    window.location.href = 'form-selection.html';
}
