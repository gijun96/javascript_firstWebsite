const GenerateNumber = document.querySelector("#GenerateNumber");
const GuessNumber = document.querySelector("#GenerateNumber h2 input");
const chooseNumber = document.querySelector("#GenerateNumber h3 input");
const gameResult = document.querySelector("#gameValue");

function PlayBtn(event){
    event.preventDefault();
    console.log(GuessNumber.value);
    console.log(chooseNumber.value);

    const bVal = GuessNumber.value;
    const guessVal = chooseNumber.value;
    const randomVal =Math.floor(Math.random() * bVal);
    
    if(bVal < 0 || guessVal < 0){
        alert("범위에는 음수가 포함될 수 없습니다.");
    }else if(guessVal == randomVal){
        gameResult.innerHTML ="You chose: "+ guessVal + ",the machine chose:"+randomVal+"."+'<br/>'+'<h2>"You won!"';
      
    // console.log("You chose: "+ guessVal + ",the machine chose:" 
    // +randomVal+".");
    // console.log(randomVal);
    // gameResult.innerHTML="You won";
 }else{
    
    gameResult.innerHTML ="You chose: "+ guessVal + ",the machine chose: " +randomVal+"."+'<br/>'+'<h2>"You lose!"';
   
    // console.log("You chose: "+ guessVal + ",the machine chose:" 
    // +randomVal+".");
    // console.log(randomVal);
    // gameResult.innerHTML="You lose";
 }
 
}

GenerateNumber.addEventListener("submit", PlayBtn);

