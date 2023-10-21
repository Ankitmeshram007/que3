var actual_num = Math.floor(Math.random()*10);
var result= document.getElementById("result");

var attempt=3;
function check(){
    var guess_num=document. getElementById("guess").value;
    
    if(attempt>0){
        if(actual_num==guess_num){
            result.textContent=" correct";
        }
        else if(guess_num>actual_num){
            result.textContent="too high";
        }
        else{
            result.textContent="too low";
        }
        attempt--;
        if(attempt==0 && guess_num!=actual_num){
            result.textContent="game 0ver the correct answer is " + actual_num;       
         }

       
    }
    

    
    
 

}

document.getElementById("guessing").addEventListener("click",check);
    