const x = process.argv[2];
if(isNaN(Number(x))){
    console.log('Missing number of occurrences')
}
else if(Number(x) === undefined){
    console.log('Missing number of occurrences')
}
else{
    for(let i = 0; i < x; i++){
        console.log('C is fun');
    }
}