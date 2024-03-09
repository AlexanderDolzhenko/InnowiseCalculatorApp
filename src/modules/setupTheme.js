export function handleThemeClick() {
  const buttons = document.querySelectorAll(".button");
  const roundRed = document.querySelector(".round.red");
  const roundYellow = document.querySelector(".round.yellow");
  const roundGreen = document.querySelector(".round.green");
  const display = document.querySelector(".display");
  const calculatorBack = document.querySelector(".calculator");
  function switchColor() {
    display.style.backgroundColor = "#000";
    calculatorBack.style.backgroundColor = "#000";
  }

  roundRed.addEventListener("click", function () {
    buttons.forEach((button) => {
      button.style.backgroundColor = "#ff5f52";
    });
    display.style.color = "#ff5f52";
    switchColor();
  });

  roundYellow.addEventListener("click", function () {
    buttons.forEach((button) => {
      button.style.backgroundColor = "#f3ba25";
    });
    display.style.color = "#f3ba25";
    switchColor();
  });

  roundGreen.addEventListener("click", function () {
    buttons.forEach((button) => {
      button.style.backgroundColor = "#26c938";
    });
    display.style.color = "#26c938";
    switchColor();
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      buttons.forEach((button) => {
        button.style.backgroundColor = "";
      });
      display.style.color = "";
      display.style.backgroundColor = "";
      calculatorBack.style.backgroundColor = "";
    }
  });
}
