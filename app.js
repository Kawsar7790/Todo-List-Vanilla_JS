const form1 = document.querySelector(".add");
const list1 = document.querySelector(".todos");
const search1 = document.querySelector(".search input");

const addnew = (add1) => {
  const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${add1}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>`;

  list1.innerHTML += html;
};

form1.addEventListener("submit", (e) => {
  e.preventDefault();
  const add1 = form1.add.value.trim();

  if (add1.length) {
    addnew(add1);
  }

  form1.reset();
});

list1.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

const filteredtodos = (addedtodos) => {
  Array.from(list1.children)
    .filter((todo1) => !todo1.textContent.toLowerCase().includes(addedtodos))
    .forEach((todo1) => todo1.classList.add("filtered"));

  Array.from(list1.children)
    .filter((todo1) => todo1.textContent.toLowerCase().includes(addedtodos))
    .forEach((todo1) => todo1.classList.remove("filtered"));
};

search1.addEventListener("keyup", () => {
  const addedtodos = search1.value.trim().toLowerCase();
  filteredtodos(addedtodos);
});
