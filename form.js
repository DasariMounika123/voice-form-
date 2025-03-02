// Ensure SpeechRecognition is supported
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition) {
    document.addEventListener('DOMContentLoaded', () => {
        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-US';

        function startRecognition(event) {
            const button = event.target.closest('.icon-button'); // Get the clicked button
            if (!button) return;

            const inputField = button.previousElementSibling; // Find the input field next to the button
            if (!inputField || inputField.tagName !== 'INPUT') {
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
