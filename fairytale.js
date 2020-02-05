function read() {
	//	if (e == 1)

	let para = document.createElement("p");
	let node = document.createTextNode("This is a new paragraph.");
	para.appendChild(node);
	console.log(para);
	let element = document.getElementbyId("div1");
	element.appendChild(para);

	//else if (e == 2)
	//	document.getElementbyId("frame").src = "mjolnir.html";

}