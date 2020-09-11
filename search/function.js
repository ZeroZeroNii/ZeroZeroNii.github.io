function search() {
	var search = document.getElementById("searchbar").value;
	if (search == null || search == "") {
		
	}
	else {
		window.open("https://www.google.com/search?q=" + search);
	}
}

function changetheme() {
	var body = document.body;
	body.classList.toggle("lightmode");
	if (localStorage.storetheme == "light") {
		localStorage.storetheme = "dark";
	}
	else {
		localStorage.storetheme = "light";	
	}
}

function definetheme() {
	if (localStorage.storetheme == "light") {
		var body = document.body;
		body.classList.toggle("lightmode");
	}
}