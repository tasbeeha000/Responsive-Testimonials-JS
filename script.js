let ImgValue = document.querySelector("#imgCustomer");

let nameValue = document.querySelector("#nameCustomer");

let starValue = document.querySelector("#stars");

let commentValue = document.querySelector("#commentCustomer");

let reviewValue = document.querySelector(".review");


let leftButtonValue = document.querySelector("#leftBtn");

let rightButtonValue = document.querySelector("#rightBtn");

let currentIndex = 0;

let ImgArray = ["t1 (1).jpg", "t2.jpg", " t3.jpg", "t4 (1).jpg"];

let nameArray = ["John Daniel", "Mathew Green", "Nora Luke", " Mr.Lucid"];


let reviewArray = [
  [
    "fas fa-star",
    "fas fa-star",
    "fas fa-star",
    "fas fa-star",
    "fas fa-star-half",
  ],

  [
    "fas fa-star",
    "fas fa-star",
    "fas fa-star",
    "fas fa-star",
    "fas fa-star",
  ],

  [
    "fas fa-star",
    "fas fa-star",
    "fas fa-star",
    "fas fa-star",
    "fas fa-star-half",
  ],

  ["fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star"],
];

let commentArray = [
    
  "Exceptional service! The team went above and beyond to create a stunning website that perfectly captured my vision. Their attention to detail and responsiveness throughout the process made it a truly enjoyable collaboration.",

  "Incredible expertise! Working with this team was a game-changer for my online presence. They seamlessly blended creativity and technical skill, delivering a website that not only looks fantastic but also functions flawlessly. Highly recommended!",

  "Responsive and reliable! I can't thank this team enough for their dedication to my project. From the initial concept to the final implementation, they demonstrated professionalism and a keen understanding of design principles. My website is now a true reflection of my brand",

  "Exceptional service! The team went above and beyond to create a stunning website that perfectly captured my vision. Their attention to detail and responsiveness throughout the process made it a truly enjoyable collaboration.",
];

rightButtonValue.addEventListener("click", rightFunction);


leftButtonValue.addEventListener("click", leftFunction);

//functions

function rightFunction() {

  currentIndex++;

  if (currentIndex >= ImgArray.length) {

    currentIndex = 0;
  }

  ImgValue.src = ImgArray[currentIndex];
  nameValue.innerHTML = nameArray[currentIndex];
  setReviewStars(reviewArray[currentIndex]);

  commentValue.innerHTML = commentArray[currentIndex];
}


function leftFunction() {

  currentIndex--;

  if (currentIndex < 0) {

    currentIndex = 4;
    currentIndex--;
  }

  ImgValue.src = ImgArray[currentIndex];
  nameValue.innerHTML = nameArray[currentIndex];
  setReviewStars(reviewArray[currentIndex]);
  commentValue.innerHTML = commentArray[currentIndex];
}



function setReviewStars(stars) {

  reviewValue.innerHTML = ""; // Clear previous stars

  for (let i = 0; i < stars.length; i++) {

    let starIcon = document.createElement("i");
    starIcon.className = stars[i];
    reviewValue.appendChild(starIcon);
  }

}