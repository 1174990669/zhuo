
window.onload = function(){
	var oa = document.getElementById("logo-b1");
	var onav = document.getElementById("nav");
	oa.onclick = function(){
		onav.style.display = "block";
		onav.focus();
	};
	onav.onblur = function(){
		var t=setTimeout(function(){
			onav.style.display = "none";
		},100)
		
	}
};

