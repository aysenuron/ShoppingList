const input = document.getElementById("input");
const addButton = document.querySelector(".add-item");
const list = document.querySelector(".list");



function addItem(itemName) {
    const listItem = document.createElement("li");
    listItem.setAttribute("style", "display: flex; align-items: center; gap: 12px;");
    const item = document.createElement("p");
    const deleteButton = document.createElement("button");

    item.textContent = "- " + itemName.value;
    deleteButton.textContent = "Delete";

    listItem.appendChild(item);
    listItem.appendChild(deleteButton);
    list.appendChild(listItem);

    itemName.value = "";

    deleteButton.addEventListener("click", () => listItem.remove());
}


addButton.addEventListener("click", () => addItem(input));