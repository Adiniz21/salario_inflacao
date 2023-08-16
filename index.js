import entradaDados from 'readline-sync';

console.log("\n1 - Listar os salaários minímos de 2010 à 2020");
console.log("2 - Listar o índice IPCA de 2010 à 2020");
console.log("3 - Comparação entre o percentual de aumento salarial e o IPCA\n");

let escolha = entradaDados.question("Digite o numero da sua escolha: ");

console.log("\nOpção Escolhida:" + escolha);

let colecao_salarios = [
    { salario: 510.00, ano: 2010 },
    { salario: 545.00, ano: 2011 },
    { salario: 622.00, ano: 2012 },
    { salario: 678.00, ano: 2013 },
    { salario: 724.00, ano: 2014 },
    { salario: 788.00, ano: 2015 },
    { salario: 880.00, ano: 2016 },
    { salario: 937.00, ano: 2017 },
    { salario: 954.00, ano: 2018 },
    { salario: 998.00, ano: 2019 },
    { salario: 1045.00, ano: 2020 }
];

let colecao_inflacao = [
    { inflacao: 5.91, ano: 2010 },
    { inflacao: 6.50, ano: 2011 },
    { inflacao: 5.84, ano: 2012 },
    { inflacao: 5.91, ano: 2013 },
    { inflacao: 6.41, ano: 2014 },
    { inflacao: 10.67, ano: 2015 },
    { inflacao: 6.29, ano: 2016 },
    { inflacao: 2.95, ano: 2017 },
    { inflacao: 3.75, ano: 2018 },
    { inflacao: 4.31, ano: 2019 },
    { inflacao: 4.52, ano: 2020 }
];

switch (Number(escolha)) {
    case 1:
        salario_minimo(colecao_salarios);
        break;
    case 2:
        inflacao_que_teve(colecao_inflacao);
        break;
    case 3:
        comparacao(colecao_inflacao,colecao_salarios);
        break;
    default:
        console.log("\nOpção Inválida");
        break;
};

function salario_minimo(colecao_salarios) {
    for (let salario of colecao_salarios) {
        console.log("\nAno: ".padEnd(40,".") + " " + salario.ano);          
        console.log("Salário Mínmo: ".padEnd(39,".") + " R$ " + salario.salario.toFixed(2).replace(".",",") );
    }
}

function inflacao_que_teve(colecao_inflacao) {
    for (let inflacao of colecao_inflacao) {
        console.log("\nAno: ".padEnd(40,".") + " " + inflacao.ano);   
        console.log(`${"Inflação IPCA: ".padEnd(39, ".")} ${inflacao.inflacao.toFixed(2).replace(".", ",")}%`);
    }
}

function comparacao(colecao_inflacao,colecao_salarios){
    let contador = 0;
    let diferenca = 0;
    let crescimentoSalarial = 0;
    while(contador < colecao_inflacao.length){
        if(contador == 0){
            console.log("\nAno: ".padEnd(40,".")+ " " + colecao_salarios[contador].ano);          
            console.log("Salário Mínmo: ".padEnd(39,".") + " R$ " + colecao_salarios[contador].salario.toFixed(2).replace(".",",") );
            console.log("Crescimento Salarial: ".padEnd(39,".") + " -");
            console.log("Inflação IPCA: ".padEnd(39,".") + " " + colecao_inflacao[contador].inflacao + "%");
        }else{

            diferenca = colecao_salarios[contador].salario - colecao_salarios[contador-1].salario;
            crescimentoSalarial = (diferenca/colecao_salarios[contador-1].salario)*100;
            

            console.log("\nAno: ".padEnd(40,".")+ " " + colecao_salarios[contador].ano);          
            console.log("Salário Mínmo: ".padEnd(39,".") + " R$ " + colecao_salarios[contador].salario.toFixed(2).replace(".",",") );
            console.log("Crescimento Salarial: ".padEnd(39,".") + " " + crescimentoSalarial.toFixed(2).replace(".",",") + "%");
            console.log("Inflação IPCA: ".padEnd(39,".") + " " + colecao_inflacao[contador].inflacao.toFixed(2).replace(".",",") + "%");
        } 

        contador++;
    }
}