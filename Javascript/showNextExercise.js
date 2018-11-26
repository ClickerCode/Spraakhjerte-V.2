var exerciseDiv = document.getElementById('exercise');

function showNextExercise() {
    exerciseDiv.innerHTML = `
        <p>Er katten er under sofaen?</p>
        <div class="box2"></div>
        <div class="picture2">
            <a target="_blank" href="Bilder/oppaa.jpg">
                <img src="Bilder/oppaa.jpg" alt="Oppå" width="500" height="300" />
            </a>
        </div>
        <button class="button" onclick="showWrong()">Riktig</button>
        <button class="button2" onclick="showCorrect()">Galt</button>
        <button onclick="showNextExercise2()">Neste oppgave</button>
        `;
}

function showCorrect() {
    exerciseDiv.innerHTML += `
    <div class="alertRight">Gratulerer! Du svarte riktig!</div>
        <div class="medal">
            <div class="ribbon"></div>
            <div class="coin"></div>
        </div>`;
    countScoreCorrect();
}

function showWrong() {
    exerciseDiv.innerHTML +=
        '<div class="alertWrong">Beklager. Du svarte feil.</div>';
    countScoreWrong();
}

function showNextExercise2() {
    exerciseDiv.innerHTML = `
    <div class="box3">Er katten over sofaen?</div>
    <div class="picture3">
    <a target="_blank" href="Bilder/over.jpg">
        <img src="Bilder/over.jpg" alt="Over" width="500" height="300" />
    </a>
    </div>
    <button class="button" onclick="showCorrect()">Riktig</button>
    <button class="button2" onclick="showWrong()">Galt</button>
        <button onclick="showNextExercise3()">Neste oppgave</button>
        `;
}

function showNextExercise3() {
    exerciseDiv.innerHTML = `
        <p>Sitter katten på høyre side av sofaen?</p>
        <div class="box2"></div>
        <div class="picture1">
           <a target="_blank" href="Bilder/hyre.png">
            <img src="Bilder/hyre.png" alt="Høyre" width="500" height="300" />
        </a>
        </div>
        <button class="button" onclick="showCorrect()">Riktig</button>
        <button class="button2" onclick="showWrong()">Galt</button>
        <button onclick="showNextExercise4()">Neste oppgave</button>
        `;
}

function showNextExercise4() {
    exerciseDiv.innerHTML = `
        <p>Er katten under sofaen?</p>
        <div class="box4"></div>
        <div class="picture4">
            <a target="_blank" href="Bilder/paa.png">
                <img src="Bilder/paa.png" alt="På" width="500" height="300" />
            </a>
        </div>
        <button class="button" onclick="showWrong()">Riktig</button>
        <button class="button2" onclick="showCorrect()">Galt</button>
        <button onclick="showNextExercise5()">Neste oppgave</button>
        `;
}

function showNextExercise5() {
    exerciseDiv.innerHTML = `
        <p>Er katten på venstre side av sofaen?</p>
        <div class="box5"></div>
        <div class="picture5">
            <a target="_blank" href="Bilder/over.jpg">
                <img src="Bilder/over.jpg" alt="Over" width="500" height="300" />
            </a>
        </div>
        <button class="button" onclick="showWrong()">Riktig</button>
        <button class="button2" onclick="showCorrect()">Galt</button>
        <button onclick="showNextExercise6()">Neste oppgave</button>
        `;

}

function showNextExercise6() {
    exerciseDiv.innerHTML = `
        <p>Sitter katten på venstre siden av sofaen?</p>
        <div class="box6"></div>
        <div class="picture6">
            <a target="_blank" href="Bilder/paavenstre.jpg">
                <img src="Bilder/paavenstre.jpg" alt="Venstre" width="500" height="300" />
            </a>
        </div>
        <button class="button" onclick="showCorrect()">Riktig</button>
        <button class="button2" onclick="showWrong()">Galt</button>
        <button onclick="showNextExercise7()">Neste oppgave</button>
        `;
}

function showNextExercise7() {
    exerciseDiv.innerHTML = `
        <p>Er katten på høyre side av sofaen?</p>
        <div class="box7"></div>
        <div class="picture7">
            <a target="_blank" href="Bilder/under.jpg">
                <img src="Bilder/under.jpg" alt="Under" width="500" height="300" />
            </a>
        </div>
        <button class="button" onclick="showWrong()">Riktig</button>
        <button class="button2" onclick="showCorrect()">Galt</button>
        <button onclick="showNextExercise8()">Neste oppgave</button>
        `;
}

function showNextExercise8() {
    exerciseDiv.innerHTML = `
        <p>Sitter katten på venstre side av sofaen?</p>
        <div class="box8"></div>
        <div class="picture8">
            <a target="_blank" href="Bilder/venstre.png">
                <img src="Bilder/venstre.png" alt="Venstre" width="500" height="300" />
            </a>
        </div>
        <button class="button" onclick="showCorrect()">Riktig</button>
        <button class="button2" onclick="showWrong()">Galt</button>
        <button onclick="showNextExercise8()">Neste oppgave</button>
        `;
}
