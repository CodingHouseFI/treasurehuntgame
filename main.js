$(document).ready(function(){
    $("input").on("click", function(){
        var result = $(this).val()*Number($(this).parent().prev(".price").text().replace(/[^0-9\.]+/g,""));
        $(this).parent().next(".total").text("($"+result.toFixed(2)+" total)");
    });

});
