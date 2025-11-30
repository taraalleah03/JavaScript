const list = document.createElement("li");
list.innerText =
    `<li>First item</li>
    <li>Second item</li>
    <li>Third item</li>`;

document.body.appendChild(list);

document.getElementById("target").classList.add("my-list");