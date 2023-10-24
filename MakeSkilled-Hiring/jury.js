document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('submit-review');
    submitButton.addEventListener('click', function () {
        const projectScores = [];
        const projectComments = [];

        for (let i = 1; i <= numberOfProjects; i++) {
            const scoreInput = document.getElementById(`score${i}`);
            const commentInput = document.getElementById(`comments${i}`);

            projectScores.push(scoreInput.value);
            projectComments.push(commentInput.value);
        }

    });
});
