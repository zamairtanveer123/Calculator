let string = " ";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (x) => {
    if (x.target.innerHTML == "=") {
      string = eval(string);
      document.querySelector("input").value = string;
    } else if (x.target.innerHTML == "AC") {
      string = "";
      document.querySelector("input").value = string;
    } else if (x.target.innerHTML == "C") {
      string = string.slice(0, -1);
      document.querySelector("input").value = string;
    } else if (x.target.innerHTML == "%") {
      string = (eval(string) / 100).toString();
      document.querySelector("input").value = string;
    } else if (x.target.innerHTML === "+/-") {
      if (string !== "0") {
        string = (-eval(string)).toString();
        document.querySelector("input").value = string;
      }
    } else {
      console.log(x.target);
      string = string + x.target.innerHTML;
      document.querySelector("input").value = string;
    }
  });
});
