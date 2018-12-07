// Lasse lagde dette

const play = {
    correct() {
        (new Audio('./lyder/correct.mp3')).play();
    },
    wrong()  {
        (new Audio('./lyder/wrong.mp3')).play();
    }
}

/*
setTimeout(() => {
    (new Audio('./lyder/correct.mp3')).play();
}, 1e3);

(() => {
    const script = document.createElement('script');
    script.src = 'https://rawgithub.com/hiddentao/google-tts/master/google-tts.min.js';
    document.head.appendChild(script);
    play.tts = txt => {
        return (new GoogleTTS('no')).play(txt);
    };
})()
*/