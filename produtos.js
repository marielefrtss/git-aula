const produtos={
   nome:"celular", 
   preço: 1000,
   marca:"samsung"};

for (let chave in produtos){
console.log ( `${chave}: ${produtos[chave]}`);
}
console.log (Object.keys (produtos));
console.log (Object.values (produtos));
