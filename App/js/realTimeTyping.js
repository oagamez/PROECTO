//output
const cardNumber = $("#card-front-number");
const cardName   = $("#card-front-name");
const cardMonth  = $("#card-front-expiry-month");
const cardYear   = $("#card-front-expiry-year");
const cardCVC    = $("#card-back-cvc");

//input
const fullName   = $("#name");
const number     = $("#number");
const month      = $("#month");
const year       = $("#year");
const cvc        = $("#cvc");

// interactive typing for name, month and year
realTimeTyping(year, cardYear);
realTimeTyping(fullName, cardName);
realTimeTyping(month, cardMonth);

// No-letter validation and formating for card number input
  number.keyup(function (e) {
    console.log("Working");
    
    if (this.value == this.lastValue) return;
    var caretPosition = this.selectionStart;
    var sanitizedValue = this.value.replace(/[^0-9]/gi, '');
    var parts = [];
    
    for (var i = 0, len = sanitizedValue.length; i < len; i += 4) {
        parts.push(sanitizedValue.substring(i, i + 4));
    }
    
    for (var i = caretPosition - 1; i >= 0; i--) {
        var c = this.value[i];
        if (c < '0' || c > '9') {
            caretPosition--;
        }
    }
    
    caretPosition += Math.floor(caretPosition / 4);
    
    this.value = this.lastValue = parts.join(' ');
    this.selectionStart = this.selectionEnd = caretPosition;
    realTimeTyping(number, cardNumber);
    
  })

// 2 digits formatting for month
month.change(function(e){
  if (month.val() > 12 || month.val() < 1) {
    month.val(prependZero(1));
  } else {
    if(month.val() < 10 && month.val().length === 1){
      month.val(prependZero(month.val()));
    }
  }
  cardMonth.html(month.val());
});


// 2 digits formatting for year
year.change(function(e){
  if (year.val() > 99 || year.val() < 1) {
    year.val(22);
  } else {
    if(year.val() < 10 && year.val().length === 1){
      year.val(prependZero(year.val()));
    }
  }
  cardYear.html(year.val());
});

//interactive typing for cvc
realTimeTyping(cvc, cardCVC);

// function for interactive typing
function realTimeTyping(input, output){
    input.keyup(function(e) {
      if(!(e.which === 9)){
        output.html($(this).val());
      }
    });
}

// function to add zero if one digit is entered
function prependZero(number) {
  if (number < 9)
      return "0" + number;
  else
      return number;
}