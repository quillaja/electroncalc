var display = document.querySelector('#output');

var inputButtons = document.querySelectorAll('.input');
for (var i = 0; i < inputButtons.length; i++) {
    inputButtons[i].addEventListener('click', function (event) {
        element = event.srcElement;
        display.innerHTML = display.innerHTML + element.innerHTML;
    });
}

var clearButton = document.getElementById('clear');
clearButton.addEventListener('click', function () {
    display.innerHTML = '';
});

var equalButton = document.getElementById('equal');
equalButton.addEventListener('click', function () {
    var input = display.innerHTML;
    result = eval(input);
    display.innerHTML = result;
});