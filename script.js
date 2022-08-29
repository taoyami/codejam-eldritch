// import blueCards from '../assets/MythicCards/blue/index.js'
// console.log(blueCards);
// import brownCards from '../assets/MythicCards/brown/index.js'
// import greenCards from '../assets/MythicCards/green/index.js'

// import ancientsData from '../data/ancients.js'

import ancientsData from '../data/ancients.js';
import difficulties from '../data/difficulties.js';
import greencardsData from '../data/mythicCards/green/index.js';
import browncardsData from '../data/mythicCards/brown/index.js';
import bluecardsData from '../data/mythicCards/blue/index.js';

//console.log(greencardsData);
// console.log(greenCards);
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

const sumGreenCards = +ancientsData[0].firstStage.greenCards + +ancientsData[0].secondStage.greenCards + +ancientsData[0].thirdStage.greenCards
const sumBrownCards = +ancientsData[1].firstStage.brownCards + +ancientsData[1].secondStage.brownCards + +ancientsData[1].thirdStage.brownCards
const sumBlueCards = +ancientsData[1].firstStage.blueCards + +ancientsData[1].secondStage.blueCards + +ancientsData[1].thirdStage.blueCards

repeat(greenPlayCards, greencardsData, sumGreenCards);
repeat(brownPlayCards, browncardsData, sumBrownCards);
repeat(bluePlayCards, bluecardsData, sumBlueCards);


//
const sumFirstStageGreenCards = ancientsData[0].firstStage.greenCards;
const sumFirstStageBrownCards = ancientsData[0].firstStage.brownCards;
const sumFirstStageBlueCards = ancientsData[0].firstStage.blueCards;

const firstStageGreen = [];
const firstStageBrown = [];
const firstStageBlue = [];

repeat1(firstStageGreen, greenPlayCards, sumFirstStageGreenCards);
repeat1(firstStageBrown, brownPlayCards, sumFirstStageBrownCards);
repeat1(firstStageBlue, bluePlayCards, sumFirstStageBlueCards);



//
const sumSecondStageGreenCards = ancientsData[0].secondStage.greenCards;
const sumSecondStageBrownCards = ancientsData[0].secondStage.brownCards;
const sumSecondStageBlueCards = ancientsData[0].secondStage.blueCards;

const secondStageGreen = []
const secondStageBrown = []
const secondStageBlue = []

repeat1(secondStageGreen, greenPlayCards, sumSecondStageGreenCards);
repeat1(secondStageBrown, brownPlayCards, sumSecondStageBrownCards);
repeat1(secondStageBlue, bluePlayCards, sumSecondStageBlueCards);




//
const sumThirdStageGreenCards = ancientsData[0].thirdStage.greenCards;
const sumThirdStageBrownCards = ancientsData[0].thirdStage.brownCards;
const sumThirdStageBlueCards = ancientsData[0].thirdStage.blueCards;

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
   
  


currentCardPlay.src = "";

counter();
};



const deck = document.querySelector('.deck');
const currentCardPlay  = document.querySelector('.last-card');


function showCard(){
   if ( playCards[0].length != 0){
      currentCardPlay.src = playCards[0][0].cardFace;
   console.log(playCards[0])
   playCards[0].splice(0, 1);
   counter();
   //console.log(playCards[0])
   } else if (playCards[1].length != 0){
      currentCardPlay.src = playCards[1][0].cardFace;
     // console.log(playCards[1])
      playCards[1].splice(0, 1);
      counter();
     // console.log(playCards[1])
   } else if (playCards[2].length != 0){
      currentCardPlay.src = playCards[2][0].cardFace;
      //console.log(playCards[2])
      playCards[2].splice(0, 1);
      counter();
      //console.log(playCards[2])
   } else deck.classList.remove('deck-active');
     
   


};

deck.addEventListener('click', showCard );


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
