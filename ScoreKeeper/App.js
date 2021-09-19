const player1={
    score:0,
    display:document.querySelector("#p1Display"),
    button:document.querySelector("#p1Add1")
}

const player2={
    score:0,
    display:document.querySelector("#p2Display"),
    button:document.querySelector("#p2Add1")
}

const selectWinningScore=document.querySelector("#playTo")
const resetButton=document.querySelector('#reset')
let winningScore=3;
let isGameOver=false;

function playerScore(player,opponent){
    if(!isGameOver){
        player.score+=1;
        if(player.score===winningScore){
            isGameOver=true
            player.display.classList.add('has-text-success')
            opponent.display.classList.add('has-text-danger')
            player.button.disabled=true;
            opponent.button.disabled=true;
        }
        player.display.textContent=player.score
    }
}

function reset(){
    isGameOver=false
    for(let player of [player1,player2]){
        player.score=0
        player.display.textContent=player.score
        player.button.disabled=false
        player.display.classList.remove('has-text-success','has-text-danger')
    }
}

player1.button.addEventListener('click',function(){
    playerScore(player1,player2)
})

player2.button.addEventListener('click',function(){
    playerScore(player2,player1)
})

selectWinningScore.addEventListener('change',function(){
    winningScore=parseInt(this.value)
    reset();
})

resetButton.addEventListener('click',reset)