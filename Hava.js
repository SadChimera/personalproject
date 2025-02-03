let myButton = document.querySelector("button");
let myParagraph = document.querySelector("p");
function setUserName() {
    const myName = prompt("Enter a name");
    localStorage.setItem("name", myName);
    myParagraph.textContent = `Enter a name, ${storedName}`;
}
myButton.addEventListener("click", () => {
    setUserName();
});
function setUserName() {
    const myName = prompt("Enter a name");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myParagraph.textContent = `Enter a name, ${myName}`
    }
}