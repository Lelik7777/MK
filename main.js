let player1 = {
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['', ''],
    attack() {
        console.log(`${this.name} fight...`)
    }
}
let player2 = {
    name: 'Subzero',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['', ''],
    attack() {
        console.log(`${this.name} fight...`)
    }
}

function createPlayer(playerNum, objectPlayer) {
    const $div = document.createElement('div');
    $div.classList.add(playerNum);
    document.querySelector('.arenas').appendChild($div);
    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');
    $div.insertAdjacentElement('afterbegin', $progressbar);
    const $life = document.createElement('div');
    $life.classList.add('life');
    $life.style.width = '100%';
    $progressbar.insertAdjacentElement('afterbegin', $life);
    const $name = document.createElement('div');
    $name.classList.add('name');
    $name.textContent = objectPlayer.name;
    $progressbar.insertAdjacentElement('beforeend', $name);
    const $character = document.createElement('div');
    $character.classList.add('character');
    $div.insertAdjacentElement('beforeend', $character);
    const $img = document.createElement('img');
    $img.setAttribute('src', objectPlayer.img);
    $character.insertAdjacentElement('afterbegin', $img);
}

createPlayer('player1', player1);
createPlayer('player2', player2)

