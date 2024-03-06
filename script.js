let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let result = document.querySelector(".winner");
let winner;
let counter = 0;

const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((e) => {
  e.addEventListener("click", () => {
    if (counter % 2 == 0) {
      e.innerHTML = "X";
      counter++;
    } else {
      e.innerHTML = "O";
      counter++;
    }
    e.disabled = true;

    checkWinner();
  });
});

const disableBoxes = () => {
  for (e of boxes) {
    e.disabled = true;
  }
};

const enableBoxes = () => {
  for (e of boxes) {
    e.disabled = false;
  }
};

const checkWinner = () => {
  for (let pattern of winPattern) {
    // console.log(boxes[pattern[0]].innerHTML , boxes[pattern[1]].innerHTML , boxes[pattern[2]].innerHTML)
    let val1 = boxes[pattern[0]].innerText;
    let val2 = boxes[pattern[1]].innerText;
    let val3 = boxes[pattern[2]].innerText;

    if (val1 != "" && val2 != "" && val3 != "") {
      if (val1 === val2 && val2 === val3) {
        winner = val1;
        result.innerHTML = `${winner} has WON`;
        reset.innerHTML = "New Game";
        disableBoxes();
        // counter = 0 ;
      }
    }
  }
};

const clear = () => {
  for (e of boxes) {
    e.innerText = ``;
  }
  result.innerHTML = "LET'S SEE WHO WINS";
  counter = 0;
  enableBoxes();
  reset.innerHTML = "Reset";
};

reset.addEventListener("click", clear);
