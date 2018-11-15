var productslideIndex = 0;
productslide(productslideIndex);

$('#minusButtonProduct').click(function(){
  plusDivsProduct(-1);
  // console.log('minus');
});

$('#plusButtonProduct').click(function(){
  plusDivsProduct(1);
});

function plusDivsProduct(n) {
  productslide(productslideIndex += n);
}

function productslide(n) {
	var x = $(".productSildeImg");
	var clone = $(".productSildeImgClone");
	if (n > x.length - 1) {productslideIndex = 0}    
	if (n < 0) {productslideIndex = x.length - 1}
	x.css('display','none');
	clone.css('display','none');
	for (var i = 0; i < 3; i++) {
		if (productslideIndex + i > x.length - 1) {
			for (var j = 0; j <= (productslideIndex + i - x.length); j++) {
				clone.eq(j).css('display', 'block'); 				
			}									
		} else {
			x.eq(productslideIndex + i).css('display', 'block');
		}		  
	}
	x.eq(productslideIndex).css('display', 'block');  
}