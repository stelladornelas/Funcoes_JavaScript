function main()
{
 var alunos =  parseInt(prompt("Numero de alunos: "));
 var vetor = new Array(alunos);

 // Preenchendo o veotr
 for(let count=0; count<alunos; count++)
  vetor[count] = parseInt( prompt("Aluno " + (count+1) + ":") )
 

 // Somando todos os elementos
 var soma=0;
 for(let count in vetor)
  soma += vetor[count];

 var media = parseFloat( soma/alunos). toFixed(2);
 document.write("Média da turma: " + media + "<br>");

 if (media< 7){
    document.write("turma fraca")
}
else{
   document.write("turma boa")
}

}


