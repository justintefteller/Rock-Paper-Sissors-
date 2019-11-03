// 1) computer choice and player choice
            // 2) compare choices 
            // 3) determine who won 
            // 4) give point to winner 
            // 5) repeat round and give point 
            // 6) repeat 5 times and stop game 
            // 7) determine winner 
            // if a players or computers score goes up then the round pluses by 1
            let playerScore = 0;
            let computerScore = 0;

            function computerPlay(){
                result = ['rock', 'paper', 'sissors'];
                move = result[Math.floor(Math.random() * result.length)];
                return move;
            }
            
            const buttons = document.querySelectorAll('.button')
           buttons.forEach(button => button.addEventListener('click', playerChoice));
             
            function playerChoice(e){
              if(e.type === 'click'){
                let player = this.innerHTML.toLowerCase();
              }
              let computer = computerPlay();
              playRound(); 
            }          
            function playRound(){
                if (computer == player){
                    console.log('You tied this round!')
                } else if (computer == 'rock' && player == 'paper' || computer == 'paper' && player == 'sissors' || computer == 'sissors' && player == 'rock') {
                    console.log('You win this round!'); 
                    playerScore++;
                } else if (computer == 'rock' && player == 'sissors' || computer == 'sissors' && player == 'paper' || computer == 'paper' && player == 'rock') {
                    console.log('You lose this round!');
                    computerScore++;
                }
            }

            function game(){
                for (round = 1; round < 100; round++){
                   if (playerScore === 5 || computerScore === 5) {
                      break;
                   }else {
                       playRound();
                    }
                }
                if(playerScore === 5){
                    var new1 = confirm('You win!','Play again?');
                        if(new1 === true){
                            resetGame();
                        }
                } else{
                    var new2 = confirm('You lose!', 'Play again?');
                        if(new2 === true){
                            resetGame();
                        }
                }
            }
    
            function resetGame(){
               let newScore1 = playerScore;
               let newScore2 = computerScore;
                newScore1.append(0);
                newScore2.append(0);
            }
            
            
            // function buttonClicked(e){
            //   if(e.type === 'click'){
            //       console.log(this.innerHTML.toLowerCase());
            //       this.childAppend(player)
            //   }
            // }
            
            // const buttons = document.querySelectorAll('.button')
            // buttons.forEach(button => button.addEventListener('click', buttonClicked));

            // function gameOver(){
            //     if (playerScore == 5 ){
            //             return 'Game over, you win!'
            //         } else if (computerScore == 5) {
            //             return 'Game ovRr, you lose...'
            //         }else {
            //             console.log('something went wrong!')
            //     }
            // }

            // function gameOver(){
            //     if (playerScore === 5 ){
            //          'Game over, you win!'
            //     } else if (computerScore === 5) {
            //          'Game over, you lose...'
            //     }else {
            //          'You tied!'
            //     }
            // }
            // function game(){
            //     if(!gameOver()){
            //         playRound();
            //     }
            // }