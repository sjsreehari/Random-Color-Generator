let btn = document.querySelector('button');
btn.addEventListener('click', function() {
    let randomColor = generateRandomColor();
    let colorBox = document.querySelector('.color');
    colorBox.style.backgroundColor = randomColor;
    colorBox.textContent = `Color: ${randomColor}`;
    console.log("Color Changed to", randomColor);
});

function generateRandomColor() {
    // Generate random values for RGB components (0-255)
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    
    // Construct a color string in rgb() format
    return `rgb(${red}, ${green}, ${blue})`;
}
