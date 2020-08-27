class MemoryGame{

cards = null;
allCardsSelector = '[data-card]';
possibleCSSclasses = ['html-icon', 'html-icon', 'css-icon', 'css-icon', 'sass-icon', 'sass-icon', 'github-icon', 'github-icon', 'react-icon' , 'react-icon', 'redux-icon', 'redux-icon', 'javascript-icon', 'javascript-icon', 'vue-icon', 'vue-icon', 'angular-icon', 'angular-icon' , 'vsc-icon' , 'vsc-icon']

initializeApp(){
this.grabElements()
this.boundCardsWithLogos()
this.waitForHidingElements()




}
grabElements(){
this.cards = [...document.querySelectorAll(this.allCardsSelector)]
}
hideAllCards(){
    this.cards.forEach(card => {
        card.classList.add('hide')
    });
}

waitForHidingElements(){
    setTimeout(()=>this.hideAllCards(),3000)
}

boundCardsWithLogos(){
    this.cards.forEach(card=>{
        let index = Math.floor(Math.random() * this.possibleCSSclasses.length)
console.log(index)
        card.classList.add(this.possibleCSSclasses[index])
        this.possibleCSSclasses.splice(index,1)
    })
}






}



const game = new MemoryGame()
game.initializeApp()
