function addField() {
    const fieldContainer = document.createElement('div');
    fieldContainer.className = 'field-container';

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Enter field value';
    input.className = 'input-field';

    const micButton = document.createElement('button');
    micButton.type = 'button';
    micButton.className = 'icon-button';
    micButton.innerHTML = '<i class="fas fa-microphone"></i>';
    micButton.onclick = function() {
        // Add voice input functionality here
        alert('Voice input functionality not implemented');
    };

    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.className = 'delete-button';
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.onclick = function() {
        fieldContainer.remove();
    };

    const fieldTypeSelect = document.createElement('select');
    fieldTypeSelect.className = 'select-field';
    fieldTypeSelect.onchange = function() {
        input.type = fieldTypeSelect.value;
    };

    const optionText = document.createElement('option');
    optionText.value = 'text';
    optionText.text = 'Text';
    fieldTypeSelect.appendChild(optionText);

    const optionEmail = document.createElement('option');
    optionEmail.value = 'email';
    optionEmail.text = 'Email';
    fieldTypeSelect.appendChild(optionEmail);

    const optionPassword = document.createElement('option');
    optionPassword.value = 'password';
    optionPassword.text = 'Password';
    fieldTypeSelect.appendChild(optionPassword);

    fieldContainer.appendChild(input);
    fieldContainer.appendChild(micButton);
    fieldContainer.appendChild(deleteButton);
    fieldContainer.appendChild(fieldTypeSelect);

    document.getElementById('fields').appendChild(fieldContainer);
}
