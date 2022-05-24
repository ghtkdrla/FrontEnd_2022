// document.getElementById("lion").style.color = "red";
// document.getElementById("tiger").style.color = "blue";
// document.getElementById("bear").style.color = "green";

// const animal = (document.getElementsByTagName("li")[0].style.color = "orange");

// document.getElementsByClassName("animal")[1].style.color = "red";

// document.querySelectorAll(".animal")[0].style.color = "red";
// document.querySelectorAll(".animal")[2].innerHTML = "dog";
// const animals = document.getElementById("animals");

// animals.innerHTML += "<li class = 'animal'>cat</li>";

// document.querySelectorAll(".box")[0].classList.add("purple");

// document.querySelectorAll(".box")[0].classList.remove("purple");

// document.querySelectorAll(".box")[0].classList.toggle("yellow");
// document.querySelectorAll(".box")[0].classList.toggle("yellow");

// document.getElementById("btn").addEventListener("click", function(){
//   console.log("click!");
// });

// var num = 0;
// document.getElementById("plus").addEventListener("click", function(){
//   num++;
//   document.getElementById("num").innerHTML = num;
// });
// document.getElementById("minus").addEventListener("click", function(){
//   num--;
//   document.getElementById("num").innerHTML = num;
// });

document.querySelector(".bar").addEventListener("click", function () {
  document.querySelector(".bar").innerHTML = "pushed!";
  document.querySelector(".newBar").classList.toggle("show"); //toggle: on/off 가능
});

document
  .querySelectorAll(".list")[0]
  .addEventListener("click", function (e) {});
function tabBtn(a) {
  document
    .querySelectorAll(".tab-button")[0]
    .addEventListener("click", function () {
      document.querySelectorAll(".tab-button")[0].classList.remove("here");
      document.querySelectorAll(".tab-button")[1].classList.remove("here");
      document.querySelectorAll(".tab-button")[2].classList.remove("here");
      document.querySelectorAll(".tab-content")[0].classList.remove("show");
      document.querySelectorAll(".tab-content")[1].classList.remove("show");
      document.querySelectorAll(".tab-content")[2].classList.remove("show");
      document.querySelectorAll(".tab-button")[a].classList.add("here");
      document.querySelectorAll(".tab-content")[a].classList.add("show");
    });
}

document
  .querySelectorAll(".tab-button")[0]
  .addEventListener("click", function () {
    document.querySelectorAll(".tab-button")[0].classList.remove("here");
    document.querySelectorAll(".tab-button")[1].classList.remove("here");
    document.querySelectorAll(".tab-button")[2].classList.remove("here");
    document.querySelectorAll(".tab-content")[0].classList.remove("show");
    document.querySelectorAll(".tab-content")[1].classList.remove("show");
    document.querySelectorAll(".tab-content")[2].classList.remove("show");
    document.querySelectorAll(".tab-button")[0].classList.add("here");
    document.querySelectorAll(".tab-content")[0].classList.add("show");
  });
