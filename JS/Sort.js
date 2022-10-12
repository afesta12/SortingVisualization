let minIndex = 0;

function bubbleSort() {

    // Bubble sort, swaps adjacent elements while moving the greatest element to the end of the array.
    // Possibly implement showing the algorithm on screen with sections of the iterations highlighted.
    // for(let i = 0; i < array.length - 1; i++) {

    //     for(let j = 0; j < array.length - i - 1; j++) {

    //         if(array[j] > array[j + 1]) swap(j, j + 1);

    //     }

    // }

    // The outer for loops are kept track of with the outerloop variable. The draw() method is a loop,
    // so each iteration swaps will be performed till the largest element is at the end of the array & once the
    // inner loop variable === length - outerloop - 1;
     
    const a = array[innerLoop];
    const b = array[innerLoop + 1];

    if(a > b) swap(innerLoop, innerLoop + 1);
    
    innerLoop++;

    if(innerLoop >= array.length - outerLoop - 1) {

        innerLoop = 0;
        outerLoop++;

    }

}

function insertionSort() {

    /**
     * for(int i = 1; i < arr.length; i++) {
     * 
     *      int key = arr[i];
     *      int j = i - 1;
     *      while(j >= 0 && arr[j] > key) {
     * 
     *          arr[j + 1] = arr[j];
     *          j--;
     *      }
     *      
     *      arr[j + 1] = key;
     * }
     * 
     */


    for(outerLoop = 0; outerLoop < array.length - 1; outerLoop++) {

        if(array[outerLoop] > array[outerLoop + 1]) {

            swap(outerLoop, outerLoop + 1);
            break;

        }

    }
    
}

function selectionSort() {

    /**
     * for(int i = 0; i < arr.length - 1; i++) {
     *  
     *      int minIndex = i;
     *      for(int j = i + 1; j < arr.length; j++) {
     * 
     *          if(arr[j] < arr[minIndex]) minIndex = j;
     * 
     *      }
     * 
     *      swap(i, minIndex);
     * 
     * }
     */

    // Initially innerLoop will start at 1, because the minIndex is 0
    innerLoop++;

    if(array[innerLoop] < arr[minIndex]) minIndex = innerLoop;

    // Perform swap once the innerLoop hits the end of the array
    if(innerLoop === array.length - 1) {

        swap(outerLoop, minIndex)
        outerLoop++;
        minIndex = outerLoop;
        innerLoop = outerLoop;

    }
}


function swap(a, b) {

    const temp = array[a];
    array[a] = array[b];
    array[b] = temp;

}