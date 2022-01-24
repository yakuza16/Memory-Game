# [Memory Game](https://yakuza16.github.io/Memory-Game/ "Memory Game")

![](https://cdn2.iconfinder.com/data/icons/artificial-intelligence-6/64/ArtificialIntelligence1-256.png)

## Application made in:

**HTML**   ![](https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/96-html5-48.png)   **CSS**   ![](https://cdn3.iconfinder.com/data/icons/social-media-logos-flat-colorful-1/2048/5351_-_CSS3-64.png)   **JavaScript**   ![](https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-64.png)   **SVG Icons**   ![](https://cdn3.iconfinder.com/data/icons/cad-database-presentation-spreadsheet-vector-fil-2/512/28-48.png)

------------
This Memory Game App is made in **HTML, CSS, and Javascript**. It also uses **svg icons**. It is fully **flexible**. App is maded for **mobile and desktop devices.**

Structure of the game is build in HTML. One wrapper holds all the "game cards". In CSS we declare classes for the icons. In JS we have two Classes: MemoryGame and WinningModal. MemoryGame class holds all the logic of the game. At the start of the game it randomly add CSS classes for the cards. After that u can play the game. When all cards are discovered the summary modal shows. It will show you how many seconds you needed to discover all the cards. It also have the button which will reset the App, and give you opportunity to play again.

------------

If there's need - app can be easily upgraded for more cards. For example if there is need to add one or more cards pair, we need to:
1 .In HTML: Add two divs for one pair.
2  Add one or more SVG icon to the "icons" folder.
3  In CSS we need to add class for your new icon and the only one rule is that the class needs to end with: '-icon', for example: .css-icon. Add a rule for your class: `background-image:url("../pathToYourNewSVGIcon")`
