import cardsBlue from '../assets/MythicCards/blue/index.js'
import cardsBrown from '../assets/MythicCards/brown/index.js'
import cardsGreen from '../assets/MythicCards/green/index.js'

import ancientsData from '../data/ancients.js'

// console.log(cardsBlue);
// console.log(cardsBrown);
// console.log(cardsGreen);

// console.log(Ancients );


let playCardsSrc;
let playCards = [];

function getRandomArrayElement(arr){
   return arr[Math.floor(Math.random()*arr.length)]
};

 function repeat(arr1, arr, sum){
   let card;
   while( arr1.length < sum ){
      card = getRandomArrayElement(arr);
         
         if (!arr1.includes(card)){
            arr1.push(card);
           
         }
   }
 };
 function repeat1(arr1, arr, sum){
   
   while( arr1.length < sum ){
      const num = Math.floor(Math.random()*arr.length)
      arr1.push(arr[num])
      arr.splice(num, 1)
   }
 };

function shuffleDeck(){
   playCards.splice(0, playCards.length);
const greenPlayCards = [];
const brownPlayCards = [];
const bluePlayCards = [];

const sumGreenCards = +ancientsData[0].firstStage.cardsGreen + +ancientsData[0].secondStage.cardsGreen + +ancientsData[0].thirdStage.cardsGreen
const sumBrownCards = +ancientsData[1].firstStage.cardsBrown + +ancientsData[1].secondStage.cardsBrown + +ancientsData[1].thirdStage.cardsBrown
const sumBlueCards = +ancientsData[1].firstStage.cardsBlue + +ancientsData[1].secondStage.cardsBlue + +ancientsData[1].thirdStage.cardsBlue

repeat(greenPlayCards, cardsGreen, sumGreenCards);
repeat(brownPlayCards, cardsBrown, sumBrownCards);
repeat(bluePlayCards, cardsBlue, sumBlueCards);


//
const sumFirstStageGreenCards = ancientsData[0].firstStage.cardsGreen;
const sumFirstStageBrownCards = ancientsData[0].firstStage.cardsBrown;
const sumFirstStageBlueCards = ancientsData[0].firstStage.cardsBlue;

const firstStageGreen = [];
const firstStageBrown = [];
const firstStageBlue = [];

repeat1(firstStageGreen, greenPlayCards, sumFirstStageGreenCards);
repeat1(firstStageBrown, brownPlayCards, sumFirstStageBrownCards);
repeat1(firstStageBlue, bluePlayCards, sumFirstStageBlueCards);



//
const sumSecondStageGreenCards = ancientsData[0].secondStage.cardsGreen;
const sumSecondStageBrownCards = ancientsData[0].secondStage.cardsBrown;
const sumSecondStageBlueCards = ancientsData[0].secondStage.cardsBlue;

const secondStageGreen = []
const secondStageBrown = []
const secondStageBlue = []

repeat1(secondStageGreen, greenPlayCards, sumSecondStageGreenCards);
repeat1(secondStageBrown, brownPlayCards, sumSecondStageBrownCards);
repeat1(secondStageBlue, bluePlayCards, sumSecondStageBlueCards);




//
const sumThirdStageGreenCards = ancientsData[0].thirdStage.cardsGreen;
const sumThirdStageBrownCards = ancientsData[0].thirdStage.cardsBrown;
const sumThirdStageBlueCards = ancientsData[0].thirdStage.cardsBlue;

const thirdStageGreen = []
const thirdStageBrown = []
const thirdStageBlue = []
repeat1(thirdStageGreen, greenPlayCards, sumThirdStageGreenCards);
repeat1(thirdStageBrown, brownPlayCards, sumThirdStageBrownCards);
repeat1(thirdStageBlue, bluePlayCards, sumThirdStageBlueCards);


const firstStageCards = firstStageGreen.concat(firstStageBrown, firstStageBlue)
const secondStageCards = secondStageGreen.concat(secondStageBrown, secondStageBlue)
const thirdStageCards = thirdStageGreen.concat(thirdStageBrown, thirdStageBlue)

//

 const firstStageMix = firstStageCards.map(i =>[Math.random(), i]).sort().map(i => i[1]);
 const secondStageMix = secondStageCards.map(i =>[Math.random(), i]).sort().map(i => i[1]);
 const thirdStageMix = thirdStageCards.map(i =>[Math.random(), i]).sort().map(i => i[1]);

   playCards.splice(-1, 0, ...playCards.splice(-1, 1, firstStageMix))
   playCards.splice(-1, 0, ...playCards.splice(-1, 1, secondStageMix))
   playCards.splice(-1, 0, ...playCards.splice(-1, 1, thirdStageMix))
   playCardsSrc = firstStageMix.concat(secondStageMix, thirdStageMix)
   
  


currentCardPlay.src = " ";

counter();
};



const deck = document.querySelector('.deck');
const currentCardPlay  = document.querySelector('.last-card');

// здесь должна быть функция показа карт showCard()

// deck.addEventListener('click', () =>{
// 	showCard()
// })

//
const ancientsCard = document.querySelector('.ancient-card');
const difficultiesButton = document.querySelector('.difficulty');
const shuffleButton = document.querySelector('.shuffle-button');

ancientsCard.addEventListener('click', () => {
   ancientsCard.classList.add('ancient-card-active');
   difficultiesButton.classList.add('difficulty-active')
});

difficultiesButton.addEventListener('click', () => {
   shuffleButton.classList.add('shuffle-button-active')
})

shuffleButton.addEventListener('click', () =>{
   shuffleDeck();
   deck.classList.add('deck-active');
   //currentCardPlay.classList.remove('.last-card-active')
})



function counter(){

   const dot = document.querySelectorAll('.dot');
   dot[0].textContent = playCards[0].filter( card => card.color === 'green').length;
   dot[1].textContent = playCards[0].filter( card => card.color === 'brown').length;
   dot[2].textContent = playCards[0].filter( card => card.color === 'blue').length;

   dot[3].textContent = playCards[1].filter( card => card.color === 'green').length;
   dot[4].textContent = playCards[1].filter( card => card.color === 'brown').length;
   dot[5].textContent = playCards[1].filter( card => card.color === 'blue').length;

   dot[6].textContent = playCards[2].filter( card => card.color === 'green').length;
   dot[7].textContent = playCards[2].filter( card => card.color === 'brown').length;
   dot[8].textContent = playCards[2].filter( card => card.color === 'blue').length;
      
}
