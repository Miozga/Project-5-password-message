const input = document.getElementById("pass"); //pobieramy do pracy element input
const div = document.querySelector(".message"); //pobieramy div do pracy żeby mieć gdzie wyświetlać
const passwords = ["user", "wiosna"];
const messages = [" Dzień dobry wczoraj...dobry..", "Fajna pora roku"];

input.addEventListener("input", (e) => {
  //console.log(e.target.value);
  div.textContent = "";
  const text = e.target.value;
  passwords.forEach((password, index) => {
    if (password === text) {
      div.textContent = messages[index];
      e.target.value = "";
    }
  });
});
input.addEventListener("focus", (e) => {
  e.target.classList.add("active");
});
input.addEventListener("blur", (e) => {
  e.target.classList.remove("active");
});
//this odwołuje się do obiektu na którym aktualnie wywoływana jest funkcja
