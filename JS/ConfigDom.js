// Select box
let select;

// Buttons
let sortButton, shuffleButton;

let width, height;

// Loop variables
let outerLoop = 0, innerLoop = 0;

let startSort = false;

// Default sort type is bubble sort
let sortType = 'Bubble Sort';

function createDom() {

    // Possibly change frame rate later
    frameRate(10);
    
    const canvasDiv = document.getElementById('myCanvas');
    width = canvasDiv.offsetWidth;
    height = canvasDiv.offsetHeight;

    const sketchCanvas = createCanvas(width, height);

    sketchCanvas.parent("myCanvas");

    // Drop down for sort choice
    selectSort = createSelect();
    selectSort.position(10, 10);
    selectSort.option('Bubble Sort');
    selectSort.option('Insertion Sort');
    selectSort.option('Selection Sort');
    selectSort.changed(sortEvent);

    sortButton = createButton('Start Sort');
    sortButton.position(10, 40);

    // Add sort on mouse press
    sortButton.mousePressed(getSort);

    shuffleButton = createButton('Shuffle Array');
    shuffleButton.position(10, 70); 

    // Add shuffle on mouse press
    shuffleButton.mousePressed(resetArray);

}

function getSort() {

    startSort = true;

}

function sortEvent() {

    sortType = selectSort.value();
    console.log(sortType);

}

function resetArray() {

    startSort = false;
    outerLoop = 0, innerLoop = 0, minIndex = 0;
    array = reset(width, height);

}