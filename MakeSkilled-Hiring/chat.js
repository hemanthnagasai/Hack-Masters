// chat.js

document.addEventListener('DOMContentLoaded', function () {
    const messagesList = document.getElementById('messages');
    const messageInput = document.getElementById('message-input');
    const usernameInput = document.getElementById('username');
    const sendButton = document.getElementById('send-button');
    const emojiButtons = document.querySelectorAll('.emoji-button'); // Select all emoji buttons
    const fileInput = document.getElementById('file-input');
    const attachmentList = document.getElementById('attachment-list');

    sendButton.addEventListener('click', function () {
        const username = usernameInput.value;
        const message = messageInput.value;

        if (username && message) {
            const listItem = document.createElement('li');
            listItem.className = 'user-message';
            listItem.textContent = `${username}: ${message}`;

            messagesList.appendChild(listItem);

            // Clear the input
            messageInput.value = '';

            // Optionally, you can send the message to the server here.
        }
    });

    // Event listener for the emoji buttons
    emojiButtons.forEach((emojiButton) => {
        emojiButton.addEventListener('click', function () {
            const messageInput = document.getElementById('message-input');
            const emoji = this.textContent;
            messageInput.value += emoji;
        });
    });

    // Event listener for file input changes
    fileInput.addEventListener('change', function () {
        const files = fileInput.files;
        for (const file of files) {
            // Check if it's an allowed file type
            if (/\.(txt|doc|pdf|ppt)$/i.test(file.name)) {
                const attachmentItem = document.createElement('div');
                attachmentItem.className = 'attachment-item';
                attachmentItem.innerHTML = `<span>${file.name}</span><button>&times;</button>`;

                // Event listener to remove attachment
                const closeButton = attachmentItem.querySelector('button');
                closeButton.addEventListener('click', function () {
                    attachmentItem.remove();
                });

                attachmentList.appendChild(attachmentItem);
            } else {
                alert(`Unsupported file type: ${file.name}`);
            }
        }
    });
});
