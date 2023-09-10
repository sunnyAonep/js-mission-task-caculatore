let result = '';
divCalculator.innerHTML +=
`<div class="screen" id="result">0</div>
<div class="buttons">
<button onclick="clearScreen()">C</button>
<button onclick="appendToScreen('7')">7</button>
<button onclick="appendToScreen('8')">8</button>
<button onclick="appendToScreen('9')">9</button>
<button onclick="appendToScreen('+')">+</button>
<button onclick="appendToScreen('4')">4</button>
<button onclick="appendToScreen('5')">5</button>
<button onclick="appendToScreen('6')">6</button>
<button onclick="appendToScreen('-')">-</button>
<button onclick="appendToScreen('1')">1</button>
<button onclick="appendToScreen('2')">2</button>
<button onclick="appendToScreen('3')">3</button>
<button onclick="appendToScreen('*')">*</button>
<button onclick="appendToScreen('0')">0</button>
<button onclick="appendToScreen('.')">.</button>
<button onclick="calculate()">=</button>
    <button onclick="appendToScreen('/')">/</button>
    </div>
    `
    let screen = document.getElementById('result');
    function appendToScreen(value) {
    result += value;
    screen.innerText = result;
}

function calculate() {
    try {
        result = eval(result).toString();
        screen.innerText = result;
    } catch (error) {
        screen.innerText = 'Error';
    }
}

function clearScreen() {
    result = '';
    screen.innerText = '0';
}
