var idade = 15
if(idade < 16){
    console.log(`Você não vota`)
}else{
    if(idade < 18 || idade > 65){
        console.log(`Você opcional`) 
    }else{
        console.log(`Voto Obrigaório`)
    }
    
}
