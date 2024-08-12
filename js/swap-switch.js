const switchSlider = document.getElementById("switch");
const journey = document.getElementById("journey-page");
const journeyFooter = document.getElementById("journey-footer");
const experience = document.getElementById("experience-page");
const experienceFooter = document.getElementById("experience-footer");
switchSlider.addEventListener('click', function(){
    if (switchSlider.checked){
        journey.style.display = "none";
        experience.style.display = "flex";
    } else {
        journey.style.display = "flex";
        experience.style.display = "none";
    }
});
