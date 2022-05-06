/*Анімація тексту*/
function onEntry(entry) {
	entry.forEach(change => {
		if (change.isIntersecting) {
			change.target.classList.add('element-show');
} 
});
} 
	let options = {
		threshold: [0.5] };
	let observer = new IntersectionObserver(onEntry, options);
	let elements = document.querySelectorAll("#title,#title1,#text,#title2,#subtitle1,#svg1,#svg2,#svg3,#svg4,#svg5,#svg6,#svg7");
		 
	for (let elm of elements) {
		observer.observe(elm);
}

/*Кнопка вверх*/

$(document).ready(function(){
 
    $(window).scroll(function(){
    if ($(this).scrollTop() > 1045) {
    $('.scrollup').fadeIn();
    } else {
    $('.scrollup').fadeOut();
    }
    });
     
    $('.scrollup').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
    });
     
    }); 