// TODO: get display elements
const generateBtnDisplay = document.querySelector(".generate-btn");
const colourContainers = document.querySelectorAll(".colour-box-container");
const colourContainerBox = document.querySelector(".colour-container");
// TODO: create event listener for btn click 
generateBtnDisplay.addEventListener("click",generateColours)
// TODO: create method that handles the generate btn click
// TODO: method must store the 5 colors
// TODO: create method to generate random colors
// TODO: update the display with the new colors
// TODO: enable copy functionality
// TODO:  update display to show success
colourContainerBox.addEventListener('click',(event)=>{
    if(event.target.classList.contains("copy-btn")){
        console.log(event.target.tagName);
        let hexValue = event.target.previousElementSibling.textContent;
        console.log();
         navigator.clipboard.writeText(hexValue)
            .then(()=>{
                console.log(`copied colour to clipboard ${hexValue}`)

            }).catch((err)=>{
                console.log(err);

            });


    }else if(event.target.classList.contains("colour-box")){
         let hexValue = event.target.nextElementSibling.querySelector(".colour-title").textContent;
         console.log(`colour box selected {hexValue}`);
         navigator.clipboard.writeText(hexValue)
            .then(()=>{
                console.log(`colour box selected {hexValue}`);

            }).catch((err)=>{
                console.log(err);

            });

    }



})



function generateColours(){
    let colours =[]
    for(let i=0; i<5; i++){
        currentColour = randomColourGenerator();
        colours.push(currentColour);

    };
    console.log(`generating the required colours ${colours}`);
    showColours(colours )

}

function randomColourGenerator(){
    let newColour ="#";
    const hexLetters ="0123456789ABCDEF";
    for(let i=0;i<6;i++){
        newColour+= hexLetters[Math.floor(Math.random()*16)]

    };

    
    return newColour;
}

function showColours(coloursArray){
    console.log(colourContainers)
    colourContainers.forEach((colourContainer,index)=>{
        let colourBoxElement = colourContainer.querySelector(".colour-box");
        let colourBoxTitleElement = colourContainer.querySelector(".colour-title");
        colourBoxTitleElement.textContent = coloursArray[index] 
        colourBoxElement.style.backgroundColor = coloursArray[index];

        // copy to clipboard
        // const copyBtn = document.querySelector(".copy-btn");
        // copyBtn.addEventListener('click',(event)=>{
        //     navigator.clipboard.writeText(event.target.parentElement.previousElementSibling.textContent)
        //     .then(()=>{
        //         console.log(`copied colour to clipboard ${event.target.parentElement.previousElementSibling.textContent}`)

        //     }).catch((err)=>{
        //         console.log(err);

        //     });


        // });


    });


};

// function copyToClipboard(){

// }