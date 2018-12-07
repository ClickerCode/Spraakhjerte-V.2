!async function() {
    const frontPage = document.getElementById('mainPage');
    let pageList = [];

    // Functions
    async function hentArray() {
        let arr;
        await fetch('./bildepakker.json', { cache: 'no-cache' }).then(data=>data.json()).then(obj=>{arr=obj});
        return arr;
    }

    async function forEach() {
        let html = '';
        for (let i = 0; i < pageList.length; i++) {
            html += await listCode(pageList[i]);
        }
        return html;
    }

    async function getPageList() {
        let arr = [];
        await hentArray().then(obj=>{
            arr = obj;
            pageList = obj;
            pageList.filter(val => typeof val === 'string');
        });
        console.log(arr, pageList);
    }

    await getPageList();

    async function listCode(val) {
        console.log(val);
        let img;
        await fetch(`./Bilder/${val}/oppgaver.json`, { cache: 'no-cache' }).then(obj=>obj.json()).then(json=>{console.log(json[0].bilde);img=json[0].bilde});
        if (typeof img !== 'string') return '';
        return `
        <div class="list-img" onclick="chooseGame('${val}')">
            <img src="Bilder/${val}/${img}" alt="${val}">
        </div>`;
    }

    frontPage.innerHTML = `
        <h1>Forside</h1>
        <div>${await forEach()}
        </div>
    `;
}()

function chooseGame(game) {
    switchPage();
    lastOppgaver(game);
}

function switchPage() {
    document.getElementById('mainPage').classList.toggle('hidePage');
    document.getElementById('gamePage').classList.toggle('hidePage');
    reset();
}