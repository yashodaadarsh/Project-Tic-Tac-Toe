let boxes = document.querySelectorAll(".btn");
let resetbtn = document.querySelector('.reset-btn');
let newbtn = document.querySelector('.new-btn');

let turn0 = true;

let winner = document.querySelector('.winner');
let winName = document.querySelector(".win-name");
const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

boxes.forEach((box) => {
    box.addEventListener('click',() => {
        console.log("Iam clicked");
        if(turn0){
            box.innerHTML = 'O';
            turn0 = false;
        }
        else{
            box.innerHTML = 'X';
            turn0 = true;
            box.classList.add('btn2');
        }
        box.disabled = true;

        checkWinner();
    
    });
});


function disableBtns(){
    for( box of boxes ){
        box.disabled = true;
    }
}

function enableBtns(){
    for( box of boxes ){
        box.disabled = false;
        box.innerHTML = "";
        box.classList.remove('btn2');
    }
}

const resetGame = () => {
    turn0 = true;
    enableBtns();
    winner.classList.add("hide");
}

newbtn.addEventListener('click',resetGame);
resetbtn.addEventListener('click',resetGame);

let showWinner = (pos) =>{
    winName.innerHTML = `Congrulations, Winner is ${pos}`;
    disableBtns();
}

const checkWinner = () => {
    for(pattern of winPatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);
        let pos1 = boxes[pattern[0]].innerHTML;
        let pos2 = boxes[pattern[1]].innerHTML;
        let pos3 = boxes[pattern[2]].innerHTML;
        if( pos1 != '' && pos2 != '' && pos3 != '' ){
            if(pos1 == pos2 && pos2 == pos3 ){
                winner.classList.remove('hide');
                showWinner(pos1);
            }
        }
    }
}