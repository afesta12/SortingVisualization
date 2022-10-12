// Array
let array = [];

// colors
const normal = '#1e1e1e'
const marker = '#f05454'

function setup() {

    createDom();    

    // Initial shuffle of array / create array
    array = reset(width, height);
    
}

function draw() {

    // Clear canvas every iteration of draw so array values don't stack
    clear();
    background(200);

    // Draw array
    for(let i = 0; i < array.length; i++) {

        const x = i * lineSize;
        const y = array[i];

        switch (sortType) {

            case 'Bubble Sort':

                if(i === innerLoop && startSort) fill(marker);
                else fill(normal);
                break;

            case 'Insertion Sort':

                if(i === outerLoop && startSort) fill(marker);
                else fill(normal);
                break;

            case 'Selection Sort':

                if(i === innerLoop && startSort) fill(marker);
                else fill(normal);

                if(i === minIndex && startSort) fill(marker);
                if(i === outerLoop && startSort) fill('ffffff')

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

