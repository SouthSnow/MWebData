

var i = {
	showAlert: function() {
		var msg = confirm("准备好了吗?");
		if (msg) {
			alert("恭喜你!");
		} else{
			alert("努力吧!");
		};
	}
}

document.write("系好安全带,准备启航--目标JS");