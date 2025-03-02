document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const gridContainer = document.querySelector(".grid");
    const cards = [
        {
            id: "bank-form",
            title: "Bank Account Opening Form",
            description: "Basic contact form with name, email, and message fields",
            fields: "2 fields",
            link: "bank-form.html"
        },
        {
            id: "job-form",
            title: "Job Application Form",
            description: "Standard job application form with personal and professional details",
            fields: "2 fields",
            link: "job-form.html"
        }
    ];

    function renderCards() {
        gridContainer.innerHTML = "";
        cards.forEach(card => {
            const cardElement = document.createElement("div");
            cardElement.classList.add("card");
            cardElement.id = card.id;
            cardElement.innerHTML = `
                <h2>${card.title}</h2>
                <p>${card.description}</p>
                <p>${card.fields}</p>
                <div class="actions">
                    <div class="icons">
                        <button><i class="fas fa-edit"></i></button>
                        <button onclick="deleteTemplate('${card.id}')"><i class="fas fa-trash"></i></button>
                    </div>
                    <button class="use-template" onclick="window.location.href = '${card.link}'">
                        Use Template
                        <i class="fas fa-arrow-right"></i>
                    </button>
                </div>
            `;
            gridContainer.appendChild(cardElement);
        });
    }

    window.addCard = function () {
        const newCardId = `card-${Date.now()}`;
        cards.push({
            id: newCardId,
            title: "New Custom Form",
            description: "A dynamically added form template.",
            fields: "3 fields",
            link: "#"
        });
        renderCards();
    }

    window.deleteTemplate = function (id) {
        const index = cards.findIndex(card => card.id === id);
        if (index !== -1) {
            cards.splice(index, 1);
            renderCards();
        }
    }

    renderCards();
});


function editTemplate(templateId) {
    const template = document.getElementById(templateId);
    const title = template.querySelector('h2').innerText;
    const description = template.querySelector('p').innerText;

    const newTitle = prompt("Edit Title:", title);
    const newDescription = prompt("Edit Description:", description);

    if (newTitle !== null) {
        template.querySelector('h2').innerText = newTitle;
    }
    if (newDescription !== null) {
        template.querySelector('p').innerText = newDescription;
    }
}

// function deleteTemplate(templateId) {
//     const template = document.getElementById(templateId);
//     template.remove();
// }
