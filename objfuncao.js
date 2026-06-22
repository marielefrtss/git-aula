const calculadora= {
numero1:10,
numero2:5,

multiplicar(){
    return this.numero1* this.numero2},


}

console.log (calculadora.multiplicar());


const calculadoraSoma = {
    numero1: 10,
    numero2: 5,
    somar() { 
        return this.numero1 + this.numero2 
    }
}
console.log(calculadoraSoma.somar());




const calculadoraSubtrair = {
    numero1: 10,
    numero2: 5,
    subtrair() { 
        return this.numero1 - this.numero2 
    }
}
console.log(calculadoraSubtrair.subtrair());


const calculadoradividir = {
    numero1: 10,
    numero2: 5,

    dividir() {
        return this.numero1 / this.numero2;
    }
}

console.log(calculadoradividir.dividir());

   