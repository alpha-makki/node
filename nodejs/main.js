let a = 'a1';
let hello = function(){
    return 'Anoynomous Function'
}

let hi = ((a, b) => {
    a = a + 2;
    b = a * b;
    c = b;
    return c;
})
//getVar();
console.log(hi(5, 6));