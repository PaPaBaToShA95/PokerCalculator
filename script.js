const playersSelect = document.getElementById('players');
const playersInputsDiv = document.getElementById('players-inputs');
const chipValuesDiv = document.getElementById('chip-values');
const calculateBtn = document.getElementById('calculate');
const resultDiv = document.getElementById('result');
const resetBtn = document.getElementById('reset');


playersSelect.addEventListener('change', () => {
    const numberOfPlayers = parseInt(playersSelect.value);
    playersInputsDiv.innerHTML = '';
    for (let i = 1; i <= numberOfPlayers; i++) {
        const playerDiv = document.createElement('div');
        playerDiv.classList.add('table');
        playerDiv.innerHTML = `
            <h3>Гравець ${i}</h3>
            <label><img src="img/chip.svg" style="width: 20px; height: 20px; filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%); vertical-align: top;">Білі фішки: </label><input type="number" class="white-count" value="0">шт.<br>
            <label><img src="img/chip.svg" style="width: 20px; height: 20px; filter: invert(25%) sepia(96%) saturate(7483%) hue-rotate(359deg) brightness(103%) contrast(109%); vertical-align: top;">Червоні фішки: </label><input type="number" class="red-count" value="0">шт.<br>
            <label><img src="img/chip.svg" style="width: 20px; height: 20px; filter: invert(55%) sepia(98%) saturate(419%) hue-rotate(70deg) brightness(86%) contrast(95%); vertical-align: top;">Зелені фішки: </label><input type="number" class="green-count" value="0">шт.<br>
            <label><img src="img/chip.svg" style="width: 20px; height: 20px; filter: invert(40%) sepia(98%) saturate(2473%) hue-rotate(202deg) brightness(90%) contrast(100%); vertical-align: top;">Сині фішки: </label><input type="number" class="blue-count" value="0">шт.<br>
            <label><img src="img/chip.svg" style="width: 20px; height: 20px; vertical-align: top;">Чорні фішки: </label><input type="number" class="black-count" value="0">шт.<br>
        `;
        playersInputsDiv.appendChild(playerDiv);
    }
    playersInputsDiv.classList.remove('hidden');
    chipValuesDiv.classList.remove('hidden');
    calculateBtn.classList.remove('hidden');
});


calculateBtn.addEventListener('click', () => {
    const whiteValue = parseFloat(document.getElementById('white-value').value);
    const redValue = parseFloat(document.getElementById('red-value').value);
    const greenValue = parseFloat(document.getElementById('green-value').value);
    const blueValue = parseFloat(document.getElementById('blue-value').value);
    const blackValue = parseFloat(document.getElementById('black-value').value);

    const players = document.querySelectorAll('.table');
    const results = [];

    players.forEach((playerDiv, index) => {
        const whiteCount = parseFloat(playerDiv.querySelector('.white-count').value);
        const redCount = parseFloat(playerDiv.querySelector('.red-count').value);
        const greenCount = parseFloat(playerDiv.querySelector('.green-count').value);
        const blueCount = parseFloat(playerDiv.querySelector('.blue-count').value);
        const blackCount = parseFloat(playerDiv.querySelector('.black-count').value);

        const total = (whiteCount * whiteValue) + (redCount * redValue) + (greenCount * greenValue) + (blueCount * blueValue) + (blackCount * blackValue);
        results.push({ player: `Гравець ${index + 1}`, total });
    });

    results.sort((a, b) => b.total - a.total);


    resultDiv.innerHTML = '<h3>Результати</h3>';
    results.forEach((result, index) => {
        resultDiv.innerHTML += `<p class="winer">${index + 1}-е місце: ${result.player}; Результат: ${result.total} грн.</p>`;
    });
    resultDiv.classList.remove('hidden');
    resetBtn.classList.remove('hidden');
});

resetBtn.addEventListener('click', () => {
    playersInputsDiv.innerHTML = '';
    resultDiv.innerHTML = '';
    resultDiv.classList.add('hidden');
    resetBtn.classList.add('hidden');
    calculateBtn.classList.add('hidden');
    playersInputsDiv.classList.add('hidden');
    chipValuesDiv.classList.add('hidden');
    playersSelect.value = '';
});
