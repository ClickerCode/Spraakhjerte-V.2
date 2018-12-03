let oppgaver, currentTask = -1, category, taskHistory = [];
const taskDiv = document.getElementById('task');
const medalDiv = document.getElementById('medaljer');

// Last inn bildepakke, og lagre i variablen 'oppgaver'
function lastOppgaver(mappe) {
    fetch(`./Bilder/${mappe}/oppgaver.json`, { cache: 'no-cache' }).then(obj=>obj.json()).then(json=>oppgaver=json);
}

// Velg oppgave - enten neste eller forrige
function showTask() {
    const obj = taskHistory[currentTask];
    console.log(obj);
    setHTML(obj.question, obj.img, obj.isCorrect);
    if (typeof obj.answered !== 'undefined') {
        taskDiv.innerHTML += `
            <div class="alert${obj.answered ? 'Right' : 'Wrong'}">${obj.answered ? 'Gratulerer! Du svarte riktig!' : 'Beklager! Du svarte feil.'}</div>
        `;
    }
}

// Neste oppgave - bruker neste som eksisterer, eller lager ny
function nextTask() {
    currentTask++;
    if (typeof taskHistory[currentTask] === 'undefined') {
        const next = Math.floor(Math.random() * oppgaver.length);
        const useCorrectAnswer = Boolean(Math.floor(Math.random() * 2));
        const obj = {
            img: oppgaver[next].bilde,
            question: oppgaver[next].tekst,
            isCorrect: useCorrectAnswer
        };
        if (!useCorrectAnswer) {
            while (obj.question === oppgaver[next].tekst) {
                obj.question = oppgaver[Math.floor(Math.random() * oppgaver.length)].tekst;
            }
        }
        taskHistory.push(obj);
        currentTask = (taskHistory.length - 1);
    }
    showTask();
}

// Forrige oppgave - laster inn forrige oppgave, men stopper på første oppgave
function previousTask() {
    currentTask--;
    if (typeof taskHistory[currentTask] === 'undefined') currentTask = 0;
    if (typeof taskHistory[0] === 'undefined') return nextTask();
    showTask();
}

// Svar - lagre svaret og oppdater HTML koden
function answer(bool) {
    if (typeof taskHistory[currentTask].answered === 'boolean') return showTask();
    taskHistory[currentTask].answered = bool;
    showTask();
    if (bool) newMedal();
}

// Legg til ny medalje ved rett svar på første forsøk
function newMedal() {
    const ribbon = document.createElement('div');
    ribbon.classList.add('ribbon');
    const coin = document.createElement('div');
    coin.classList.add('coin');
    const medal = document.createElement('div');
    medal.classList.add('medal');
    medal.append(ribbon, coin);
    medalDiv.append(medal);
}

// Nullstill alt, bortsett fra bildepakken som er hentet
function reset() {
    taskHistory = [];
    taskDiv.innerHTML = '';
    medalDiv.innerHTML = '';
}

// Setter HTML koden som er nødvendig for å vise tekst og bilde
function setHTML(question, img, isCorrect) {
    taskDiv.innerHTML = `
<p class="question">${question}</p>
<img src="Bilder${category ? ('/' + category) : ''}/${img}" alt="${img.split('.')[0]}">
<button class="button" onclick="answer(${isCorrect})">JA</button>
<button class="button2" onclick="answer(${!isCorrect})">NEI</button>
`;
}
