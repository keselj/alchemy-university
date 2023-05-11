/* The function playerHandScore that takes in a string of face cards 
(Jack, Queen, and King only) and returns the total score of the players hand.
The cards are represented by the first letter in the name of the card:
A "K" is 4 points
A "Q" is 3 points
A "J" is 2 points */

function playerHandScore(hand) {
    let plHands = 0;   
    let values = {
        "K": 4,
        "Q": 3,
        "J":2,};
    for (let i = 0; i < hand.length; i++) {
        plHands += values[hand[i]];
    }
    return plHands
}