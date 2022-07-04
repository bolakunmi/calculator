// initialization and assigning
const display = document.querySelector(".display");
const percentage = document.querySelector(".percentage");
const backspace = document.querySelector(".backspace");
const clear_button = document.querySelector(".clear_button");
const on_off = document.querySelector(".on_off");
const inverse = document.querySelector(".inverse");
const square = document.querySelector(".square");
const squareroot = document.querySelector(".squareroot");
const divide = document.querySelector(".divide");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const multiply = document.querySelector(".multiply");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const subtract = document.querySelector(".subtract");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const add = document.querySelector(".add");
const negative = document.querySelector(".negative");
const zero = document.querySelector(".zero");
const decimal = document.querySelector(".decimal");
const equals = document.querySelector(".equals");

// event listeners
let calculator = "on";
on_off.addEventListener("click", function () {
  if (calculator == "on") {
    display.innerHTML = "";
    display.style.backgroundColor = "rgba(50 50 50)";
    calculator = "off";
  } else {
    calculator = "on";
    display.style.background = "rgba(128, 128, 128, 0.664)";
  }
});

percentage.addEventListener("click", function () {
  if (calculator == "on") {
    display.innerHTML = parseFloat(display.innerHTML) / 100;
  }
});

backspace.addEventListener("click", function () {
  if (calculator == "on") {
    display.innerHTML = display.innerHTML.substring(
      0,
      display.innerHTML.length - 1
    );
  }
});

clear_button.addEventListener("click", function () {
  if (calculator == "on") {
    display.textContent = "";
  }
});

inverse.addEventListener("click", function () {
  if (calculator == "on") {
    let num = 1 / display.innerHTML;

    display.innerHTML = Math.round(num * 100000) / 100000;
  }
});

square.addEventListener("click", function () {
  if (calculator == "on") {
    display.innerHTML = parseFloat(display.innerHTML) ** 2;
  }
});

squareroot.addEventListener("click", function () {
  if (calculator == "on") {
    let num = parseFloat(display.innerHTML) ** (1 / 2);
    display.innerHTML = Math.round(num * 100000) / 100000;
  }
});

divide.addEventListener("click", function () {
  if (calculator == "on") {
    display.innerHTML = display.innerHTML + "/";
  }
});

seven.addEventListener("click", function () {
  if (calculator == "on") {
    display.innerHTML += 7;
  }
});

eight.addEventListener("click",function () {
    if (calculator == "on") {
        display.innerHTML += 8;
      }
})

nine.addEventListener("click",function(){
    if (calculator == "on") {
        display.innerHTML += 9;
      }
})

multiply.addEventListener('click',function(){
    if (calculator == "on") {
        display.innerHTML += '*';
      }
})

four.addEventListener("click",function(){
    if (calculator == "on") {
        display.innerHTML += 4;
      }
})

five.addEventListener("click",function(){
    if (calculator == "on") {
        display.innerHTML += 5;
      }
})

six.addEventListener("click", function(){
    if (calculator == "on") {
        display.innerHTML += 6;
      }
})

subtract.addEventListener('click', function(){
    if (calculator == "on") {
        display.innerHTML += '-';
      }
})

one.addEventListener('click',function(){
    if (calculator == "on") {
        display.innerHTML += 1;
      }
})

two.addEventListener('click', function(){
    if (calculator == "on") {
        display.innerHTML += 2;
      }
})

three.addEventListener('click', function(){
    if (calculator == "on") {
        display.innerHTML += 3;
      }
})

add.addEventListener('click', function(){
    if (calculator == "on") {
        display.innerHTML += '+';
      }
})

negative.addEventListener('click', function(){
    if (calculator == "on") {
        display.innerHTML = parseFloat(display.innerHTML) * (-1);
      }
})

zero.addEventListener('click',function(){
    if (calculator == "on") {
        display.innerHTML += 0;
      }
})

decimal.addEventListener('click',function(){
    if (calculator == "on") {
        display.innerHTML += '.';
      }
})

equals.addEventListener('click',function(){
    if (calculator == "on") {
        
        display.innerHTML = parseFloat(eval(display.innerHTML));
      }
    //   do i need to use count in javascript?
})