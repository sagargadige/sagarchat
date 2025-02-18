// Predefined bot responses
const botResponses = {
    "hi": "Hello! How can I assist you today?",
    "hello": "Hi there! How can I help?",
    "how are you": "I'm just a bot, but I'm doing well! How about you?",
    "bye": "Goodbye! Have a great day!"
};

// Function to add message to the chat box
function addMessage(message, isUser = false) {
    const chatBox = document.getElementById("chat-box");
    const div = document.createElement("div");
    div.classList.add("message");
    div.classList.add(isUser ? "user-message" : "bot-message");
    div.textContent = message;
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the latest message
}

// Function to send a message
function sendMessage() {
    const userInput = document.getElementById("user-input").value.trim().toLowerCase();
    
    // Add user message to chat
    if (userInput) {
        addMessage(userInput, true);
        document.getElementById("user-input").value = ''; // Clear input

        // Respond based on predefined responses
        let response = botResponses[userInput] || "Sorry, I don't understand that.";
        addMessage(response, false);
    }
}

// Allow the user to hit enter to send the message
document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});
