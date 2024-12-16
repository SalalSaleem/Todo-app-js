let input = document.querySelector("#todo-input");
let list = document.querySelector("#todo-list");
let addBtn = document.querySelector("#add-btn");
let alertBox = document.querySelector("#alert");

addBtn.addEventListener("click", () => {
  addTodo();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTodo();
  }
});

function addTodo() {
  let value = input.value;

  if (value === "") {
    showAlert();
  } else {
    let li = document.createElement("li");
    li.textContent = value;
    list.appendChild(li);

    let iconEdit = document.createElement("i");
    iconEdit.classList.add("fa-solid", "fa-edit");
    li.appendChild(iconEdit);

    let iconDelete = document.createElement("i");
    iconDelete.classList.add("fa-solid", "fa-xmark");
    li.appendChild(iconDelete);

    let check = document.createElement("input");
    check.type = "checkbox";
    li.appendChild(check);

    iconDelete.addEventListener("click", () => {
      list.removeChild(li);
    });

    iconEdit.addEventListener("click", () => {
      editTodo(li);
    });

    check.addEventListener("change", () => {
      if (check.checked) {
        li.classList.add("completed");
      } else {
        li.classList.remove("completed");
      }
    });
  }

  input.value = "";
}

function editTodo(li) {
  let newValue = prompt("Edit your todo:", li.firstChild.textContent);
  if (newValue) {
    li.firstChild.textContent = newValue;
  }
}

function showAlert() {
  alertBox.style.top = "50px";
  alertBox.style.rotate = "0deg";

  setTimeout(() => {
    alertBox.style.top = "-50px";
    alertBox.style.rotate = "180deg";
  }, 1300);
}





















































