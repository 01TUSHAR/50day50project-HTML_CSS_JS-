const progress = document.querySelector("#progress");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const circle = document.querySelectorAll(".circle");

var currentactive = 1;
next.addEventListener("click", () => {
  currentactive++;
  if (currentactive > circle.length) {
    currentactive = circle.length;
  }
  update();
});

prev.addEventListener("click", () => {
  currentactive--;
  if (currentactive < 1) {
    currentactive = 1;
  }
  update();
});

function update() {
  // update active class in circle
  circle.forEach((circles, index) => {
    if (index < currentactive) {
      circles.classList.add("active");
    } else {
      circles.classList.remove("active");
    }
  });

  // update the progress bar
  var activeCircles = document.querySelectorAll('.active');
  progress.style.width = (activeCircles.length-1)/(circle.length-1) * 100 + '%';



  // endable and disable button
  if(currentactive === 1)  {
    prev.disabled = true;
  }
  else if(currentactive === circle.length){
    next.disabled = true;
  }
  else{
    prev.disabled = false;
    next.disabled = false;
  }
}
