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
    if (document.querySelector("span")) {
      document.querySelector("span").remove();
    }
    alert(`Username ${deletedValue} has been removed.`);
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
  span.classList.add("p-3");
  span.classList.add("rounded-circle");
  span.classList.add("text-light");
  timerContainer.appendChild(span);
  //   incremento il contatore
  setInterval(function () {
    time++;
    sessionStorage.setItem(sessionStorageKey, time);
    span.innerText = `${parseInt(sessionStorage.getItem(sessionStorageKey))}`;
    form.after(timerContainer);
  }, 1000);
};

timer();
