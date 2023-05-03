const root = document.querySelector("html");

let isRadian = false;
let isLog10 = false;

const cursor = document.createElement("div");
cursor.classList.add("cursor");
root.appendChild(cursor);

const follower = document.createElement("div");
follower.classList.add("cursor", "cursor__follower");
root.appendChild(follower);

root.addEventListener("mousemove", (e) => {
  setPosition(follower, e);
  setPosition(cursor, e);
});

function setPosition(element, e) {
  element.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
}

function addChar(input, character) {
  if (input.value == null || input.value == "0") input.value = character;
  else input.value += character;
}

function cos(form) {
  form.display.value = Math.cos(form.display.value);
}

function sin(form) {
  form.display.value = Math.sin(form.display.value);
}

function tan(form) {
  form.display.value = Math.tan(form.display.value);
}

function sqrt(form) {
  form.display.value = Math.sqrt(form.display.value);
}

function log(form) {
    return Math.log10(form.display.value);    
}

function rad(form) {
    var pi = Math.PI;
    return form.display.value * (180/pi);
}

function exp(form) {
  form.display.value = Math.exp(form.display.value);
}

function deleteChar(input) {
  input.value = input.value.substring(0, input.value.length - 1);
}
var val = 0.0;
function percent(input) {
  val = input.value;
  input.value = input.value + "%";
}

function changeSign(input) {
  if (input.value.substring(0, 1) == "-")
    input.value = input.value.substring(1, input.value.length);
  else input.value = "-" + input.value;
}

function compute(form) {
  form.display.value = eval(form.display.value);
}

function square(form) {
  form.display.value = eval(form.display.value) * eval(form.display.value);
}

function checkNum(str) {
  for (var i = 0; i < str.length; i++) {
    var ch = str.charAt(i);
    if (ch < "0" || ch > "9") {
      if (
        ch != "/" &&
        ch != "*" &&
        ch != "+" &&
        ch != "-" &&
        ch != "." &&
        ch != "(" &&
        ch != ")" &&
        ch != "%"
      ) {
        alert("invalid entry!");
        return false;
      }
    }
  }
  return true;
}

function switchTheme() {
    const toggle = document.getElementsByClassName('themeSwitchButton');
    const body = document.querySelector('body');

    let currTheme = window.getComputedStyle(body, null).getPropertyValue('background-color');

    toggle.addEventListener("click", switchColor(currTheme,toggle,body));
}

function switchColor(color,toggle,body) {

    const calcBorder = document.getElementsByClassName('calculator')[0];

    if(color == 'rgba(0, 0, 0, 0)') {
        let newBodyColor = 'white';
        let newButtonBackgroundColor = 'black';

        body.style.backgroundColor = newBodyColor;
        for(let i = 0; i < toggle.length; ++i) {
            toggle[i].style.backgroundColor = newButtonBackgroundColor;
        }
    } else {
        let newBodyColor = 'rgba(0, 0, 0, 0)';
        let newButtonBackgroundColor = '#474646';

        body.style.backgroundColor = newBodyColor;
        for(let i = 0; i < toggle.length; ++i) {
            toggle[i].style.backgroundColor = newButtonBackgroundColor;
        }
    }
}

function toggleRad(form) {
    form.display.value = rad(form);
}

function toggleLog(form) {
    form.display.value = log(form);
}
