var exerciseDiv = document.getElementById('exercise');

function showRandomThings() {
    var exerciseDiv = document.getElementById('exercise');
    var randomNumber = Math.random() * 8;
    if (randomNumber < 1) {
        exerciseDiv.innerHTML = `<p>er katten i soffaen<p> <img src = "../oppaa.jpg" /> 
                                <button class="button" onclick="showWrong()">Riktig</button>
                                <button class="button2" onclick="showCorrect()">Galt</button>
                                <button onclick="showRandomThings()">Neste oppgave</button>`;
    }

    else if (randomNumber < 2) {
        exerciseDiv.innerHTML = `<p>er katten på høyre side i soffaen? <p> <img src="../hyre.png"/> 
                                 <button class="button" onclick = "showCorrect()"> Riktig</button >
                                 <button class="button2" onclick="showWrong()" >Galt</button>
                                 <button onclick="showRandomThings()">Neste oppgave</button>`;

    }

    else if (randomNumber < 3) {
        exerciseDiv.innerHTML = `<p>er katten på soffaen? <p> <img src="../over.jpg"/> 
                                 <button class="button" onclick = "showWrong()" > Riktig</button >
                                 <button class="button2" onclick="showCorrect()" >Galt</button>
                                 <button onclick="showRandomThings()">Neste oppgave</button>`;

    }

    else if (randomNumber < 4) {
        exerciseDiv.innerHTML = `<p>er katten på soffaen? <p> <img src="../paa.png"/> 
                                 <button class="button" onclick = "showCorrect()"> Riktig</button >
                                 <button class="button2" onclick="showWrong()" >Galt</button>
                                 <button onclick="showRandomThings()">Neste oppgave</button>`;

    }

    else if (randomNumber < 5) {
        exerciseDiv.innerHTML = `<p>er på høyre side av soffaen? <p> <img src="../paavenstre.jpg"/> 
                                 <button class="button" onclick = "showCorrect()" > Riktig</button >
                                 <button class="button2" onclick="showWrong()" >Galt</button>
                                 <button onclick="showRandomThings()">Neste oppgave</button>`;


    }

    else if (randomNumber < 6) {
        exerciseDiv.innerHTML = `<p>er katten under soffaen? <p> <img src="../under.jpg"/> 
                                 <button class="button" onclick = "showCorrect()"> Riktig</button > 
                                 <button class="button2" onclick="showWrong()" >Galt</button>
                                 <button onclick="showRandomThings()">Neste oppgave</button>`;


    }

    else if (randomNumber < 7) {
        exerciseDiv.innerHTML = `<p>her katten på høyre siden i soffaen? <p> <img src="../venstre.png"/> 
                                 <button class="button" onclick = "showWrong()"> Riktig</button > 
                                 <button class="button2" onclick="showCorrect()" >Galt</button>
                                 <button onclick="showRandomThings()">Neste oppgave</button>`;


    }
}
    function showCorrect() {
        exerciseDiv.innerHTML += `
            <div class="alertRight">Congratulation! You answered right!</div>`;
    }
    function showWrong() {
        exerciseDiv.innerHTML += `
            <div class="alertWrong">Sorry.You answered wrong.</div> `;
    }
