const names = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"]
const suits = ["Clubs", "Diamonds", "Hearts", "Spades"]
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11]
const deck = []
let playerHand = []
let dealerHand = []
const dealButton = document.body.querySelector("#deal")
const hitButton = document.querySelector('#hit')
const stayButton = document.querySelector('#stay')
const dealer = document.querySelector('#dealer')
const player = document.querySelector('#player')


const buildDeck = function() {
    for(let i = 0; i < values.length; i++) {
      for (let j = 0; j < suits.length; j++) {
          let card = {Name: names[i], Suit: suits[j], Value: values[i], Image: `CSS/Assets/PNG-cards-1.3/${names[i]}_of_${suits[j]}.png`}
            deck.push(card)
    }}
     return deck
      }
//Image addition syntax provided by https://codereview.stackexchange.com/questions/153251/single-player-repeatable-blackjack-game

const dealCardsToPlayers = function() {
  for (let i=0; i < 2; i++) {
      let dealtHand = Math.floor(Math.random() * deck.length)
      let card = deck[dealtHand]
      playerHand.push(card)
      deck.splice(dealtHand, 1)
      let faceUpCard = document.createElement('img')
      faceUpCard.setAttribute('src', playerHand[i].Image)
      faceUpCard.setAttribute('class', 'playerCards')
      player.appendChild(faceUpCard)
    
      let dealtHandTwo = Math.floor(Math.random() * deck.length)
      let cardTwo = deck[dealtHandTwo]
      dealerHand.push(cardTwo)
      deck.splice(dealtHandTwo, 1)
      let faceDownCard = document.createElement('img')
      faceDownCard.setAttribute('src', 'CSS/Assets/card_back_red.png')
      faceDownCard.setAttribute('class', 'dealerCards')
      dealer.appendChild(faceDownCard)
      blackjack()
  }
  console.log(playerHand)
  console.log(dealerHand)
}

dealButton.addEventListener('click', dealCardsToPlayers)

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

const dealerHit = function () {
    let dealtCard = Math.floor(Math.random() * deck.length)
    let card = deck[dealtCard]
    dealerHand.push(card)
    deck.splice(dealtCard, 1)
    for (let i = dealerHand.length -1; i < dealerHand.length; i++) {
      let faceDownCard = document.createElement('img')
      faceDownCard.setAttribute('src', 'CSS/Assets/card_back_red.png')
      faceDownCard.setAttribute('class', 'playerCards')
      dealer.appendChild(faceDownCard)
    }
}

hitButton.addEventListener('click', function() {
  let dealtCard = Math.floor(Math.random() * deck.length)
  let card = deck[dealtCard]
  playerHand.push(card)
  deck.splice(dealtCard, 1)
  for (let i = playerHand.length - 1; i < playerHand.length; i++) {
    let faceUpCard = document.createElement('img')
    faceUpCard.setAttribute('src', playerHand[i - 1].Image)
    faceUpCard.setAttribute('class', 'playerCards')
    player.appendChild(faceUpCard)
  }
  blackjack()
  bust()
})

const bust = function() {
  if (handValue(playerHand) > 21) {
    console.log("Player Busts! House Wins!") 
  } else if (handValue(dealerHand) > 21) {
    console.log("House Busts! Player Wins!")
  }
}

const checkForWinner = function() {
  revealDealerCards()
  if (handValue(playerHand) > handValue(dealerHand)) {
      alert("Player wins!") 
  } else if (handValue(playerHand) < handValue(dealerHand)) {
    alert("House wins!")
  } else if (handValue(playerHand) === handValue(dealerHand)) {
    alert("It's a push!")
  }
}

const dealerTurn = function () {
  if (handValue(dealerHand) <= 16) {
    dealerHit()
    if (handValue(dealerHand) <= 16) {
      dealerHit()
    } else if (handValue(dealerHand) >= 17) {
      checkForWinner()
    }
  } else if (handValue(dealerHand) >= 17) {
    checkForWinner()
  }
}

stayButton.addEventListener('click', function() {
  dealerTurn()
})

const revealDealerCards = function () {
  const dealerCards = document.querySelectorAll('.dealerCards')
  for (let i = 0; i < dealerHand.length; i++) {
    console.log(dealerCards)
  dealerCards[i].setAttribute('src', dealerHand[i].Image)
}}

const playGame = function () {
  dealButton.addEventListener('click', dealCardsToPlayers)
  hitButton.addEventListener('click', function() {
    let dealtCard = Math.floor(Math.random() * deck.length)
    let card = deck[dealtCard]
    playerHand.push(card)
    deck.splice(dealtCard, 1)
    for (let i = 2; i < playerHand.length; i++) {
      let faceUpCard = document.createElement()
      faceUpCard.setAttribute('src', playerHand[i - 1].Image)
      faceUpCard.setAttribute('class', 'playerCards')
      player.appendChild(faceUpCard)
    }
    blackjack()
    bust()
  })
  stayButton.addEventListener('click', function() {
    dealerTurn()
  })

}
buildDeck()
