const playersSelect = document.getElementById('players');
const playersInputsDiv = document.getElementById('players-inputs');
const chipValuesDiv = document.getElementById('chip-values');
const calculateBtn = document.getElementById('calculate');
const resultDiv = document.getElementById('result');
const resetBtn = document.getElementById('reset');

// Створення полів для гравців
playersSelect.addEventListener('change', () => {
    const numberOfPlayers = parseInt(playersSelect.value);
    playersInputsDiv.innerHTML = ''; // Очищуємо попередні поля
    for (let i = 1; i <= numberOfPlayers; i++) {
        const playerDiv = document.createElement('div');
        playerDiv.classList.add('table');
        playerDiv.innerHTML = `
            <h3>Гравець ${i}</h3>
            <label>Білі фішки: </label><input type="number" class="white-count" value="0"><br>
            <label>Червоні фішки: </label><input type="number" class="red-count" value="0"><br>
            <label>Зелені фішки: </label><input type="number" class="green-count" value="0"><br>
            <label>Сині фішки: </label><input type="number" class="blue-count" value="0"><br>
            <label>Чорні фішки: </label><input type="number" class="black-count" value="0"><br>
        `;
        playersInputsDiv.appendChild(playerDiv);
    }
    playersInputsDiv.classList.remove('hidden');
    chipValuesDiv.classList.remove('hidden');
    calculateBtn.classList.remove('hidden');
});

// Обчислення результатів
calculateBtn.addEventListener('click', () => {
    const whiteValue = parseInt(document.getElementById('white-value').value);
    const redValue = parseInt(document.getElementById('red-value').value);
    const greenValue = parseInt(document.getElementById('green-value').value);
    const blueValue = parseInt(document.getElementById('blue-value').value);
    const blackValue = parseInt(document.getElementById('black-value').value);

    const players = document.querySelectorAll('.table');
    const results = [];

    players.forEach((playerDiv, index) => {
        const whiteCount = parseInt(playerDiv.querySelector('.white-count').value);
        const redCount = parseInt(playerDiv.querySelector('.red-count').value);
        const greenCount = parseInt(playerDiv.querySelector('.green-count').value);
        const blueCount = parseInt(playerDiv.querySelector('.blue-count').value);
        const blackCount = parseInt(playerDiv.querySelector('.black-count').value);

        const total = (whiteCount * whiteValue) + (redCount * redValue) + (greenCount * greenValue) + (blueCount * blueValue) + (blackCount * blackValue);
        results.push({ player: `Гравець ${index + 1}`, total });
    });

    results.sort((a, b) => b.total - a.total); // Сортуємо результати по сумі

    // Виведення результатів
    resultDiv.innerHTML = '<h3>Результати</h3>';
    results.forEach((result, index) => {
        resultDiv.innerHTML += `<p>${index + 1}-е місце: ${result.player}, результат: ${result.total}</p>`;
    });
    resultDiv.classList.remove('hidden');
    resetBtn.classList.remove('hidden');
});

// Очищення гри
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
