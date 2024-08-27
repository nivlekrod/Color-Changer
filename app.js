const colors = [];
const button = document.querySelector('#btn__color__changer');
const display = document.querySelector('#container__display__color');

function getRandomColor() {
    randomColor = (Math.random() * 0xFFFFFF << 0).toString(16).toUpperCase();
    getHex = '#' + randomColor.padStart(6, '0');
    return getHex;
}

button.addEventListener('click', () => {
    document.body.style.backgroundColor = getRandomColor();
    display.innerHTML = getHex;
    display.style.color = getHex;
})