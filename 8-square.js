const squareSize = process.argv[2];
if (isNaN(Number(squareSize)) || (Number(squareSize) === undefined)){
    console.log('Missing size')
}
else{
    for (let i = 0; i < squareSize; i++){
        console.log('X'.repeat(squareSize));
    }
}