let inpUzEl = document.getElementById("uzEl");
let inpEnEl = document.getElementById("enEl");
const formEl = document.querySelector("form");
const divEl = document.querySelector(".dictAlt");
const nonRemContainer = document.querySelector(".nonRememberedUl");
const remContainer = document.querySelector(".rememberedUl");
const btnChanger = document.querySelector(".changer");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  if (inpEnEl.value != "" && inpUzEl != "") {
    nonRemContainer.innerHTML += `<li class="nonRemLi">
   <div class="dictAlt">${inpUzEl.value} - ${inpEnEl.value}</div> <input type="checkbox" name="" class="checked">
   </li>`;
    inpEnEl.value = "";
    inpUzEl.value = "";
  }
});

btnChanger.addEventListener("click", () => {
  checkboxes.forEach(function (checkbox, index) {
    checkbox.addEventListener("change", function () {
      var selectedDiv = checkbox.closest(".nonRemLi");

      if (checkbox.checked) {
        remContainer.innerHTML += `${selectedDiv}`;
      }
    });
  });
});
