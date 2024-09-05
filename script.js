document.addEventListener("scroll", function() {
    const sections = document.querySelectorAll("section");
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollTop >= sectionTop - sectionHeight / 3) {
            section.classList.add("visible");
        }
    });
});


function sendMessage() {
    const userInput = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");

    if (userInput.value.trim() === "") return; // Don't send empty messages

    // Display user message
    const userMessage = document.createElement("div");
    userMessage.classList.add("message", "user-message");
    userMessage.innerText = userInput.value;
    chatBox.appendChild(userMessage);

    // AI Response
    const botResponse = getBotResponse(userInput.value);
    const botMessage = document.createElement("div");
    botMessage.classList.add("message", "bot-message");
    botMessage.innerText = botResponse;
    chatBox.appendChild(botMessage);

    userInput.value = ""; // Clear input

    // Scroll to the bottom
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Simple AI logic
function getBotResponse(input) {
    input = input.toLowerCase();

    if (input.includes("hello")) {
        return "Hi there! How can I help you?";
    } else if (input.includes("how are you")) {
        return "I'm just a bot, but I'm doing great! How about you?";
    } else if (input.includes("bye")) {
        return "Goodbye! Have a nice day!";
    } else {
        return "I'm not sure how to respond to that. Can you please elaborate?";
    }
}


// Event listener for "Send" button click
document.querySelector("button").addEventListener("click", sendMessage);

// Event listener for "Enter" key press
document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {  // If "Enter" key is pressed
        sendMessage();  // Send the message
    }
});




// script.js

document.addEventListener('DOMContentLoaded', function () {
    const moreInfoButtons = document.querySelectorAll('.more-info-btn');

    moreInfoButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('More information about this eco-friendly accommodation will be displayed here.');
        });
    });
});


// let nav = document.querySelector("#navbar")

// gsap.to(nav,{
   
    
//     scrollTrigger: {
//         scroller: "body",
//         trigger: "#navbar",
//         start: "top 0%",
//         markers: true,
//         pin: true,
        
//     }
// })