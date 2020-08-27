class MemoryGame {
    constructor() {
        this.showCard = this.showCard.bind(this)
    }


    cards = null;
    allCardsSelector = '[data-card]';
    possibleCSSclasses = ['html-icon', 'html-icon', 'css-icon', 'css-icon', 'sass-icon', 'sass-icon', 'github-icon', 'github-icon', 'react-icon', 'react-icon', 'redux-icon', 'redux-icon', 'javascript-icon', 'javascript-icon', 'vue-icon', 'vue-icon', 'angular-icon', 'angular-icon', 'vsc-icon', 'vsc-icon']

    pickedCards = [];


    initializeApp() {
        this.grabElements();
        this.boundCardsWithLogos();
        this.waitForHidingElements();

    }
    grabElements() {
        this.cards = [...document.querySelectorAll(this.allCardsSelector)]
    }
    hideAllCards() {
        this.cards.forEach(card => {
            card.classList.add('hide')
        });
        this.addEventListeners();
    }

    waitForHidingElements() {
        setTimeout(() => this.hideAllCards(),
            3000)
    }

    boundCardsWithLogos() {
        this.cards.forEach(card => {
            let index = Math.floor(Math.random() * this.possibleCSSclasses.length)
            card.classList.add(this.possibleCSSclasses[index])
            this.possibleCSSclasses.splice(index, 1)
        })
    }

    addEventListeners() {
        this.cards.forEach(card => card.addEventListener('click', this.showCard))
    }


    showCard(e) {
        this.pickedCards.push(e.target)
        let firstCard = this.pickedCards[0];
        let secondCard = this.pickedCards[1];
        this.removeListener(firstCard)
        if (secondCard) {
            this.removeListener(secondCard)
        }
        e.target.classList.remove('hide');
        if (this.pickedCards.length === 2 && firstCard.className === secondCard.className) {
            firstCard.classList.add('match')
            secondCard.classList.add('match')
            this.pickedCards.forEach(card => this.removeListener(card))
            this.pickedCards = [];
        } else if (this.pickedCards.length === 2 && firstCard.className !== secondCard.className) {
            setTimeout(() => {
                firstCard.classList.add('hide');
                secondCard.classList.add('hide');
                this.pickedCards = [];
                this.addEventListeners()
            }, 250)
        }

    }

    removeListener(card) {
        card.removeEventListener('click', this.showCard)
    }






}



const game = new MemoryGame()
game.initializeApp()