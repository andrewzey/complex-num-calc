/*global $:false */

$(function(){
  'use strict';

  var $display = $('input');
  var resReal = 5;
  var resImaginary = 10;
  var display = resReal + ' + ' + resImaginary + 'i';
  console.log(display);

  var clearTotal = function(val){
    resReal = 0;
    resImaginary = 0;
    $('input').focus().val('');
  };

  var performOperation = function(operation) {
    if (operation === '+') { console.log('clicked add'); }
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
