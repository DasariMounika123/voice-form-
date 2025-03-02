// Initialize SpeechRecognition API
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
if (SpeechRecognition) {
    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    function startRecognition(event) {
        const inputField = event.target.previousElementSibling; // Get the corresponding input field

        recognition.start();

        recognition.onresult = (event) => {
            inputField.value = event.results[0][0].transcript; // Set recognized speech as input value
        };

        recognition.onerror = (event) => {
            console.error('Speech recognition error:', event.error);
        };
    }

    // Attach event listener to microphone buttons dynamically
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('.icon-button').forEach(button => {
            button.addEventListener('click', startRecognition);
        });
    });
} else {
    console.warn('SpeechRecognition API is not supported in this browser.');
}
