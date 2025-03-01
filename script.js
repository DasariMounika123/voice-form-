document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("micEnabled") !== "true") {
        alert("Please sign in first.");
        window.location.href = "index.html";
        return;
    }

    let formType = localStorage.getItem("selectedForm");
    let formTitle = document.getElementById("form-title");
    let form = document.getElementById("dynamic-form");

    let fields = {
        college: ["Name", "Place", "Course", "Year"],
        internship: ["Name", "Company", "Position", "Duration"]
    };

    formTitle.innerText = formType === "college" ? "College Form" : "Internship Form";

    fields[formType].forEach(field => {
        let label = document.createElement("label");
        label.innerText = field;
        let input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("id", field.toLowerCase());
        input.setAttribute("placeholder", "Speak to fill");
        form.appendChild(label);
        form.appendChild(input);
    });
});

function startVoiceInput() {
    let recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.start();
    recognition.onresult = function (event) {
        let speechResult = event.results[0][0].transcript;
        let inputs = document.querySelectorAll("input");
        for (let input of inputs) {
            if (input.value === "") {
                input.value = speechResult;
                break;
            }
        }
    };
}
