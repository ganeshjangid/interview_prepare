function cb(){
    console.log('Processed in next generation');
}

process.nextTick(cb);
console.log('Processed in the first iteration');
console.log('Processed2 in the first iteration');