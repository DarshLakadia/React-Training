const createElementForm = document.querySelector("#create-element-form");
const selectTag = document.querySelector("#select-tag");
const tagContent = document.querySelector("#tag-content");
const tagColor = document.querySelector("#tag-color");
const content = document.querySelector(".dynamic-content");
const actionButtons = document.querySelectorAll(".action-btn");
const addButton = document.querySelector("#add-btn");
let elementCount = 0;
let editId = 0;

// adds element to the document
addButton.addEventListener("click", () => {
  const newTag = document.createElement(selectTag.value);
  newTag.innerHTML = tagContent.value;
  newTag.style.color = tagColor.value;
  newTag.setAttribute("id", ++elementCount);
  content.appendChild(newTag);
  newTag.addEventListener("click", (e) => {
    changeElement(e);
  });
  createElementForm.reset();
});

// fill the form when clicked on edit button
function changeElement(event) {
  const element = event.target;
  showButton();
  tagContent.value = element.innerHTML;
  tagColor.value = hexToRgb(element.style.color);
  selectTag.value = element.nodeName.toLowerCase();
  selectTag.disabled = true;
  editId = element.id;
}

// edit a element to the document
document.querySelector("#edit-btn").addEventListener("click", () => {
  let element = document.getElementById(editId);
  element.innerText = tagContent.value;
  element.style.color = tagColor.value;
  closeButton();
  selectTag.disabled = false;
  createElementForm.reset();
});

// delete the element
document.querySelector("#delete-btn").addEventListener("click", () => {
  let element = document.getElementById(editId);
  element.remove();
  selectTag.disabled = false;
  closeButton();
  createElementForm.reset();
});

// cancel button event is for reset the form
document.querySelector("#cancel-btn").addEventListener("click", () => {
  createElementForm.reset();
  selectTag.disabled = false;
  closeButton();
});

// convert hex color code to rgb color code
function hexToRgb(color) {
  let rgb = color.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  function hexCode(digit) {
    // convert digit to hexadecimal and extract last two characters
    return ("0" + parseInt(digit).toString(16)).slice(-2);
  }
  return "#" + hexCode(rgb[1]) + hexCode(rgb[2]) + hexCode(rgb[3]);
}

// closeButton and showButton functions is for toggling add, edit, delete, cancel buttons
function closeButton() {
  actionButtons.forEach((element) => {
    element.classList.add("transparent");
  });
  addButton.classList.remove("transparent");
}

function showButton() {
  actionButtons.forEach((element) => {
    element.classList.remove("transparent");
  });
  addButton.classList.add("transparent");
}
