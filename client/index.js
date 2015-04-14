'use strict';

$(document).ready(init);

function init() {
  $('#begin').click(setBoard);

  $('.tower').on('click', select);
  // $('.tower').on('click', moveDisc);

}

// GLOBAL VARIABLES
var $source;

function select() {
  $source = $(this);
  // each time I click I want to assess (1) whether any tower is a selectedTower and (2) whether the clicked tower is a selectedTower
  if ($source.hasClass('selectedTower')) {
    console.log('this has been selected');
    return;

  } else if ($('.tower').hasClass('selectedTower')){
    moveDisc();

  } else {
    console.log('this is not selected');
    $source.addClass('selectedTower');
 }
}



function moveDisc() {
  // this is only called when (1) there IS a selectedTower && (2) it is not the one we clicked

  var selectedChild = $('.selectedTower')[0].children[0];
  // console.log(selectedChild[0]);

  $source.prepend(selectedChild);
  console.log('disc should move here');


  // we remove all selectedTower after the moveDisc operation
  $('.selectedTower').removeClass('selectedTower');
}



function setBoard(){
  var amount = $('#amount').val() * 1;
  $('#t1').empty();

  for(var i = 0; i < amount; i++){
    var discWidth = (i * 30) +30;

    var $disc = $('<div>');
    $disc.addClass('disc');
    $('#t1').append($disc);
    $disc.width(discWidth);
    $disc.text(i);

  }
}

// prepend (top) and append(bottom) are ways to add divs to a div
// set up three divs for the three towers
// add text in each div to number them, i.e. using the index for the numbering labels
// can also use these text numbers to prevent larger discs (divs) from being placed on smaller ones
// width can be a factor of the labeling number to make the larger or narrower divs

// var $div = $('<div>');
// $div.text();
// $div.addClass('cylinder');
// $div.css('width',index)    to set the width of the disc

// to set click handlers (3 of them)
// they can all get the same class, e.g. .tower
// $tower = $(this)
// $('.tower').click(move)
// $tower.children() will return of all discs in the tower/div
// doing $tower.children()[0] will get the topmost disc in the tower

// next we'll have to define our target
// $('#t2') = $(this)
// we then want to find out what the text is for the first child of the chosen target tower
// if the moving disc has higher text than the first child of the target tower then no move is allowed

// SO NOW - HOW TO MOVE A DIV?
// 1. detach (probably better than remove because after it is detached you can still move it somewhere)
// 2. append
