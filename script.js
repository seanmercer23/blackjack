const names = [2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king", "ace"]
const suits = ["clubs", "diamonds", "hearts", "spades"]
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 13]
const deck = []
let playerHand = []
let dealerHand = []
const dealButton = document.body.querySelector("#deal")
const hitButton = document.querySelector('#hit')
const stayButton = document.querySelector('#stay')
const dealer = document.querySelector('#dealer')
const player = document.querySelector('#player')
const newHand = document.querySelector('#newHand')
const deckImage = document.querySelector('.deck')
hitButton.disabled = true
stayButton.disabled = true

const buildDeck = function() {
    for(let i = 0; i < values.length; i++) {
      for (let j = 0; j < suits.length; j++) {
          let card = {Name: names[i], Suit: suits[j], Value: values[i], Image: `CSS/Assets/${names[i]}_of_${suits[j]}.jpeg`}
            deck.push(card)
    }}
     return deck
      }
//Image addition syntax provided by https://codereview.stackexchange.com/questions/153251/single-player-repeatable-blackjack-game

const dealCardsToPlayer = function() {
  for (let i=0; i < 2; i++) {
      let dealtHand = Math.floor(Math.random() * deck.length)
      let card = deck[dealtHand]
      playerHand.push(card)
      deck.splice(dealtHand, 1)
  }
  renderPlayerCards()
}

const dealCardsToDealer = function() {
  for (let i = 0; i < 2; i++) {
    let dealtHandTwo = Math.floor(Math.random() * deck.length)
      let cardTwo = deck[dealtHandTwo]
      dealerHand.push(cardTwo)
      deck.splice(dealtHandTwo, 1)
  }
  renderDealerCards()
}

const renderPlayerCards = function() {
for (let i = 0; i < 2; i++) {
  let faceUpCard = document.createElement('img')
  faceUpCard.setAttribute('src', playerHand[i].Image)
  faceUpCard.setAttribute('class', 'playerCards')
  player.appendChild(faceUpCard)
}}

const renderDealerCards = function() {
  for (let i=0; i < 2; i++){
  let faceDownCard = document.createElement('img')
      faceDownCard.setAttribute('src', 'CSS/Assets/card_back_red.png')
      faceDownCard.setAttribute('class', 'dealerCards')
      dealer.appendChild(faceDownCard)
}}

const toggleButtonsPostDeal = function() {
  dealButton.disabled = true
  hitButton.disabled = false
  stayButton.disabled = false
}

const dealCards = function () {
  dealCardsToPlayer()
  dealCardsToDealer()
  blackjack()
  toggleButtonsPostDeal()
}

 const handValue = function(hand) {
   let total = 0
    for (var i = 0; i < hand.length; i++) {
      total += hand[i].Value
    }
    return total
  }
  
  const blackjack = function () {
    if (handValue(dealerHand) === 21) {
      disableGameButtons()
      alert("It's a push!")
      revealDealerCards()
    } else if (handValue(playerHand) === 21) {
      disableGameButtons()
      alert("Blackjack! Player wins!")
      revealDealerCards()
    } else if (handValue(dealerHand) === 21) {
      disableGameButtons()
      alert("Blackjack! House wins!")
      revealDealerCards()
    }
  }

const playerAddCard = function() {
  let dealtCard = Math.floor(Math.random() * deck.length)
    let card = deck[dealtCard]
    playerHand.push(card)
    deck.splice(dealtCard, 1)
    renderPlayerHit()
}

const renderPlayerHit = function() {
  for (let i = playerHand.length - 1; i < playerHand.length; i++) {
    let faceUpCard = document.createElement('img')
    faceUpCard.setAttribute('src', playerHand[i].Image)
    faceUpCard.setAttribute('class', 'playerCards')
    player.appendChild(faceUpCard)
  }
}

const hitMe = function() {
  playerAddCard()
  blackjack()
  bust()
}

const dealerAddCard = function () {
    let dealtCard = Math.floor(Math.random() * deck.length)
    let card = deck[dealtCard]
    dealerHand.push(card)
    deck.splice(dealtCard, 1)
    renderDealerHit()
    }

const renderDealerHit = function () {
  for (let i = dealerHand.length -1; i < dealerHand.length; i++) {
    let faceDownCard = document.createElement('img')
    faceDownCard.setAttribute('src', 'CSS/Assets/card_back_red.png')
    faceDownCard.setAttribute('class', 'dealerCards')
    dealer.appendChild(faceDownCard)
  }
}

const dealerHit = function() {
  dealerAddCard()
  blackjack()
  bust()
}

const bust = function() {
  if (handValue(playerHand) > 21) {
    disableGameButtons()
    alert("Player Busts! House Wins!")
    revealDealerCards() 
  } else if (handValue(dealerHand) > 21) {
    disableGameButtons()
    alert("House Busts! Player Wins!")
    revealDealerCards()
  }
}

const disableGameButtons = function() {
  dealButton.disabled = true
  hitButton.disabled = true
  stayButton.disabled = true
}

const checkForWinner = function() {
  if (handValue(playerHand) > handValue(dealerHand) && handValue(playerHand) < 21) {
      alert("Player wins!")
      revealDealerCards() 
  } else if (handValue(playerHand) < handValue(dealerHand) && handValue(dealerHand) < 21) {
      alert("House wins!")
      revealDealerCards()
  } else if (handValue(playerHand) === handValue(dealerHand)) {
      alert("It's a push!")
      revealDealerCards()
  }
}

const toggleButtonsDealerTurn = function() {
  hitButton.disabled = true
  stayButton.disabled = true
}

const dealerTurn = function () {
  toggleButtonsDealerTurn()
  while (handValue(dealerHand) < 17) {
    dealerHit()
  }
    checkForWinner()
  }

const revealDealerCards = function () {
  let dealerCards = document.querySelectorAll('.dealerCards')
  for (let i = 0; i < dealerHand.length; i++) {
    dealerCards[i].setAttribute('src', dealerHand[i].Image)
}}

const playGame = function() {
  dealButton.addEventListener('click', dealCards)
  hitButton.addEventListener('click', hitMe)
  stayButton.addEventListener('click', function() {
    dealerTurn()
  })  
}

const deckSpin = function() {
  deckImage.classList.toggle('spin')
}

buildDeck()
playGame()
newHand.addEventListener('click', function() {
  window.location.reload()
})
deckImage.addEventListener('click', deckSpin)