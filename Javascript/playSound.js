// Lasse lagde dette

const play = {
    correct() {
        (new Audio('./lyder/correct.mp3')).play();
    },
    wrong()  {
        (new Audio('./lyder/wrong.mp3')).play();
    }
};

!function() {
    const script = document.createElement('script');
    script.src = 'http://code.responsivevoice.org/responsivevoice.js';
    document.head.appendChild(script);
    play.voice = (txt, woman = true) => {
        woman = Boolean(woman); // tvunget til true eller false
        responsiveVoice.speak(txt, `Norwegian ${woman ? 'Fem' : 'M'}ale`, { rate: 0.9 });
    };
}()

/*
setTimeout(() => {
    (new Audio('./lyder/correct.mp3')).play();
}, 4e3);
*/