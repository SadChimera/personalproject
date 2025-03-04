const textElement = document.getElementById("text")
const optionButtonsElement = document.getElementById("option-buttons")

let state = {}

function startGame() {
    state ={}
    showTextNodes(1)
}

function showTextNodes(textNodeIndex) {

}

function selectOption(option) {

}

const TextNodes = {
    {
        id: 1,
        text: "You wake up inside a spaceship and you must commence your daily tasks.",
        options: [
            {
                text: "get up",
                setState: {getsUp: true},
                nextText: 2
            },
            {
                text: "stay in",
            }
        ]
    },
    {
    id: 2
    } 
}

startGame()