function calculatedParallelogramArea(){
    const base = getInputValueById('parallelogram-base');
    const height = getInputValueById('parallelogram-height');
    const area = base * height;
    setTextArea('parallelogram-area', area);
}

function calculatedRhombusArea(){
    const base = getInputValueById('rhombus-base');
    const height = getInputValueById('rhombus-height');
    const area = 0.5 * base * height;
    setTextArea('rhombus-area', area);
}

function calculatedPentagonArea(){
    const base = getInputValueById('pentagon-base');
    const height = getInputValueById('pentagon-height');
    const area = 0.5 * base * height;
    setTextArea('pentagon-area', area);
}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;
}

function setTextArea(id, area){
    const targetArea = document.getElementById(id);
    targetArea.innerText = area;

}