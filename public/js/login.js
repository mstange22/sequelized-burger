$(document).ready(function() {

    $("#login").on("click", function () {
    
        $("#login-modal").modal("toggle");
    });
});

$("#login-button").click(function() {

    if ($("#customer").val().trim() !== "") {
        
        $("#customer").val("");

        $.post("/api/customer", $("#customer").val().trim(), function (result) {
            
            $("#login-modal").modal.toggle();
        });
    }
});