let gamer = 0
$(".row").on("click", function() {
    if(!$(this).text()){
        gamer++;
        if (gamer % 2 != 0){
            $(this).text("X");
        }
        else{
            $(this).text("O");
        }
    };
    check();
})

let winX = 0;
let winO = 0;

function check(){
    let xH = 0;
    let yH = 0;
    let xV = 0;
    let yV = 0;
    let xD = 0;
    let yD = 0;
    let xD2 = 0;
    let yD2 = 0;

    for (let i = 1; i < 4; i++){

        for (let j = 1; j < 4; j++){
            if ($(`.line:nth-child(${i})>.row:nth-child(${j})`).text() == "X"){
                xH++;  
            }
            else if ($(`.line:nth-child(${i})>.row:nth-child(${j})`).text() == "O"){
                yH++;
            };

            if ($(`.line:nth-child(${j})>.row:nth-child(${i})`).text() == "X"){
                xV++;  
            }
            else if ($(`.line:nth-child(${j})>.row:nth-child(${i})`).text() == "O"){
                yV++;
            };

            

            //проверка 1 по диагонали

            if($(`.line:nth-child(${i})>.row:nth-child(${i})`).text() == "X"){
                xD++;
            }
            else if ($(`.line:nth-child(${i})>.row:nth-child(${i})`).text() == "X"){
                yD++;
            }

            //проверка 2 по диагонали 

            if($(`.line:nth-child(${i})>.row:nth-child(${4 - i})`).text() == "X"){
                xD2++;
            }
            else if ($(`.line:nth-child(${i})>.row:nth-child(${4 - i})`).text() == "X"){
                yD2++;
            }
            

        }

        if (xH == 3 || xV == 3 || xD == 3 || xD2 == 3){
            alert('X')
            winX++;
            break;
        }else if (yH == 3 || yV ==3 || yD == 3 || yD2 == 3){
            alert('O')
            winY++;
            break;
        }

        xH = 0;
        yH = 0;
        xV = 0;
        yV = 0;
        xD2 = 0;
        yD2 = 0;
    }

}