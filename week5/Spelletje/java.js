const Knop = document.getElementById('Knop');
const Blok = document.getElementById('Blok');

let startTime, endTime;

Knop.addEventListener('click', startGame);

function startGame(){

    Blok.style.backgroundColor = 'red';
    Blok.addEventListener('click', endGame);

    const randomTime = Math.random() * 10000;

    setTimeout(() => {
        Blok.style.backgroundColor = 'green';
        startTime = new Date().getTime();
    },randomTime);
}

function endGame() {
    if (Blok.style.backgroundColor === 'green') {
        endTime = new Date().getTime();
        const reactionTime = endTime - startTime;
        alert(`Je reactietijd was ${reactionTime} milliseconden.`);
    } else {
        alert('Je was te vroeg!');
    }

    Blok.style.backgroundColor = 'white';

    Blok.removeEventListener('click', endGame);
}
