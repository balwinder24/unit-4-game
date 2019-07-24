    var wins = 0;
    var lost = 0;
    var score = 0;


    
    
    
    
    
    
    
    
    
    
    
    
    
    $("#gem1").on("click", function() {
    
        score = score + gem1;
        $("#score").html(score);
        console.log("score1 " + score);
        if (score === computerGuess) {
            checkifwon();
        }else if (score > computerGuess) {
            checkifwon();
        }
});

$("#gem2").on("click", function() {

        score = score + gem2;
        $("#score").html(score);
        console.log("score2 " + score);
        if (score === computerGuess) {
            checkifwon();
        }else if (score > computerGuess) {
            checkifwon();
        }
});

$("#gem3").on("click", function() {

        score = score + gem3;
        $("#score").html(score);
        console.log("score3 " + score);
        if (score === computerGuess) {
            checkifwon();
        }else if (score > computerGuess) {
            checkifwon();
        }
});

$("#gem4").on("click", function() {

        score = score + gem4;
        $("#score").html(score);
        console.log("score4 " + score);
        if (score ===computerGuess) {
            checkifwon();
        }else if (score > computerGuess) {
            checkifwon();
        }
});