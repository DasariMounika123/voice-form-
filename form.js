// Initialize SpeechRecognition API
// Check if browser supports SpeechRecognition
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition) {
    document.addEventListener('DOMContentLoaded', () => {
        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-US';

        function startRecognition(event) {
            const inputField = event.target.closest('.field-container').querySelector('.input-field');

            if (!inputField) {
                console.error("No input field found for this mic button.");
                return;
            }

            recognition.start();

            recognition.onresult = (event) => {
                inputField.value = event.results[0][0].transcript;
            };

            recognition.onerror = (event) => {
                console.error('Speech recognition error:', event.error);
            };
        }

        // Attach event listener to all mic buttons
        document.querySelectorAll('.icon-button').forEach(button => {
            button.addEventListener('click', startRecognition);
        });
    });
} else {
    console.warn('SpeechRecognition API is not supported in this browser.');
}
