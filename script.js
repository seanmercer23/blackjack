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
const newHand = document.querySelector('#newHand')
hitButton.disabled = true
stayButton.disabled = true

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
  dealButton.disabled = true
  hitButton.disabled = false
  stayButton.disabled = false
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
      alert("It's a push!")
      revealDealerCards()
    } else if (handValue(playerHand) === 21) {
      alert("Blackjack! Player wins!")
      revealDealerCards()
    } else if (handValue(dealerHand) === 21) {
      alert("Blackjack! House wins!")
      revealDealerCards()
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
      faceDownCard.setAttribute('class', 'dealerCards')
      dealer.appendChild(faceDownCard)
    }
    blackjack()
    bust()
}

const bust = function() {
  if (handValue(playerHand) > 21) {
    aceHighOrLow(playerHand)
    hitButton.disabled = true
    stayButton.disabled = true
    alert("Player Busts! House Wins!")
    revealDealerCards() 
  } else if (handValue(dealerHand) > 21) {
    aceHighOrLow(dealerHand)
    hitButton.disabled = true
    stayButton.disabled = true
    alert("House Busts! Player Wins!")
    revealDealerCards()
  }
}

const checkForWinner = function() {
  if (handValue(playerHand) > handValue(dealerHand) && handValue(playerHand) < 21) {
    aceHighOrLow(dealerHand)
    aceHighOrLow(playerHand)
      hitButton.disabled = true
      stayButton.disabled = true
      alert("Player wins!")
      revealDealerCards() 
  } else if (handValue(playerHand) < handValue(dealerHand) && handValue(dealerHand) < 21) {
    aceHighOrLow(dealerHand)
    aceHighOrLow(playerHand)
      hitButton.disabled = true
      stayButton.disabled = true
      alert("House wins!")
      revealDealerCards()
  } else if (handValue(playerHand) === handValue(dealerHand)) {
    aceHighOrLow(dealerHand)
    aceHighOrLow(playerHand)
      hitButton.disabled = true
      stayButton.disabled = true
      alert("It's a push!")
      revealDealerCards()
  }
}

const dealerTurn = function () {
  aceHighOrLow(dealerHand)
  hitButton.disabled = true
  stayButton.disabled = true
  if (handValue(dealerHand) <= 16) {
    dealerHit()
    if (handValue(dealerHand) <= 16) {
      dealerHit()
      if (handValue(dealerHand) <= 16) {
        dealerHit()
      } 
    }
  }
  checkForWinner()
}

const revealDealerCards = function () {
  let dealerCards = document.querySelectorAll('.dealerCards')
  for (let i = 0; i < dealerHand.length; i++) {
    dealerCards[i].setAttribute('src', dealerHand[i].Image)
}}

const playGame = function() {
  dealButton.addEventListener('click', dealCardsToPlayers)
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
  stayButton.addEventListener('click', function() {
    dealerTurn()
  })  
}
buildDeck()
playGame()
newHand.addEventListener('click', function() {
  window.location.reload()
}) 


const aceHighOrLow = function(hand) {
  for (let i = 0; i < hand.length; i++) {
    if(handValue(hand) > 21 && hand[i].Name === "Ace") {
      handValue(hand) -= 10
    }
  }
}