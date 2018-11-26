// Lasse lagde dette

(() => {
    const script = document.createElement('script');
    script.src = 'https://rawgithub.com/hiddentao/google-tts/master/google-tts.min.js';
    document.head.appendChild(script);
})();

document.body.onload = () => {
    window.play = {
        correct: new Audio('../lyder/correct.mp3'),
        wrong: new Audio('../lyder/wrong.mp3'),
        tts: txt => (new GoogleTTS('no')).play(txt)
    }
}