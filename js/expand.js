const paragraph = document.querySelectorAll(".read-more-p");
const btn = document.querySelectorAll(".read-more-button");

var paragraphs = Array.from(paragraph);
var btns = Array.from(btn);

paragraphs.map(p => p.style.display = "none");
console.log(paragraphs[0].style);

function expand(number) {

    if (paragraphs[number].style.display === "none") {
        // console.log("show text" + number);
      btns[number].innerHTML = "Read less";
      paragraphs[number].style.display = "block";
    //   paragraphs[number].style.opacity = "1";
    } else {
        // console.log("remove text" + number);
      btns[number].innerHTML = "Read more...";
      paragraphs[number].style.display = "none";
    //   paragraphs[number].style.opacity = "0";
    }
  }