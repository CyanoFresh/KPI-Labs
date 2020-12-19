const Complex = (real, img)=>({
    toString:()=>`${real} + ${img}i`,
    real,
    img,
});

console.log(Complex(1, 2).toString());