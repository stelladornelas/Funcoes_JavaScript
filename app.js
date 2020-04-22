function main()
{
    
var nome = prompt ("Nome do aluno: ");
 var notas =  parseInt(prompt("digite a quantidade de notas  "));
 var vetor = new Array(notas);

 var faltas =  parseInt(prompt("digite a quantidade de faltas  "));

 // Preenchendo o veotr
 for(let count=0; count<notas; count++)
  vetor[count] = parseInt( prompt("Nota  " + (count+1) + ":") )
 

 // Somando todos os elementos
 var soma=0;
 for(let count in vetor)
  soma += vetor[count];

 var media =parseFloat (soma/notas).toFixed(2);

//  media = parseFloat(( nota_a + nota_b + nota_c) / 3).toFixed(1);
 document.write("Média da turma: " + media + "<br>");

 if (media> 7){
    document.write("Aluno reprovado")
    
}
else if (media = 6) {
   document.write("Aluno recuperação")
   
}

else{
    document.write("aprovado")

}



}