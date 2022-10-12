const lineSize = 18;

function reset(width, height) {

    arr = [];

    for(let i = 0; i < floor(width / lineSize); i++) arr.push(Math.ceil(random(height - 100)));

    return arr;
}