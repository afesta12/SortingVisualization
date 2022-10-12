// Array
let array = [];

// colors
const lightBlue = '#3760b2'
const darkBlue = '#00126b'
const white = '#ffffff'

function setup() {

    createDom();    

    // Initial shuffle of array / create array
    array = reset(width, height);
    
}

function draw() {

    // Clear canvas every iteration of draw so array values don't stack
    clear();
    background('#bacae2');

    // Draw array
    for(let i = 0; i < array.length; i++) {

        const x = i * lineSize;
        const y = array[i];

        switch (sortType) {

            case 'Bubble Sort':

                if(i === innerLoop && startSort) fill(darkBlue);
                else fill(lightBlue);

                break;

            case 'Insertion Sort':

                if(i === outerLoop && startSort) fill(darkBlue);
                else fill(lightBlue);
                break;

            case 'Selection Sort':

                if(i === innerLoop && startSort) fill(darkBlue);
                else fill(lightBlue);

                if(i === minIndex && startSort) fill(darkBlue);
                if(i === outerLoop && startSort) fill(white)

            default:

                break;
        }


        // bottom x, bottom y, top x, top y
        rect(x, height - y, 15, height);

    }

    if(startSort) {
        
        switch (sortType) {

            case 'Bubble Sort':
                
                bubbleSort();
                break;

            case 'Insertion Sort':

                insertionSort();
                break;

            case 'Selection Sort':

                selectionSort();
                break;
        
            default:
                break;
        }

    }
    
}

