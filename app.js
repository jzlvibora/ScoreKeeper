// const player1 = document.querySelector('#player1');
// const player2 = document.querySelector('#player2');
const resetButton = document.querySelector('#reset');
// const p1 = document.querySelector('#p1');
// const p2 = document.querySelector('#p2');
const winningScoreSelect = document.querySelector('#game');

// let counter1 = 0;
// let counter2 = 0;
let winningScore = 3;
let isGameOver = false;

//Refactoring the code
const p1Property = {
    score: 0,
    button:document.querySelector('#player1'),
    display:document.querySelector('#p1')
}

const p2Property = {
    score: 0,
    button:document.querySelector('#player2'),
    display:document.querySelector('#p2')
}

function updateScore(player,opponent) {
    if (!isGameOver) {
        player.score++;
        if (player.score === winningScore) {
            //console.log("Player1 wins");
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            isGameOver = true;
            player.button.disabled = true;
            opponent.button.disabled = true;
            
        }
        
        player.display.textContent = player.score;   
    }   
    
}



p1Property.button.addEventListener('click', function (e) {
    //     if (!isGameOver) {
    //         counter1++;
    //         if (counter1 === winningScore) {
    //             console.log("Player1 wins");
    //             p1.classList.add('has-text-success');
    //             p2.classList.add('has-text-danger');
    //             isGameOver = true;
    //             player1.disabled = true;
    //             player2.disabled = true;
    //         }
        
    //         p1.textContent = counter1;   
    //     }   
    // })
    updateScore(p1Property, p2Property);
})
p2Property.button.addEventListener('click', function (e) {
    // if (!isGameOver) {
    //     counter2++;
    //     if (counter2 === winningScore) {
    //         console.log("Player2 wins")
    //         p2.classList.add('has-text-success');
    //         p1.classList.add('has-text-danger');
    //         isGameOver = true;
    //         player1.disabled = true;
    //         player2.disabled = true;
    //     }
    //     p2.textContent = counter2;
        
    // }   
    updateScore(p2Property, p1Property);
})

// reset.addEventListener('click', function (e) {
//     // counter1 == 0;
//     // counter2 == 0;
//     isGameOver = false;
//     p1.textContent = 0;
//     p2.textContent = 0;
//     counter1 = 0;
//     counter2 = 0;
// })

resetButton.addEventListener('click', reset);

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

function reset() {
    isGameOver = false;
    //pwede to kaso what if more than 2 palyers ang involved? Better choice is to use loop
    // p1Property.display.textContent = 0;
    // p2Property.display.textContent = 0;
    // p1Property.score = 0;
    // p2Property.score = 0;
    // p1.classList.remove('has-text-success', 'has-text-danger');
    // p2.classList.remove('has-text-success', 'has-text-danger');
    // p1Property.button.disabled = false;
    // p2Property.button.disabled = false;
    for(let p of [p1Property, p2Property]){
        p.score = 0;
        p.display.textContent = 0;
        p.button.disabled = false;
        p.display.classList.remove('has-text-success', 'has-text-danger');
    }
}


