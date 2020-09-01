class MemoryGame {
    constructor() {
        this.showCard = this.showCard.bind(this);
        
    }
    gameboardSelector = '.game-wrapper'
    cards = null;
    allCardsSelector = "[data-card]";
    possibleCSSclasses = [
        "html-icon",
        "html-icon",
        "css-icon",
        "css-icon",
        "sass-icon",
        "sass-icon",
        "github-icon",
        "github-icon",
        "react-icon",
        "react-icon",
        "redux-icon",
        "redux-icon",
        "javascript-icon",
        "javascript-icon",
        "vue-icon",
        "vue-icon",
        "angular-icon",
        "angular-icon",
        "vsc-icon",
        "vsc-icon",
    ];
    initialGameTime = null;
    endGameTime = null;
    gameboard = null;
    pickedCards = [];
    timeHideElementsInitialize = 3000;
    timeHideElements = 320;
    maxPoints = 10;
    points = 0;

    initializeApp() {
        this.grabElements();
        this.boundCardsWithLogos();
        this.waitForHidingElements();
        this.initialGameTime = Date.now();
    }
    grabElements() {
        this.cards = [...document.querySelectorAll(this.allCardsSelector)];
        this.gameboard = document.querySelector(this.gameboardSelector)
    }
    hideAllCards() {
        this.cards.forEach((card) => {
            card.classList.add("hide");
        });
        this.addEventListeners();
    }

    waitForHidingElements() {
        setTimeout(() => this.hideAllCards(), this.timeHideElementsInitialize);
    }

    boundCardsWithLogos() {
        this.cards.forEach((card) => {
            let index = Math.floor(Math.random() * this.possibleCSSclasses.length);
            card.classList.add(this.possibleCSSclasses[index]);
            this.possibleCSSclasses.splice(index, 1);
        });
    }

    addEventListeners() {
        this.cards.forEach((card) => card.addEventListener("click", this.showCard));
    }

    showCard(e) {
        this.pickedCards.push(e.target);
        let firstCard = this.pickedCards[0];
        let secondCard = this.pickedCards[1];
        this.removeListener(firstCard);
        e.target.classList.remove("hide");
        if (
            this.pickedCards.length === 2 &&
            firstCard.className === secondCard.className
        ) {
            this.pickedCards.forEach((card) => {
                card.classList.add("match");

                this.removeListener(card);
            });
            this.points++;
            console.log(this.points);
            this.pickedCards = [];
        } else if (
            this.pickedCards.length === 2 &&
            firstCard.className !== secondCard.className
        ) {
            setTimeout(() => {
                this.pickedCards.forEach((card) => {
                    card.classList.add("hide");
                });
                this.pickedCards = [];
                this.addEventListeners();
            }, this.timeHideElements);
        }
        if (this.points === this.maxPoints) {
            this.endGameTime = Date.now();
            const modal = new WinningModal()
            modal.modalInit(this.gameboard, this.points, this.showGameTime());
        }
    }

    showGameTime(){
        return Number(((this.endGameTime - this.initialGameTime)/1000).toFixed())
    }

    removeListener(card) {
        card.removeEventListener("click", this.showCard);
    }
}