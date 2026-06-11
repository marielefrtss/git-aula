const multiplicar = require('./multiplicação');

test("deve multiplicar dois numeros inteiros positivos", () => {
    expect(multiplicar(3, 2)).toBe(6);
});

test("deve falhar ao multiplicar por um valor inválido", () => {
    expect(() => multiplicar(-5, 'a')).toThrow();
});

test("deve multiplicar dois números de ponto flutuante (2.5, 3.5)", () => {
    expect(multiplicar(2.5, 3.5)).toBe(8.75);
});

test("esta função deve falhar, pois está multiplicando uma string e um valor numérico", () => {
    expect(() => multiplicar(127, 'caso')).toThrow();
});
