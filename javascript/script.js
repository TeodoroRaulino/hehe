let btnConfirmar = document.getElementById('next');
let cont = 0;
let quest = document.querySelectorAll(".question-label");
let Bton = document.querySelector("#next");


var dicionario = {

    0 : {
        'Title':'Texto da pergunta texto da pergunta texto da pergunta número 1',
        'question': {
            0: 'a. Alternativa A',
            1: 'a. Alternativa B',
            2: 'a. Alternativa C',
            3: 'a. Alternativa D'
        }
    },
    1 : {
        'Title':'Texto da pergunta texto da pergunta texto da pergunta número 2',
        'question': {
            0: 'a. Alternativa E',
            1: 'a. Alternativa F',
            2: 'a. Alternativa G',
            3: 'a. Alternativa H'
        }
    },

    2 : {
        'Title':'Texto da pergunta texto da pergunta texto da pergunta número 3',
        'question': {
            0: 'a. Alternativa I',
            1: 'a. Alternativa J',
            2: 'a. Alternativa K',
            3: 'a. Alternativa L'
        }
    },
    
}

var results = {
    15: 'financeiro',
    30: 'marketing',
    45: 'processos'
}




function myFunction(){
    btnConfirmar.textContent = "Próxima pergunta";
    document.getElementById('demos').style.display='none';
    questoes();
}

function questoes(){

    //não funcionou
    Bton.addEventListener("click", function(e){
        e.preventDefault();
    })

    document.getElementById('grid').style.display='block';
    if(cont === 3){
        ExResult();
    }
    else if(cont === 2){
        btnConfirmar.textContent = "Resultados";
    }
    Titulo.textContent = dicionario[cont]['Title'];
    for(let i = 0; i < 4; i++){
        quest[i].innerHTML = dicionario[cont]['question'][i]
    }
    cont++;
    
}



function ExResult(){
    cont=0;
    Titulo.textContent = results[45];
    document.getElementById('grid').style.display='none';
    document.getElementById('image-result').style.display='block';
    document.getElementById('next').style.display='none';
    document.getElementById('boxproc').style.display='block';
}