$('#info-form').submit(function(event){
    event.preventDefault();

    const fullName   = $("#name");
    const number     = $("#number");
    const month      = $("#month");
    const year       = $("#year");
    const cvc        = $("#cvc");
    let   valid      = false;

    // Name Validation
    if(fullName.val() === ""){
        $("#error-message-name").html("Can't be blank");
        $("#error-message-name").addClass("set-error-message");
        fullName.addClass("set-error-effect");
        valid = false;
    } else {
        $("#error-message-name").html("");
        $("#error-message-name").removeClass("set-error-message");
        fullName.removeClass("set-error-effect");
        valid = true;
    }
        

    // Card Number Validation
    if(number.val() === ""){
        $("#error-message-number").html("Can't be blank");
        $("#error-message-number").addClass("set-error-message");
        number.addClass("set-error-effect");
        valid = false;
    } else {
        if(number.val().length < 19){
            $("#error-message-number").html("Wrong format, needs to be 16 digits");
            $("#error-message-number").addClass("set-error-message");
            number.addClass("set-error-effect");
            valid = false;
        } else {
            $("#error-message-number").html("");
            $("#error-message-number").removeClass("set-error-message");
            number.removeClass("set-error-effect");
            valid = true;
        }
    }

    //Date Validation
    if(month.val() === "" && year.val() === ""){
        $("#error-message-date").html("Can't be blank");
        $("#error-message-date").addClass("set-error-message");
        month.addClass("set-error-effect");
        year.addClass("set-error-effect");
        valid = false;
    } else {
        if(month.val() === ""){
            $("#error-message-date").html("Can't be blank");
            $("#error-message-date").addClass("set-error-message");
            month.addClass("set-error-effect");
            year.removeClass("set-error-effect");
            valid = false;
        } else {
            if(year.val() === ""){
                $("#error-message-date").html("Can't be blank");
                $("#error-message-date").addClass("set-error-message");
                year.addClass("set-error-effect");
                month.removeClass("set-error-effect");
                valid = false;
            } else {
                $("#error-message-date").html("");
                $("#error-message-date").removeClass("set-error-message");
                year.removeClass("set-error-effect");
                month.removeClass("set-error-effect");
                valid = true;
            }
        } 
    }

    if(cvc.val() === ""){
        $("#error-message-cvc").html("Can't be blank");
        $("#error-message-cvc").addClass("set-error-message");
        cvc.addClass("set-error-effect");
        valid = false;
    } else {
        if(cvc.val().length < 3){
            $("#error-message-cvc").html("Wrong format, 3 digits only");
            $("#error-message-cvc").addClass("set-error-message");
            cvc.addClass("set-error-effect");
            valid = false;
        } else {
            $("#error-message-cvc").html("");
            $("#error-message-cvc").removeClass("set-error-message");
            cvc.removeClass("set-error-effect");
            valid = true;
        }
    }


    if(valid){
        $(".thankyou").show();
        $("#info-form").hide();
    }
}); 