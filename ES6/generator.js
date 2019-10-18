function * generatorFunction(){
    console.log("this will run first");

    yield 'Hello';

    console.log("this is run after some puse");
    yield "World";
    
}

const genObj=generatorFunction();



console.log(genObj.next().value);
console.log(genObj.next().value);
console.log(genObj.next().value);
