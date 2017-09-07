window.onload = function (argument) {
	var btn = document.querySelector('.lets-start-btn');
	var container = document.querySelector('.container');
	var tempOpacity = 1;
	btn.onclick = function () {
		var timer = setInterval(function() {
			container.style.opacity = tempOpacity;
			tempOpacity -= 0.05;
			if (tempOpacity <= 0) {
				clearInterval(timer);
				document.body.removeChild(container);
			}
		}, 20);
	}
}