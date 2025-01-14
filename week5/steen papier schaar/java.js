document.addEventListener('DOMContentLoaded', function() {
    const KeuzeComputerElem = document.getElementById('KeuzeComputer');
    const KeuzeSpelerElem = document.getElementById('KeuzeSpeler');
    const Resultaat = document.getElementById('Resultaat');
    const possibleChoices = document.querySelectorAll('button');

    let player = '';
    let computer = '';
    let result = '';

    possibleChoices.forEach(function(button) {
        button.addEventListener('click', function(e) {
            player = e.target.id;

            KeuzeSpelerElem.innerHTML = player;

            generateKeuzeComputer();
            getResult();
        });
    });

    function generateKeuzeComputer() {
        const randomNum = Math.floor(Math.random() * 3) + 1;

        if (randomNum === 1) {
            computer = 'steen';
        } else if (randomNum === 2) {
            computer = 'papier';
        } else {
            computer = 'schaar';
        }

        KeuzeComputerElem.innerHTML = computer;
    }

    function getResult() {
        if (computer === player) {
            result = 'Gelijkspel!';
        } else if (
            (computer === 'steen' && player === 'schaar') ||
            (computer === 'papier' && player === 'steen') ||
            (computer === 'schaar' && player === 'papier')
        ) {
            result = 'Je hebt gewonnen!';
        } else {
            result = 'Je hebt verloren!';
        }

        Resultaat.innerHTML = result;
    }
});
