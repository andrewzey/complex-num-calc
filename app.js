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
    } else {
      totalReal = performOperation(lastOperator, totalReal, lastReal);
      totalImag = performOperation(lastOperator, totalImag, lastImag);
    }

    if (lastOperator !== '=' && lastOperator !== null) {
      $('input').focus().val(totalReal + ' + ' + totalImag + 'i');
    }
  };

  var clearMemory = function(){
    totalReal = null;
    totalImag = null;
    lastReal = null;
    lastImag = null;
    lastOperator = null;
    $('input').focus().val('');
  };

  var performOperation = function(operation, num1, num2) {
    if (operation === '+') { return num1 + num2; }
    if (operation === '-') { return num1 - num2; }
  };

  var clickHandler = function(buttonType) {
    var userInput = $('input').val().split(' + ');
    lastReal = parseInt(userInput[0]);
    lastImag = parseInt(userInput[1]);



    if (buttonType === '+') {
      updateTotal();
      lastOperator = '+';
    }
    // if (operation === '-') {
      // totalReal = totalReal - userInputReal;
      // totalImag = totalImag - userInputImag;
      // updateDisplay(formatDisplayTotal(totalReal, totalImag));
    // }
    // if (operation === '*') { console.log('clicked multiply'); }
    // if (operation === '/') { console.log('clicked divide'); }

    if (buttonType === '=') {
      updateTotal();
      lastOperator = '=';
    }

    if (buttonType === 'c') {
      clearMemory();
    }
  };

  //click handler for buttons
  $('.buttonsRow').on('click', 'button', function(){
    var buttonType = $(this).text();
    clickHandler(buttonType);
  });

});
