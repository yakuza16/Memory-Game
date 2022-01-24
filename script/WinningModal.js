export class WinningModal {
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
      .addEventListener("click", () => location.reload());
  }
}
