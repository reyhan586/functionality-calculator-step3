const buttons = document.querySelector(".buttons");
buttons.addEventListener("click", clickfunc);
let condition = false;
let stop = true;
let numberOne = null;
let opratorOne = null;
let deleteNumber = false;
const display = document.querySelector(".zero");
const resultTop = document.querySelector(".result-top");
const mcBtn = document.querySelector(".MC");
const mrBtn = document.querySelector(".MR");
let secondNumber = null;
const historyBox = document.querySelector(".history-box");
const paragraphHistory = document.querySelector(".paraghraph-history");

function historyboxFunc(firstnum, secondnum, op, result) {
  const divHistory = document.createElement("div");
  divHistory.classList.add("div-history");
  historyBox.appendChild(divHistory);
  const paragraphBottom = document.createElement("p");
  paragraphBottom.classList.add("paraghraph-bottom");
  const paraghraphTop = document.createElement("p");
  paraghraphTop.classList.add("paraghraph-top");
  divHistory.appendChild(paraghraphTop);
  divHistory.appendChild(paragraphBottom);
  paragraphHistory.style.display = "none";
  paraghraphTop.innerHTML = `${firstnum} ${op} ${secondnum} =`;
  paragraphBottom.innerHTML = `${result}`;
}

function clickfunc(event) {
  if (event.target.classList.contains("numbers-value")) {
    stop = true;
    if (deleteNumber) {
      display.innerHTML = " ";
      display.innerHTML = event.target.value;
      deleteNumber = false;
      return;
    }
    if (display.innerHTML == "0") {
      display.innerHTML = event.target.value;
    } else {
      display.innerHTML += event.target.value;
    }
  } else if (event.target.classList.contains("oprator")) {
    if (stop) {
      if (!condition) {
        numberOne = display.innerHTML;
        opratorOne =
          event.target.value === "-"
            ? "-"
            : event.target.value === "+"
            ? "+"
            : event.target.value === "×"
            ? "×"
            : "÷";
        resultTop.innerHTML = `${numberOne} ${opratorOne}`;
        condition = true;
        deleteNumber = true;
      } else {
        if (opratorOne === "÷" && display.innerHTML == "0") {
          alert("cannot divide to zero");
          return;
        }

        resultTop.innerHTML = `${numberOne} ${opratorOne} ${display.innerHTML}`;
        display.innerHTML = (
          opratorOne === "-"
            ? parseFloat(numberOne) - parseFloat(display.innerHTML)
            : opratorOne === "+"
            ? parseFloat(numberOne) + parseFloat(display.innerHTML)
            : opratorOne === "×"
            ? parseFloat(numberOne) * parseFloat(display.innerHTML)
            : parseFloat(numberOne) / parseFloat(display.innerHTML)
        )
          .toFixed(7)
          .replace(/\.?0+$/, "")
          .toString(); /////////////////////////////// بگو to fixed is making zero
        deleteNumber = true;
      }

      stop = false;
    } else {
      opratorOne = event.target.value;
      resultTop.innerHTML = `${numberOne} ${opratorOne}`;
      return;
    }
  } else if (event.target.classList.contains("delete")) {
    display.innerText = display.innerText.slice(0, -1);
    if (display.innerHTML == "" || display.innerHTML === null) {
      display.innerHTML = "0";
    }
  } else if (event.target.classList.contains("delete-CE")) {
    display.innerText = "0";
  } else if (event.target.classList.contains("delete-c")) {
    opratorOne = null;
    numberOne = null;
    condition = false;
    resultTop.innerText = " ";
    display.innerText = "0";
  } else if (event.target.classList.contains("plus-minus")) {
    const number = parseFloat(display.innerHTML);
    if (Math.sign(number) === 1) {
      display.innerHTML = (Math.abs(number) * -1).toString();
    } else if (Math.sign(number) === -1) {
      display.innerHTML = Math.abs(number).toString();
    }
  } else if (event.target.classList.contains("button-x2")) {
    const powerOfTwo = parseFloat(display.innerHTML);
    const floatNumber = Math.pow(powerOfTwo, 2); //////////////////////////////////
    display.innerHTML = floatNumber.toString(); //////////////////////////////////
    resultTop.innerHTML = `sqr(${powerOfTwo.toString()})`;
  } else if (event.target.classList.contains("button-x3")) {
    const powerOfTree = parseFloat(display.innerHTML);
    const floatNumber = Math.pow(powerOfTree, 3);
    display.innerHTML = floatNumber.toString();
    resultTop.innerHTML = `cube(${powerOfTree.toString()})`;
  } else if (event.target.classList.contains("radical")) {
    const radicalValue = parseFloat(display.innerHTML);
    const radical = Math.sqrt(radicalValue).toString(); /////////////////////////
    display.innerHTML = radical.toString();
    resultTop.innerHTML = `√(${radicalValue})`;
  } else if (event.target.classList.contains("button-1x")) {
    if (display.innerHTML == "0") {
      alert("cannot divide number to zero");
      return;
    }
    const inverseXValue = parseFloat(display.innerHTML);
    const inverseX = 1 / inverseXValue;
    display.innerHTML = inverseX.toString();
    resultTop.innerHTML = `1/(${inverseXValue})`;
  } else if (event.target.classList.contains("point")) {
    if (display.innerHTML.includes(".")) {
      return;
    } else {
      display.innerHTML += ".";
    }
  } else if (event.target.classList.contains("equal")) {
    trash.style.display = "block";
    if (condition) {
      if (opratorOne === "÷" && display.innerHTML == "0") {
        alert("cannot divide to zero");
        return;
      }
      resultTop.innerHTML = `${numberOne} ${opratorOne} ${display.innerHTML}`;
      secondNumber = display.innerHTML;
      display.innerHTML = (
        opratorOne === "-"
          ? parseFloat(numberOne) - parseFloat(display.innerHTML)
          : opratorOne === "+"
          ? parseFloat(numberOne) + parseFloat(display.innerHTML)
          : opratorOne === "×"
          ? parseFloat(numberOne) * parseFloat(display.innerHTML)
          : parseFloat(numberOne) / parseFloat(display.innerHTML)
      )
        .toFixed(7)
        .replace(/\.?0+$/, "")
        .toString(); /////////////////////////////// to fixed is making zero
      deleteNumber = true;
      historyboxFunc(numberOne, secondNumber, opratorOne, display.innerHTML);
    } else if (!opratorOne && numberOne) {
      resultTop.innerHTML = `${numberOne} ${opratorOne} ${numberOne}`;
      display.innerHTML = (
        opratorOne === "-"
          ? parseFloat(numberOne) - parseFloat(numberOne)
          : opratorOne === "+"
          ? parseFloat(numberOne) + parseFloat(numberOne)
          : opratorOne === "×"
          ? parseFloat(numberOne) * parseFloat(numberOne)
          : parseFloat(numberOne) / parseFloat(numberOne)
      )
        .toFixed(7)
        .replace(/\.?0+$/, "")
        .toString(); /////////////////////////////// بگو to fixed is making zero
      deleteNumber = true;
      historyboxFunc(numberOne, numberOne, opratorOne, display.innerHTML);
    }
  } else if (event.target.classList.contains("radical-btn")) {
    const radical = parseFloat(display.innerHTML);
    const radicalNumber = Math.sqrt(radical, 2);
    display.innerHTML = radicalNumber.toString();
    resultTop.innerHTML = `√(${radical.toString()})`;
  } else if (event.target.classList.contains("percent-btn")) {
    if (!condition) {
      display.innerHTML = "0";
    } else {
      display.innerHTML = (numberOne * display.innerHTML) / 100;
    }
  }
}

const historyMemory = document.querySelector(".history-memory");
historyMemory.addEventListener("click", historyMemoryBox);
const memoryFunction = document.querySelector(".memory-function");
const buttonHistory = document.querySelector(".history");
const buttonMemory = document.querySelector(".memory");

function historyMemoryBox(event) {
  if (event.target === buttonHistory) {
    memoryFunction.style.width = "0";
    buttonHistory.style.borderBottom = "3px solid orange";
    buttonMemory.style.borderBottom = "0";
  }
  if (event.target === buttonMemory) {
    memoryFunction.style.width = "320px";
    buttonMemory.style.borderBottom = "3px solid orange";
    buttonHistory.style.borderBottom = "0";
  }
}

const mcButton = document.querySelector(".MC");
const mrButton = document.querySelector(".MR");
const mPlusButton = document.querySelector(".Mplus");
const mMinusButton = document.querySelector(".Mminus");
const msButton = document.querySelector(".MS");
const flexMemory = document.querySelector(".flex-memory");
const pMemory = document.querySelector(".p-memory-function");

msButton.addEventListener("click", memoryBox);

function memoryBox() {
  mcButton.style.cursor = "pointer";
  mrButton.style.cursor = "pointer";
  mrBtn.disabled = false;
  mcBtn.disabled = false;
  memoryFunction.style.width = "320px";
  buttonMemory.style.borderBottom = "3px solid orange";
  buttonHistory.style.borderBottom = "0";
  pMemory.style.display = "none";
  const paragraph = document.createElement("p");
  const divMemory = document.createElement("div");
  divMemory.classList.add("memory-container");
  paragraph.classList.add("memory-paragraph");
  divMemory.appendChild(paragraph);
  flexMemory.appendChild(divMemory);
  const divMemoryInside = document.createElement("div");
  divMemoryInside.classList.add("box-memory");
  divMemory.appendChild(divMemoryInside);
  const buttonMc = document.createElement("button");
  buttonMc.innerHTML = "MC";

  const buttonMplus = document.createElement("button");
  buttonMplus.innerHTML = "M+";

  const buttonMminus = document.createElement("button");
  buttonMminus.innerHTML = "M-";

  divMemoryInside.appendChild(buttonMc);
  divMemoryInside.appendChild(buttonMplus);
  divMemoryInside.appendChild(buttonMminus);
  paragraph.innerHTML = display.innerHTML;

  buttonMc.addEventListener("click", mcFunc);
  buttonMplus.addEventListener("click", mPlusFunc);
  buttonMminus.addEventListener("click", mMinusFunc);

  function mcFunc() {
    divMemory.remove();
    if (flexMemory.childNodes.length === 1) {
      pMemory.style.display = "block";
    }
  }

  function mPlusFunc() {
    paragraph.innerHTML =
      parseFloat(paragraph.innerHTML) + parseFloat(display.innerHTML);
  }

  function mMinusFunc() {
    paragraph.innerHTML =
      parseFloat(paragraph.innerHTML) - parseFloat(display.innerHTML);
  }
}

mcButton.addEventListener("click", mcFunc);
mrButton.addEventListener("click", recallMemoryFunc);
mPlusButton.addEventListener("click", mPlusFunc);
mMinusButton.addEventListener("click", mMinusFunc);

function mcFunc() {
  pMemory.style.display = "block";
  flexMemory.innerHTML = "";
}

function recallMemoryFunc() {
  display.innerHTML = paragraph.innerHTML;
}

function mPlusFunc() {
  paragraph.innerHTML =
    parseFloat(display.innerHTML) + parseFloat(paragraph.innerHTML);
}

function mMinusFunc() {
  paragraph.innerHTML =
    parseFloat(paragraph.innerHTML) - parseFloat(display.innerHTML);
}

const trash = document.querySelector(".trash-div");
trash.addEventListener("click", trashFunc);

function trashFunc() {
  const allDivHistory = document.querySelectorAll(".div-history");
  allDivHistory.forEach((element) => {
    element.remove();
  });
  paragraphHistory.style.display = "block";
}
