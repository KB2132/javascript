console.log("Hello world".toUpperCase())
// ------------------------------------------------------------------ Please ignore this :)

console.log( Math.random() * 10);

// ------------------------------------------------------------------ Please ignore this :)

console.log ( Math.floor( 2.89 ));

// ------------------------------------------------------------------ Please ignore this :)

console.log ( Math.floor( Math.random() * 6 ))

// ------------------------------------------------------------------ Please ignore this :)

console.log (Math.ceil(Math.random() *10 ))

// ------------------------------------------------------------------ Please ignore this :)

console.log ("Grid logging area".toUpperCase())

function printGrid(rows, cols) {
    const horizontalLine = "--------";
    const emptyRow = "|      |";

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            console.log(emptyRow);
        }
        console.log(horizontalLine);
    }
}
printGrid(3, 3);


