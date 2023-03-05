const Game = document.querySelector("#Game");
const selectInput = document.querySelector("#select input");
const guessInput = document.querySelector("#guess input");
const resultMessage = document.querySelector("#js-result span:first-child"); 
const score = document.querySelector("#js-result span:last-child");


function handleGuessSubmit(e){
    // 입력이 제출되며 브라우저가 초기화되는 고유 동작을 막기위한 코드입니다.
    e.preventDefault();
    // 사용자가 선택한 숫자를 입력하는 요소를 js에서 사용할 수 있게 선언해 줍니다.
    const select = selectInput.value;//string
    const guess = guessInput.value;//string
    // selectInput 과 guessInput이 모두 입력이 없어 값이 비었을 땐 handleGuessSubmit 함수를 빠져나옵니다.
    if(select ==="" || guess ===""){
        resultMessage.innerText ="";
        score.getElementsByClassName.color ="red";
        score.innerHTML =
         "<strong>Please select Number!</strong>";
         return;
    }
    // <input> 과 <form>태그를 통해 제출된 값은 (String)문자열 형태로 저장됩니다. select 와 guess의 타입은 현재 문자열 입니다.
    // 문자열 형태의 입력 값을 숫자 비교를 하기 위해 정수 형태로 바꿔주는 코드입니다.
    // parseInt()함수는 문자열을 정수 형태로 바꿔주는 함수입니다.
    const selectNumber = parseInt(select, 10);
    const guessNumber = parseInt(guess, 10);
    // Math.random() 함수로 랜덤으로 숫자를 생성합니다. 이떄 Math.random()은 0에서 1보다 작은 숫자를 생성하므로 숫자가 생성되는 범위는 max를 넘지 못합니다.
    // 필요한 값은 정수 형태의 숫자이기 떄문에 Math.ceil()함수를 통해 값을 올림하고 소수점 이하를 없애 줍니다.
    // 여기서 버림이 아닌 올림을 하는 이유는 올림을 함으로써 max까지의 수를 얻을 수 있기 때문입니다.
    const machineChose =Math.ceil(Math.random()*selectNumber);
    //게임의 결과를 출력하기 위한 코드 입니다.
    // html에서 작성해 둔 span태그의 innerText, innerHTmL프로퍼티를
    // 사용해 출력할 내용을 작성해 줍니다. 
    resultMessage.innerText = `You chose : ${guessNumber}, the machine chose: ${machineChose}.`
    score.style.color ="black";
    guessNumber === machineChose
    ? (score.innerHTML ="<strong>You Won!</strong>")
    : (score.innerHTML ="<strong>You lost!</strong>");
    
    };
    
    // const guessForm = document.getElementById("js-guess");
    // const result = document.getElementById("js-result");
    // const maxNumber = document.getElementById("maxNumber");
    
    // function handleGuessSubmit(e) {
    //   e.preventDefault();
    //   const guessInput = guessForm.querySelector("input");
    //   if (guessInput.value === "" && maxNumber === "") {
    //     return;
    //   }
    //   const max = maxNumber.value;
    //   const random = Math.ceil(Math.random() * max);
    //   const userGuess = parseInt(guessInput.value, 10);
    //   const resultSpan = result.querySelector("span");
    //   resultSpan.innerHTML = `
    //   You chose: ${userGuess},
    //   the machine chose: ${random}.<br />
    //   <strong>${userGuess === random ? "You won!" : "You lost!"}</strong>
    //   `;
    // }
    
    // guessForm.addEventListener("submit", handleGuessSubmit);
    





Game.addEventListener("submit", handleGuessSubmit);