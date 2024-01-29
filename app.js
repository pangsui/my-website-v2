/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying, roundScore1;
//var dices = new Array();

//getting content and saving in variable x
//var x = document.querySelector('#score-0').textContent;
//console.log('x = ' + x);
init();


document.querySelector('.btn-roll').addEventListener('click', function() {
    // 1. Random number
    if (gamePlaying) {
        var dice = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;
        //2  display the result
        var diceDOM = document.querySelector('.dice');
        var diceDOM2 = document.querySelector('.dice2');
        diceDOM.style.display = 'block';
        diceDOM2.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
        diceDOM2.src = 'dice-' + dice2 + '.png';
        console.log('dice = ' + dice);
        console.log('dice2 = ' + dice2);
        //3. update the round score only if the rolled number was not a 1
        if (dice !== 1 && dice2 !== 1) {
            //add score
            roundScore += dice;
            roundScore1 += dice2;
            console.log('rounscore1 = ' + roundScore);
            console.log('roundScore2 = ' + roundScore1);
            console.log('Total Score = ' + (roundScore1 + roundScore));
            document.querySelector('#current-' + activePlayer).textContent = roundScore + roundScore1;
            // dices.push(dice, dice2);
            //dices.push(dice2);
            // console.log('elementsOfArray ' + dices);
            //  for (var i = 0; i <= dices.length; i++) {
            if (dice === 6 && dice2 === 6) {
                scores[activePlayer] = 0;
                console.log('Total score = ' + scores[activePlayer]);
                document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
                roundScore = 0;
                console.log('roundScoreCal = ' + roundScore);
                document.querySelector('#current-' + activePlayer).textContent = roundScore;
                nextPlayer();
            } else if ((dice === 6 && dice2 === 1) || (dice === 1 && dice2 === 6)) {
                nextPlayer();
            }

            // }


        } else {
            //next player
            //dices = [];
            nextPlayer();

        }
    }

});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        //add current score to global score
        scores[activePlayer] += roundScore + roundScore1;
        //update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        //user to define winning score level
        var newWinningScoreSet = document.querySelector('.winning-score').value;
        console.log('newWinning Score = ' + newWinningScoreSet);
        //dices = [];
        //check if player won the game

        if (scores[activePlayer] >= newWinningScoreSet) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('#name-' + activePlayer).classList.add('blinking');
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.dice2').style.display = 'none';
            document.querySelector('.final-score').placeholder = scores[activePlayer];
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

            gamePlaying = false;

        } else {
            // dices = [];
            nextPlayer();
        }
    }
});

function nextPlayer() {
    //dices = [];
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    roundScore1 = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    // document.querySelector('.player-0-panel').classList.remove('.active');
    // document.querySelector('.player-1-panel').classList.add('.active');

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';
}


document.querySelector('.btn-new').addEventListener('click', init);

function init() {

    gamePlaying = true;
    scores = [0, 0];
    roundScore = 0;
    roundScore1 = 0;
    activePlayer = 0;

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('#name-0').classList.remove('blinking');
    document.querySelector('#name-1').classList.remove('blinking');
    document.querySelector('.final-score').placeholder = 'final score';
    document.querySelector('.winning-score').value = '100';
    // dices = [];
    //console.log('length of new array ' + dices.length);

}

document.querySelector('.play').addEventListener('click', function() {
    document.querySelector('.instructions').style.display = 'block';
});

document.querySelector('.hide-instructions').addEventListener('click', function() {
    document.querySelector('.instructions').style.display = 'none';
});














//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice +'</em>';