function randColor() {

	var colorArray = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
	var randomColor = '';

	for (var x = 0; x <= 5; x++) {
		
		randomColor = randomColor + colorArray[Math.floor(Math.random() * 16)];
	
	}

	return randomColor;

}

document.querySelector('button').addEventListener('click', function() {

	document.body.style.backgroundColor = '#' + randColor();

});