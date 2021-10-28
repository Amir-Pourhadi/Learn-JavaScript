function handleChangeTheme(event) {
  const jumbotron = document.querySelector(".jumbotron");
  const [donateBtn, volunteerBtn] = document.querySelector(".buttons").children;

  const themeColors = {
    blueBtn: {
      jumbotronBgColor: "#588fbd",
      donateBtnBgColor: "#ffa500",
      volunteerBtnBgColor: "black",
      volunteerBtnColor: "white",
    },
    orangeBtn: {
      jumbotronBgColor: "#f0ad4e",
      donateBtnBgColor: "#5751fd",
      volunteerBtnBgColor: "#31b0d5",
      volunteerBtnColor: "white",
    },
    greenBtn: {
      jumbotronBgColor: "#87ca8a",
      donateBtnBgColor: "black",
      volunteerBtnBgColor: "#8c9c08",
      volunteerBtnColor: "white",
    },
  };

  const { jumbotronBgColor, donateBtnBgColor, volunteerBtnBgColor, volunteerBtnColor } = themeColors[event.target.id];

  jumbotron.style.backgroundColor = jumbotronBgColor;
  donateBtn.style.backgroundColor = donateBtnBgColor;
  volunteerBtn.style.backgroundColor = volunteerBtnBgColor;
  volunteerBtn.style.color = volunteerBtnColor;
}

function handleFormSubmit(event) {
  event.preventDefault();

  const inputs = Array.from(document.querySelectorAll("form input, form textarea"));
  inputs.forEach(({ value, style }) => {
    style.backgroundColor = value.length > 0 ? "rgba(0,255,0,0.4)" : "rgba(255,0,0,0.4)";
  });

  if (inputs.every(({ value }) => value.length > 0)) {
    setTimeout(() => {
      alert("Thank you for filling out the form!");
    }, 1);
    inputs.forEach((input) => {
      input.value = "";
      input.style.backgroundColor = "initial";
    });
  }
}

document.querySelector("form").addEventListener("submit", handleFormSubmit);
document.querySelectorAll(".colorButton").forEach((btn) => btn.addEventListener("click", handleChangeTheme));
