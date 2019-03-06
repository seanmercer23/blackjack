const names = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"]
const suits = ["Clubs", "Diamonds", "Hearts", "Spades"]
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11]
const deck = []
let playerHand = []
let dealerHand = []

const buildDeck = function() {
    for(let i = 0; i < values.length; i++) {
      for (let j = 0; j < suits.length; j++) {
          let card = {Name: names[i], Suit: suits[j], Value: values[i], Image: `CSS/Assets/PNG-cards-1.3/${names[i]}_of_${suits[j]}.png`}
            deck.push(card)
    }}
     return deck
      }
//Image addition syntax provided by https://codereview.stackexchange.com/questions/153251/single-player-repeatable-blackjack-game

buildDeck()
console.log(deck)

const dealCardsToPlayers = function() {
  for (let i=0; i < 2; i++) {
      let dealtHand = Math.floor(Math.random() * deck.length)
      let card = deck[dealtHand]
      playerHand.push(card)
      deck.splice(dealtHand, 1)
    
      let dealtHandTwo = Math.floor(Math.random() * deck.length)
      let cardTwo = deck[dealtHandTwo]
      dealerHand.push(cardTwo)
      deck.splice(dealtHandTwo, 1)
  }
}

dealCardsToPlayers()

// const dealButton = document.body.querySelector("#deal")
// dealButton.addEventListener('click', dealCardsToPlayers)
// console.log(playerHand)

 const handValue = function(hand) {
   let total = 0
    for (var i = 0; i < hand.length; i++) {
      total += hand[i].Value
    }
    return total
  }
  
  const blackjack = function () {
    if (handValue(dealerHand) === 21 && handValue(playerHand) === 21) {
      console.log("It's a push!")
    } else if (handValue(playerHand) === 21) {
      console.log("Blackjack! Player wins!")
    } else if (handValue(dealerHand) === 21) {
      console.log("Blackjack! House wins!")
    }
  }
  blackjack()

const hitMe = function (hand) {
    let dealtCard = Math.floor(Math.random() * deck.length)
    let card = deck[dealtCard]
    hand.push(card)
    deck.splice(dealtCard, 1)
    return hand
}

const bust = function() {
  if (handValue(playerHand) > 21) {
    console.log("House Busts! Player Wins!") 
  } else if (handValue(dealerHand) > 21) {
    console.log("House Busts! Player Wins!")
  }
}

const checkForWinner = function() {
  if (handValue(playerHand) > handValue(dealerHand)) {
      alert("Player wins!") 
  } else if (handValue(playerHand) < handValue(dealerHand)) {
    alert("House wins!")
  } else if (handValue(playerHand) === handValue(dealerHand)) {
    alert("It's a push!")
  }
}

const dealerLogic = function () {
  if (handValue(dealerHand) <= 16) {
    hitMe(dealerHand)
  } else if (handValue(dealerHand) >= 17) {
    checkForWinner()
  }
}

const stay = function() {
  dealerLogic()
}
