let combinat = ['', '' , '', '', '', '', '', '', ''];
let gamer = 0;
$(".col").on("click", function(){
    if (!$(this).text()){
        gamer++;
        if(gamer % 2 != 0){
            $(this).text("X");
            combinat[$(this).prop('id')] = $(this).text();
            $('#plaer').text("O");
        }
        else{
            $(this).text("O");
            combinat[$(this).prop('id')] = $(this).text();
            $('#plaer').text("X");
        };
    }
    checkWIn(); 
    restartGame();
});

let winX = 0;
let winO = 0;
let drawYO = 0;
let h = 1;
let status = '';

function checkWIn(){

    let lineG1 = combinat[0] + combinat[1] + combinat[2],
        lineG2 = combinat[3] + combinat[4] + combinat[5],
        lineG3 = combinat[6] + combinat[7] + combinat[8];
    let lineV1 = combinat[0] + combinat[3] + combinat[6],
        lineV2 = combinat[1] + combinat[4] + combinat[7],
        lineV3 = combinat[2] + combinat[5] + combinat[8];
    let lineD1 = combinat[0] + combinat[4] + combinat[8],
        lineD2 = combinat[2] + combinat[4] + combinat[6];

    if (lineG1 == 'XXX' || lineG2 == 'XXX' || lineG3 == 'XXX' || lineV1 == 'XXX' || lineV2 == 'XXX' || lineV3 == 'XXX' || lineD1 == 'XXX' || lineD2 == 'XXX'){
        winX++;
        alert('Win X');
        status = 'winx';
    }
    else if(lineG1 == 'OOO' || lineG2 == 'OOO' || lineG3 == 'OOO' || lineV1 == 'OOO' || lineV2 == 'OOO' || lineV3 == 'OOO' || lineD1 == 'OOO' || lineD2 == 'OOO'){
        winO++;
        alert('Win O');
        status = 'wino';
    }
    else if (h >= combinat.length){
        drawYO++;
        alert('Draw');
        status = 'drawXO';
    }
    h++;

};

function restartGame(){

    if (status == 'winx' || status == 'wino' || status == 'drawXO'){
        $('#reset').prop('disabled', false);
    }else{
        $('#reset').prop('disabled', true);
    }
    localDate();
};

$('#reset').on("click", function(){
    h = 1;
    gamer = 0;
    combinat = ['', '' , '', '', '', '', '', '', ''];
    status = '';
    $('.col').text('');
    $('#plaer').text("X");
    $('#reset').prop('disabled', true);
})

function localDate(){
    $('#winX').text(winX);
    $('#winO').text(winO);
    $('#draw').text(drawYO);
}