export class WinningModal {
<<<<<<< HEAD
  modalInit(gameboard, points, time) {
    this.modalCreation(gameboard, points, time);
    this.restartGame();
  }

  modalCreation(gameboard, points, time) {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    this.modalContent(modal, points, time);
    gameboard.appendChild(modal);
  }

  modalContent(modal, points, time) {
    const modalHeading = document.createElement("h3");
    modalHeading.classList.add("modal__header");
    modalHeading.textContent = "Gratulations";
    const modalInfo = document.createElement("p");
    modalInfo.classList.add("modal__info");
    modalInfo.textContent = `Your score is ${points} points  in ${time} seconds.`;
    const modalBtn = document.createElement("button");
    modalBtn.classList.add("modal__button");
    modalBtn.setAttribute("id", "reset");
    modalBtn.textContent = "Play again";

    modal.appendChild(modalHeading);
    modal.appendChild(modalInfo);
    modal.appendChild(modalBtn);

    //   ALTERNATIVE BUT NOT SO SAFE
    // modal.innerHTML = `
    //     <h3 class="modal__header">Gratulations</h3>
    //     <p class="modal__info">Your score is <span>${points}</span> points  in <span>${time}</span> seconds.</p>
    //     <button data-playAgain class="modal__button">Play again</button>
    //     `;

    //   ALTERNATIVE BUT NOT SO SAFE
  }

  restartGame() {
    document
      .querySelector("#reset")
=======
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
>>>>>>> 8d02f39e3ec08f50d329dfb673588fef4dc2a0cf
      .addEventListener("click", () => location.reload());
  }
}
