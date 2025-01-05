
let audio = new Audio('bgm.mp3');
audio.loop = true;

window.addEventListener('load', () => {
    const savedTime = localStorage.getItem('bgmTime');
    if (savedTime) {
        audio.currentTime = savedTime;
    }

    audio.play().catch(error => {
        console.warn('自動再生がブロックされました。ユーザー操作で再生してください。');
    });
});

window.addEventListener('beforeunload', () => {
    localStorage.setItem('bgmTime', audio.currentTime);
});
