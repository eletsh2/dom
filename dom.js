//  Elements Selectors
const imageList = Array.from(document.querySelectorAll(".item img")); 
  light = document.getElementById("light"),
  lightItem = document.getElementById("lightItem"),
  nextBtn = document.getElementById("next"),
  prevBtn = document.getElementById("prev"),
  closeBtn = document.getElementById("close");

// slider current index
let currentIndex = 0;

// loop the img list and add event listener
imageList.forEach((img, index) => {
  img.addEventListener("click", (e) => {
    currentIndex = index; // set current index
    light.classList.replace("d-none", "d-flex"); // show lightbox
    lightItem.style.backgroundImage= `url("${e.target.src}")`; // set lightbox image
  });
});

function nextSlider() {
  currentIndex++;

  if (currentIndex == imageList.length) {
    currentIndex = 0;
    //nextBtn.classList.add("d-none");
  }
  console.log(imageList);
  var imgSrc = imageList[currentIndex].getAttribute('src');
  lightItem.style.backgroundImage = `urL(${imgSrc})`;
}

function prevSlider() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = imageList.length -1;
    //prevBtn.classList.add("d-none");
  }
  //if(currentIndex==0) prevBtn.classList.add("d-none");
  var imgSrc = imageList[currentIndex].getAttribute("src");
  lightItem.style.backgroundImage = `urL(${imgSrc})`;
}

nextBtn.addEventListener("click", nextSlider);
prevBtn.addEventListener("click", prevSlider);
closeBtn.addEventListener("click", close);

function close() {
  light.classList.replace("d-flex", "d-none");
}

 document.addEventListener("keyup", function (e) {
  console.log(e);
   if (light.classList.contains("d-flex")) {
    

     if (e.key == "ArrowRight") {
      nextSlider()
     } else if (e.key == "ArrowLeft") {
      prevSlider()
     } else if ((e.key = "Escape")) {
      close()
     }
   }
 });
