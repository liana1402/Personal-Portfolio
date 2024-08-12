window.addEventListener('scroll', function(){
    var currentypos = window.scrollY;
  if (currentypos > 400) {
    document.getElementById("up-button").style.display = "block";
  } else {
    document.getElementById("up-button").style.display = "none";
  }
})