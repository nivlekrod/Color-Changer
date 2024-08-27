const colors = [];
const button = document.querySelector('#btn__color__changer');
const display = document.querySelector('#container__display__color');

function getRandomColor() {
    randomColor = (Math.random() * 0xFFFFFF << 0).toString(16).toUpperCase();
    getHex = '#' + randomColor.padStart(6, '0');
    return getHex;
}

function verifyColor() {
    let newColor;
    do {
        newColor = getRandomColor();
    } while (colors.includes(newColor));
    colors.push(newColor);
    return newColor;
}

button.addEventListener('click', () => {
    const newColor = verifyColor();
    document.body.style.backgroundColor = newColor;
    display.innerHTML = newColor;
    display.style.color = newColor;
})