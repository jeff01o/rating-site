//submit event

let x = document
  .querySelector(".submit")
  .addEventListener("click", function () {
    document.querySelector(".first").style.display = "none";
    document.querySelector(".second").style.display = "flex";
  });

//click events
if (!x) {
  document.querySelector(".select").textContent = 0;
}
document.querySelector(".one").addEventListener("click", function () {
  document.querySelector(".select").textContent = 1;
});

document.querySelector(".two").addEventListener("click", function () {
  document.querySelector(".select").textContent = 2;
});

document.querySelector(".three").addEventListener("click", function () {
  document.querySelector(".select").textContent = 3;
});

document.querySelector(".four").addEventListener("click", function () {
  document.querySelector(".select").textContent = 4;
});

document.querySelector(".five").addEventListener("click", function () {
  document.querySelector(".select").textContent = 5;
});
// for hover events

// for two
document.querySelector(".two").addEventListener("mouseover", function () {
  document.querySelector(".one").style.backgroundColor = "hsl(217, 12%, 63%)";
  document.querySelector(".one").style.color = "white";
  document.querySelector(".two").style.backgroundColor = " hsl(25, 97%, 53%)";
});

document.querySelector(".two").addEventListener("mouseout", function () {
  document.querySelector(".one").style.backgroundColor = "hsl(213, 19%, 30%)";
  document.querySelector(".two").style.backgroundColor = "hsl(213, 19%, 30%)";
});

//for three
document.querySelector(".three").addEventListener("mouseover", function () {
  document.querySelector(".two").style.backgroundColor = "hsl(217, 12%, 63%)";
  document.querySelector(".two").style.color = "white";
  document.querySelector(".three").style.backgroundColor = " hsl(25, 97%, 53%)";
});

document.querySelector(".three").addEventListener("mouseout", function () {
  document.querySelector(".two").style.backgroundColor = "hsl(213, 19%, 30%)";
  document.querySelector(".three").style.backgroundColor = "hsl(213, 19%, 30%)";
});

//for four
document.querySelector(".four").addEventListener("mouseover", function () {
  document.querySelector(".three").style.backgroundColor = "hsl(217, 12%, 63%)";
  document.querySelector(".three").style.color = "white";
  document.querySelector(".four").style.backgroundColor = " hsl(25, 97%, 53%)";
});
document.querySelector(".four").addEventListener("mouseout", function () {
  document.querySelector(".three").style.backgroundColor = "hsl(213, 19%, 30%)";
  document.querySelector(".four").style.backgroundColor = "hsl(213, 19%, 30%)";
});

// for five
document.querySelector(".five").addEventListener("mouseover", function () {
  document.querySelector(".four").style.backgroundColor = "hsl(217, 12%, 63%)";
  document.querySelector(".four").style.color = "white";
  document.querySelector(".five").style.backgroundColor = " hsl(25, 97%, 53%)";
});
document.querySelector(".five").addEventListener("mouseout", function () {
  document.querySelector(".four").style.backgroundColor = "hsl(213, 19%, 30%)";
  document.querySelector(".five").style.backgroundColor = "hsl(213, 19%, 30%)";
});
