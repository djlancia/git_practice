
// create array with messages
const messages = [
    "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.” ― William W. Purkey",
    "Be yourself; everyone else is already taken. ― Oscar Wilde",
    "Be the change that you wish to see in the world. ― Mahatma Gandhi",
    "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that. ― Martin Luther King Jr.",
    "We accept the love we think we deserve. ― Stephen Chbosky"
];

/* 
1. Create function
2. Using Math.random generate a random floating point number between 0 and 1; using (*) multiplying by the length of the array and place in a variable
3. create another variable with the random index of message[randomIndex];
4. using document.getElementByID make text (.textContent) equal the variable randomMessage

*/
/*
1. Create Event Listener to button
2. document.getElementByID("name of button").addEventListener('click', functionName)
3. initial message on page load with (functionName) generateMessage();


*/

function generateMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    const randomMessage = messages[randomIndex];
    document.getElementById('message-display').textContent = randomMessage;

}


generateMessage();

