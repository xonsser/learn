

// // let name = prompt("Введите своё имя: ");
// // alert(`Привет, ${name}`);

// let age = Number("Какойто-текст");
// console.log(age); 

// console.log(Number("   123   ")); 
// console.log(Number("123z"));
// console.log(Number("true"));
// console.log(Number("false"));


// console.log("4"/2);
// console.log("4"+2);
// console.log("4"-2);
// console.log("4"*2);


// function calcSemiPerimetr(a, b, c) {
//     return ((a+b+c)/2);
// }

// function calcSquare(a, b, c) {
//     let p = calcSemiPerimetr(a, b, c);
//     let s = Math.sqrt(p * ( p - a ) * ( p - b ) * ( p - c ));
//     return s;
// }


// let a = +prompt("Введите сторону A");
// let b = +prompt("Введите сторону B");
// let c = +prompt("Введите сторону C");

// alert("Площадь треукольника равна" + calcSquare(a, b, c));

function calcAverage(a, b) {
    return (a + b)/2;
}

function calcGeometricMean(a, b) {
    return Math.sqrt(a * b);
}

let a = +prompt("Введите сторону A");
let b = +prompt("Введите сторону B");

alert("Среднее арефметическое: " + calcAverage(a, b));
alert("Среднее геометическое: " + calcGeometricMean(a, b));
