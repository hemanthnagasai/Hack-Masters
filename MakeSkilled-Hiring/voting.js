document.addEventListener('DOMContentLoaded', function () {
    const voteButtons = document.querySelectorAll('.vote-button');
    
    voteButtons.forEach(button => {
        button.addEventListener('click', function () {
            const ideaNumber = this.getAttribute('data-idea');
            // Implement your voting logic here, e.g., send a request to the server.
            alert(`You voted for Idea ${ideaNumber}`);
        });
    });
});
