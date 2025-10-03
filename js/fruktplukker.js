// Først, opprett en knapp for å generere fruktene
const button = document.createElement("button");
button.innerHTML = "Start Game";
document.body.appendChild(button);
button.style.position= "absolute";
button.style.top = "40%";
button.style.left = "40%";
button.style.fontSize = "50px"
// Når knappen klikkes, generer en ny frukt
button.addEventListener("click", () => {
    button.style.display = "none";
    nyFrukt()
});

function spillSlutt(){
    const gameOverbutton = document.createElement("button");
    gameOverbutton.innerHTML = "Game Over";
    document.body.appendChild(gameOverbutton);
    gameOverbutton.style.position= "absolute";
    gameOverbutton.style.top = "40%";
    gameOverbutton.style.left = "40%";
    gameOverbutton.style.fontSize = "50px"
    gameOverbutton.addEventListener("click", () => {
        gameOverbutton.style.display = "none";
        nyFrukt()
    })
    
}

function nyFrukt() {
    const frukt = document.createElement("div");
    frukt.innerHTML = "🍎"; // Du kan endre dette til forskjellige frukt emojis
    frukt.style.fontSize = "100px";
    frukt.style.position = "absolute";

    let posX = Math.random() * (window.innerWidth - 50);
    let posY = Math.random() * (window.innerHeight - 700);

    frukt.style.left = posX + 'px';
    frukt.style.top = posY + 'px';

    document.body.appendChild(frukt);

    const speedY = 3;

    function move (){
        posY += speedY;
        frukt.style.top = posY + 'px';
        if (posY < window.innerHeight - 100){
            requestAnimationFrame(move);
        } else {
            spillSlutt();
        }
    }
    setTimeout(nyFrukt,2000);
    setTimeout(move,3000);
    // Når frukten klikkes, fjern den fra skjermen
    frukt.addEventListener("click", fjernFrukt)
}

/* Legg merke til bokstaven e inne i parentesen på linja under. 
Dette betyr at vi sender informasjon om hendelsen (event) som trigget funksjonen inn i funksjonen. e kalles hendelses-objektet */
function fjernFrukt(e)
{
    document.body.removeChild(e.target); 
    //e.target er det elementet som trigget hendelsen, det vil si elementet vi klikket på for å aktivere funksjonen.
}


