var slideIndex = 1;
showDivs(slideIndex);

$('#minusButton').click(function(){
  plusDivs(-1);
});

$('#plusButton').click(function(){
  plusDivs(1);
});

// $('.index').click(function(){
//   currentDiv($(this).index()+1);
// });

function plusDivs(n) {
  showDivs(slideIndex += n);
}

// function currentDiv(n) {
//   showDivs(slideIndex = n);
// }

function showDivs(n) {
  var i;
  var x = $(".mySlides");
  // var dots = $(".index");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  x.css('display','none');
  // dots.css('color','white'); 
  x.eq(slideIndex-1).css('display', 'block');  
  // dots.eq(slideIndex-1).css('color','blue'); 
}