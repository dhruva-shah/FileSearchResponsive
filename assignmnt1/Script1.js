$(document).ready(function () {
    $("#menuicon").click(function () {
        $("#menu").animate({
            height: 'toggle'
        });
    });

    $("#datepicker").datepicker();

    $(".submit").on("click", function (prevent) {
        prevent.preventDefault();
        var prefix = "https://lmgtfy.com/?q=";
        var terms = $("#entername").val();
        if (terms == null || terms == "") {
            alert("Enter filename");
        }
        else {
            var res = encodeURIComponent(terms);
            var url = prefix + res;
            window.open(url);
            $("#entername").val = "";
        }       
    });

    $("body").on("swiperight", function () {
        $("body").css("background-color", "black");
    });
    $("body").on("swipeleft", function () {
        $("body").css("background-color", "#581845");
    });
});