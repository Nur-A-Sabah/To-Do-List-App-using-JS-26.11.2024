var myForm = document.getElementById("myForm");
var myInput = document.getElementById("myInput");
var myItem = document.getElementById("myItem");
myForm.addEventListener("submit", function (event) {
  event.preventDefault();
  createItem(myInput.value);
});
function createItem(inputItems) {
  var items = `<li>${inputItems} <button onclick="deleteElement(this)"  class="p-3 mb-2 bg-info-subtle text-info-emphasis">Delete</button></li>`;
  myItem.insertAdjacentHTML("beforeend", items);
  myInput.value = "";
  myInput.focus();
}
function deleteElement(ElementToDelete) {
  ElementToDelete.parentElement.remove();
}
