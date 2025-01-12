//BasicClosureExample.js
function outerFunction() {
    const message = "Hello, this is a closure example!";

    function innerFunction() {
        console.log(message);
    }

    return innerFunction; 
}

const storedFunction = outerFunction(); 
storedFunction(); 
