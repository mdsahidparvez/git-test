$(document).ready(function () {
    $("#mycarousel").carousel({ interval: 2000 });
    // $("#carousel-pause").click(function(){
    //     $("#mycarousel").carousel('pause');
    // });
    // $("#carousel-play").click(function(){
    //     $("#mycarousel").carousel('cycle');
    // });
    $("#carouselButton").click(function () {
        if ($("#carouselButton").children("i").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("i").removeClass('fa-pause');
            $("#carouselButton").children("i").addClass('fa-play');
        }
        else if ($("#carouselButton").children("i").hasClass('fa-play')) {
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("i").removeClass('fa-play');
            $("#carouselButton").children("i").addClass('fa-pause');
        }

    });
    $('#login').click(function () {
        $('#modalid').modal('show');
    });
    $("#Reserve").click(function () {
        $("#modalid2").modal('show');
    });
});