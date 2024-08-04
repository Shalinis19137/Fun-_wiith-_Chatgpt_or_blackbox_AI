const messages = document.querySelectorAll('.message');
let messageIndex = 0;

setInterval(() => {
    messages[messageIndex].style.opacity = 0;
    messageIndex = (messageIndex + 1) % messages.length;
    messages[messageIndex].style.opacity = 1;
}, 2000);