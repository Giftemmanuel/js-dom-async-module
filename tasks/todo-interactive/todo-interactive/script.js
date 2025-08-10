const listItems = document.querySelectorAll("#todo-list li");

listItems.forEach(item => {
  item.addEventListener("click", () => {
    item.classList.toggle("completed");
  });
});
