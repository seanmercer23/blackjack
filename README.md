# Blackjack

### This is a Blackjack game that has been coded in HTML, CSS, JavaScript, with DOM triggered elements.

## Instructions

<p>The basic object of the game is to have the best hand value possible, calculated by the sum of the card values in the hand, without exceeding 21.  The card values for 2-10 are as they appear on the card while the face cards Jack Queen and King are worth 10 and the Ace in this particular version is worth 11.  Each game begins with you, the player, pressing the **deal** button after which you will receive two faceup cards and the dealer, your opponent, will receive two facedown cards.  If after the initial deal either your or the dealer's initial hand value equates to 21 the game is instantly over as this is considered a **natural blackjack**, the best hand possible in the game.  Failing a natural blackjack for either you or the dealer you have two options: you can choose to **hit** (using the hit button) which here means to be dealt an extra card the value of whcih will then be added to the existing sum of your hand.  You are permitted to hit as many times as you'd like until the value of your hand exceeds 21 at which point you will be considered to have a **bust** which means the game is instantly over and you lose alternatively if your hand value equates to 21 at any point you will be considered to have **blackjack** and will instantly be deemed the winner.  Once you are satisfied with your cards and have no desire to add anymore you can **stand** (by hitting the stand button) on your hand which then flips gameplay over to the dealer for their turn.  Once the dealer chooses to stand themself their cards will be revealed and a winner will be determined by checking for who has the higher hand value between you and the dealer.  If at anytime during their turn the dealer's hand **busts** or constitutes a **blackjack** the game is over and the winner will be determined based off the rules governing those two scenarios.</p>

## Technologies
<p>The game's appearance was created using HTML5 with CSS3 styling in the Grid style with the layout being 1 column segmented into 4 rows.  The game's logic was created entirely in JavaScript using ES6 with various DOM event listeners set up to handle various click events in order to make the game more interactive.  There is one CSS animation and multiple audio events present that are all fired by separate click events.</p>

**[Play the game by clicking here!](https://seanmercer23.github.io/blackjack/)**

## Gameplay Images
![Gamplay Image 1](https://i.imgur.com/MqZVjPH.png)
![Gameplay Image 2](https://i.imgur.com/rR27Ag4.png)
![Mobile Gameplay Image](https://i.imgur.com/ciO2W9c.jpg?1)

## Credits
### Card Face Images:
<p>Vectorized Playing Cards 2.0 - http://sourceforge.net/projects/vector-cards/</p>
<p>Copyright 2015 - Chris Aguilar - conjurenation@gmail.com</p>
<p>Licensed under LGPL 3 - www.gnu.org/copyleft/lesser.html<p>
  
### Card Back Images:
https://www.shutterstock.com/image-vector/playing-card-back-side-90984266?src=LY9u_qnfORXmpTqxVrNdaQ-7-94

### Background Color Gradient
https://uigradients.com/#SinCityRed
