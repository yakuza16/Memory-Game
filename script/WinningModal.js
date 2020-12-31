export class WinningModal {
  modalInit(gameboard, points, time, score) {
    this.modalCreation(gameboard, points, time, score);
    this.restartGame();
  }

  modalCreation(gameboard, points, time, clicks) {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    this.modalContent(modal, points, time, clicks);
    gameboard.appendChild(modal);
  }

  modalContent(modal, points, time, clicks) {
    modal.innerHTML = `
        <h3 class="modal__header">Gratulations</h3>
        <p class="modal__info">Your score is <span>${points}</span> points in <span>${time}</span> seconds and <span>${clicks}</span> clicks.</p>
        <button data-playAgain class="modal__button">Play again</button>
        `;
  }

  restartGame() {
    document
      .querySelector("[data-playAgain]")
      .addEventListener("click", () => location.reload());
  }
}
