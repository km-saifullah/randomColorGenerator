// div elements
let mainDiv = document.querySelector('.main_div');
let output = document.querySelector('.output');

// audio file
let audio = new Audio('./audio/pickSound.wav');

// hide output div
output.style.display = 'none';

// show output
let showOutput = () => {
    output.style.display = 'block';
    output.innerHTML = 'Copied✔️';
    setTimeout(() => {
        output.style.display = 'none';
    }, 1000);  
}

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
        // copy to clipboard
        copyToClipboard(item.innerHTML);
        audio.play();
        showOutput();
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
        item.innerHTML = hexaColor;
        item.value = hexaColor;
        // copy to clipboard
        copyToClipboard(item.innerHTML);
        audio.play();
        showOutput();
    });
});

// convert RGB color to Hexadecimal color
let rgbToHex = (color) => {
    let wholeNumber = color;
    let hexa = wholeNumber.toString(16);
    return hexa;
}

// copy to clipboard
let copyToClipboard = (hexValue)=> {
    let copyText = hexValue;
        navigator.clipboard.writeText(copyText).then(() => {
    });
}