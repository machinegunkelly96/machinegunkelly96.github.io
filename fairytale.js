let isPrinted = false; //is the story printed ?
let container = document.getElementById("story-container"); // <div> that contains the story we want to print.
let button = document.getElementsByClassName("btn-secondary"); //button to close the story.

function read(e) {
	//Prints the targetted story .
	if (isPrinted == false) {
		switch (e) {
			case 1:
				var element = document.getElementById("story1");
				var elementClone = element.cloneNode(true);
				elementClone.classList.add("clone");
				break;
			case 2:
				var element = document.getElementById("story2");
				var elementClone = element.cloneNode(true);
				elementClone.classList.add("clone");
				break;
			case 3:
				var element = document.getElementById("story3");
				var elementClone = element.cloneNode(true);
				elementClone.classList.add("clone");
			default:
				break;
		}
		button[0].insertAdjacentElement("beforebegin", elementClone);
		button[0].style.visibility = "visible";
		isPrinted = true;
	}
}

function close1() {
	//Elimante the story.
	var element = document.getElementsByClassName("clone");
	container.removeChild(element[0]);
	isPrinted = false;
	button[0].style.visibility = "hidden";

}