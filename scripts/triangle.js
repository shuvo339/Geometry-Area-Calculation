function calculateTriangleArea() {
    const triangleBaseValue = parseFloat(document.getElementById('triangle-base').value);
    const triangelHeightvalue = parseFloat(document.getElementById('triangle-height').value);
    const area = 0.5 * triangleBaseValue * triangelHeightvalue;
    document.getElementById('triange-area').innerText = area;
}

function calculateRectangleArea(){
    const base = parseFloat(document.getElementById('rectange-base').value);
    console.log(base);
    const height = parseFloat(document.getElementById('rectange-height').value);
    const area = base * height;
    document.getElementById('rectangle-area').innerText = area;
}