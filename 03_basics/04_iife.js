//immediately invoked function expressions(IIFE) used because to avoid pollution of globally declared variable

(function code(){
    console.log(`DB connected`);
})();

(function chai(){//named iife
    console.log(`db connected`);
})();

((name) => {//unnamed iife
    console.log(`db coneected ${name}`)
})("Aaquib")