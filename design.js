// Select color input
// Select size input
var height, width, color;
// When size is submitted by the user, call makeGrid()

$('#sizePicker').submit(function (event){
	event.preventDefault();
	height = $('#input_height').val();
	width = $('#input_width').val();
	makeGrid (height, width);
	//console.log('height:' + height + ' and width: ' + width);
})
function makeGrid(height, width) {
$('tr').remove();
// Your code goes here!
for(var i = 1; i<= height; i++){
	$('#pixelCanvas').append('<tr id=table' + i + '></tr>')
	for(var j = 1; j<=width; j++){
		$('#table' + i).append('<td></td>');
	}
}
}

// add color to cell	
$('td').click(function addColor(){
	color = $('#colorPicker').val();
	if ($(this).attr('style')){
		$(this).removeAttr('style')
	} else{
	$(this).attr('style',  backgroundColor:' +color);
	}
})

 
