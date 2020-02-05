let counter = 0;

function read() {

	if (counter == 0) {
		/*let para = document.createElement("p");
		let node = document.createTextNode("This is a new paragraph");
		para.appendChild(node);*/
		let frame = document.createElement("iframe");
		frame.setAttribute("src", "Mimir.html");
		frame.style.border = "none";
		frame.style.width = "inherit";
		frame.style.height = "auto";
		frame.style.marginTop = "50em";
		let element = document.getElementById("main");
		element.appendChild(frame);
		counter++;
	} else {
		frame.remove();
		counter = 0;
	}
	//else if (e == 2)
	//	document.getElementbyId("frame").src = "mjolnir.html";

}