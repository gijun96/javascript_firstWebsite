const quotes = [
    {
       quote : "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.",
       author : "사무엘존슨"
    },
    {
        quote : "자신감 있는 표정을 지으면 자신감이 생긴다.",
        author : "찰스다윈"
     },
     {
        quote : "사막이 아름다운 것은 어딘가에 샘이 숨겨져 있기 때문이다.",
        author : "생떽쥐베리"
     },
     {
        quote : "당신이 할수 있다고 믿든 할수 없다고 믿든 믿는 대로 될것이다.",
        author : "헨리 포드"
     },
     {
        quote : "작은 기회로 부터 종종 위대한 업적이 시작된다.",
        author : "데모스테네스"
     },
     {
        quote : "최고에 도달하려면 최저에서 시작하라.",
        author : "P.시루스"
     },
     {
        quote : "문제는 목적지에 얼마나 빨리 가느내가 아니라 그 목적지가 어디냐는 것이다.",
        author : "메이벨 뉴컴버"
     },
     {
        quote : "겨울이 오면 봄이 멀지 않으리 ",
        author : "셸리"
     },
     {
        quote : "인생을 다시 산다면 다음번에는 더 많은 실수를 저지르리라 ",
        author : "나딘 스테어"
     },
     {
        quote : "인생에서 원하는 것을 얻기 위한 첫번째 단계는 내가 무엇을 원하는지 결정하는 것이다",
        author : "벤스타인"
     }
    
]

const quote = document.querySelector("#quotes span:first-child");
const author= document.querySelector("#quotes span:last-child");

const todaysQuotes = quotes[Math.floor(Math.random()*quotes.length)];

// console.log(todaysQuotes);

quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;