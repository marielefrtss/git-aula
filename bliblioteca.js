const biblioteca = {
    livros: [],

    adicionarLivros(nome, autor, ano, genero) {
        const livro = {
            nome,
            autor,
            ano,
            genero,
            disponivel: true,
            alugado: false,
            vezesAlugado: 0
        };

        this.livros.push(livro);
    },
    mostrarLivros(){
        for(let i=0; i<this.livros.length; i++){
            const L= this.livros[i];
            console.log(L.nome + " - " + L.autor + " - " + L.ano + " - " + L.genero);
        }
    },

    alugar(nome){
        for(let i=0; i<this.livros.length; i++){
    const L= this.livros[i]
    if(L.nome === nome){
    if (L.disponivel==true&& L.alugado==false){
        L.disponivel=false;
        L.alugado=true;
        L.vezesAlugado++;
        L.estoque=1;
        console.log (nome,"alugado com sucesso");
        return;
    }else if (L.estoque<=0){
        console.log ("o, "+nome + "esta com estoque zerado");
        return;
    }else{
    console.log ("o",+nome + "ja esta alugado")
    return;}
    }
}
console.log ("o",+nome + "nao exixte");
},


        }


            

biblioteca.adicionarLivros(
    "harry potter",
    "J.K. Rowling",
    1917,
    "Fantasia"
);
biblioteca.adicionarLivros(
    "os setes maridos de hevelen hugoo",
    "Taylor Jenkins Reidd",
    2017,
    "romance",
);

biblioteca.adicionarLivros(
    "The Alchemist",
    "Paulo Coelho",
    1988,
    "Fantasia"
);
console.log(biblioteca.livros);
biblioteca.mostrarLivros();


