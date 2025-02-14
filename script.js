document.addEventListener("DOMContentLoaded", () => {
    const messages = [
        "Точно?",
        "Ти впевнений??",
        "Добре подумай?",
        "А подумай ще...",
        "Будь-ласка!!!",
        "Якщо ти відмовиш, мені буде дуже сумно...",
        "Буде дууже сумно...",
        "Я буду плакати...",
        "Ну, добре давай тисни...",
        "Клац! ❤️"
    ];

    let messageIndex = 0;

    function handleNoClick() {
        const noButton = document.querySelector('.no-button');
        if (!noButton) return; 

        if (messageIndex < messages.length) {
            noButton.textContent = messages[messageIndex++];
        } else {
            noButton.textContent = "Ну гаразд... 😢";
        }
    }

    function handleYesClick() {
        alert("Ура! ❤️");
    }

    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');

    if (noButton) noButton.addEventListener("click", handleNoClick);
    if (yesButton) yesButton.addEventListener("click", handleYesClick);
});
