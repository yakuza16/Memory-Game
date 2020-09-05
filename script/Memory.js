class MemoryGame {
    constructor() {
        this.showCard = this.showCard.bind(this);
    }
    gameboardSelector = '.game-wrapper';
    allCardsSelector = "[data-card]";
    cards = null;
    possibleCSSclasses = null;
    initialGameTime = null;
    endGameTime = null;
    gameboard = null;
    pickedCards = [];
    pickedCardsMaxLength = 2;
    timeHideElementsInitialize = 3000;
    timeHideElements = 320;
    maxPoints = 10;
    points = 0;


    initializeApp() {
        this.grabElements();
        this.getClassnameForIcons();
        this.boundCardsWithLogos();
        this.waitForHidingElements();
        this.initialGameTime = Date.now();
    }

    grabElements() {
        this.cards = [...document.querySelectorAll(this.allCardsSelector)];
        this.gameboard = document.querySelector(this.gameboardSelector);
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
        this.cards.forEach((card) => {
            card.addEventListener("click", this.showCard)
            if (card.className.includes('match')) {
                this.removeListener(card)
            }
        });
    }

    showCard(e) {
        this.pickedCards.push(e.target);
        let firstCard = this.pickedCards[0];
        let secondCard = this.pickedCards[1];
        this.removeListener(firstCard)
        e.target.classList.remove("hide");
        if (this.pickedCards.length === this.pickedCardsMaxLength &&
            firstCard.className === secondCard.className) {
            this.pickedCards.forEach((card) => {
                this.removeListener(card);
                card.classList.add("match")
            });
            this.points++;
            this.pickedCards = [];
        } else if (this.pickedCards.length === this.pickedCardsMaxLength &&
            firstCard.className !== secondCard.className) {
            setTimeout(() => {
                this.pickedCards.forEach((card) => {
                    this.removeListener(card)
                    card.classList.add("hide");
                });
                this.pickedCards = [];
                this.addEventListeners();
            }, this.timeHideElements);
        }
        if (this.points === this.maxPoints) {
            this.gameFinish()
        }
    }

    gameFinish() {
        this.endGameTime = Date.now();
        const modal = new WinningModal();
        modal.modalInit(this.gameboard, this.points, this.showGameTime());
    }

    showGameTime() {
        return Number(((this.endGameTime - this.initialGameTime) / 1000).toFixed());
    }

    removeListener(card) {
        card.removeEventListener("click", this.showCard);
    }

    getClassnameForIcons() {
        const allIconsOnce = [];
        const icons = [];
        const allStyles = [...document.styleSheets[0].rules];
        allStyles.forEach((item) => {
            if (item.selectorText) {
                icons.push(item.selectorText)
            }
        });
        icons.filter(item => {
            if (item.includes('-icon')) {
                allIconsOnce.push(item);
            }
        })
        const doubleIconsArray = [...allIconsOnce, ...allIconsOnce].join('').split('.').slice(1);
        this.possibleCSSclasses = doubleIconsArray;
    }
}