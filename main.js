const input = document.getElementById("pass"); //pobieramy do pracy element input
const div = document.querySelector(".message"); //pobieramy div do pracy żeby mieć gdzie wyświetlać
const password = "user";
const message = " Dzień dobry wczoraj...dobry..";

input.addEventListener("input", (e) => {
  //console.log(e.target.value);

  if (password === e.target.value) {
    div.textContent = message;
  }
});
