// Change text and style dynamically
document.getElementById("change-btn").addEventListener("click", function () {
    const introText = document.getElementById("intro-text");
    introText.textContent = "WELCOME TO THE NEW WORLD! by DE GREAT";
    introText.style.color = "blue";
    introText.style.backgroundColor = "yellow";
    introText.style.fontWeight = "bold";
    introText.style.fontSize = "18px";
  });
  
  // Add new item to the list
  document.getElementById("add-item-btn").addEventListener("click", function () {
    const newItem = document.createElement("li");
    newItem.textContent = `Item ${document.querySelectorAll("#my-list li").length + 1}`;
    document.getElementById("my-list").appendChild(newItem);
  });
  
  // Remove last item from the list
  document.getElementById("remove-item-btn").addEventListener("click", function () {
    const list = document.getElementById("my-list");
    if (list.lastElementChild) {
      list.removeChild(list.lastElementChild);
    }
  });
  