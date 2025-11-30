const list = document.getElementById("target");

const list1 = document.createElement("li");
list1.innerText = "First item"

const list2 = document.createElement("li");
list2.innerText = "Second item"

const list3 = document.createElement("li");
list3.innerText = "Third item"

list2.classList.add("my-item")

list.appendChild(list1);
list.appendChild(list2);
list.appendChild(list3);

