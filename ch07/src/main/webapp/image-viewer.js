var ImageViewer = {
	images: ["국화:Chrysanthemum.jpg", "사막:Desert.jpg",
		"수국:Hydrangeas.jpg", "해파리:Jellyfish.jpg", "코알라:Koala.jpg",
		"등대:Lighthouse.jpg", "펭귄:Penguins.jpg", "툴립:Tulips.jpg"],
	changeImg: function() {
		var result = Math.floor(Math.random() * ImageViewer.images.length); //0.0 < Math.random() < 1.0 
		var imageInfo = ImageViewer.images[result].split(':')
		$('img')
			.attr('src', "images/" + imageInfo[1])
			.attr('alt', imageInfo[0])
	},
	init: function() {
		$(function() {
			console.log(this)
			$("#btn-change").click(ImageViewer.changeImg);
			var timer
			$('#btn-slideshow').click(function() {
				var $el = $(this)
				if($el.hasClass('slideshow-off')){
					$el.removeClass('slideshow-off')
					$el.addClass('slideshow-on')	
					$el.text('슬라이드쇼 중지')	
					timer = setInterval(ImageViewer.changeImg, 1000);
				}else{
					$el.removeClass('slideshow-on')
					$el.addClass('slideshow-off')					
					$el.text('슬라이드쇼 시작')
					clearInterval(timer)
				}
			})
		})
	}
}