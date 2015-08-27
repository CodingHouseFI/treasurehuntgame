$(document).ready(function(){

    var randomNumber = Math.floor(Math.random()*9);
    console.log(randomNumber);








    $("btn").on("click", function(){

        if(this.id === randomNumber) {
          $(this).addclass("winner");
        }
        else {
          $(this).addClass("loser");
        }


    });

});
