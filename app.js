/*global $:false */

$(function(){
  'use strict';

  var totalReal = null;
  var totalImag = null;
  var lastReal = null;
  var lastImag = null;
  var lastOperator = null;

  var updateTotal = function() {
    if (totalReal === null && totalImag === null) {
      totalReal = lastReal;
      totalImag = lastImag;
      $('span.total').text(totalReal + ' + ' + totalImag + 'i');
    } else if (lastOperator !== '=' && lastOperator !== null) {
      totalReal = performOperation(lastOperator, totalReal, lastReal);
      totalImag = performOperation(lastOperator, totalImag, lastImag);
      $('span.total').text(totalReal + ' + ' + totalImag + 'i');
    }
  };

  var clearMemory = function(){
    totalReal = null;
    totalImag = null;
    lastReal = null;
    lastImag = null;
    lastOperator = null;
    $('span.total').text('0 + 0i');
  };

  var performOperation = function(operation, num1, num2) {
    if (operation === '+') { return num1 + num2; }
    if (operation === '-') { return num1 - num2; }
    if (operation === '*') { /*add code*/ }
    if (operation === '/') { /*add code*/ }
  };

  $('.buttonsRow').on('click', 'button', function(){
    var buttonType = $(this).text();

    var userInput = $('input').val().split(' + ');
    lastReal = parseInt(userInput[0]);
    lastImag = parseInt(userInput[1]);


    $('button').removeClass('selected');
    if (buttonType === 'c') {
      clearMemory();
    } else if (buttonType === '=') {
      $('input').prop('disabled', true).val('');
      updateTotal();
      lastOperator = buttonType;
    } else {
      $(this).addClass('selected');
      updateTotal();
      lastOperator = buttonType;
      $('input').prop('disabled', false);
      $('input').focus().val('');
    }

  });

});
