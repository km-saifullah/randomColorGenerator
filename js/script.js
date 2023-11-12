// main div
let mainDiv = document.querySelector('.main_div');

// minimum and maximum number
let maximum = 255;
let minimum = 0;

// generate RGB colors
let generateColors = () => {
    for(let divCount=0; divCount<12;divCount++){
        // generate random number between 0 and 255 for RGB values
        let red = Math.floor(Math.random()*(maximum-minimum+1)) + minimum ;
        let green = Math.floor(Math.random()*(maximum-minimum+1)) + minimum ;
        let blue = Math.floor(Math.random()*(maximum-minimum+1)) + minimum ;

        let bgColor = `rgb(${red},${green},${blue})`;
        let coloredDiv = document.createElement('div');
        coloredDiv.classList.add('colors_div');
        coloredDiv.style.backgroundColor = bgColor;
        mainDiv.appendChild(coloredDiv);
    }
}
generateColors();

let newDiv = document.querySelectorAll('.colors_div');
let newDivArr = Array.from(newDiv);

newDivArr.map((item,index)=>{
    item.addEventListener('click',()=>{
        let color = (item.style.backgroundColor);
        console.log(color);
        item.innerHTML = color;
    })
})


