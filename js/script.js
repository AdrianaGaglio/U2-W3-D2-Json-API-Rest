const saveBtn = document.getElementById("save");
const deleteBtn = document.getElementById("delete");
const form = document.querySelector("form");

const localStorageKey = "user-name";

// salvo il dato in localstorage
const userName = document.getElementById("name");

const saveFunction = () => {
  if (userName.value) {
    if (localStorage.getItem(localStorageKey)) {
      prevName = localStorage.getItem(localStorageKey);
      const span = document.createElement("span");
      span.classList.add("text-secondary");
      span.innerText = ` - Previuos user: ${prevName.slice(0, 1).toUpperCase() + prevName.slice(1)}`;
      if (document.querySelector("span")) {
        document.querySelector("span").remove();
      }
      document.querySelector("label").after(span);
    }
    localStorage.setItem(localStorageKey, userName.value);
    const successMsg = document.createElement("span");
    successMsg.classList.add("position-absolute");
    successMsg.classList.add("end-0");
    successMsg.classList.add("text-success");
    successMsg.innerText = "Name saved correctly";
    userName.after(successMsg);
  } else {
    alert("You must insert yourname before to save!");
  }
};

saveBtn.addEventListener("click", (e) => {
  e.preventDefault();
  saveFunction();
  form.reset();
});

// rimuovo il valore precedentemente salvato (se presente)

deleteBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (localStorage.getItem(localStorageKey)) {
    const deletedValue = localStorage.getItem(localStorageKey);
    localStorage.removeItem(localStorageKey);
    if (document.querySelector("span")) {
      document.querySelector("span").remove();
    }
    alert(`Username ${deletedValue.slice(0, 1).toUpperCase() + deletedValue.slice(1)} has been removed.`);
  } else {
    alert("Localstorage is empty!");
  }
});

// creo un contatore
const sessionStorageKey = "time";

let time = sessionStorage.getItem(sessionStorageKey) ? parseInt(sessionStorage.getItem(sessionStorageKey)) : 0;

const timer = () => {
  // mostro il tempo
  const timerContainer = document.createElement("div");
  timerContainer.classList.add("text-center");
  timerContainer.classList.add("mt-5");
  const span = document.createElement("span");
  span.classList.add("fw-bold");
  span.classList.add("bg-success");
  span.classList.add("d-inline-block");
  span.classList.add("py-3");
  span.style.width = "56px";
  span.style.height = "56px";
  span.classList.add("rounded-circle");
  span.classList.add("text-light");
  span.classList.add("text-center");
  timerContainer.appendChild(span);
  //   incremento il contatore
  setInterval(function () {
    time++;
    sessionStorage.setItem(sessionStorageKey, time);
    span.innerText = `${parseInt(sessionStorage.getItem(sessionStorageKey))}`;
    form.after(timerContainer);
  }, 1000);
};

window.onload = () => {
  timer();
};
