const greetingDisplay = document.getElementById("greeting-display")
const recipient = document.getElementById("recipient-input")
const sender = document.getElementById("sender-input")
const greetingMsg = document.getElementById("greeting-select")
const form = document.getElementById("form") 
function writeGreeting() {
    // Write a function update the message in the greeting-display paragraph each time the form is updated.
    const greeting = recipient.value + ", " + greetingMsg.value + "from " + sender.value
    greetingDisplay.innerHTML = greeting
}
form.addEventListener("input", writeGreeting)