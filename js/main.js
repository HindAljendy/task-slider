var imgs = ["1.jpg", "2.jpg", "3.jpg",
];
var index = 0;
var bNetxt = document.getElementById("btnNetxt");
var bPrevious = document.getElementById("btnPrevious");
var cImg = document.getElementById("currentImg");
var dots = document.getElementsByClassName("dot");

function showImage(idx, animationClass) {

    
    index = idx;
    
    cImg.src = "img/" + imgs[index];
    cImg.classList.add(animationClass);

    
    for (var x = 0; x < dots.length; x++) {
        dots[x].classList.remove("active");
    }
    dots[index].classList.add("active");

    // step 4
   /*  P.textContent = PTitles[index]; */

    // step 5
  /*   var Hheader = HTitles[index].split(" ");
    var textcont = "";
    for (var w = 1; w < Hheader.length; w++) {
        textcont = textcont + " " + Hheader[w];
    } */
   /*  H.innerHTML = "<strong> " + Hheader[0] + " </strong>" + textcont; */

    // step 6
   /*  switch (index) {
        case 0:
        case 3:
        case 6:
            txtCont.style.textAlign = "right";
            break;
        case 1:
        case 4:
        case 7:
            txtCont.style.textAlign = "center";
            break;
        case 2:
        case 5:
        case 9:
            txtCont.style.textAlign = "left";
            break;
        default:
            txtCont.style.textAlign = "right";
    } */

    
    setTimeout(function () {
        cImg.classList.remove(animationClass);
    }, 500)
}



bNetxt.addEventListener("click", function () {
    index++; 
    if (index >= imgs.length) {
        index = 0;
    }

    showImage(index, "imgAnimationRight");

});


bPrevious.addEventListener("click", function () {
    index--;
    
    if (index < 0) {
        index = imgs.length - 1;
    }
 
    showImage(index, "imgAnimationLeft");
  

});
 

dots[0].addEventListener("click", function () {
    showImage(0, "imgAnimationBottom");
});
dots[1].addEventListener("click", function () {
    showImage(1, "imgAnimationBottom");
});
dots[2].addEventListener("click", function () {
    showImage(2, "imgAnimationBottom");
});








