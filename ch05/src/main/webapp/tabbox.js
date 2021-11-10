
var tabBox = {
	init: function() {
		window.addEventListener('load', this.onWindowLoad.bind(tabBox))
		
	},
	onTabClicked: function() {
		console.log(this)
		
		var liSelected = document.getElementsByClassName('selected');
		(liSelected.length === 1) && (liSelected[0].className = '');  // selected
		
		this.className = 'selected'
	},
	onWindowLoad: function() {
		var li = document.getElementsByClassName('tab-box')[0]
			.childNodes[1]
			.getElementsByTagName("li");
		
		Array.prototype.forEach.call(li, (e) => {
			e.addEventListener("click", this.onTabClicked)
		});
	},
}
