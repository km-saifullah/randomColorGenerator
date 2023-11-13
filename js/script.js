// main div
let mainDiv = document.querySelector('.main_div');

// generate random number between 0 and 255
let generateRandomNumber = () => {
    let maximum = 255;
    let minimum = 0;
    let randomNumber = Math.floor(Math.random()*(maximum-minimum+1)) + minimum ;
    return randomNumber;
}

// generate RGB colors
let generateColors = () => {
    for(let divCount = 0; divCount < 12; divCount++){
        let red = generateRandomNumber();
        let green = generateRandomNumber();
        let blue = generateRandomNumber();

        let bgColor = `rgb(${red},${green},${blue})`;
        let coloredDiv = document.createElement('div');
        coloredDiv.classList.add('colors_div');
        coloredDiv.style.backgroundColor = bgColor;
        mainDiv.appendChild(coloredDiv);
    }
}
generateColors();

// select individual div and find out the RGB color
let newDiv = document.querySelectorAll('.colors_div');
let newDivArr = Array.from(newDiv);
newDivArr.map(item => {
    item.addEventListener('click', () => {
        let rgbColor = (item.style.backgroundColor);
        item.innerText = rgbColor;
    });
    // double click event to show the hex color
    item.addEventListener('dblclick', () => {
        let rgbColor = (item.style.backgroundColor);
        let removeRGB = rgbColor.replaceAll("rgb(",""); 
        let removeBracket = removeRGB.replace(")",""); 
        let splitRgb = removeBracket.split(",");
        let red = Number(splitRgb[0]);
        let green = Number(splitRgb[1]);
        let blue = Number(splitRgb[2]);
        let redHexaValue = rgbToHex(red);
        let greenHexaValue = rgbToHex(green);
        let blueHexaValue = rgbToHex(blue);
        let hexaColor = `#${redHexaValue}${greenHexaValue}${blueHexaValue}`;
        copyToClipboard('.colors_div');
        item.innerHTML = hexaColor;
    })
});

// convert RGB color to Hexadecimal color
let rgbToHex = (color) => {
    let wholeNumber = color;
    let hexa = wholeNumber.toString(16);
    return hexa;
}

// copy to clipboard
let copyToClipboard = (selector)=> {
    var copyText = document.querySelector(selector).value;
    navigator.clipboard.writeText(copyText).then(() => {
        alert("Copied to clipboard");
    });
}
