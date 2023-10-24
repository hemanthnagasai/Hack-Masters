document.addEventListener('DOMContentLoaded', function () {
    const voteCountElements = document.querySelectorAll('.vote-count');

    voteCountElements.forEach(voteCountElement => {
        const ideaNumber = voteCountElement.closest('.idea-card').getAttribute('data-idea');
        const storedVotes = localStorage.getItem(`votes-idea-${ideaNumber}`) || 0;
        voteCountElement.textContent = `${storedVotes} vote${storedVotes !== '1' ? 's' : ''}`;
    });
});
