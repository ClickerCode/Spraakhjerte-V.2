var exerciseDiv = document.getElementById('exercise');

var exercises = [];

function showRandomThings(val) {
    var exerciseDiv = document.getElementById('exercise');
    var randomNumber = val || Math.random() * 8;

    if (typeof val === 'undefined') exercises.push(randomNumber);

    if (randomNumber < 1) {
        exerciseDiv.innerHTML = `<p>er katten i soffaen<p> <img src = "Bilder/oppaa.jpg" /> 
                                <button class="button" onclick="showWrong()">Riktig</button>
                                <button class="button2" onclick="showCorrect()">Galt</button>`;
    }

    else if (randomNumber < 2) {
        exerciseDiv.innerHTML = `<p>er katten på høyre side i soffaen? <p> <img src="Bilder/hyre.png"/> 
                                 <button class="button" onclick = "showCorrect()"> Riktig</button >
                                 <button class="button2" onclick="showWrong()" >Galt</button>`;

    }

    else if (randomNumber < 3) {
        exerciseDiv.innerHTML = `<p>er katten på soffaen? <p> <img src="Bilder/over.jpg"/> 
                                 <button class="button" onclick = "showWrong()" > Riktig</button >
                                 <button class="button2" onclick="showCorrect()" >Galt</button>`;

    }

    else if (randomNumber < 4) {
        exerciseDiv.innerHTML = `<p>er katten på soffaen? <p> <img src="Bilder/paa.png"/> 
                                 <button class="button" onclick = "showCorrect()"> Riktig</button >
                                 <button class="button2" onclick="showWrong()" >Galt</button>`;

    }

    else if (randomNumber < 5) {
        exerciseDiv.innerHTML = `<p>er på høyre side av soffaen? <p> <img src="Bilder/paavenstre.jpg"/> 
                                 <button class="button" onclick = "showWrong()" > Riktig</button >
                                 <button class="button2" onclick="showCorrect()" >Galt</button>`;


    }

    else if (randomNumber < 6) {
        exerciseDiv.innerHTML = `<p>er katten under soffaen? <p> <img src="Bilder/under.jpg"/> 
                                 <button class="button" onclick = "showCorrect()"> Riktig</button > 
                                 <button class="button2" onclick="showWrong()" >Galt</button> `;


    }

    else if (randomNumber < 7) {
        exerciseDiv.innerHTML = `<p>her katten på høyre siden i soffaen? <p> <img src="Bilder/venstre.png"/> 
                                 <button class="button" onclick = "showWrong()"> Riktig</button > 
                                 <button class="button2" onclick="showCorrect()" >Galt</button> `;


    }
}
function showCorrect() {
    exerciseDiv.innerHTML += `
        <div class="alertRight">Congratulation! You answered right!</div>`;
    addMedaljer();
}
function showWrong() {
    exerciseDiv.innerHTML += `
        <div class="alertWrong">Sorry.You answered wrong.</div> `;
}


function addMedaljer() {
    document.getElementById('medaljer').innerHTML += `
        <div class="medal">
            <div class="ribbon"></div>
            <div class="coin"></div>
        </div> `;

}
