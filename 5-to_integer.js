const firstArg = process.argv[2];
if (firstArg === undefined){
    console.log('Not a number');
}
else if (isNaN(Number(firstArg))){
    console.log('Not a number');
}
else{
    console.log(`My number: ${parseInt(firstArg)}`)
}