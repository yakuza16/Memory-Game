import {
    MemoryGame
} from "./Memory.js";

const game = new MemoryGame();
document.addEventListener('DOMContentLoaded', game.initializeApp())