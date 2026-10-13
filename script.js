const generateBtnDisplay = document.querySelector(".generate-btn");
const colourContainers = document.querySelectorAll(".colour-box-container");
const colourContainerBox = document.querySelector(".colour-container");

if (generateBtnDisplay) {
    generateBtnDisplay.addEventListener("click", generateColours);
}

colourContainerBox.addEventListener("click", (event) => {
    const copyButton = event.target.closest(".copy-btn");
    const colourBox = event.target.closest(".colour-box");

    if (copyButton) {
        const hexValue = copyButton.parentElement.querySelector(".colour-title").textContent.trim();
        copyToClipboard(hexValue, copyButton);
        return;
    }

    if (colourBox) {
        const hexValue = colourBox.nextElementSibling.querySelector(".colour-title").textContent.trim();
        copyToClipboard(hexValue, colourBox);
    }
});

function generateColours() {
    const colours = [];

    for (let i = 0; i < 5; i++) {
        const currentColour = randomColourGenerator();
        colours.push(currentColour);
    }

    showColours(colours);
}

function randomColourGenerator() {
    let newColour = "#";
    const hexLetters = "0123456789ABCDEF";

    for (let i = 0; i < 6; i++) {
        newColour += hexLetters[Math.floor(Math.random() * hexLetters.length)];
    }

    return newColour;
}

function showColours(coloursArray) {
    colourContainers.forEach((colourContainer, index) => {
        const colourBoxElement = colourContainer.querySelector(".colour-box");
        const colourBoxTitleElement = colourContainer.querySelector(".colour-title");

        if (!colourBoxElement || !colourBoxTitleElement) {
            return;
        }

        colourBoxTitleElement.textContent = coloursArray[index];
        colourBoxElement.style.backgroundColor = coloursArray[index];
    });
}

function copyToClipboard(hexValue, triggerElement) {
    navigator.clipboard.writeText(hexValue)
        .then(() => {
            console.log(`Copied colour to clipboard: ${hexValue}`);

            if (triggerElement) {
                const originalText = triggerElement.innerHTML;
                triggerElement.innerHTML = "Copied!";

                setTimeout(() => {
                    triggerElement.innerHTML = originalText;
                }, 800);
            }
        })
        .catch((err) => {
            console.log(err);
        });
}

generateColours();