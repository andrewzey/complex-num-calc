/*global $:false */

$(function(){
  'use strict';

  var resReal = 0;
  var resImag = 0;

  var formatDisplayTotal = function(real, imaginary) {
    return real + ' + ' + imaginary + 'i';
  };

  var updateDisplay = function(displayString){
    $('input').focus().val(displayString);
  };

  var clearTotal = function(val){
    resReal = 0;
    resImag = 0;
    $('input').focus().val('');
  };

  var performOperation = function(operation) {
    if (operation === '+') {
      var userInput = $('input').val().split(' + ');
      var userInputReal = parseInt(userInput[0]);
      var userInputImag = parseInt(userInput[1]);
      resReal = resReal + userInputReal;
      resImag = resImag + userInputImag;
      updateDisplay(formatDisplayTotal(resReal, resImag));
    }
    if (operation === '-') { console.log('clicked subtract'); }
    if (operation === '*') { console.log('clicked multiply'); }
    if (operation === '/') { console.log('clicked divide'); }
    if (operation === 'c') {
      clearTotal();
    }
    if (operation === '=') { console.log('clicked equals'); }
  };

  //click handlers for buttons
  $('.buttonsRow').on('click', 'button', function(){
    var operation = $(this).text();
    performOperation(operation);
  });

});
