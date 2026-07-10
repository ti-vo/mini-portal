const bewerteNote = (x) => {
    if (x === 1) {return "sehr gut"}
    else if (x === 2) {return "gut"}
    else if (x === 3) {return "befriedigend"}
    else if (x === 4) {return "ausreichend"}
    else if (x === 5) {return "mangelhaft"}
    else if (x === 6) {return "ungenügend"}
    else {return "außerhalb der Skala"}

}

console.log(bewerteNote(10))

for (let i=1; i<21; i++){
    if (i%3 === 0 && i%5 === 0){console.log(`${i}, FizzBuzz`)}
    else if (i%3 === 0){console.log(`${i}, Fizz`)}
    else if (i%5 === 0){console.log(`${i}, Buzz`)}
    else {console.log(`${i}`)}

}