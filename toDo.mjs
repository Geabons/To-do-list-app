const addTaskButton = document.getElementById("addTask");
addTaskButton.onclick = (e) => {
	const TextBox = document.querySelector("#textBox");
	let listObject = document.createElement("li");
	const unorderedList = document.querySelector("#toDoList");
	let checkMarkBox = document.createElement("input");
	let object = document.createElement("span");
	let deleteButton = document.createElement("button");
	checkMarkBox.type = "checkbox";
	if(TextBox.value != "") {
		deleteButton.classList.add("deleteObject");
		deleteButton.textContent = "x";
		deleteButton.style = "width:20px;height:20px;";
		object.appendChild(document.createTextNode(TextBox.value));
		object.classList.add("item");
		listObject.appendChild(deleteButton);
		listObject.appendChild(checkMarkBox);
		listObject.appendChild(object);
		unorderedList.appendChild(listObject);
		TextBox.value = null;
	}
}

const toDoList = document.querySelector("#toDoList");
toDoList.addEventListener("click", deleteObject);

function deleteObject(e) {
	let target = e.target;
	if(target.className.includes("deleteObject")) {
		target.parentElement.remove();
	}
}
