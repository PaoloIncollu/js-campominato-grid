
/*
step

1. creare un bottone in html e un contenitore
2. collegare il bottone con un costante in java 
3. fare una funzione di tipo submit, che al il click del bottone crea una griglia con 10 righe e ogni riga con 10 caselle
4. cambiare lo sfondo della casella e visualizzare un messaggio in console con il numero della casella 

*/ 

const createGrid = document.getElementById('btn-grid-create');
const grid = document.getElementById('grid-container');

const choiceGrid = document.getElementById('select-choice');
console.log (choiceGrid);

createGrid.addEventListener('click',
    function (){
        
        if(choiceGrid.selectedIndex == 0){

           for (let i = 0; i < 100; i++){
            let cell = document.createElement('div');
            cell.classList.add('grid-10', 'col');
            cell.innerHTML += (i + 1);
            grid.append(cell);
            console.log(cell);
            
        }  
        }
        
        else if(choiceGrid.selectedIndex == 1){

            for (let i = 0; i < 81; i++){
             let cell = document.createElement('div');
             cell.classList.add('grid-9', 'col');
             cell.innerHTML += (i + 1);
             grid.append(cell);
             console.log(cell);
             
         }  
         }
         
        
         
         else if(choiceGrid.selectedIndex == 2){

            for (let i = 0; i < 49; i++){
             let cell = document.createElement('div');
             cell.classList.add('grid-7', 'col');
             cell.innerHTML += (i + 1);
             grid.append(cell);
             console.log(cell);
            
         } 
         }
         
    }
      
    

);


   let newCell = document.querySelector('.col');

    newCell.addEventListener('click',
        function () {
    
    if (newCell.classList.contains('coral')) {

        newCell.classList.remove('coral');

    }
        
    
    else {
        newCell.classList.add('coral');
    }
    });