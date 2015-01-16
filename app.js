/*global $:false */

$(function(){
  'use strict';

  var performOperation = function(operation) {
    if (operation === '+') { console.log('clicked add'); }
    if (operation === '-') { console.log('clicked subtract'); }
    if (operation === '*') { console.log('clicked multiply'); }
    if (operation === '/') { console.log('clicked divide'); }
    if (operation === 'c') { console.log('clicked clear'); }
    if (operation === '=') { console.log('clicked equals'); }
  };

  //click handlers for buttons
  $('.buttonsRow').on('click', 'button', function(){
    var operation = $(this).text();
    performOperation(operation);
  });
  
});
