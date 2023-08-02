const btnToggle = document.querySelector('.toggle-btn');

btnToggle.addEventListener('click', ()=>{
    document.getElementById('sidebar').classList.toggle('active');
});

// GET https://api.rawg.io/api/platforms?key=YOUR_API_KEY
// GET https://api.rawg.io/api/games?key=YOUR_API_KEY&dates=2019-09-01,2019-09-30&platforms=18,1,7
const API_KEY = '9e16ee78e4fa4811ad7ef205fabe590c'

async function consultaDatos (){
    // let consulta = await fetch(`https://api.rawg.io/api/platforms?key=${API_KEY}`);
    let consultaDos = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}`) //;&dates=2019-09-01,2019-09-30&platforms=18,1,7`);
    datosObtenidos = await consultaDos.json();
    console.log(datosObtenidos)

}

consultaDatos();