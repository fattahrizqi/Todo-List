const inputBox = document.getElementById("input-box");
const wrapperList = document.querySelector(".wrapper-list");

getList();

inputBox.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    addList();
  }
});

function addList() {
  if (inputBox.value === "") {
    return 0;
  }

  // create a list element and insert it into the list wrapper
  else {
    let list = document.createElement("div");
    list.classList.add("list");
    list.innerHTML = inputBox.value;
    wrapperList.appendChild(list);
    let span = document.createElement("span");
    span.innerHTML = "&#88;";
    list.appendChild(span);
    saveList();
  }
  inputBox.value = "";
}

wrapperList.addEventListener("click", function (e) {
  // set toggle class 'complete' if 'div' element clicked
  if (e.target.tagName == "DIV") {
    e.target.classList.toggle("complete");
    saveList();
  }

  // remove list if 'span (x)' clicked
  else if (e.target.tagName == "SPAN") {
    e.target.parentElement.remove();
    saveList();
  }
});

// set list from wrapper list to local storage
function saveList() {
  localStorage.setItem("todo-list", wrapperList.innerHTML);
}

// get list from local storage
function getList() {
  wrapperList.innerHTML = localStorage.getItem("todo-list");
}
