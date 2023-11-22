const highScoresText = document.querySelector("#high-scores");
let highScoresTag = '';

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

highScores.forEach(highScoreData => {
    if (highScoreData && highScoreData.initials && highScoreData.score !== undefined) {
        highScoresTag += `<br><div>${highScoreData.initials} - ${highScoreData.score}</div>`;
    }
});

highScoresText.innerHTML = highScoresTag;