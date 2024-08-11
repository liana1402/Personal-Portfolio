const switchSlider = document.getElementById("switch");
const journey = document.getElementById("journey-page");
const journeyFooter = document.getElementById("journey-footer");
const experience = document.getElementById("experience-page");
const experienceFooter = document.getElementById("experience-footer");
switchSlider.addEventListener('click', function(){
    if(switchSlider.checked){
        journey.style.display = "none";
        journeyFooter.style.display = "none";
        experience.style.display = "flex";
        experienceFooter.style.display = "block";
    }else{
        journey.style.display = "flex";
        journeyFooter.style.display = "block"
        experience.style.display = "none";
        experienceFooter.style.display = "none";
    }
});