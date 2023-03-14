const cardArray = [{
        name: 'q',
        img: 'pics/q.png',
    },
    {
        name: 'w',
        img: 'pics/w.png',
    },
    {
        name: 'e',
        img: 'pics/r.png',
    },
    {
        name: 't',
        img: 'pics/t.png',
    },
    {
        name: 'y',
        img: 'pics/y.png',
    },
    {
        name: 'u',
        img: 'pics/u.png',
    },
    {
        name: 'i',
        img: 'pics/i.png',
    },
    {
        name: 'r',
        img: 'pics/r.png',
    },
    {
        name: 'q',
        img: 'pics/q.png',
    },
    {
        name: 'w',
        img: 'pics/w.png',
    },
    {
        name: 'e',
        img: 'pics/r.png',
    },
    {
        name: 't',
        img: 'pics/t.png',
    },
    {
        name: 'y',
        img: 'pics/y.png',
    },
    {
        name: 'u',
        img: 'pics/u.png',
    },
    {
        name: 'i',
        img: 'pics/i.png',
    },
    {
        name: 'r',
        img: 'pics/r.png',
    },
]

cardArray.sort(() => 0.4 - Math.random());

let gridDisplay = document.querySelector('#grid');
let resDisp = document.querySelector('#result')
let cardChosen = [];
let cardChosenId = [];
let cardWon = [];

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        let card = document.createElement('img');
        card.setAttribute('src', 'pics/back.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        gridDisplay.appendChild(card)
    }
}

createBoard()

function checkMatch() {
    let cards = document.querySelectorAll('img')
    let optionOneId = cardChosenId[0];
    let optionTwoId = cardChosenId[1];

    // if (optionOneId == optionTwoId) {
    //     console.log('aya')
    //     cards[optionOneId].setAttribute('src', 'pics/back.png');
    //     cards[optionTwoId].setAttribute('src', 'pics/back.png');
    // }

    if (cardChosen[0] == cardChosen[1]) {
        console.log('yay')
        cards[optionOneId].setAttribute('src', 'pics/blank.png');
        cards[optionTwoId].setAttribute('src', 'pics/blank.png');
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        cardWon.push(cardChosen);
    } else {
        console.log('try again')
        cards[optionOneId].setAttribute('src', 'pics/back.png');
        cards[optionTwoId].setAttribute('src', 'pics/back.png');
    }
    resDisp.textContent = cardWon.length;
    cardChosen = [];
    cardChosenId = [];

    if (cardWon.length == cardArray.length / 2) {
        alert('yay u wo!!!')
    }
}

function flipCard() {
    let cardId = this.getAttribute('data-id');
    cardChosen.push(cardArray[cardId].name)
    cardChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}