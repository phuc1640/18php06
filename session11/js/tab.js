showTab();

$('.tabHeader').click(function(){
	showTab($(this).index());
});

function showTab(tabIndex = 0) {
	var tabHeader = $(".tabHeader");
	var tabContent = $(".tabContent");
	for (var i = 0; i < tabHeader.length; i++) {
		if (tabIndex == i) {
			tabHeader.eq(i).css('background-color', 'white'); 
			tabContent.eq(i).css('display', 'block');
		} else {
			tabHeader.eq(i).css('background-color', '#D5A353');
			tabContent.eq(i).css('display', 'none');
		}
	} 
}