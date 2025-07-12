const h1 = document.getElementById("h1");
const changeColor = () => {
  h1.style.backgroundColor = "green";
};

h1.addEventListener("click", changeColor);
