// Kjører denne funksjonen med en gang det kan, og bruker async for å unngå forsinket svar (grunnet 'fetch' som er async)
!async function() {
    const frontPage = document.getElementById('mainPage');
    let pageList = [];

    /**
     * Funksjoner
     */

    // Hent
    async function getPageList() {
        let arr = [];
        await fetch('./bildepakker.json', { cache: 'no-cache' }).then(data=>data.json()).then(obj=>{arr=obj});
        pageList = arr;
        pageList.filter(val => typeof val === 'string');
        console.log(arr, pageList);
    }

    async function forEach() {
        let html = '';
        for (let i = 0; i < pageList.length; i++) {
            html += await listCode(pageList[i]);
        }
        return html;
    }

    await getPageList();

    async function listCode(val) {
        console.log(val);
        let img;
        await fetch(`./Bilder/${val}/oppgaver.json`, { cache: 'no-cache' }).then(obj=>obj.json()).then(json=>{console.log(json[0].bilde);img=json[0].bilde});
        if (typeof img !== 'string') return '';
        // Knappene med bilde og tekst blir hentet her
        return `
        <div class="list-img" onclick="chooseGame('${val}')">
            <div class="startGame">
                <img src="Bilder/${val}/${img}" alt="${val}" onmouseover="play.voice('${val}')">
                <hr>
                <p>${val}</p>
            </div>
        </div>`;
    }

    // Forsidens HTML blir lagd her
    frontPage.innerHTML = `
        <h1 class="header">Forside</h1>
        <div class="buttonRow" style="display:flex;flex-direction:row;flex-wrap:wrap">
            ${await forEach()}
        </div>
    `;
}()

function chooseGame(game) {
    switchPage();
    lastOppgaver(game).then(nextTask);
}

function switchPage() {
    document.getElementById('mainPage').classList.toggle('hidePage');
    document.getElementById('gamePage').classList.toggle('hidePage');
    reset();
}