(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json"; 

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();

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
    const yesButton = document.querySelector('.yes-button');

    if (!noButton || !yesButton) return; 

    if (messageIndex < messages.length) {
        noButton.textContent = messages[messageIndex++];
    } else {
        noButton.textContent = "Ну гаразд... 😢";
    }
}

function handleYesClick() {
    alert("Ура! ❤️");
}

document.addEventListener("DOMContentLoaded", () => {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');

    if (noButton) noButton.addEventListener("click", handleNoClick);
    if (yesButton) yesButton.addEventListener("click", handleYesClick);
});
