$(document).ready(function () {
// IMAGE CYCLE / SLIDESHOW ============
$('.slideshow').cycle({ 
    fx:    'fade', 
	speed:  2500,
    sync:  false, 
    delay: -2500 
});
// IMAGE LIGHTBOX =====================
$(".gallery").click(function() {
	$.fancybox([
		'group-pics/agroup1.jpg',
		'group-pics/agroup2.jpg',
		'group-pics/agroup3.jpg',
		'group-pics/agroup4.jpg',
		'group-pics/agroup5.jpg',
		'group-pics/agroup6.jpg',
		'group-pics/agroup7.jpg'
	], {
		'type' : 'image'
	});
});		
}); // END jQuery document.ready