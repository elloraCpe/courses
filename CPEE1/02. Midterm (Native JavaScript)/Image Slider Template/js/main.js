/* Set True Image Slider Width */

var image_count = document.querySelectorAll(".image-slider-container > img").length;
var image_width = document.querySelector(".image-slider-container > img").width;
var image_slider_container = document.querySelector(".image-slider-container");

var slider_pos_tracker = 0;
var slider_delay = 5;
var drag_value = 10;
var orasan;

window.addEventListener("load", function() {

	image_slider_container.style.width = (image_count * image_width) + "px";

});


document.getElementById("go_next").addEventListener("click", function() {

	slideLeft();

});

document.getElementById("go_prev").addEventListener("click", function() {

	slideRight();

});

document.getElementById("go_auto").addEventListener("click", function() {

	slideAuto();

});


function slideLeft() {

	slider_pos_tracker--;

	if (slider_pos_tracker % 100 == 0) {

		stopTimer();

	} else {

		if (slider_pos_tracker < (-(image_count-1) * 100)) {

			dragRight();

		} else {

			orasan = setTimeout("slideLeft()", slider_delay);

		}

	}

	image_slider_container.style.left = (slider_pos_tracker) + "%";


}

function dragRight() {

	slider_pos_tracker = slider_pos_tracker + drag_value;

	if (slider_pos_tracker == drag_value - 1) {

		slider_pos_tracker = 0;

		stopTimer();

	} else {

		orasan = setTimeout("dragRight()", slider_delay);

	}

	image_slider_container.style.left = (slider_pos_tracker) + "%";

}


function slideRight() {

	slider_pos_tracker++;

	if (slider_pos_tracker % 100 == 0) {

		stopTimer();

	} else {

		if (slider_pos_tracker > 0) {

			dragLeft();

		}

		orasan = setTimeout("slideRight()", slider_delay);

	}

	image_slider_container.style.left = (slider_pos_tracker) + "%";

}

function dragLeft() {

	slider_pos_tracker = slider_pos_tracker - drag_value;

	if (slider_pos_tracker < 0) {

		orasan = setTimeout("dragLeft()", slider_delay);

		if (slider_pos_tracker < (-(image_count - 1) * 100)) {

			stopTimer();

		}

	} 

	image_slider_container.style.left = (slider_pos_tracker + 1) + "%";


}

function slideAuto() {

	stopTimer();
	slideLeft();
	orasan = setTimeout("slideAuto()", 2500);

}

function stopTimer() {

	clearTimeout(orasan);

}
