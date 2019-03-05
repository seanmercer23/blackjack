const names = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"]
const suits = ["Clubs", "Diamonds", "Hearts", "Spades"]
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11]
const deck = []
let playerHand = []
let dealerHand = []
let handTotal = null

const buildDeck = function() {
    for(let i = 0; i < values.length; i++) {
      for (let j = 0; j < suits.length; j++) {
          let card = {Name: names[i], Suit: suits[j], Value: values[i]}
            deck.push(card)
    }}
     return deck
      }

buildDeck()


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

let addUp = function(hand){
    for (let i = 0; i < hand.length; i++) {
      for (let j= i + 1; j < hand.length; j++) {
        handTotal = (hand[i].Value + hand[j].Value)
      }
    } 
}

const hitMe = function (hand) {
    let dealtCard = Math.floor(Math.random() * deck.length)
    let card = deck[dealtCard]
    hand.push(card)
    deck.splice(dealtCard, 1)
    handTotal += card.Value
    return hand, handTotal
}


console.log(playerHand)
console.log(hitMe(playerHand))
console.log(handTotal)
