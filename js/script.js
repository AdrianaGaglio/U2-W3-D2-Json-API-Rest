const saveBtn = document.getElementById("save");
const deleteBtn = document.getElementById("delete");
const form = document.querySelector("form");

const localStorageKey = "user-name";

// salvo il dato in localstorage
const userName = document.getElementById("name");

saveBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (userName.value) {
    if (localStorage.getItem(localStorageKey)) {
      prevName = localStorage.getItem(localStorageKey);
      const span = document.createElement("span");
      // span.classList.add("");
      span.innerText = `- Previuos user: ${prevName}`;
      if (document.querySelector("span")) {
        document.querySelector("span").remove();
      }
      userName.before(span);
    }
    localStorage.setItem(localStorageKey, userName.value);
  } else {
    alert("You must insert yourname before to save!");
  }
  form.reset();
});

// rimuovo il valore precedentemente salvato (se presente)

deleteBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (localStorage.getItem(localStorageKey)) {
    const deletedValue = localStorage.getItem(localStorageKey);
    localStorage.clear(localStorageKey);
    alert(`Username ${deletedValue} has been removed.`);
  } else {
    alert("Localstorage is empty!");
  }
});

// creo un contatore
const sessionStorageKey = "time";

let time = 0;

const timer = () => {
  setInterval(function () {
    time++;
    sessionStorage.setItem(sessionStorageKey, time);
  }, 1000);
};

window.addEventListener("DOMContentLoaded", (e) => {
  console.log(e);
});
